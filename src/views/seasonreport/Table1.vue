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
      <spread-sheet context-menu=false :columns="columns" nosetup=true></spread-sheet>
    </div>

    <div class="table-tabs">

      <div class="tab-group">
          <div class="tab-item" :name="DATASEASON" v-on:click="changeTab">{{$route.cname}}</div>
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
              <span style="font-size:14px;font-family:黑体"></span><strong> </strong><span>自动计算同比：取上年同一季度的数据，进行运算<strong></strong></span>
          </p
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
  type:DATASEASON
}

export default {
  components: {
    SpreadSheet
  },
  data () {
    return {
      DATAYEAR : DATAYEAR,
      DATACOM : DATACOM,
      DATASEASON : DATASEASON,
      data: [],
      columns : function(){

        return [
            {tag:"F_KZ",shw:{text:"矿种",rowspan:2},siz:20,readOnly:true,align:'center'},
            {tag:"F_XM",shw:{text:"项目",rowspan:2},siz:100,readOnly:true,align:'center'},

            {tag:"F_LJKTTZ",shw:{text:"累计勘探投资(万元)",rowspan:2},siz:100,type:'numeric',format:'0.00'},

            {tag:"F_DZGZL_EW",shw:[{text:"累计勘探完成工作量",colspan:4},"二维地震(千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_DZGZL_SW",shw:["","三维地震(平方千米)"],siz:100,type:'numeric',format:'0.00'},
            {tag:"F_TJJS",shw:["","探井(口)"],siz:100,type:'numeric',format:'0'},
            {tag:"F_TJJC",shw:["","进尺(米)"],siz:100,type:'numeric',format:'0.00'},

            {tag:"F_LJKCTZ",shw:{text:"累计勘探投资(万元)",rowspan:2},siz:100,type:'numeric',format:'0.00'},

            {tag:"F_KCJJS",shw:[{text:"累计开采完成工作量",colspan:2},"探井(口)"],siz:100,type:'numeric',format:'0'},
            {tag:"F_KCJJC",shw:["","进尺(米)"],siz:100,type:'numeric',format:'0.00'},

            {tag:"F_YCL",shw:{text:"油产量(万吨)",rowspan:2},siz:100,type:'numeric',format:'0.00'},
            {tag:"F_QCL",shw:{text:"气产量(亿方)",rowspan:2},siz:100,type:'numeric',format:'0.00'}

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
          rows = [
            {"F_KZ":'石油天然气',"F_XM":'数量'},{"F_KZ":'石油天然气',"F_XM":'同比(%)'},
            {"F_KZ":'煤层气',"F_XM":'数量'},{"F_KZ":'煤层气',"F_XM":'同比(%)'},
            {"F_KZ":'页岩气',"F_XM":'数量'},{"F_KZ":'页岩气',"F_XM":'同比(%)'},
            {"F_KZ":'合计',"F_XM":'数量'},{"F_KZ":'合计',"F_XM":'同比(%)'}
          ]
        }
        thisz.SpreadSheet.loadData(rows);
        thisz.lastRow = rows.length
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
    'sheet.afterChange': function(row, col, field, val, source){

      const sheet = this.SpreadSheet.sheet

      if(row < this.lastRow){
        var sumRow = 2,colSum = 0,colSum1 = 0,colArray  = sheet.getDataAtCol(col);
        for (var i = sumRow; i < colArray.length - 2; i++) {
          var num = colArray[i];
          if(num && !isNaN(num)){
            if(i%2 == 0){
              colSum += num;
            }else{
              colSum1 += num;
            }
          }
        }
        sheet.setDataAtCell(this.lastRow, col, colSum);
        sheet.setDataAtCell(this.lastRow+1, col, colSum1);
      }

    }
  },
  ready: function () {
    this.SpreadSheet = this.$children[0].SpreadSheet;

    params.type = DATASEASON
    this.DATASEASON = DATASEASON

    let tab = common.queryElement(".tab-group div[name='" + params.type + "']")
    tab.classList.add('active')

    this.query()
  },
  init: function () {
    params.tbname = this.$route.name
  }
}
</script>
