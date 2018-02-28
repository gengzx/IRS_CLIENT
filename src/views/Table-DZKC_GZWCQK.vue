
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
              <span style="font-size:14px">填报单位是承担地质勘查项目的企事业单位填报，由部地质勘查司组织中国地质调查局、中国石油天然气股           份有限公司、中国石油化工股份公司、中国海洋石油总公司、陕西延长石油(集团)有限责任公司和中联煤层气有限责任公司等单位汇总报部。</span>
          </p>

          <p style="line-height:28px">
              <span style="font-size:14px">指标解释：</span>
          </p>
          <p style="text-indent:28px;line-height:28px">
              <span style="font-size:14px;font-family:黑体">探井</span><strong> </strong><span style="font-size:14px">是指在有利的集油构造或油气田范围内，为确定油气藏是否存在，圈定油气的边界，并对油气藏进行工业评价及取得油气开发所需地质资料而钻的井。各勘探阶段所钻的井，又可分为预探井、初探井及详探井。根据钻探目的差异也可以分为：地质井、参数井、预探井、评价井及水文井。</span>
          </p>
          <p style="text-indent:28px;line-height:28px">
              <span style="font-size:14px;font-family:黑体">钻探进尺</span><strong> </strong><span style="font-size:14px">是指钻探中的钻孔深度。</span>
          </p>
          <p style="text-indent:28px;line-height:28px">
              <span style="font-size:14px;font-family:黑体">二维地震 </span><span style="font-size:14px">是指在地面上布置一条条测线，沿各条测线进行地震勘探施工，采集地下地层反射回地面的地震波信息。</span>
          </p>
          <p style="text-indent:28px;line-height:28px">
              <span style="font-size:14px;font-family:黑体">三维地震 </span><span style="font-size:14px">是指一种面积地震勘探方法。野外的观测系统有多种形式，如用<span>48</span>个激发点和<span>48</span>道检波器，构成互相垂直的观测系统，对每个反射面可得到<span>2000</span>多个均匀分布的深度点。</span>
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
  type:'SF',
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
            {tag:"F_NAME",shw:{text:"名称",rowspan:2},siz:100,editor:false,align:'left'},

            {tag:"F_TJ",shw:["探井","口"],siz:100},
            {tag:"F_ZTJC",shw:["钻探进尺","米"],siz:100},
            {tag:"F_EWDZ",shw:["二维地震","千米"],siz:100},
            {tag:"F_SWDZ",shw:["三维地震","平方千米"],siz:100}

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
