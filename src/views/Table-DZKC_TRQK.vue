<style>
</style>
<template>

  <div class="container-row">

    <div class="tbar toolbar-actions">
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




  <div class="g-modal">
    <div class="container-row">


      <div class="content">
        <h3>{{$route.cname}}</h3>

        <p>
            <span style="font-size:14px">填报说明：</span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px">1. 统计范围是报告期开展工作的全部地质勘查项目。</span>
        </p>

        <p style="line-height:28px">
            <span style="font-size:14px">指标解释：<span style="text-decoration:underline;"></span></span>
        </p>
        <p style="text-indent:28px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">填报单位</span><strong> </strong><span style="font-size:14px">承担地质勘查项目、地质科研项目的企事业单位填报，省国土资源主管部门、中国地质调查局及原各部门地勘主管单位汇总报部。<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">地质勘查经费</span><strong> </strong><span style="font-size:14px">是指报告期完成的来自各方面的地质勘查资金。包括完成的中央财政、地方财政地质勘查拨款，企事业单位投入的地质勘查工作的资金以及其他资金。</span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">中央财政专项拨款</span><strong> </strong><span style="font-size:14px">是指报告期实际完成的由国家预算收支科目安排的直接用于地质勘查经费。</span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">地方财政专项拨款</span><strong> </strong><span style="font-size:14px">是指报告期实际完成的地方财政拨付的地质勘查经费。</span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">企事业资金</span><strong> </strong><span style="font-size:14px">是指报告期完成的各类企事业单位投入的地质勘查工作的资金。包括内资企事业资金、港澳台商投资和外商投资。</span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">内资企事业资金</span> <span style="font-size:14px">是指报告期完成的国有、集体企事业单位和私营企业投入地质勘查工作的资金。</span><strong></strong>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">港澳台商投资</span><strong> </strong><span style="font-size:14px">是指港澳台企业和经济组织或个人按我国有关政策、法规，用现汇、实物（折资）和技术等投入地质勘查工作资金。<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">外商投资</span><strong> </strong><span style="font-size:14px">是指报告期内完成境外投入地质勘查工作的资金，包括外商直接投资、对外借贷（外国政府贷款、国际金融组织贷款、出口信贷、外国银行商业贷款、对外发行债券和股票）及外商其他投资（包括补偿贸易和加工装配由外商提供的设备价款、国际租赁）。不包括我国自有外汇资金（包括国家外汇、地方外汇、流程外汇、调剂外汇和中国银行自有资金发行的外汇贷款等）。</span>
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

const EditorTable = require('../components/EditorTable.vue')

const params = {
  type:'SF'
}


export default {
  components: {
    EditorTable
  },
  data () {
    return {
      data: [],

      columns : function(){

        return [
            {tag:"F_ID",shw:{text:"ID",rowspan:3},siz:100,hidden:true},
            {tag:"F_NAME",shw:{text:"名称",rowspan:3},siz:20,editor:false,align:'left'},
            {tag:"F_XMS",shw:{text:"项目数",rowspan:3},siz:100},

            {tag:"F_HJ",shw:[{text:"地质勘查费（万 元）",colspan:11},{text:"合计",rowspan:2}],siz:100,editor:false,compute:"{F_ZYCZBK}+{F_DFCZBK}+{F_QSYTR}+{F_QTTR}"},
            {tag:"F_ZYCZBK",shw:["",{text:"中央财政拨款",colspan:3},"小计"],siz:100,editor:false,compute:"{F_ZYCZBK_TCPJZX}+{F_ZYCZBK_DZKCJJ}"},
            {tag:"F_ZYCZBK_TCPJZX",shw:["","","调查评价专项"],siz:100},
            {tag:"F_ZYCZBK_DZKCJJ",shw:["","","地质勘查基金"],siz:100},

            {tag:"F_DFCZBK",shw:["",{text:"地方财政拨款",colspan:2},"小计"],siz:100,editor:false,compute:"{F_DFCZBK_DZKCJJ}"},
            {tag:"F_DFCZBK_DZKCJJ",shw:["","","地质勘查基金"],siz:100},

            {tag:"F_QSYTR",shw:["",{text:"企事业投入",colspan:4},"小计"],siz:100,editor:false,compute:"{F_QSYTR_GNQSY}+{F_QSYTR_GATS}+{F_QSYTR_WS}"},
            {tag:"F_QSYTR_GNQSY",shw:["","","国内企事业"],siz:100},
            {tag:"F_QSYTR_GATS",shw:["","","港澳台商"],siz:100},
            {tag:"F_QSYTR_WS",shw:["","","外商"],siz:100},

            {tag:"F_QTTR",shw:["",{text:"其他投入",rowspan:2}],siz:100},

            {tag:"F_NMCYRY",shw:[{text:"年末从业人员",colspan:2},{text:"其他",rowspan:2}],siz:100},
            {tag:"F_NMCYRY_JSRY",shw:["",{text:"技术人员",rowspan:2}],siz:100}
        ];
      }()


    }
  },
  methods: {
    save: function(){
      commonVue.methods.save(this, params)
    },

    query: function () {

      let thisz = this
      commonVue.methods.query(this, params, function(rows){
        thisz.data  = rows
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

      commonVue.methods.exportExcel(this, this.data, title, columns)

    },
    toggleInfo: function () {
      common.queryElement('.g-modal').classList.toggle('visible')
    }
  },
  ready: function () {

    let tab = common.queryElement(".tab-group div[name='" + params.type + "']")
    tab.classList.add('active')

    this.query()
  },
  init: function () {
    params.tbname = this.$route.name
  }
}
</script>
