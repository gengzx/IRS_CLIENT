 // 使用 html5 本地存储
var storage = window.localStorage

const DEF_DATA = {
  DEF:[{F_DQ:'全国'},{F_DQ:'北京'},{F_DQ:'天津'},{F_DQ:'河北'},{F_DQ:'山西'},{F_DQ:'内蒙古'},{F_DQ:'辽宁'},{F_DQ:'吉林'},{F_DQ:'黑龙江'},{F_DQ:'上海'},{F_DQ:'江苏'},{F_DQ:'浙江'},{F_DQ:'安徽'},{F_DQ:'福建'},{F_DQ:'江西'},{F_DQ:'山东'},{F_DQ:'河南'},{F_DQ:'湖北'},{F_DQ:'湖南'},{F_DQ:'广东'},{F_DQ:'广西'},{F_DQ:'海南'},{F_DQ:'重庆'},{F_DQ:'四川'},{F_DQ:'贵州'},{F_DQ:'云南'},{F_DQ:'西藏'},{F_DQ:'陕西'},{F_DQ:'甘肃'},{F_DQ:'青海'},{F_DQ:'宁夏'},{F_DQ:'新疆'}],
  KZ:[{F_NAME:'石油'},{F_NAME:'天然气'},{F_NAME:'煤层气'},{F_NAME:'页岩气'},{F_NAME:'其他'}]
}

var copyDefaultData = function (type) {
  return JSON.parse(JSON.stringify(DEF_DATA[type] || {}))
}

var getStorageKey = function (tbname) {
  return tbname + "_" + DATAYEAR + "_" + DATACOM + "_" + DATATYPE
}

var queryByName = function(tbname){

  tbname = getStorageKey(tbname)
  let data = {}
  if(storage[tbname]){
    data = JSON.parse(storage[tbname])
  }
  return data;

}

var implement = {

  getStorageKey: getStorageKey,
  
  queryAll: function () {
    return storage
  },

  query: function (params, callback) {

    let data = queryByName(params.tbname)[params.type]
    let isinit = false
    if(!data){
      data = copyDefaultData(params.type)
      isinit = true
    }
    callback(data,isinit)

  },

  save: function (record, params, callback) {

    const tbname = getStorageKey(params.tbname)
    let sdata = queryByName(params.tbname)
    sdata[params.type] = record
    if(record.length > 0 || !common.isEmptyObject(record)){
      storage[tbname] = JSON.stringify(sdata)
    } else{
      delete storage[tbname]
    }

    callback(true)

  },

  add: function () {
      alert('implement-add')
  },

  close: function () {
    db.close()
  }
}


module.exports = implement
