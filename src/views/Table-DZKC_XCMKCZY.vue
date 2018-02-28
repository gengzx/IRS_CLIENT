
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

      <button class="btn btn-positive pull-right" v-on:click="exportExcel">
        <span class="icon icon-export icon-text white"></span>
        导出
      </button>
    </div>

    <div class="pane">
      <editor-table :data="data" :columns="columns"></editor-table>
    </div>


    <div class="table-tabs">

      <div class="tab-group">
          <div class="tab-item" name='SF' v-on:click="changeTab">按省份</div>
          <div class="tab-item" name='KZ' v-on:click="changeTab">按矿种</div>
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
              <span style="font-size:14px">填报说明：</span>
          </p>
          <p style="text-indent:26px;line-height:28px">
              <span style="font-size:14px">1. 新查明矿产资源是指经地质勘查工作已查明的矿产资源，以提交地质报告审定稿中的矿产资源数量为准。</span>
          </p>
          <p style="text-indent:26px;line-height:28px">
              <span style="font-size:14px">2. 本表指标解释参见《地质勘查新发现矿产地》表指标解释。</span>
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

const EditorTable = require('../components/EditorTable.vue')
const SelectRegion = require('../components/SelectRegion.vue')

// 数据请求参数
const params = {
  type:'KZ'
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
  SF: [
        {tag:"F_ID",shw:{text:"ID"},siz:100,hidden:true},
        {tag:"F_NAME",shw:{text:"名称"},siz:100,editor:false,align:'left'},

        {tag:"F_HJ",shw:"合计",siz:100,editor:false},
        {tag:"F_ZGSY",shw:"中国石油",siz:100,editor:("中国石油" == DATACOM)},
        {tag:"F_ZGSH",shw:"中国石化",siz:100,editor:("中国石化" == DATACOM)},
        {tag:"F_ZGHY",shw:"中国海油",siz:100,editor:("中国海油" == DATACOM)},
        {tag:"F_YCSY",shw:"延长石油",siz:100,editor:("延长石油" == DATACOM)},
        {tag:"F_ZLGS",shw:"中联公司",siz:100,editor:("中联公司" == DATACOM)},
        {tag:"F_ZGDDJ",shw:"中国地调局",siz:100,editor:("中国地调局" == DATACOM)}
    ],
  KZ: [
        {tag:"F_ID",shw:{text:"ID"},siz:100,hidden:true},
        {tag:"F_GZDW",shw:"工作单位",siz:100,editor:false,align:'left'},
        {tag:"F_KCDMC",shw:"矿产地名称",siz:100,onClick:'onClick',align:'left'},
        //{tag:"F_KCDMC",shw:"矿种名称",siz:100,editor:{type:'select',data:["石油","天然气"]},onEditor:'onEditor'},
        {tag:"F_KCGM",shw:"矿产规模",siz:100,editor:false,align:'left'},
        {tag:"F_JLDW",shw:"计量单位",siz:100,editor:false,align:'left'},
        {tag:"F_DZCL",shw:"地质储量",siz:100,onEditor:'onEditor'}
    ]
}

export default {
  components: {
    EditorTable,
    SelectRegion
  },
  data () {
    return {
      addshow:false,
      data: [],
      columns : function(){
        return columns[params.type]
      }()
    }
  },
  methods: {
    add: function(){
      this.data.push({F_GZDW:DATACOM})
    },

    save: function(){
      commonVue.methods.save(this, params)
    },

    query: function () {

      let thisz = this
      commonVue.methods.query(this, params, function(rows, isinit){
        if(params.type == 'KZ' && isinit) {
          rows = []
        }
        if(params.type == 'SF') filterData(rows,thisz.data)
        thisz.data  = rows
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

      commonVue.methods.exportExcel(this, this.data, title, columns)

    },

    toggleInfo: function () {
      common.queryElement('.g-modal').classList.toggle('visible')
    }
  },
  events: {
    'onEditor': function (tr, record, tag) {

      let val = record[tag]
      if(val){
        let kcdmc = record['F_KCDMC']
        if(kcdmc){
          let kcdmcArray = kcdmc.split(",")
          let type = kcdmcArray[kcdmcArray.length-1]

          let minVal = 25
          if(type != '石油') minVal = 500

          if(val < minVal){
            common.msg("请按要求填写\n石油底限为500万吨，天然气底限为25亿方！")
            record[tag] = ""
            return
          }

          tr.children[3].innerText = record['F_KCGM'] = _getScale(type, val)
        }
      }
    },
    'onClick': function (tr, record, tag) {
      SelectRegion.methods.show(function(value, values){

        tr.children[2].innerText = record[tag] = value
        if(values.n){
          tr.children[4].innerText = record['F_JLDW'] = pageparams.UNIT[values.n]

          if(record['F_DZCL']){
            tr.children[3].innerText = record['F_KCGM'] = _getScale(values.n, record['F_DZCL'])
          }
        }

      })
    }
  },
  ready: function () {
    let tab = common.queryElement(".tab-group div[name='" + params.type + "']")
    tab.classList.add('active')
    this.addshow = (params.type == 'KZ')

    this.query()
  },
  init: function () {
    params.tbname = this.$route.name
  }
}

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

}

var _getScale = (type, number) => {

  let scale = '中型'
  let min = 50,max = 300
  if(type != '石油') min = 1000,max = 10000

  if(number >= max)  scale = '大型'
  else if (number <= min)  scale = '小型'

  return scale
}
</script>
