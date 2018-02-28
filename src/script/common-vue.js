// 为 vue.js view组建 提供 公共方法
const db = require('../script/db')('html5')
const ipc = require('electron').ipcRenderer
const fs = require('fs')
var path = require('path')
const xlsx = require("node-xlsx")

const xml2js = require('xml2js')
var zip = require('node-zip')
var builder = new xml2js.Builder({
  rootName: "DataRoot"
});  // JSON->xml

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

const commonVue = function(Vue){

  var getSTtype = function(){
    let stype = "DEF"

    if(DATATYPE == '季报') stype = DATASEASON
    if(DATATYPE == '月报') stype = DATAMONTH

    return stype
  }

  var getDataStr = function(){
    var date = new Date();//.转换成毫秒
    var str = date.getFullYear() + "-"
            + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-"
            + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    return str
  }

  var isEmptyObject = function(e) {
    var t;
    for (t in e)
        return !1;
    return !0
  }

  var mkdirsSync = function(dirname, mode){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
  }

  var fsExistsSync = function(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
  }

  var getMergeData = function(dbname, keys){

    let storage = db.queryAll()
    let stype = getSTtype()
    let mergeObj = {}
    let newData = []

    if(storage[dbname]){
      var data = JSON.parse(storage[dbname])[stype]
      if(data){
        data.forEach(function(row, idx){

          let keyStr = ""
          for (var i = 0; i < keys.length; i++) { keyStr += "_" + row[ keys[i] ] }
          if(!mergeObj[keyStr]){
            mergeObj[keyStr] = {}
          }

          for(field in row){
            const val = row[field]
            if(field == 'F_FGS') continue
            if(!isNaN(val)){
              if( !mergeObj[keyStr][field] ) mergeObj[keyStr][field] = 0
              mergeObj[keyStr][field] += (1*val)
            }else{
              mergeObj[keyStr][field] = val
            }
          }

        })

        for(k in mergeObj){ newData.push(mergeObj[k]) }
        var newObj = {}
        newObj[stype] = newData
        // storage[dbname] = JSON.stringify( newObj )
        storage[dbname.replace("_IMP","")] = JSON.stringify( newObj )
      }
    }
    return mergeObj
  }

  // 数据打包
  var dataPack = function (tables, files, path, fillperson, comment, reviewer) {

    if(!fillperson && !comment) {
      ipc.send('show-message','请填写 填报人或填报说明！')
      return
    }

    if(isEmptyObject(tables) && files.length == 0) {
      ipc.send('show-message','请选择打包数据！')
      return
    }

    let info = {
      Baseinfo:{
        YEAR:DATAYEAR,
        NAME:zipName,
        COMPANY:DATACOM,
        TYPE: DATATYPE,
        INFORMANT: fillperson,
        REVIEWER: reviewer,
        REVIEWTIME: "",
        COMMENT: comment
      },
      DataPack:{ Record:[] },
      FilePack:{ Record:[] }
    }
    if(DATATYPE == '季报') info.Baseinfo.SEASON = DATASEASON
    if(DATATYPE == '月报') info.Baseinfo.MONTH = DATAMONTH

    let _zip = new zip()

    let storage = db.queryAll()
    let stype = getSTtype()

    // 表
    for(let name in tables){
      let tname = db.getStorageKey(name)
      const tobj = tables[name][0]
      if(storage[tname]){
        let tableData = JSON.parse(storage[tname])
        let d = tableData[stype]
        if(d) _zip.file("data/"+name + ".xml", builder.buildObject({Record:d}))

        info.DataPack.Record.push(tobj);

        // tables[name].forEach(function(type, index){
        //   let d = tableData[type]
        //   if(d) _zip.file("data/"+name + ".xml", builder.buildObject({Record:d}))
        // })

      }
    }
    ipc.send('show-progressBar',0.5)
    // 文件
    var flength = files.length;
    for(var i=0;i<flength;i++){
      const fitem = files[i]
      info.FilePack.Record.push(fitem);

      if(fsExistsSync(fitem.path))
        _zip.file("file/"+fitem.type + "/" + fitem.name, fs.readFileSync(fitem.path))
      else
        ipc.send('show-message','[' + fitem.path + '] 文件不存在！')
    }
    ipc.send('show-progressBar',0.7)

    // 基本信息
    _zip.file("info.xml", builder.buildObject(info))

    if(isEmptyObject(_zip.files)) {
      ipc.send('show-message','未发现数据！')
      return
    }

    let data = _zip.generate({base64:false,compression:'DEFLATE'});
    fs.writeFileSync(path, data, 'binary')
    ipc.send('show-message','打包数据成功！')
    ipc.send('show-progressBar',-1)
    common.queryElement('#savepath').value = '';

  }

  // 数据导入/合并
  var dataImport = function (path, fgs) {

    if(!path) {
      ipc.send('show-message','请选择导入数据！')
      return
    }

    const temp = "C:/IRS/"
    // const temp = __dirname.replace(/\\/g,'/') + "/"

    let _zip = new zip(fs.readFileSync(path),{base64: false, checkCRC32: true})
    let storage = db.queryAll()
    let stype = getSTtype()

    const type_en = {
      "报告":"report",
      "图件":"photo",
      "附件":"file"
    }
    let filedatas = { file:[],report:[],photo:[] }

    const files = _zip.files
    for(const key in files){

      // 文件
      if(key.indexOf("file/") > -1){
        var file = temp + key
        var name = file.substr(file.lastIndexOf("/") + 1)
        var fpath = file.substring(0, file.lastIndexOf("/"))
        var type = fpath.substring(fpath.lastIndexOf("/") + 1)

        mkdirsSync(fpath)
        fs.writeFileSync(file, files[key].asBinary(), 'binary')

        filedatas[type_en[type]].splice(0, 0, {
          name: name,
          type: type,
          path: file
        });

      }

      // 数据
      if(key.indexOf("data/") > -1){
        const name = key.substring(5, key.length - 4).toUpperCase() + "_IMP"
        const dbname = db.getStorageKey(name)
        let storagedata = storage[dbname] ? JSON.parse(storage[dbname]) : {}
        if(!storagedata[stype]) storagedata[stype] = []

        removeExist(fgs, storagedata[stype])

        xml2js.parseString(files[key].asText(), {mergeAttrs:true,explicitArray: false}, function (err, result) {
          var data = result.DataRoot.Record.constructor == Array ? result.DataRoot.Record : [result.DataRoot.Record]
          for (var i = 0; i < data.length; i++) {
            data[i].F_FGS = fgs
          }

          storagedata[stype] = storagedata[stype].concat(data)
          storage[dbname] = JSON.stringify( storagedata )
        });

      }
    }

    // 删除重复数据
    function removeExist(fgs, data){
      for (var i = 0; i < data.length; i++) {
        if(fgs == data[i].F_FGS){
          data.splice(i,1)
          removeExist(fgs, data)
          break
        }
      }
    }

    // 保存文件
    var fdbname = db.getStorageKey("FILES")
    let storagedata = storage[fdbname] ? JSON.parse(storage[fdbname]) : {}
    if(isEmptyObject(storagedata[stype])) storagedata[stype] = { file:[],report:[],photo:[] }
    for(t in filedatas){
      storagedata[stype][t] = storagedata[stype][t].concat(filedatas[t])
    }
    storage[fdbname] = JSON.stringify( storagedata )


    ipc.send('show-message','导入完成！')
    common.queryElement('.modal-layer').classList.toggle('modal-layer-visible')
    common.queryElement('.dataimport-modal').classList.toggle('visible')
  }

  var mergeImpData = function(tables){

    const ts = toNative(tables)
    const keys = {
      "FAST_REPORT_TABLE1_IMP" : ["F_DQ"],
      "FAST_REPORT_TABLE2_IMP" : ["F_TYPE", "F_KZMC", "F_YQTFGS", "F_SHENG", "F_YQTMC"]
    }

    ts.forEach(function(item, idx){

      const name = item.name
      const dbname = db.getStorageKey(name)

      getMergeData(dbname, keys[name])
    })


  }

  // 打开文件
  var openPath = function (callback) {

    ipc.send('open-dialog','zip')
    ipc.once('opened-file', function (event, path) {
      if (path) {
        path = (''+path).replace(/\\/g,'//')
        let _zip = new zip(fs.readFileSync(path),{base64: false, checkCRC32: true})

        const info = _zip.files["info.xml"]
        if(info){
          new xml2js.Parser().parseString(info.asText(), function (err, result) {
              callback(path, result.DataRoot)
          });
        }else{
          ipc.send('show-message','请选择正确的数据！')
        }

      }
    })

  }

  // 浏览路径
  var savePath = function (callback) {
    global.zipName = `${DATAYEAR}年${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`
    if(DATATYPE == '季报') global.zipName = `${DATAYEAR}年${DATASEASON}${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`
    if(DATATYPE == '月报') global.zipName = `${DATAYEAR}年${DATAMONTH}${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`

    ipc.send('save-dialog','zip', zipName)
    ipc.once('saved-file', function (event, path) {
      if (path) callback(path)
    })
  }

  // 将 vue get/set化的json对象 转换为原生json
  var toNative = function(data){
    return JSON.parse(JSON.stringify(data))
  }

  let methods = {

    save: function(comp, params){

      db.save(toNative(comp.data) ,params,function () {
        ipc.send('show-message','数据保存完成！')
      })

    },

    query: function (comp, params, callback) {
      db.query(params, callback)
    },

    changeTab: function(event){

      if(event.toElement.classList[1]) return
      common.toggleClassByLevel(event.toElement, "active")
      params.type = event.toElement.getAttribute("name")

      this.query()
    },

    exportExcel: function(comp, data, title, _columns){

      const { cname } = comp.$route
      title = `${cname}-${DATACOM}${DATAYEAR}年`
      if(DATATYPE == '季报') title += DATASEASON
      if(DATATYPE == '月报') title += DATAMONTH

      const columns = toNative(_columns);
      let jsonData = toNative(data)
      ipc.send('save-dialog','excel', title)
      ipc.on('saved-file', function (event, path) {
        if (path) {

          let data = []
          columns.forEach(function(obj,index){

            let tname = obj.shw
            if(tname.constructor == Object){
                tname = obj.shw.text
            } else if(tname.constructor == Array){
              tname = ""
              obj.shw.forEach(function(_shw){
                if(_shw) tname = (_shw.constructor == Object ? _shw.text : _shw)
              })
            }
            data.push(tname.replace(/<[^>]+>/g,""))
          })
          data = [data]
          jsonData.forEach(function(record){
            let row = []
            columns.forEach(function(obj){
              row.push(record[obj.tag])
            })
            data.push(row)
          })
          var buffer = xlsx.build([{name: title, data: data}])
          fs.writeFileSync(path, buffer, 'binary')

        }
      })

    },
    importExcel: function(comp, _columns){

      const columns = toNative(_columns);
      const csize = columns.length;

      const fixedRow = {
        "FAST_REPORT_TABLE1" : 33,
        "YEAR_REPORT_TABLE3" : 8,
        "SEASON_REPORT_TABLE1" : 9
      }

      ipc.send('open-dialog','excel')
      ipc.once('opened-file', function (event, path) {
        if (path) {
          path = (''+path).replace(/\\/g,'//')
          var data = xlsx.parse(path)[0].data
          if(data.length > 0 && fixedRow[comp.$route.name]){
            data = data.splice(0,fixedRow[comp.$route.name])
          }

          let jsonArray = []
          data.forEach(function(row, rowIdx){
            let jsonObj = {}
            row.forEach(function(val, colIdx){
              if(colIdx < csize) jsonObj[columns[colIdx].tag] = val
            })
            jsonArray.push(jsonObj)
          })
          jsonArray.splice(0, 1);

          if(jsonArray.length > 0) {
            comp.SpreadSheet.loadData(jsonArray);
          }

        }
      })

    }

  }

  return {
    methods:methods,
    dataPack:dataPack,
    dataImport:dataImport,
    mergeImpData:mergeImpData,
    savePath:savePath,
    openPath:openPath
  }
}

module.exports = commonVue
