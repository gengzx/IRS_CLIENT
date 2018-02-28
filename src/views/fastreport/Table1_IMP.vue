<style>
</style>
<template>

  <div class="container-row">

    <div class="tbar toolbar-actions">
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
      <spread-sheet context-menu=false summary=true :columns="columns" nosetup=true></spread-sheet>
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
            <span style="font-size:14px;font-family:黑体">年末在职职工</span><strong> </strong><span>指事业单位在编人员，企业在册人员，与单位签订聘用合同、劳动合同或符合劳动保障部门关于认定形成事实劳动关系条件的人员，不含外放及港澳台人员、实习在校生、参军人员及未经聘用、留用的离退休人员。<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">技术人员</span><strong> </strong><span>指在地勘单位中从事工作并取得劳动报酬的，具有初级及初级以上地质勘查专业技术职称的在职职工，包括已取得专业技术职称，现从事技术管理和行政管理工作的行政人员。</span>
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
// const SpreadSheet = require('script/SpreadSheet')

const params = {
  type:'DEF'
}

export default {
  components: {
    SpreadSheet
  },
  data () {
    return {
      DATAYEAR : DATAYEAR,
      DATACOM : DATACOM,
      data: [],
      columns : function(){

        return [
            //{tag:"F_ID",shw:{text:"ID",rowspan:2},siz:100,hidden:true},
            {tag:"F_DQ",shw:{text:"地区",rowspan:2},siz:20,readOnly:true,align:'center'/*,renderer:'sheet.renderer'*/},
            {tag:"F_KCTR",shw:{text:"勘查投入(万元)",rowspan:2},siz:20,type:'numeric',format:'0.00'},
            {tag:"F_NMZZZG",shw:{text:"年末在职职工",rowspan:2},siz:100,type:'numeric',format:'0'},

            {tag:"F_JSRY",shw:{text:"技术人员",rowspan:2},siz:100,type:'numeric',format:'0'},

            {tag:"F_GZLTJ",shw:[{text:"完成工作量",colspan:4},"探井(口)"],siz:100,type:'numeric',format:'0'},
            {tag:"F_GZLZTJC",shw:["","钻探进尺(米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_GZLEWDZ",shw:["","二维地震(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_GZLSWDZ",shw:["","三维地震(平方千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_FGS",shw:{text:"分公司",rowspan:2},align:'center',siz:20}

        ];
      }()

    }
  },
  methods: {
    save: function(){
      this.data = this.SpreadSheet.getData()
      commonVue.methods.save(this, params)
    },

    query: function () {

      let thisz = this
      commonVue.methods.query(this, params, function(rows){
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

  events: {
    'sheet.renderer': function(idx){
      //console.log(111);
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
