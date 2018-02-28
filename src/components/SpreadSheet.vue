
<style>


.sheet-container{
  /*width: 900px;
  margin: 0 auto;*/

  /*margin: 0 120px 0 120px;*/

}
.sheet-container .sheet{
  /*width: 100%;*/
}
.sheet-container .sheet .sheet-readonly{
  background: #F3F3F3;
}

.sheet-container .sheet .htCore tr td{
  vertical-align:middle;
}


.sheet-container .sheet .htCore tr td.hidden{
  display: none;
}
.sheet-container .sheet .htCore tr td.center{
  text-align: center;
}
.sheet-container .sheet .htCore tr td.right{
  text-align: right;
}

.pane{
  /*overflow: hidden;*/
}
</style>
<template>

  <div class="sheet-container">

    <div class="sheet" id="handsontable"></div>

  </div>

</template>

<script>

const SpreadSheet = require('script/SpreadSheet')

export default {
  data () {
    return {

    }
  },
  props: {
    // 列配置
    columns:[],

    // 表格右键菜单
    contextMenu:{default: true},

    // 是否求和
    summary:{default: false},

    nosetup:true
  },
  methods: {
    readyHandsontable: function(columns){
      this.SpreadSheet = new SpreadSheet('handsontable',{
        columns:columns,
        contextMenu:this.contextMenu,
        summary:this.summary
      },this);
    }
  },
  ready: function (columns) {

    this.readyHandsontable(this.columns || columns);

  },
  events: {
  },
  filters:{

  },
  watch:{
    // 'data': function (val, oldVal) {
    //   // this.SpreadSheet.loadData(val);
    // }
  }
}

</script>
