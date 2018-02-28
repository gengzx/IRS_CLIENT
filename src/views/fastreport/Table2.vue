
<style>

</style>
<template>

  <div class="container-row">

    <div class="tbar toolbar-actions">
      <button class="btn btn-default" v-on:click="add" v-show="addshow">
        <span class="icon icon-plus icon-text"></span>
        添加
      </button>
      <button class="btn btn-primary" v-on:click="save">
        <span class="icon icon-home icon-text white"></span>
        保存
      </button>

      <div class="pull-right">
        <button class="btn btn-positive" v-on:click="exportExcel">
          <span class="icon icon-export icon-text white"></span>
          导出
        </button>

        <button class="btn btn-positive" v-on:click="importExcel">
          <span class="icon icon-download icon-text white"></span>
          导入
        </button>
      </div>
    </div>

    <div class="head">
        <h2>{{DATAYEAR}} {{$route.cname}}</h2>
        <div class="info">
          <span style="font-size: 14px;">填报单位：{{DATACOM}}</span>
        </div>
    </div>

    <div class="pane">
      <spread-sheet :columns="columns"></spread-sheet>
    </div>


    <div class="table-tabs">

      <div class="tab-group">
          <div class="tab-item" name='DEF' v-on:click="changeTab">{{$route.cname}}</div>
      </div>

      <a href="javascript:;" class="xbut" @click="toggleInfo">
        <span class="icon icon-info-circled icon-text"></span>
        填表说明
      </a>

    </div>
    <select-region></select-region>

    <div class="g-modal">
      <div class="container-row">


        <div class="content">
          <h3>{{$route.cname}}</h3>
          <p>
              <span>填报说明：</span>
          </p>
          <p style="text-indent:26px;line-height:26px">
              <span style="font-size:14px;font-family:黑体">油气田规模</span><strong> </strong><span>填报的油气田规模要达到现行《矿产资源储量规模划分标准》中规定的小型规模上限的二分之一以上。石油规模，大型：≥10000万吨；中型：1000-10000万吨；小型：＜1000万吨。天然气规模，大型：≥300亿立方米；中型：50-300亿立方米；小型：＜50亿立方米。<strong></strong></span>
          </p>
          <p style="text-indent:26px;line-height:26px">
              <span style="font-size:14px;font-family:黑体">计量单位</span><strong> </strong><span>石油：万吨；天然气、煤层气、页岩气：亿立方米。</span>
          </p>
          <p style="text-indent:26px;line-height:26px">
              <span style="font-size:14px;font-family:黑体">新发现油气田储量</span><strong> </strong><span>报告期内在新区块、新层系发现的油气田储量情况。</span>
          </p>
          <p style="text-indent:26px;line-height:26px">
              <span style="font-size:14px;font-family:黑体">油气田新查明储量</span><strong> </strong><span>报告期内在老油田扩边新探明、原未开发探明地质储量复算净增地质储量情况。</span>
          </p>

        </div>

        <footer class="footer">
          <div class="actions">
            <button class="btn"  @click="toggleInfo">
              关 闭
            </button>
          </div>
        </footer>

      </div>
    </div>

  </div>

</template>

<script>

// const EditorTable = require('../../components/EditorTable.vue')

const SpreadSheet = require('components/SpreadSheet.vue')
const SelectRegion = require('../../components/SelectRegion.vue')

import { CLLX,YQLX,FGS,YQT_ALL } from 'Db/datas'

// 数据请求参数
const params = {
  type:'DEF'
}
// 页面参数
const pageparams = {
  UNIT: {
    "石油": "万吨",
    "天然气": "亿立方米",
    "煤层气": "亿立方米",
    "页岩气": "亿立方米",
    "其他": ""
  },
  COM_FIELD:{
    "中国石油": "F_ZGSY",
    "中国石化": "F_ZGSH",
    "中国海油": "F_ZGHY",
    "延长石油": "F_YCSY",
    "中联公司": "F_ZLGS",
    "中国地调局": "F_ZGDDJ"
  }
}

const columns = {
  DEF: [
        // {tag:"F_ID",shw:{text:"ID"},siz:100,hidden:true},
        {tag:"F_TYPE",shw:"类型",siz:100,editor:{type:'select',data:CLLX},align:'center'},
        {tag:"F_KZMC",shw:"矿种名称",siz:100,editor:{type:'select',data:YQLX},align:'center'},
        {tag:"F_YQTFGS",shw:"油气田分公司<strong style='color: red'>*</strong>",siz:100,editor:{type:'select',data:FGS[DATACOM]},align:'center'},
        {tag:"F_SHENG",shw:"省份<strong style='color: red'>*</strong>",siz:100,onClick:'onClick',align:'center'},
        {tag:"F_YQTMC",shw:"油气田名称<strong style='color: red'>*</strong>",siz:100,notvalid:true,align:'center',editor:{type:'select',data:YQT_ALL}},
        {tag:"F_YQTGM",shw:"油气田规模<strong style='color: red'>*</strong>",siz:100,readOnly:true,align:'center'},
        {tag:"F_JLDW",shw:"计量单位<strong style='color: red'>*</strong>",siz:100,readOnly:true,align:'center'},
        {tag:"F_TMDZCL",shw:"探明地质储量<strong style='color: red'>*</strong>",siz:100,type:'numeric',format:'0.00'}
    ]
}

export default {
  components: {
    SpreadSheet,
    SelectRegion
  },
  data () {
    return {
      DATAYEAR : DATAYEAR,
      DATACOM : DATACOM,
      addshow:true,
      data: [],
      columns : function(){
        return columns[params.type]
      }()
    }
  },
  methods: {
    add: function(){
      this.SpreadSheet.addRow();
    },
    save: function(){
      this.data = this.SpreadSheet.getData()
      commonVue.methods.save(this, params)
    },

    query: function () {

      let thisz = this
      commonVue.methods.query(this, params, function(rows, isinit){
        if(isinit) {
          rows = []
        }
        thisz.SpreadSheet.loadData(rows);
      })

    },

    changeTab: function(event){

      if(event.toElement.classList[1]) return
      common.toggleClassByLevel(event.toElement, "active")
      params.type = event.toElement.getAttribute("name")

      this.columns = columns[params.type]
      EditorTable.ready(this.columns)
      this.query()

      if(params.type == 'KZ'){
        this.addshow = true
      }else{
        this.addshow = false
      }

    },

    exportExcel: function(){

      let title = this.$route.name
      let columns = this.columns

      commonVue.methods.exportExcel(this, this.SpreadSheet.getData(), title, columns)

    },

    importExcel: function(){
      commonVue.methods.importExcel(this,this.columns)
    },

    toggleInfo: function () {
      common.queryElement('.g-modal').classList.toggle('visible')
    }
  },
  events: {
    'sheet.renderer': function(instance, td, row, col, prop, value, cellProperties){

    },
    'sheet.afterBeginEditing': function(row, col){
      // 省份
      if(col == 3){
        const sheet = this.SpreadSheet.sheet
        SelectRegion.methods.show(function(value, values){
          sheet.setDataAtCell(row, col,value);
        })
      }

    },
    'sheet.afterChange': function(row, col, field, val, source){

      const sheet = this.SpreadSheet.sheet

      if(field == 'F_KZMC' || field == 'F_TMDZCL'){

        var type = sheet.getDataAtCell(row, 1);
        var num = sheet.getDataAtCell(row, 7);

        if(num){
          let minVal = 500
          if(type != '石油') minVal = 25

          if(num < minVal){
            common.msg("请按要求填写\n石油底限为500万吨，天然气底限为25亿方！")
            sheet.setDataAtCell(row, 7, '');
            return
          }
        }

        sheet.setDataAtCell(row, 6, pageparams.UNIT[type]);
        if(num){
          sheet.setDataAtCell(row, 5,_getScale(type, num));
        }

      }

    }
    /*
    'removeRow': function(idx){
      this.data.splice(idx, 1);
      commonVue.methods.save(this, params)
    },
    'onEditor': function (tr, record, tag) {

      let val = record[tag]
      if(val){
        let kcdmc = record['F_KZMC']
        if(kcdmc){
          let type = kcdmc

          let minVal = 500
          if(type != '石油') minVal = 25

          if(val < minVal){
            common.msg("请按要求填写\n石油底限为500万吨，天然气底限为25亿方！")
            tr.children[8].innerText = record['F_TMDZCL'] = "";
            return
          }

          tr.children[7].innerText = record['F_JLDW'] = pageparams.UNIT[type]
          if(record['F_TMDZCL']){
            tr.children[6].innerText = record['F_YQTGM'] = _getScale(type, val);
          }

        }
      }
    },
    'onClick': function (tr, record, tag) {
      SelectRegion.methods.show(function(value, values){

        tr.children[4].innerText = record[tag] = value


      })
    }

    */
  },
  ready: function () {
    this.SpreadSheet = this.$children[0].SpreadSheet;

    let tab = common.queryElement(".tab-group div[name='" + params.type + "']")
    tab.classList.add('active')

    this.query()

    // require('script/menu')(this.$children[0].SpreadSheet.sheet)
  },
  init: function () {
    params.tbname = this.$route.name
  }
}

/*
var filterData = (rows,kzdata) => {

  let sfCount = {}

  kzdata.forEach((row, idx) => {
    let kcdmc = row["F_KCDMC"]
    if(kcdmc){
      kcdmc = kcdmc.split(",")[0]
      if(!sfCount[kcdmc]) sfCount[kcdmc] = 0
      sfCount[kcdmc] += 1
    }
  })

  let field = pageparams.COM_FIELD[DATACOM]
  rows.forEach((row, idx) => {
    row[field] = sfCount[row["F_NAME"]]
  })

}*/

var _getScale = (type, number) => {

  let scale = '中型'
  let min = 1000,max = 10000
  if(type != '石油') min = 50,max = 300

  if(number >= max)  scale = '大型'
  else if (number <= min)  scale = '小型'

  return scale
}
</script>
