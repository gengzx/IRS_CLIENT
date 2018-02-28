
<style>

.vtable th {
  text-align: center;
}
.vtable td{text-align: right;padding: 0px 0px 0px 0px;font: normal 13px/100% Verdana, Tahoma, sans-serif;}
.vtable td.left{ text-align: left;}
.vtable td.center{ text-align: center;}
.vtable td.right{ text-align: right;}

.vtable input,
.vtable select,
.vtable textarea {
  transition: all .3s ease;
  /*padding: 4px;*/
  height: 24px;
  border-width: 0px;
/*  border-bottom: solid 1px #DDDDDD;
  border-right: solid 1px #DDDDDD;*/
  outline: 0;
  width:100%;
  background: #FFFFFF;
/*  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;  */
}
.vtable input:hover,
.vtable select:hover,
.vtable textarea:hover,
.vtable input:focus,
.vtable select:focus,
.vtable textarea:focus {
  background: #DBFDE0;
}


.vtable td {
  transition: all .3s ease;
  height: 25px;
  border-width: 0px;
  border-bottom: solid 1px #DDDDDD;
  border-right: solid 1px #DDDDDD;
  outline: 0;
  width:10%;
  background: #FFFFFF;

}
.vtable td:hover,
.vtable td:focus{
  background: #DBFDE0;
}

.vtable .hidden{
  display: none;
}
.vtable .noeditor{
  background: #FAFAFA;
}
.vtable .noeditor:hover,
.vtable .noeditor:focus{
  background: #FAFAFA;
}

.table-hover>tbody>tr:hover {
    background-color: #f5f5f5;
}
</style>
<template>

    <table class="vtable table-striped table-hover">
      <thead>
      </thead>
      <tbody>

        <tr v-for="d in data" :index=$index>

          <td v-for="column in columns"
          :class="rendererClass(column)"
          style="width:20px"
          @click="editable($event,column)"
          v-text="d[column.tag]">
          </td>

          <td v-show="!nosetup" style="width:20px;text-align:center;"><a href="javascript:;" class="icon icon-cancel-circled icon-text" @click="remove($index)"></a></td>

        </tr>

      </tbody>
    </table>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    // 数据
    data:[],

    // 列配置
    columns:[],

    nosetup:true
  },
  methods: {
    remove: function(idx){
      this.$dispatch('removeRow', idx)
    },
    rendererClass: function(column){

      let className = ""
      if(column.hidden) className += " hidden"
      if(column.editor == false) className += " noeditor"
      if(column.align) className += " " + column.align

      return className
    },
    editable: function(event,column){

      let td = event.toElement,
          tr = td.parentNode,
          thisz = this
      if(td.tagName != 'TD') return
      if(column.editor == false) return

      let rowIndex = tr.getAttribute("index")
      let record = thisz.$get("data")[rowIndex]

      if(column.onClick) {
        thisz.$dispatch(column.onClick, tr,record,column.tag)
        return
      }

      let value = td.innerText
      td.innerText = ""

      if(!td.hasChildNodes()){

        let element = createElement({
          editor:column.editor || {},
          notvalid:column.notvalid || false,
          value:value
        },function(newVal){

          if(!newVal) return
          td.innerText = record[column.tag] = newVal

          // 计算
          for(let index = thisz.columns.length;index--;index > -1){
            let item = thisz.columns[index]
          // thisz.columns.forEach(function(item,index){
            if(item.compute){
              tr.children[index].innerText = record[item.tag] = eval(parseExpr(item.compute,record)) || ''
            }
          // })
          }

          // 派发事件，事件沿着父链冒泡；
          if(column.onEditor) thisz.$dispatch(column.onEditor, tr,record,column.tag)

        })

        td.appendChild(element)
        element.focus()
      }


    }
  },
  ready: function (columns) {

    initColumns(this.columns || columns)
  },
  filters:{

  },
  watch:{

  },
  elementDirectives:{
    'row-directive':{
    // deep: true,
    // acceptStatement: true,
    // acceptStatement: true,
      bind: function () {

      }
    }
  }
}


var parseExpr = function(tStr,dataObj,regexp){
  tStr = typeof(tStr) == "object" ? tStr.join('') : tStr;

  return tStr.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
      return (dataObj[name] === undefined) ? ((typeof (dataObj ) == "string") ? dataObj : 0 ): dataObj[name] || 0;
  });
}

var createText = function(opts,callback){

  var input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.value = opts.value

  input.onblur = function(){ this.style.background = "none"; callback(this.value) }
  input.onkeyup = function(){
    this.style.background = "#DBFDE0"
    if(!opts.notvalid && isNaN(this.value)){
      this.style.background = "#FFDBD9"
      this.value = ''
    }
  }

  // input.focus()
  return input
}


var createSelect = function(opts,callback){

  var editor = opts.editor
  var select = document.createElement('select')


  editor.data.forEach(function(val, index){
    select.add(new Option(val,val,false,val == opts.value))
  })
  select.onblur = function(){ callback(this.value) }

  return select
}

var createElement = function(options,callback) {

  let element
  switch(options.editor.type || 'input')
  {
    case 'input':
      element = createText(options,callback)
      break;
    case 'select':
      element = createSelect(options,callback)
      break;
  }
  return element
}

/**
* 动态生成表格列
*/
var initColumns = function(__columns){

  var _columns = JSON.parse(JSON.stringify(__columns))
  var theadEl = document.querySelectorAll('thead')[0]

  var columns = [],
      header = {0:""};

  function getAttribute(shw){

      let _class = ""
      if(typeof(shw) == "string"){
          return  "<th>"+shw+"</th>";
      }

      if("hidden" in _column) _class += " hidden"

      var header_th = "<th class='" + _class + "' ";
      if("rowspan" in shw) header_th += ' rowspan='+ shw.rowspan;
      if("colspan" in shw) header_th += ' colspan='+ shw.colspan;

      return header_th += ">" + shw.text + "</th>";
  }

  for(var i= 0;i<_columns.length;i++){
      var _column = _columns[i]

      // 组织表头展示
      var shw = _column.shw;
      if(shw.constructor == Object || shw.constructor == String){
          header[0] += getAttribute(shw);
      }
      if(shw.constructor == Array){
          for(var r=0;r<shw.length;r++){
              var _shw = shw[r];

              if(!header[r]) header[r] = "";
              if(_shw) header[r] += getAttribute(_shw);
          }
      }
  }

  let _header = ""
  for(var idx in header){
    _header += "<tr>" + header[idx] + "</tr>"
  }

  theadEl.innerHTML = _header

}

</script>
