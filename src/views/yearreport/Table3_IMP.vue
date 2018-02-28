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


      <div class="content">
        <h3>{{$route.cname}}</h3>
        <p>
            <span>填报说明：</span>
        </p>
        <p style="text-indent:28px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">1、</span><strong> </strong><span>按矿种合计<strong></strong></span>
        </p>
        <p style="text-indent:26px;line-height:28px">
            <span style="font-size:14px;font-family:黑体">2、</span><strong> </strong><span>校验矿种与区域的合计数是否闭合</span>
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
            {tag:"F_FL",shw:{text:"分类",rowspan:3},siz:20,editor:false,readOnly:true,align:'center'},
            {tag:"F_KZ",shw:{text:"矿种/区域",rowspan:3},siz:100,readOnly:true,align:'center'},

            {tag:"F_TZ",shw:{text:"投资(亿元)",rowspan:3},siz:100,type:'numeric',format:'0.00'},

            {tag:"F_DZLXDCGZL",shw:[{text:"完成工作量",colspan:7},{text:"地面地质调查",colspan:2},"地质路线调查<br/>(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_DZPMCLGZL",shw:["","","地质剖面测量<br/>(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_DZGZL_EW",shw:["",{text:"地球物理调查",colspan:3},"二维地震<br/>(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_DZGZL_SW",shw:["","","三维地震<br/>(平方千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_ZCDZHWTCLGZL",shw:["","","重磁电综合物探测量<br/>(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_DCJJS",shw:["",{text:"地质调查井",colspan:2},"井数<br/>(口)"],siz:100,type:'numeric',format:'0'},
            {tag:"F_DCJJC",shw:["","","进尺<br/>(万米)"],siz:100,type:'numeric',format:'0.00'},
	{tag:"F_FGS",shw:{text:"分公司",rowspan:3},align:'center',siz:20}

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
      commonVue.methods.query(this, params, function(rows, isinit){

        if(isinit) {
          rows = [{"F_FL":'合计'},
            {"F_FL":'按矿种',"F_KZ":'石油天然气'},{"F_FL":'按矿种',"F_KZ":'煤层气'},{"F_FL":'按矿种',"F_KZ":'页岩气'},{"F_FL":'按矿种',"F_KZ":'其他'},
            {"F_FL":'按区域',"F_KZ":'陆域'},{"F_FL":'按区域',"F_KZ":'海域'}
          ]
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
