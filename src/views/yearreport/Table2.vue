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
      <spread-sheet :columns="columns" nosetup=true></spread-sheet>
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




  <div class="g-modal">
    <div class="container-row">


      <div class="content">
        <h3>{{$route.cname}}</h3>

        <p>
            <span>填报说明：</span>
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

const SpreadSheet = require('components/SpreadSheet.vue')
import { PD } from 'Db/datas'

const params = {
  type:'DEF'
}

const pageparams = {
  SX_DATA: ["自营","合作"]
}

export default {
  components: {
    SpreadSheet
  },
  data () {
    return {
      DATAYEAR : DATAYEAR,
      DATACOM : DATACOM,
      addshow:true,
      data: [],
      columns : function(){

        return [
            //{tag:"F_ID",shw:{text:"ID",rowspan:3},siz:100,hidden:true},
            {tag:"F_SX",shw:{text:"属性",rowspan:2},siz:20,align:'center',editor:{type:'select',data:pageparams.SX_DATA}},
            {tag:"F_JH",shw:{text:"井号<strong style='color: red'>*</strong>",rowspan:2},siz:20,align:'center'},
            {tag:"F_PD",shw:{text:"地区(盆地)<strong style='color: red'>*</strong>",rowspan:2},siz:100,editor:{type:'select',data:PD},align:'center'},
            {tag:"F_QK",shw:{text:"区块名称<strong style='color: red'>*</strong>",rowspan:2},siz:100,align:'center'},
            {tag:"F_QB",shw:{text:"圈闭名称<strong style='color: red'>*</strong>",rowspan:2},siz:100,align:'center'},

            {tag:"F_JD",shw:[{text:"坐标<strong style='color: red'>*</strong>",colspan:2},"经度"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_WD",shw:["","纬度"],siz:100,type:'numeric',format:'0.00'},

            {tag:"F_KZRQ",shw:[{text:"钻井日期<strong style='color: red'>*</strong>",colspan:2},"开钻"],siz:100,editor:{type:'date'}},
            {tag:"F_WZRQ",shw:["","完钻"],siz:100,editor:{type:'date'}},

            {tag:"F_WZJS",shw:{text:"完钻井深(米)<strong style='color: red'>*</strong>",rowspan:2},siz:100,type:'numeric',format:'0.00'},
            {tag:"F_WZCW",shw:{text:"完钻层位<strong style='color: red'>*</strong>",rowspan:2},siz:100,align:'center'},
            {tag:"F_CJJSCG",shw:{text:"测井解释成果",rowspan:2},siz:100,align:'center'},
            {tag:"F_CSJK",shw:{text:"测试简况",rowspan:2},siz:100,align:'center'},

            {tag:"F_YRC",shw:[{text:"试油日产油气情况",colspan:2},"油(吨)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_QRC",shw:["","气(万方)"],siz:100,type:'numeric',format:'0.00'},

            {tag:"F_JL",shw:{text:"结论<strong style='color: red'>*</strong>",rowspan:2},siz:100,align:'center'},
            {tag:"F_BZ",shw:{text:"备注",rowspan:2},siz:100,align:'center'}

        ];
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
          rows = [{"F_SX":"自营"},{"F_SX":"自营"},{"F_SX":"自营"},{"F_SX":"自营"},{"F_SX":"自营"},
                {"F_SX":"合作"},{"F_SX":"合作"},{"F_SX":"合作"},{"F_SX":"合作"},{"F_SX":"合作"}]
        }
        thisz.SpreadSheet.loadData(rows)
      })

    },

    changeTab: function(event){

      if(event.toElement.classList[1]) return
      common.toggleClassByLevel(event.toElement, "active")
      params.type = event.toElement.getAttribute("name")

      this.query()
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
  ready: function () {
    this.SpreadSheet = this.$children[0].SpreadSheet;

    let tab = common.queryElement(".tab-group div[name='" + params.type + "']")
    tab.classList.add('active')

    this.query()
  },
  init: function () {
    params.tbname = this.$route.name
  }
}
</script>
