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
      <editor-table :data="data" :columns="columns" nosetup=true></editor-table>
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
            <span style="font-size:14px">填报说明：</span>
        </p>
        <!--
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px">1. 统计范围是报告期开展工作的全部地质勘查项目。</span>
        </p>

        <p style="line-height:28px">
            <span style="font-size:14px">指标解释：<span style="text-decoration:underline;"></span></span>
        </p>
      -->
        <p style="text-indent:28px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">年末在职职工</span><strong> </strong><span style="font-size:14px">指事业单位在编人员，企业在册人员，与单位签订聘用合同、劳动合同或符合劳动保障部门关于认定形成事实劳动关系条件的人员，不含外放及港澳台人员、实习在校生、参军人员及未经聘用、留用的离退休人员。<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">技术人员</span><strong> </strong><span style="font-size:14px">指在地勘单位中从事工作并取得劳动报酬的，具有初级及初级以上地质勘查专业技术职称的在职职工，包括已取得专业技术职称，现从事技术管理和行政管理工作的行政人员。</span>
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

const EditorTable = require('../../components/EditorTable.vue')

const params = {
  type:'DEF',
  year:2015
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
            {tag:"F_ID",shw:{text:"ID",rowspan:2},siz:100,hidden:true},
            {tag:"F_DQ",shw:{text:"地区",rowspan:2},siz:20,editor:false,align:'center'},
            {tag:"F_KCTR",shw:{text:"勘查投入(万元)",rowspan:2},siz:20},
            {tag:"F_NMZZZG",shw:{text:"年末在职职工",rowspan:2},siz:100},

            {tag:"F_JSRY",shw:{text:"技术人员",rowspan:2},siz:100},

            {tag:"F_GZLTJ",shw:[{text:"完成工作量",colspan:4},"探井(口)"],siz:100},
            {tag:"F_GZLZTJC",shw:["","钻探进尺(米)"],siz:100},
            {tag:"F_GZLEWDZ",shw:["","二维地震(千米)"],siz:100},
            {tag:"F_GZLSWDZ",shw:["","三维地震(平方千米)"],siz:100}



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
