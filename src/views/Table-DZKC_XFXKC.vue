
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
              <span style="font-size:14px">1. 统计范围是我国境内新发现的矿产地。</span>
          </p>
          <p style="text-indent:26px;line-height:28px">
              <span style="font-size:14px">2. 填报单位是承担地质勘查项目的企事业单位填报，省级国土资源主管部门、中国地质调查局及原各部门地勘主管单位汇总报部。</span>
          </p>


          <p style="line-height:27px">
    <span style="font-size:14px">指标解释：</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">新发现矿产地</span> <span style="font-size:14px">是指报告期内通过各类地质调查工作，或者根据群众报矿、群众采矿线索新发现的，并经过矿产调查工作证实为有进一步工作意义或具有工业价值，具有一定规模，作出初步评价的矿区。主要要求：</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px">（<span>1</span>）初步了解矿区基本地质情况及矿床类型，对矿体分布和埋藏情况做过概略地质调查和少量的工程揭露、控制。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px">（<span>2</span>）对矿石质量有正规取样化验资料，矿石质量及矿体开采技术条件符合现行矿产工业评价要求。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px">（<span>3</span>）<span style="color:red">矿产地的矿产资源规模要达到现行《矿产资源储量规模划分标准》中规定的小型规模上限的二分之一以上。</span></span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px">（<span>4</span>）估算资源量类别已满足《固体矿产资源<span>/</span>储量分类》<span>[GB/T17766-1999]</span>中的推断的资源量<span>(333)</span>和预测的资源量（<span>334</span>）的要求。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px">（<span>5</span>）有正式编写的文字报告，并附有必要的地质图、剖面图、工程编录、取样位置图等相应图件。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">矿产地名称</span> <span style="font-size:14px">填写新发现矿产地的详细地址（省、市、县、乡）、矿种。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">工作单位</span> <span style="font-size:14px">是指报告期内从事地质调查（勘查）工作，发现矿产地的单位。单位名称需填写详细。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">矿床规模</span><strong> </strong><span style="font-size:14px">是依据国土资源部矿产资源储量规模划分标准确定的大型、中型、小型矿床（见附录四）。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">固体矿产资源<span>/</span>储量分级<span>:</span></span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">储量</span><strong> </strong><span style="font-size:14px">经过详查或勘探，达到了控制的或探明的程度，在进行了预可行性或可行性研究后，扣除了设计和采矿损失，能实际采出的数量，经济上表现为年均收益率高于行业基准内部收益率。储量是基础储量中的经济可采部分，可分为可采储量（<span>111</span>）、探明的预可采储量（<span>121</span>）及控制的预可采储量（<span>122</span>）。</span><strong></strong>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">基础储量</span><strong> </strong><span style="font-size:14px">经过详查或勘探，达到了控制的或探明的程度，在进行了预可行性或可行性研究后，经济意义属于经济的或边际经济的那部分矿产资源。基础储量分为两部分，<span>6</span>个类型。两部分即经济基础储量和边际经济的基础储量。<span>6</span>个类型即探明的（可研）经济基础储量（<span>111b</span>）、探明的（预可研）经济基础储量（<span>121b</span>）、控制的经济基础储量（<span>122b</span>）、探明的（可研）边际经济基础储量（<span>2 M11</span>）、探明的（预可研）边际经济基础储量（<span>2M21</span>）、控制的边际经济基础储量（<span>2M22</span>）。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">资源量</span><strong> </strong><span style="font-size:14px">可分为三部分，即内蕴经济资源量、次边际经济资源量和预测资源量。内蕴经济资源量，即自普查至勘探，地质可靠程度达到了推断的至探明的，但可行性评价工作只进行了概略研究，尚分不清其真实的经济意义，可细分为<span>3</span>个类型，探明的内蕴经济资源量（<span>331</span>）、控制的内蕴经济资源量（<span>332</span>）、推断的内蕴经济资源量（<span>333</span>）。次边际经济的矿产资源量，即通过详查、勘探的成果，进行了预可行性、可行性研究后，其内部收益率呈负值，在当时开采是不经济的，只有在技术上有了很大进步、产品能大幅度降低成本或大幅度降价时，才能使其变为经济的那部分矿产资源，也可分为<span>3</span>个类型，探明的（可研）次边际经济资源量（<span>2S11</span>）、探明的（预可研）次边际经济资源量（<span>2S21</span>）、控制的次边际经济资源量（<span>2S22</span>）。预测的矿产资源是经过预查工作，依据已有的资料分析、类比、估算的资源量（<span>334</span>），也是资源量的一种，属潜在矿产资源。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">查明资源量</span><strong> </strong><span style="font-size:14px">在本表中的查明资源量主要是推断的内蕴经济资源量（<span>333</span>）以上的资源量。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体;letter-spacing:-0">预测的资源量</span><span style="font-size:14px;font-family:黑体;letter-spacing:-0">（<span>334</span>）</span> <span style="font-size:14px;letter-spacing: -0">是指在预查区内，综合各方面的资料分析、研究和极少量的工程验证，通过已知矿床的类比，有足够的数据所估算的资源量。属于潜在的矿产资源，经济意义商未确定。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体;letter-spacing:-0">计量单位</span> <span style="font-size:14px;letter-spacing: -0">是指矿产资源的计算单位。计算对象一般是矿石或矿物、金属、氧化物、标矿等，单位主要以重量或体积表示。要求严格按制度中《矿产资源目录及代码》规定填写。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">石油天然气资源<span>/</span>储量分类：</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">（<span>1</span>）探明地质储量</span><strong><span style="font-size:14px;font-family:仿宋_GB2312">&nbsp; </span></strong><span style="font-size: 14px">是指在油气藏评价阶段，经评价钻探证实油气藏（田）可提供开采并能获得经济效益后，估算求得的、确定性很大的地质储量，其相对误差不超过<span>+/-20</span>％。探明地质储量的估算，应查明了油气藏类型、储集类型、驱动类型、流体性质及分布、产能等；流体界面或油气层底界应是钻井、测井、测试或可靠压力资料证实的；应有合理的井控程度（合理井距另行规定），或开发方案设计的一次开发井网；各项参数均具有较高的可靠程度。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">（<span>2</span>）探明技术可采储量</span><strong> </strong><span style="font-size:14px">是指满足下列条件所估算的技术可采储量。</span>
</p>
<p style="margin-left:55px;line-height: 27px">
    <span style="font-size:14px;font-family:Wingdings">l </span><span style="font-size:14px">已实施的操作技术和近期将采用的操作技术（包括采油气技术和提高采收率技术，下同）；</span>
</p>
<p style="margin-left:55px;line-height: 27px">
    <span style="font-size:14px;font-family:Wingdings">l </span><span style="font-size:14px">已有开发概念设计或开发方案，并已列入或将列入中期开发计划；</span>
</p>
<p style="margin-left:55px;line-height: 27px">
    <span style="font-size:14px;font-family:Wingdings">l </span><span style="font-size:14px">以近期平均价格和成本为准，可行性评价为经济的和次经济的。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:黑体">地下水资源储量分级：</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">根据地质、水文地质条件研究程度，地下水动态观测时间的长短，计算所引用的原始数据和参数的精度，计算方法和方式的合理性，地下水补给的保证程度等因素，将地下水资源（地下水允许开采量）评价的精度划分为五级：</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">A</span><span style="font-size:14px;font-family:宋体;letter-spacing:-0">级：通过勘查取得有为解决开采水源地具体课题所进行的专门研究和试验成果；根据开采的动态资料，进一步完善地下水数学模型，并逐步建立地下水管理模型；掌握了三年以上水源地连续的开采动态资料，并对地下水允许开采量进行系统地多年的均衡计算和评价；提出水源地的改造、扩建和保护地下水资源的具体措施。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">B</span><span style="font-size:14px;font-family:宋体;letter-spacing:-0">级： 通过勘查查明拟建水源地地区的水文地质条件与供水有关的环境水文地质问题，提出开采地下水必需的有关含水层资料和数据；根据一个水文年以上的地下水动态资料和互阻抽水试验或试验性开采抽水试验，验证水文地质计算参数，掌握含水层的补给条件及供水能力；建立和完善数学模型，结合具体开采方案，计算或评价补给量，确定允许开采量；预测地下水开采条件下水位、水量、水质可能发生的变化；提出了保护和改善地下水水量和地下水水质的措施。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">C</span><span style="font-size:14px;font-family:宋体;letter-spacing:-0">级：通过勘查基本查明了含水层（带）的空间分布及水文地质特征，初步掌握了地下水补给、径流、排泄条件及其动态变化规律，根据待观测孔的抽水试验或找水期的地下水动态资料，确定有代表性的水文地质参数，结合开采方案初步计算允许开采量，提出了合理的利用值，初步论证了补给量，提出拟建水源地的可靠性评价。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">D</span><span style="font-size:14px;font-family:宋体;letter-spacing:-0">级：通过调查初步查明了含水层（带）的空间分布及水文地质特征，初步圈定了可能赋水的地段，概略评价了地下水资源，估算了地下水允许开采量。</span>
</p>
<p style="text-indent:28px;line-height:27px">
    <span style="font-size:14px;font-family:宋体;letter-spacing:-0">E</span><span style="font-size:14px;font-family:宋体;letter-spacing:-0">级：系指根据现有水文地质资料，结合必要的路线踏勘，概略了解了区域水文地质条件，推测圈定了可能赋水的地段，并粗略评价了地下水资源，估算了允许开采量，为进一步规划提供依据。</span>
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
        {tag:"F_JLDW",shw:"计量单位",siz:100,editor:true,align:'left'},
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
