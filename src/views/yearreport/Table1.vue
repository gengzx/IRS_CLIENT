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

    <!-- <div class="pane">
      <editor-table :data="data" :columns="columns"></editor-table>
    </div> -->

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


      <div class="content description">
        <h3>{{$route.cname}}</h3>

        <p>
            <span>填报说明：</span>
        </p>
        <p style="text-indent:28px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">页岩气</span><strong> </strong><span>当年完成开发工作量部分只需填写总开发井的井数和进尺。<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">煤层气</span><strong> </strong><span>当年完成开发工作量部分只需填写总开发井的井数和进尺。</span>
        </p>
        <p>
            <br/>
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
// const EditorTable = require('../../components/EditorTable.vue')

import { FGS } from 'Db/datas'

const params = {
  type:'DEF'
}

const pageparams = {
  KZ_DATA: ["石油天然气","煤层气","页岩气"],
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
            {tag:"F_KZ",shw:{text:"矿种",rowspan:3},siz:20,editor:false,align:'center',editor:{type:'select',data:pageparams.KZ_DATA}},
            {tag:"F_SX",shw:{text:"属性",rowspan:3},siz:100,align:'center',editor:{type:'select',data:pageparams.SX_DATA}},

            {tag:"F_GS",shw:{text:"油气田分<br/>(子)公司",rowspan:3},siz:100,editor:{type:'select',data:FGS[DATACOM]},align:'center'},
            {tag:"F_KCTZ1",shw:{text:"勘查投资<br/>(亿元)",rowspan:3},siz:100,type:'numeric',format:'0.00'},

            {tag:"F_GZL_EW",shw:[{text:"当年完成勘查工作量",colspan:4},{text:"地震",colspan:2},"二维<br/>(千米)"],type:'numeric',format:'0.00',siz:100},
            {tag:"F_GZL_SW",shw:["","","三维<br/>(平方千米)"],type:'numeric',format:'0.00',siz:100},
            {tag:"F_TJJS",shw:["",{text:"探井",colspan:2},"井数<br/>(口)"],type:'numeric',format:'0',siz:100},
            {tag:"F_TJJC",shw:["","","进尺<br/>(万米)"],type:'numeric',format:'0.00',siz:100},

            {tag:"F_KCTZ2",shw:{text:"开采投资<br/>(亿元)",rowspan:3},type:'numeric',format:'0.00',siz:20},

            {tag:"F_ZKFJJS",shw:[{text:"当年完成开采工作量",colspan:6},{text:"总开发井",colspan:2},"井数<br/>(口)"],type:'numeric',format:'0',readOnly:true,compute:"{F_YJJS}+{F_QJJS}",siz:100},
            {tag:"F_ZKFJJC",shw:["","","进尺<br/>(万米)"],readOnly:true,compute:"{F_YJJC}+{F_QJJC}",type:'numeric',format:'0.00',siz:100},
            {tag:"F_YJJS",shw:["",{text:"油井",colspan:2},"井数<br/>(口)"],type:'numeric',format:'0',siz:100},
            {tag:"F_YJJC",shw:["","","进尺<br/>(万米)"],type:'numeric',format:'0.00',siz:100},
            {tag:"F_QJJS",shw:["",{text:"气井",colspan:2},"井数<br/>(口)"],type:'numeric',format:'0',siz:100},
            {tag:"F_QJJC",shw:["","","进尺<br/>(万米)"],type:'numeric',format:'0.00',siz:100}

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
          rows = [
            {"F_KZ":'石油',"F_SX":'自营'},{"F_KZ":'石油',"F_SX":'合作'},
            {"F_KZ":'天然气',"F_SX":'自营'},{"F_KZ":'天然气',"F_SX":'合作'},
            {"F_KZ":'煤层气',"F_SX":'自营'},{"F_KZ":'煤层气',"F_SX":'合作'},
            {"F_KZ":'页岩气',"F_SX":'自营'},{"F_KZ":'页岩气',"F_SX":'合作'},
          ]
        }
        thisz.SpreadSheet.loadData(rows);
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
