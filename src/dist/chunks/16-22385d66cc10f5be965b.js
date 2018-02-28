exports.ids = [16];
exports.modules = Array(23).concat([
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(24)
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\SpreadSheet.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-069deb19/SpreadSheet.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SpreadSheet.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SpreadSheet.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\r\n\r\n\r\n.sheet-container{\r\n  /*width: 900px;\r\n  margin: 0 auto;*/\r\n\r\n  /*margin: 0 120px 0 120px;*/\r\n\r\n}\r\n.sheet-container .sheet{\r\n  /*width: 100%;*/\r\n}\r\n.sheet-container .sheet .sheet-readonly{\r\n  background: #F3F3F3;\r\n}\r\n\r\n.sheet-container .sheet .htCore tr td{\r\n  vertical-align:middle;\r\n}\r\n\r\n\r\n.sheet-container .sheet .htCore tr td.hidden{\r\n  display: none;\r\n}\r\n.sheet-container .sheet .htCore tr td.center{\r\n  text-align: center;\r\n}\r\n.sheet-container .sheet .htCore tr td.right{\r\n  text-align: right;\r\n}\r\n\r\n.pane{\r\n  /*overflow: hidden;*/\r\n}\r\n", "", {"version":3,"sources":["/./src/components/SpreadSheet.vue?765ea806"],"names":[],"mappings":";;;;AAIA;EACA;mBACA;;EAEA,4BAAA;;CAEA;AACA;EACA,gBAAA;CACA;AACA;EACA,oBAAA;CACA;;AAEA;EACA,sBAAA;CACA;;;AAGA;EACA,cAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;CACA;;AAEA;EACA,qBAAA;CACA","file":"SpreadSheet.vue","sourcesContent":["\r\n<style>\r\n\r\n\r\n.sheet-container{\r\n  /*width: 900px;\r\n  margin: 0 auto;*/\r\n\r\n  /*margin: 0 120px 0 120px;*/\r\n\r\n}\r\n.sheet-container .sheet{\r\n  /*width: 100%;*/\r\n}\r\n.sheet-container .sheet .sheet-readonly{\r\n  background: #F3F3F3;\r\n}\r\n\r\n.sheet-container .sheet .htCore tr td{\r\n  vertical-align:middle;\r\n}\r\n\r\n\r\n.sheet-container .sheet .htCore tr td.hidden{\r\n  display: none;\r\n}\r\n.sheet-container .sheet .htCore tr td.center{\r\n  text-align: center;\r\n}\r\n.sheet-container .sheet .htCore tr td.right{\r\n  text-align: right;\r\n}\r\n\r\n.pane{\r\n  /*overflow: hidden;*/\r\n}\r\n</style>\r\n<template>\r\n\r\n  <div class=\"sheet-container\">\r\n\r\n    <div class=\"sheet\" id=\"handsontable\"></div>\r\n\r\n  </div>\r\n\r\n</template>\r\n\r\n<script>\r\n\r\nconst SpreadSheet = require('script/SpreadSheet')\r\n\r\nexport default {\r\n  data () {\r\n    return {\r\n\r\n    }\r\n  },\r\n  props: {\r\n    // 列配置\r\n    columns:[],\r\n\r\n    // 表格右键菜单\r\n    contextMenu:{default: true},\r\n\r\n    // 是否求和\r\n    summary:{default: false},\r\n\r\n    nosetup:true\r\n  },\r\n  methods: {\r\n    readyHandsontable: function(columns){\r\n      this.SpreadSheet = new SpreadSheet('handsontable',{\r\n        columns:columns,\r\n        contextMenu:this.contextMenu,\r\n        summary:this.summary\r\n      },this);\r\n    }\r\n  },\r\n  ready: function (columns) {\r\n\r\n    this.readyHandsontable(this.columns || columns);\r\n\r\n  },\r\n  events: {\r\n  },\r\n  filters:{\r\n\r\n  },\r\n  watch:{\r\n    // 'data': function (val, oldVal) {\r\n    //   // this.SpreadSheet.loadData(val);\r\n    // }\r\n  }\r\n}\r\n\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var SpreadSheet = __webpack_require__(27);
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  props: {
	    columns: [],
	
	    contextMenu: { default: true },
	
	    summary: { default: false },
	
	    nosetup: true
	  },
	  methods: {
	    readyHandsontable: function readyHandsontable(columns) {
	      this.SpreadSheet = new SpreadSheet('handsontable', {
	        columns: columns,
	        contextMenu: this.contextMenu,
	        summary: this.summary
	      }, this);
	    }
	  },
	  ready: function ready(columns) {
	
	    this.readyHandsontable(this.columns || columns);
	  },
	  events: {},
	  filters: {},
	  watch: {}
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * 电子表格
	 */
	
	function SpreadSheet(id, option, vueCom) {
	
	  var params = this.parseColumns(option.columns);
	
	  this.headers = params.headers;
	
	  this.vueCom = vueCom;
	
	  var sheet = null,
	      thisz = this,
	      columns = params.columns,
	      henderSize = params.headers.length;
	
	  // if(option.summary) { henderSize += 1; }
	
	  var container = document.getElementById(id);
	  this.sheet = sheet = new Handsontable(container, {
	    data: params.headers,
	    //autoColumnSize:true,
	    //rowHeaders: true,
	    //colHeaders: true,
	    autoWrapRow:true,
	    autoWrapCol:true,
	    rowHeights: 30,
	    stretchH:'all',
	    // fixedRowsTop: 2,
	    // colWidths:['*',0.1],
	    columns: columns,
	    readOnlyCellClassName:'sheet-readonly',
	    //contextMenu: ['row_above', 'row_below', 'remove_row', '---------', 'undo', 'redo'],
	    afterBeginEditing: function(row, column){
	      vueCom.$dispatch('sheet.afterBeginEditing', row, column);
	    },
	    afterChange: function(changes, source){
	      if(changes) {
	
	        changes.forEach(function(change, idx){
	
	          var row = change[0];
	          var field = change[1];
	          var val = change[3];
	          var col = params.colIndex[field];
	
	          // 公式计算
	          var compute = params.compute;
	          if(compute && !compute[field]){
	            var reocrd = this.getSourceDataAtRow(row);
	            for (var key in compute) {
	              var c = compute[key];
	              this.setDataAtCell(row, c.tagCol, eval(thisz.parseExpr(c.compute,reocrd)) || '');
	            }
	          }
	          // 求和
	          if(option.summary){
	            var sumRow = henderSize + 1,colSum = 0,colArray  = this.getDataAtCol(col);
	            if(henderSize != row){
	              for (var i = sumRow; i < colArray.length; i++) {
	                var num = colArray[i];
	                if(num && !isNaN(num)){
	                  colSum += num;
	                }
	              }
	              this.setDataAtCell(henderSize, col, colSum);
	            }
	          }
	
	          vueCom.$dispatch('sheet.afterChange', row, col, field, val, source);
	
	        },this);
	
	      }
	    },
	    cells: function (row, col, prop) {
	
	      var colprop = columns[col];
	      // 表头只读
	      if(row < henderSize){
	        this.readOnly = true;
	        this.renderer = 'html';
	        if(thisz.sheet){
	          thisz.setCellClass(row, col,'center');
	        }
	      }
	
	    },
	    mergeCells: params.merge
	  });
	
	  if(option.contextMenu == true){
	    sheet.updateSettings({
	      contextMenu: {
	        /*
	        callback: function (key, options) {
	          if (key === 'before_ins') {
	            vueCom.data.splice(sheet.getSelected()[0] - 1, 0, [{}]);
	          } else if (key === 'after_ins') {
	            vueCom.data.splice(sheet.getSelected()[2], 0, [{}]);
	          } else if (key === 'aremove_row') {
	            vueCom.data.splice(sheet.getSelected()[0] - 1, 1);
	          }
	        },*/
	        items: {
	          'row_above': {
	            name:'前插入行',
	            disabled: function () {
	              return (sheet.getSelected() && sheet.getSelected()[0] === 0);
	            }
	          },
	          'row_below': {
	            name:'后插入行',
	            disabled: function () {
	              return (sheet.getSelected() && sheet.getSelected()[0] === 0);
	            }
	          },
	          'hsep1': '---------',
	          'remove_row': {
	            name:'删除行',
	            disabled: function () {
	              return  (sheet.getSelected() && sheet.getSelected()[0] === 0);
	            }
	          }
	        }
	      }
	    });
	  }
	
	
	};
	
	/**
	 * 解析列参数
	 * @param  {[type]} __columns [description]
	 * @return {[type]}           [description]
	 */
	SpreadSheet.prototype.parseColumns = function(__columns){
	
	  var thisz = this;
	  var _columns = JSON.parse(JSON.stringify(__columns));
	
	  var columns = [],
	      headers = [{}],
	      merge = [],
	      compute = {},
	      colIndex = {};
	
	  function getAttribute(shw, row, col){
	      if(typeof(shw) == 'string'){
	          shw = {text:shw};
	      };
	      merge.push({row: row, col: col, rowspan: shw.rowspan ? shw.rowspan : 1, colspan: shw.colspan ? shw.colspan : 1});
	      return shw;
	  }
	
	  function _addClass(column, className){
	    if(!column.className)  column.className = ''
	    column.className += ' ' + className
	  }
	
	  for(var i = 0; i < _columns.length; i++){
	      var _column = _columns[i],
	          tag = _column.tag;
	
	      colIndex[tag] = i;
	      var column = {}
	      if(tag) column.data = tag
	      if(_column.type) column.type = _column.type
	      if(_column.format) column.format = _column.format
	      if(_column.hidden) _addClass(column, 'hidden')
	      if(_column.align) _addClass(column, _column.align)
	      if(_column.readOnly) column.readOnly = _column.readOnly
	      if(_column.renderer) {
	        var rendererName = _column.renderer;
	        column.renderer = function(instance, td, row, col, prop, value, cellProperties){
	          thisz.vueCom.$dispatch(rendererName, instance, td, row, col, prop, value, cellProperties);
	          Handsontable.renderers.TextRenderer.apply(this, arguments);
	        };
	      }
	      if(_column.compute) {
	        compute[tag] = {compute:_column.compute,tagCol:i};
	      }
	
	      if(_column.editor) {
	        if(_column.editor.type == 'select'){
	          column.type = 'dropdown';
	          column.allowInvalid = true;
	          column.source = _column.editor.data;
	        }
	        if(_column.editor.type == 'date'){
	          column.type = 'date';
	          column.correctFormat = true;
	          column.dateFormat = 'YYYY-MM-DD';
	        }
	      }
	
	      var shw = _column.shw;
	      if(shw.constructor == Object || shw.constructor == String){
	          headers[0][tag] = getAttribute(shw,0,i).text;
	      }
	      if(shw.constructor == Array){
	          for(var r = 0; r < shw.length; r++){
	              var _shw = shw[r];
	
	              if(!headers[r]) headers[r] = {};
	              if(_shw) headers[r][tag] = getAttribute(_shw, r, i).text;
	          }
	      }
	
	      columns.push(column)
	  }
	
	  return {
	    columns: columns,
	    headers: headers,
	    merge: merge,
	    compute: compute,
	    colIndex: colIndex
	  };
	
	};
	/**
	 * 设置单元格 className
	 * @param {[type]} row       [description]
	 * @param {[type]} col       [description]
	 * @param {[type]} className [description]
	 */
	SpreadSheet.prototype.setCellClass = function(row, col, className){
	  var cell = this.sheet.getCell(row, col);
	  if(cell){
	    cell.classList.add(className);
	  }
	};
	
	/**
	 * 加载本地数据
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	SpreadSheet.prototype.loadData = function(data){
	  this.sheet.loadData( this.headers.concat(data) );
	};
	
	/**
	 * 获取数据
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	SpreadSheet.prototype.getData = function(){
	
	  var data = this.sheet.getSourceData();
	  if(!this.isInitData){
	    data.splice(0, this.headers.length);
	    this.isInitData = true;
	  }
	  return data;
	};
	
	/**
	 * 添加行
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	SpreadSheet.prototype.addRow = function(data){
	  this.sheet.alter('insert_row', this.sheet.getData().length);
	};
	
	/**
	 * 解析表达式
	 * @param  {[type]} tStr    表达式
	 * @param  {[type]} dataObj json数据
	 * @param  {[type]} regexp  [description]
	 * @return {[type]}         [description]
	 */
	SpreadSheet.prototype.parseExpr = function(tStr,dataObj,regexp){
	  tStr = typeof(tStr) == "object" ? tStr.join('') : tStr;
	
	  return tStr.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
	      return (dataObj[name] === undefined) ? ((typeof (dataObj ) == "string") ? dataObj : 0 ): dataObj[name] || 0;
	  });
	};
	
	
	
	module.exports = SpreadSheet;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"sheet-container\">\n\n  <div class=\"sheet\" id=\"handsontable\"></div>\n\n</div>\n\n";

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\fastreport\\Table2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-24802b42/Table2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table2.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table2.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Table2.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _datas = __webpack_require__(10);
	
	var SpreadSheet = __webpack_require__(23);
	var SelectRegion = __webpack_require__(34);
	
	var params = {
	  type: 'DEF'
	};
	
	var pageparams = {
	  UNIT: {
	    "石油": "万吨",
	    "天然气": "亿立方米",
	    "煤层气": "亿立方米",
	    "页岩气": "亿立方米",
	    "其他": ""
	  },
	  COM_FIELD: {
	    "中国石油": "F_ZGSY",
	    "中国石化": "F_ZGSH",
	    "中国海油": "F_ZGHY",
	    "延长石油": "F_YCSY",
	    "中联公司": "F_ZLGS",
	    "中国地调局": "F_ZGDDJ"
	  }
	};
	
	var columns = {
	  DEF: [{ tag: "F_TYPE", shw: "类型", siz: 100, editor: { type: 'select', data: _datas.CLLX }, align: 'center' }, { tag: "F_KZMC", shw: "矿种名称", siz: 100, editor: { type: 'select', data: _datas.YQLX }, align: 'center' }, { tag: "F_YQTFGS", shw: "油气田分公司<strong style='color: red'>*</strong>", siz: 100, editor: { type: 'select', data: _datas.FGS[DATACOM] }, align: 'center' }, { tag: "F_SHENG", shw: "省份<strong style='color: red'>*</strong>", siz: 100, onClick: 'onClick', align: 'center' }, { tag: "F_YQTMC", shw: "油气田名称<strong style='color: red'>*</strong>", siz: 100, notvalid: true, align: 'center', editor: { type: 'select', data: _datas.YQT_ALL } }, { tag: "F_YQTGM", shw: "油气田规模<strong style='color: red'>*</strong>", siz: 100, readOnly: true, align: 'center' }, { tag: "F_JLDW", shw: "计量单位<strong style='color: red'>*</strong>", siz: 100, readOnly: true, align: 'center' }, { tag: "F_TMDZCL", shw: "探明地质储量<strong style='color: red'>*</strong>", siz: 100, type: 'numeric', format: '0.00' }]
	};
	
	exports.default = {
	  components: {
	    SpreadSheet: SpreadSheet,
	    SelectRegion: SelectRegion
	  },
	  data: function data() {
	    return {
	      DATAYEAR: DATAYEAR,
	      DATACOM: DATACOM,
	      addshow: true,
	      data: [],
	      columns: function () {
	        return columns[params.type];
	      }()
	    };
	  },
	
	  methods: {
	    add: function add() {
	      this.SpreadSheet.addRow();
	    },
	    save: function save() {
	      this.data = this.SpreadSheet.getData();
	      commonVue.methods.save(this, params);
	    },
	
	    query: function query() {
	
	      var thisz = this;
	      commonVue.methods.query(this, params, function (rows, isinit) {
	        if (isinit) {
	          rows = [];
	        }
	        thisz.SpreadSheet.loadData(rows);
	      });
	    },
	
	    changeTab: function changeTab(event) {
	
	      if (event.toElement.classList[1]) return;
	      common.toggleClassByLevel(event.toElement, "active");
	      params.type = event.toElement.getAttribute("name");
	
	      this.columns = columns[params.type];
	      EditorTable.ready(this.columns);
	      this.query();
	
	      if (params.type == 'KZ') {
	        this.addshow = true;
	      } else {
	        this.addshow = false;
	      }
	    },
	
	    exportExcel: function exportExcel() {
	
	      var title = this.$route.name;
	      var columns = this.columns;
	
	      commonVue.methods.exportExcel(this, this.SpreadSheet.getData(), title, columns);
	    },
	
	    importExcel: function importExcel() {
	      commonVue.methods.importExcel(this, this.columns);
	    },
	
	    toggleInfo: function toggleInfo() {
	      common.queryElement('.g-modal').classList.toggle('visible');
	    }
	  },
	  events: {
	    'sheet.renderer': function sheetRenderer(instance, td, row, col, prop, value, cellProperties) {},
	    'sheet.afterBeginEditing': function sheetAfterBeginEditing(row, col) {
	      var _this = this;
	
	      if (col == 3) {
	        (function () {
	          var sheet = _this.SpreadSheet.sheet;
	          SelectRegion.methods.show(function (value, values) {
	            sheet.setDataAtCell(row, col, value);
	          });
	        })();
	      }
	    },
	    'sheet.afterChange': function sheetAfterChange(row, col, field, val, source) {
	
	      var sheet = this.SpreadSheet.sheet;
	
	      if (field == 'F_KZMC' || field == 'F_TMDZCL') {
	
	        var type = sheet.getDataAtCell(row, 1);
	        var num = sheet.getDataAtCell(row, 7);
	
	        if (num) {
	          var minVal = 500;
	          if (type != '石油') minVal = 25;
	
	          if (num < minVal) {
	            common.msg("请按要求填写\n石油底限为500万吨，天然气底限为25亿方！");
	            sheet.setDataAtCell(row, 7, '');
	            return;
	          }
	        }
	
	        sheet.setDataAtCell(row, 6, pageparams.UNIT[type]);
	        if (num) {
	          sheet.setDataAtCell(row, 5, _getScale(type, num));
	        }
	      }
	    }
	  },
	  ready: function ready() {
	    this.SpreadSheet = this.$children[0].SpreadSheet;
	
	    var tab = common.queryElement(".tab-group div[name='" + params.type + "']");
	    tab.classList.add('active');
	
	    this.query();
	  },
	  init: function init() {
	    params.tbname = this.$route.name;
	  }
	};
	
	
	var _getScale = function _getScale(type, number) {
	
	  var scale = '中型';
	  var min = 1000,
	      max = 10000;
	  if (type != '石油') min = 50, max = 300;
	
	  if (number >= max) scale = '大型';else if (number <= min) scale = '小型';
	
	  return scale;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\SelectRegion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f61c51a/SelectRegion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SelectRegion.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SelectRegion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\r\n\r\n.select-region {\r\n  overflow: hidden;\r\n  position:fixed;\r\n  left: 50%;\r\n  margin-left: -120px;\r\n  z-index: 19911125;\r\n  -webkit-transition: 0.3s;\r\n  transition:0.3s;\r\n  box-shadow: 0 3px 12px rgba(0,0,0,.175);\r\n  background: #fff;\r\n  display: none;\r\n}\r\n\r\n.select-region.active {\r\n  top: 101px!important;\r\n}\r\n\r\n.select-region-container ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.select-region-container ul li {\r\n  width: 240px;\r\n  padding: 10px;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.select-region-container ul li:nth-child(even) {\r\n  background: #eee;\r\n}\r\n\r\n.select-region-container ul li span {\r\n  font-size: 13px;\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin:5px 7px;\r\n  cursor: pointer;\r\n}\r\n\r\n.select-region-footer {\r\n  border-top: 1px solid #eee;\r\n  padding: 10px 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.select-region-footer input {\r\n  min-width: 40%;\r\n  width: 60px;\r\n}\r\n\r\n.select-region .label-success {\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.select-region .label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n\r\n.select-region .btn {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.select-region .btn.btn-link{\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n  border-color: transparent;\r\n  color: #428bca;\r\n  font-weight: 400;\r\n}\r\n\r\n.select-region .btn.btn-success {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n\r\n.container-footer{\r\n    border-top: 1px solid #eeeeee;\r\n    height: 35px;\r\n}\r\n.container-footer div.radio{\r\n  display: inline-block;\r\n  height: 18px;\r\n  color: red;\r\n  vertical-align: middle;\r\n  margin: 8px 3px;\r\n}\r\n", "", {"version":3,"sources":["/./src/components/SelectRegion.vue?8849538c"],"names":[],"mappings":";;;AAGA;EACA,iBAAA;EACA,eAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;EAAA,gBAAA;EACA,wCAAA;EACA,iBAAA;EACA,cAAA;CACA;;AAEA;EACA,qBAAA;CACA;;AAEA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;CACA;;AAEA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;CACA;;AAEA;EACA,iBAAA;CACA;;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;CACA;;AAEA;EACA,2BAAA;EACA,mBAAA;EACA,iBAAA;CACA;;AAEA;EACA,eAAA;EACA,YAAA;CACA;;AAEA;IACA,0BAAA;CACA;;AAEA;EACA,gBAAA;EACA,wBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,yBAAA;EACA,qBAAA;CACA;;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,8BAAA;EACA,iBAAA;EACA,0BAAA;EACA,eAAA;EACA,iBAAA;CACA;;AAEA;EACA,YAAA;EACA,0BAAA;EACA,sBAAA;CACA;;AAEA;IACA,8BAAA;IACA,aAAA;CACA;AACA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;CACA","file":"SelectRegion.vue","sourcesContent":["\r\n<style>\r\n\r\n.select-region {\r\n  overflow: hidden;\r\n  position:fixed;\r\n  left: 50%;\r\n  margin-left: -120px;\r\n  z-index: 19911125;\r\n  transition:0.3s;\r\n  box-shadow: 0 3px 12px rgba(0,0,0,.175);\r\n  background: #fff;\r\n  display: none;\r\n}\r\n\r\n.select-region.active {\r\n  top: 101px!important;\r\n}\r\n\r\n.select-region-container ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.select-region-container ul li {\r\n  width: 240px;\r\n  padding: 10px;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.select-region-container ul li:nth-child(even) {\r\n  background: #eee;\r\n}\r\n\r\n.select-region-container ul li span {\r\n  font-size: 13px;\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin:5px 7px;\r\n  cursor: pointer;\r\n}\r\n\r\n.select-region-footer {\r\n  border-top: 1px solid #eee;\r\n  padding: 10px 15px;\r\n  overflow: hidden;\r\n}\r\n\r\n.select-region-footer input {\r\n  min-width: 40%;\r\n  width: 60px;\r\n}\r\n\r\n.select-region .label-success {\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.select-region .label {\r\n  display: inline;\r\n  padding: .2em .6em .3em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: .25em;\r\n}\r\n\r\n.select-region .btn {\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.select-region .btn.btn-link{\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n  border-color: transparent;\r\n  color: #428bca;\r\n  font-weight: 400;\r\n}\r\n\r\n.select-region .btn.btn-success {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #4cae4c;\r\n}\r\n\r\n.container-footer{\r\n    border-top: 1px solid #eeeeee;\r\n    height: 35px;\r\n}\r\n.container-footer div.radio{\r\n  display: inline-block;\r\n  height: 18px;\r\n  color: red;\r\n  vertical-align: middle;\r\n  margin: 8px 3px;\r\n}\r\n</style>\r\n<template>\r\n\r\n<div class=\"select-region form-inline\" style=\"top: -356px; display: block;\">\r\n    <div class=\"select-region-container\">\r\n        <ul>\r\n            <li>\r\n                <!-- 省份 -->\r\n                <span v-for=\"item in provinces\" @click=\"change($event).p($index)\" v-text=\"item.p\"></span>\r\n            </li>\r\n\r\n            <li v-if=\"cities\">\r\n                <!-- 城市 -->\r\n                <span v-for=\"item in cities\" @click=\"change($event).c($index)\" v-text=\"item.n\"></span>\r\n            </li>\r\n            <!-- <li v-if=\"dists\"> -->\r\n                <!-- 县级 -->\r\n                <!-- <span v-for=\"item in dists\" @click=\"change($event).d($index)\" v-text=\"item.s\"></span>\r\n            </li> -->\r\n\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- <div class=\"container-footer\">\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"石油\" checked=\"\">石油</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"天然气\">天然气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"煤层气\">煤层气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"页岩气\">页岩气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"其他\">其他</label></div>\r\n    </div> -->\r\n\r\n    <div class=\"select-region-footer\">\r\n        <span class=\"pull-right\">\r\n          <button @click=\"clear\" class=\"btn btn-link\">清空</button>\r\n          <button @click=\"submit\" class=\"btn btn-success\" type=\"submit\">确定</button>\r\n        </span>\r\n\r\n        <strong class=\"text-danger\"> {{values.p + ' ' + values.c + ' ' + values.d}} </strong>\r\n        <!-- <input v-show=\"values.p\" v-model=\"values.x\" class=\"form-control\" type=\"text\" placeholder=\"具体地址\"> -->\r\n    </div>\r\n</div>\r\n\r\n</template>\r\n\r\n<script>\r\n\r\nexport default {\r\n  data () {\r\n    return {\r\n      provinces:require('../script/city.min.js'),\r\n      cities:null,\r\n      dists:null,\r\n      values:{\r\n        //p:'',c:'',d:'',x:'',n:'石油'\r\n        p:'',c:'',d:'',x:'',n:''\r\n      }\r\n    }\r\n  },\r\n  props: {\r\n\r\n  },\r\n  methods: {\r\n    submit: function(){\r\n      this.hide()\r\n\r\n      let value = \"\"\r\n      for(let k in this.values){\r\n        if(this.values[k]) {\r\n          if(value) value += \",\"\r\n          value += this.values[k]\r\n        }\r\n      }\r\n      common.callback(value,this.values)\r\n    },\r\n    getValues: function () {\r\n      return this.values\r\n    },\r\n    change:function(event){\r\n\r\n      common.toggleClassByLevel(event.toElement,\"label label-success\")\r\n      let thisz = this\r\n\r\n      return {\r\n        p:function(idx){\r\n          thisz.values.p = thisz.provinces[idx].p\r\n          thisz.values.c = thisz.values.d = ''\r\n          thisz.cities = thisz.provinces[idx].c\r\n          thisz.dists = null\r\n        },\r\n        c:function(idx){\r\n          thisz.values.c = thisz.cities[idx].n\r\n          thisz.values.d = ''\r\n          thisz.dists = thisz.cities[idx].a\r\n        },\r\n        d:function(idx){\r\n          thisz.values.d = thisz.dists[idx].s\r\n        }\r\n      }\r\n\r\n    },\r\n    clear: function(){\r\n      this.cities = this.dists = null\r\n      this.values.p = this.values.c = this.values.d = this.values.x = ''\r\n      let alabel = document.querySelectorAll('.select-region .label')\r\n      if(alabel.length > 0) alabel[0].classList.remove('label','label-success')\r\n    },\r\n    show: function(callback){\r\n      common.callback = callback\r\n      setTimeout(function(){\r\n        common.queryElement(\".select-region\").classList.add('active')\r\n      }, 100)\r\n    },\r\n    hide: function(){\r\n      let select = common.queryElement(\".select-region\")\r\n      if(select) select.classList.remove('active')\r\n    }\r\n  },\r\n  ready: function () {\r\n\r\n    let thisz = this\r\n    common.on('.select-region', 'click', function(){\r\n      return event.stopPropagation()\r\n    })\r\n\r\n    document.addEventListener('click', function (evelt) {\r\n      thisz.hide()\r\n    })\r\n\r\n  }\r\n}\r\n\r\n\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      provinces: __webpack_require__(38),
	      cities: null,
	      dists: null,
	      values: {
	        p: '', c: '', d: '', x: '', n: ''
	      }
	    };
	  },
	
	  props: {},
	  methods: {
	    submit: function submit() {
	      this.hide();
	
	      var value = "";
	      for (var k in this.values) {
	        if (this.values[k]) {
	          if (value) value += ",";
	          value += this.values[k];
	        }
	      }
	      common.callback(value, this.values);
	    },
	    getValues: function getValues() {
	      return this.values;
	    },
	    change: function change(event) {
	
	      common.toggleClassByLevel(event.toElement, "label label-success");
	      var thisz = this;
	
	      return {
	        p: function p(idx) {
	          thisz.values.p = thisz.provinces[idx].p;
	          thisz.values.c = thisz.values.d = '';
	          thisz.cities = thisz.provinces[idx].c;
	          thisz.dists = null;
	        },
	        c: function c(idx) {
	          thisz.values.c = thisz.cities[idx].n;
	          thisz.values.d = '';
	          thisz.dists = thisz.cities[idx].a;
	        },
	        d: function d(idx) {
	          thisz.values.d = thisz.dists[idx].s;
	        }
	      };
	    },
	    clear: function clear() {
	      this.cities = this.dists = null;
	      this.values.p = this.values.c = this.values.d = this.values.x = '';
	      var alabel = document.querySelectorAll('.select-region .label');
	      if (alabel.length > 0) alabel[0].classList.remove('label', 'label-success');
	    },
	    show: function show(callback) {
	      common.callback = callback;
	      setTimeout(function () {
	        common.queryElement(".select-region").classList.add('active');
	      }, 100);
	    },
	    hide: function hide() {
	      var select = common.queryElement(".select-region");
	      if (select) select.classList.remove('active');
	    }
	  },
	  ready: function ready() {
	
	    var thisz = this;
	    common.on('.select-region', 'click', function () {
	      return event.stopPropagation();
	    });
	
	    document.addEventListener('click', function (evelt) {
	      thisz.hide();
	    });
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = [{"p":"北京","c":[{"n":"东城区"},{"n":"西城区"},{"n":"崇文区"},{"n":"宣武区"},{"n":"朝阳区"},{"n":"丰台区"},{"n":"石景山区"},{"n":"海淀区"},{"n":"门头沟区"},{"n":"房山区"},{"n":"通州区"},{"n":"顺义区"},{"n":"昌平区"},{"n":"大兴区"},{"n":"平谷区"},{"n":"怀柔区"},{"n":"密云县"},{"n":"延庆县"}]},{"p":"天津","c":[{"n":"和平区"},{"n":"河东区"},{"n":"河西区"},{"n":"南开区"},{"n":"河北区"},{"n":"红挢区"},{"n":"滨海新区"},{"n":"东丽区"},{"n":"西青区"},{"n":"津南区"},{"n":"北辰区"},{"n":"宁河区"},{"n":"武清区"},{"n":"静海县"},{"n":"宝坻区"},{"n":"蓟县"}]},{"p":"河北","c":[{"n":"石家庄","a":[{"s":"长安区"},{"s":"桥东区"},{"s":"桥西区"},{"s":"新华区"},{"s":"井陉矿区"},{"s":"裕华区"},{"s":"井陉县"},{"s":"正定县"},{"s":"栾城县"},{"s":"行唐县"},{"s":"灵寿县"},{"s":"高邑县"},{"s":"深泽县"},{"s":"赞皇县"},{"s":"无极县"},{"s":"平山县"},{"s":"元氏县"},{"s":"赵县"},{"s":"辛集市"},{"s":"藁城市"},{"s":"晋州市"},{"s":"新乐市"},{"s":"鹿泉市"}]},{"n":"唐山","a":[{"s":"路南区"},{"s":"路北区"},{"s":"古冶区"},{"s":"开平区"},{"s":"丰南区"},{"s":"丰润区"},{"s":"滦县"},{"s":"滦南县"},{"s":"乐亭县"},{"s":"迁西县"},{"s":"玉田县"},{"s":"唐海县"},{"s":"遵化市"},{"s":"迁安市"}]},{"n":"秦皇岛","a":[{"s":"海港区"},{"s":"山海关区"},{"s":"北戴河区"},{"s":"青龙满族自治县"},{"s":"昌黎县"},{"s":"抚宁县"},{"s":"卢龙县"}]},{"n":"邯郸","a":[{"s":"邯山区"},{"s":"丛台区"},{"s":"复兴区"},{"s":"峰峰矿区"},{"s":"邯郸县"},{"s":"临漳县"},{"s":"成安县"},{"s":"大名县"},{"s":"涉县"},{"s":"磁县"},{"s":"肥乡县"},{"s":"永年县"},{"s":"邱县"},{"s":"鸡泽县"},{"s":"广平县"},{"s":"馆陶县"},{"s":"魏县"},{"s":"曲周县"},{"s":"武安市"}]},{"n":"邢台","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"邢台县"},{"s":"临城县"},{"s":"内丘县"},{"s":"柏乡县"},{"s":"隆尧县"},{"s":"任县"},{"s":"南和县"},{"s":"宁晋县"},{"s":"巨鹿县"},{"s":"新河县"},{"s":"广宗县"},{"s":"平乡县"},{"s":"威县"},{"s":"清河县"},{"s":"临西县"},{"s":"南宫市"},{"s":"沙河市"}]},{"n":"保定","a":[{"s":"新市区"},{"s":"北市区"},{"s":"南市区"},{"s":"满城县"},{"s":"清苑县"},{"s":"涞水县"},{"s":"阜平县"},{"s":"徐水县"},{"s":"定兴县"},{"s":"唐县"},{"s":"高阳县"},{"s":"容城县"},{"s":"涞源县"},{"s":"望都县"},{"s":"安新县"},{"s":"易县"},{"s":"曲阳县"},{"s":"蠡县"},{"s":"顺平县"},{"s":"博野县"},{"s":"雄县"},{"s":"涿州市"},{"s":"定州市"},{"s":"安国市"},{"s":"高碑店市"}]},{"n":"张家口","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"宣化区"},{"s":"下花园区"},{"s":"宣化县"},{"s":"张北县"},{"s":"康保县"},{"s":"沽源县"},{"s":"尚义县"},{"s":"蔚县"},{"s":"阳原县"},{"s":"怀安县"},{"s":"万全县"},{"s":"怀来县"},{"s":"涿鹿县"},{"s":"赤城县"},{"s":"崇礼县"}]},{"n":"承德","a":[{"s":"双桥区"},{"s":"双滦区"},{"s":"鹰手营子矿区"},{"s":"承德县"},{"s":"兴隆县"},{"s":"平泉县"},{"s":"滦平县"},{"s":"隆化县"},{"s":"丰宁满族自治县"},{"s":"宽城满族自治县"},{"s":"围场满族蒙古族自治县"}]},{"n":"沧州","a":[{"s":"新华区"},{"s":"运河区"},{"s":"沧县"},{"s":"青县"},{"s":"东光县"},{"s":"海兴县"},{"s":"盐山县"},{"s":"肃宁县"},{"s":"南皮县"},{"s":"吴桥县"},{"s":"献县"},{"s":"孟村回族自治县"},{"s":"泊头市"},{"s":"任丘市"},{"s":"黄骅市"},{"s":"河间市"}]},{"n":"廊坊","a":[{"s":"安次区"},{"s":"广阳区"},{"s":"固安县"},{"s":"永清县"},{"s":"香河县"},{"s":"大城县"},{"s":"文安县"},{"s":"大厂回族自治县"},{"s":"霸州市"},{"s":"三河市"}]},{"n":"衡水","a":[{"s":"桃城区"},{"s":"枣强县"},{"s":"武邑县"},{"s":"武强县"},{"s":"饶阳县"},{"s":"安平县"},{"s":"故城县"},{"s":"景县"},{"s":"阜城县"},{"s":"冀州市"},{"s":"深州市"}]}]},{"p":"山西","c":[{"n":"太原","a":[{"s":"小店区"},{"s":"迎泽区"},{"s":"杏花岭区"},{"s":"尖草坪区"},{"s":"万柏林区"},{"s":"晋源区"},{"s":"清徐县"},{"s":"阳曲县"},{"s":"娄烦县"},{"s":"古交市"}]},{"n":"大同","a":[{"s":"城区"},{"s":"矿区"},{"s":"南郊区"},{"s":"新荣区"},{"s":"阳高县"},{"s":"天镇县"},{"s":"广灵县"},{"s":"灵丘县"},{"s":"浑源县"},{"s":"左云县"},{"s":"大同县"}]},{"n":"阳泉","a":[{"s":"城区"},{"s":"矿区"},{"s":"郊区"},{"s":"平定县"},{"s":"盂县"}]},{"n":"长治","a":[{"s":"城区"},{"s":"郊区"},{"s":"长治县"},{"s":"襄垣县"},{"s":"屯留县"},{"s":"平顺县"},{"s":"黎城县"},{"s":"壶关县"},{"s":"长子县"},{"s":"武乡县"},{"s":"沁县"},{"s":"沁源县"},{"s":"潞城市"}]},{"n":"晋城","a":[{"s":"城区"},{"s":"沁水县"},{"s":"阳城县"},{"s":"陵川县"},{"s":"泽州县"},{"s":"高平市"}]},{"n":"朔州","a":[{"s":"朔城区"},{"s":"平鲁区"},{"s":"山阴县"},{"s":"应县"},{"s":"右玉县"},{"s":"怀仁县"}]},{"n":"晋中","a":[{"s":"榆次区"},{"s":"榆社县"},{"s":"左权县"},{"s":"和顺县"},{"s":"昔阳县"},{"s":"寿阳县"},{"s":"太谷县"},{"s":"祁县"},{"s":"平遥县"},{"s":"灵石县"},{"s":"介休市"}]},{"n":"运城","a":[{"s":"盐湖区"},{"s":"临猗县"},{"s":"万荣县"},{"s":"闻喜县"},{"s":"稷山县"},{"s":"新绛县"},{"s":"绛县"},{"s":"垣曲县"},{"s":"夏县"},{"s":"平陆县"},{"s":"芮城县"},{"s":"永济市"},{"s":"河津市"}]},{"n":"忻州","a":[{"s":"忻府区"},{"s":"定襄县"},{"s":"五台县"},{"s":"代县"},{"s":"繁峙县"},{"s":"宁武县"},{"s":"静乐县"},{"s":"神池县"},{"s":"五寨县"},{"s":"岢岚县"},{"s":"河曲县"},{"s":"保德县"},{"s":"偏关县"},{"s":"原平市"}]},{"n":"临汾","a":[{"s":"尧都区"},{"s":"曲沃县"},{"s":"翼城县"},{"s":"襄汾县"},{"s":"洪洞县"},{"s":"古县"},{"s":"安泽县"},{"s":"浮山县"},{"s":"吉县"},{"s":"乡宁县"},{"s":"大宁县"},{"s":"隰县"},{"s":"永和县"},{"s":"蒲县"},{"s":"汾西县"},{"s":"侯马市"},{"s":"霍州市"}]},{"n":"吕梁","a":[{"s":"离石区"},{"s":"文水县"},{"s":"交城县"},{"s":"兴县"},{"s":"临县"},{"s":"柳林县"},{"s":"石楼县"},{"s":"岚县"},{"s":"方山县"},{"s":"中阳县"},{"s":"交口县"},{"s":"孝义市"},{"s":"汾阳市"}]}]},{"p":"内蒙古","c":[{"n":"呼和浩特","a":[{"s":"新城区"},{"s":"回民区"},{"s":"玉泉区"},{"s":"玉泉区"},{"s":"赛罕区"},{"s":"土默特左旗"},{"s":"托克托县"},{"s":"和林格尔县"},{"s":"清水河县"},{"s":"武川县"}]},{"n":"包头","a":[{"s":"东河区"},{"s":"昆都仑区"},{"s":"青山区"},{"s":"石拐区"},{"s":"白云矿区"},{"s":"九原区"},{"s":"土默特右旗"},{"s":"固阳县"},{"s":"达尔罕茂明安联合旗"}]},{"n":"乌海","a":[{"s":"海勃湾区"},{"s":"海南区"},{"s":"乌达区"}]},{"n":"赤峰","a":[{"s":"红山区"},{"s":"元宝山区"},{"s":"松山区"},{"s":"阿鲁科尔沁旗"},{"s":"巴林左旗"},{"s":"巴林右旗"},{"s":"林西县"},{"s":"克什克腾旗"},{"s":"翁牛特旗"},{"s":"喀喇沁旗"},{"s":"宁城县"},{"s":"敖汉旗"}]},{"n":"通辽","a":[{"s":"科尔沁区"},{"s":"科尔沁左翼中旗"},{"s":"科尔沁左翼后旗"},{"s":"开鲁县"},{"s":"库伦旗"},{"s":"奈曼旗"},{"s":"扎鲁特旗"},{"s":"霍林郭勒市"}]},{"n":"鄂尔多斯","a":[{"s":"东胜区"},{"s":"达拉特旗"},{"s":"准格尔旗"},{"s":"鄂托克前旗"},{"s":"鄂托克旗"},{"s":"杭锦旗"},{"s":"乌审旗"},{"s":"伊金霍洛旗"}]},{"n":"呼伦贝尔","a":[{"s":"海拉尔区"},{"s":"阿荣旗"},{"s":"莫力达瓦达斡尔族自治旗"},{"s":"鄂伦春自治旗"},{"s":"鄂温克族自治旗"},{"s":"陈巴尔虎旗"},{"s":"新巴尔虎左旗"},{"s":"新巴尔虎右旗"},{"s":"满洲里市"},{"s":"牙克石市"},{"s":"扎兰屯市"},{"s":"额尔古纳市"},{"s":"根河市"}]},{"n":"巴彦淖尔","a":[{"s":"临河区"},{"s":"五原县"},{"s":"磴口县"},{"s":"乌拉特前旗"},{"s":"乌拉特中旗"},{"s":"乌拉特后旗"},{"s":"杭锦后旗"}]},{"n":"乌兰察布","a":[{"s":"集宁区"},{"s":"卓资县"},{"s":"化德县"},{"s":"商都县"},{"s":"兴和县"},{"s":"凉城县"},{"s":"察哈尔右翼前旗"},{"s":"察哈尔右翼中旗"},{"s":"察哈尔右翼后旗"},{"s":"四子王旗"},{"s":"丰镇市"}]},{"n":"兴安","a":[{"s":"乌兰浩特市"},{"s":"阿尔山市"},{"s":"科尔沁右翼前旗"},{"s":"科尔沁右翼中旗"},{"s":"扎赉特旗"},{"s":"突泉县"}]},{"n":"锡林郭勒","a":[{"s":"二连浩特市"},{"s":"锡林浩特市"},{"s":"阿巴嘎旗"},{"s":"苏尼特左旗"},{"s":"苏尼特右旗"},{"s":"东乌珠穆沁旗"},{"s":"西乌珠穆沁旗"},{"s":"太仆寺旗"},{"s":"镶黄旗"},{"s":"正镶白旗"},{"s":"正蓝旗"},{"s":"多伦县"}]},{"n":"阿拉善","a":[{"s":"阿拉善左旗"},{"s":"阿拉善右旗"},{"s":"额济纳旗"}]}]},{"p":"辽宁","c":[{"n":"沈阳","a":[{"s":"和平区"},{"s":"沈河区"},{"s":"大东区"},{"s":"皇姑区"},{"s":"铁西区"},{"s":"苏家屯区"},{"s":"东陵区"},{"s":"新城子区"},{"s":"于洪区"},{"s":"辽中县"},{"s":"康平县"},{"s":"法库县"},{"s":"新民市"}]},{"n":"大连","a":[{"s":"中山区"},{"s":"西岗区"},{"s":"沙河口区"},{"s":"甘井子区"},{"s":"旅顺口区"},{"s":"金州区"},{"s":"长海县"},{"s":"瓦房店市"},{"s":"普兰店市"},{"s":"庄河市"}]},{"n":"鞍山","a":[{"s":"铁东区"},{"s":"铁西区"},{"s":"立山区"},{"s":"千山区"},{"s":"台安县"},{"s":"210323"},{"s":"海城市"}]},{"n":"抚顺","a":[{"s":"新抚区"},{"s":"东洲区"},{"s":"望花区"},{"s":"顺城区"},{"s":"抚顺县"},{"s":"新宾满族自治县"},{"s":"清原满族自治县"}]},{"n":"本溪","a":[{"s":"平山区"},{"s":"溪湖区"},{"s":"明山区"},{"s":"南芬区"},{"s":"本溪满族自治县"},{"s":"桓仁满族自治县"}]},{"n":"丹东","a":[{"s":"元宝区"},{"s":"振兴区"},{"s":"振安区"},{"s":"宽甸满族自治县"},{"s":"东港市"},{"s":"凤城市"}]},{"n":"锦州","a":[{"s":"古塔区"},{"s":"凌河区"},{"s":"太和区"},{"s":"黑山县"},{"s":"义县"},{"s":"凌海市"},{"s":"北镇市"}]},{"n":"营口","a":[{"s":"站前区"},{"s":"西市区"},{"s":"鲅鱼圈区"},{"s":"老边区"},{"s":"盖州市"},{"s":"大石桥市"}]},{"n":"阜新","a":[{"s":"海州区"},{"s":"新邱区"},{"s":"太平区"},{"s":"清河门区"},{"s":"细河区"},{"s":"阜新蒙古族自治县"},{"s":"彰武县"}]},{"n":"辽阳","a":[{"s":"白塔区"},{"s":"文圣区"},{"s":"宏伟区"},{"s":"弓长岭区"},{"s":"太子河区"},{"s":"辽阳县"},{"s":"灯塔市"}]},{"n":"盘锦","a":[{"s":"双台子区"},{"s":"兴隆台区"},{"s":"大洼县"},{"s":"盘山县"}]},{"n":"铁岭","a":[{"s":"银州区"},{"s":"清河区"},{"s":"铁岭县"},{"s":"西丰县"},{"s":"昌图县"},{"s":"调兵山市"},{"s":"开原市"}]},{"n":"朝阳","a":[{"s":"双塔区"},{"s":"龙城区"},{"s":"朝阳县"},{"s":"建平县"},{"s":"喀喇沁左翼蒙古族自治县"},{"s":"北票市"},{"s":"凌源市"}]},{"n":"葫芦岛","a":[{"s":"连山区"},{"s":"龙港区"},{"s":"南票区"},{"s":"绥中县"},{"s":"建昌县"},{"s":"兴城市"}]}]},{"p":"吉林","c":[{"n":"长春","a":[{"s":"南关区"},{"s":"宽城区"},{"s":"朝阳区"},{"s":"二道区"},{"s":"绿园区"},{"s":"双阳区"},{"s":"农安县"},{"s":"九台市"},{"s":"榆树市"},{"s":"德惠市"}]},{"n":"吉林","a":[{"s":"昌邑区"},{"s":"龙潭区"},{"s":"船营区"},{"s":"丰满区"},{"s":"永吉县"},{"s":"蛟河市"},{"s":"桦甸市"},{"s":"舒兰市"},{"s":"磐石市"}]},{"n":"四平","a":[{"s":"铁西区"},{"s":"铁东区"},{"s":"梨树县"},{"s":"伊通满族自治县"},{"s":"公主岭市"},{"s":"双辽市"}]},{"n":"辽源","a":[{"s":"龙山区"},{"s":"西安区"},{"s":"东丰县"},{"s":"东辽县"}]},{"n":"通化","a":[{"s":"东昌区"},{"s":"二道江区"},{"s":"通化县"},{"s":"辉南县"},{"s":"柳河县"},{"s":"梅河口市"},{"s":"集安市"}]},{"n":"白山","a":[{"s":"八道江区"},{"s":"江源区"},{"s":"抚松县"},{"s":"靖宇县"},{"s":"长白朝鲜族自治县"},{"s":"临江市"}]},{"n":"松原","a":[{"s":"宁江区"},{"s":"前郭尔罗斯蒙古族自治县"},{"s":"长岭县"},{"s":"乾安县"},{"s":"扶余县"}]},{"n":"白城","a":[{"s":"洮北区"},{"s":"镇赉县"},{"s":"通榆县"},{"s":"洮南市"},{"s":"大安市"}]},{"n":"延边","a":[{"s":"延吉市"},{"s":"图们市"},{"s":"敦化市"},{"s":"珲春市"},{"s":"龙井市"},{"s":"和龙市"},{"s":"汪清县"},{"s":"安图县"}]}]},{"p":"黑龙江","c":[{"n":"哈尔滨","a":[{"s":"道里区"},{"s":"南岗区"},{"s":"道外区"},{"s":"平房区"},{"s":"松北区"},{"s":"香坊区"},{"s":"呼兰区"},{"s":"阿城区"},{"s":"依兰县"},{"s":"方正县"},{"s":"宾县"},{"s":"巴彦县"},{"s":"木兰县"},{"s":"通河县"},{"s":"延寿县"},{"s":"双城市"},{"s":"尚志市"},{"s":"五常市"}]},{"n":"齐齐哈尔","a":[{"s":"龙沙区"},{"s":"建华区"},{"s":"铁锋区"},{"s":"昂昂溪区"},{"s":"富拉尔基区"},{"s":"碾子山区"},{"s":"梅里斯达斡尔族区"},{"s":"龙江县"},{"s":"依安县"},{"s":"泰来县"},{"s":"甘南县"},{"s":"富裕县"},{"s":"克山县"},{"s":"克东县"},{"s":"拜泉县"},{"s":"讷河市"}]},{"n":"鸡西","a":[{"s":"鸡冠区"},{"s":"恒山区"},{"s":"滴道区"},{"s":"梨树区"},{"s":"城子河区"},{"s":"麻山区"},{"s":"鸡东县"},{"s":"虎林市"},{"s":"密山市"}]},{"n":"鹤岗","a":[{"s":"向阳区"},{"s":"工农区"},{"s":"南山区"},{"s":"兴安区"},{"s":"东山区"},{"s":"兴山区"},{"s":"萝北县"},{"s":"绥滨县"}]},{"n":"双鸭山","a":[{"s":"尖山区"},{"s":"岭东区"},{"s":"四方台区"},{"s":"宝山区"},{"s":"集贤县"},{"s":"友谊县"},{"s":"宝清县"},{"s":"饶河县"}]},{"n":"大庆","a":[{"s":"萨尔图区"},{"s":"龙凤区"},{"s":"让胡路区"},{"s":"红岗区"},{"s":"大同区"},{"s":"肇州县"},{"s":"肇源县"},{"s":"林甸县"},{"s":"杜尔伯特蒙古族自治县"}]},{"n":"伊春","a":[{"s":"伊春区"},{"s":"南岔区"},{"s":"友好区"},{"s":"西林区"},{"s":"翠峦区"},{"s":"新青区"},{"s":"美溪区"},{"s":"金山屯区"},{"s":"五营区"},{"s":"乌马河区"},{"s":"汤旺河区"},{"s":"带岭区"},{"s":"乌伊岭区"},{"s":"红星区"},{"s":"上甘岭区"},{"s":"嘉荫县"},{"s":"铁力市"}]},{"n":"佳木斯","a":[{"s":"向阳区"},{"s":"前进区"},{"s":"东风区"},{"s":"郊区"},{"s":"桦南县"},{"s":"桦川县"},{"s":"汤原县"},{"s":"抚远县"},{"s":"同江市"},{"s":"富锦市"}]},{"n":"七台河","a":[{"s":"新兴区"},{"s":"桃山区"},{"s":"茄子河区"},{"s":"勃利县"}]},{"n":"牡丹江","a":[{"s":"东安区"},{"s":"阳明区"},{"s":"爱民区"},{"s":"西安区"},{"s":"东宁县"},{"s":"林口县"},{"s":"绥芬河市"},{"s":"海林市"},{"s":"宁安市"},{"s":"穆棱市"}]},{"n":"黑河","a":[{"s":"爱辉区"},{"s":"嫩江县"},{"s":"逊克县"},{"s":"孙吴县"},{"s":"北安市"},{"s":"五大连池市"}]},{"n":"绥化","a":[{"s":"北林区"},{"s":"望奎县"},{"s":"兰西县"},{"s":"青冈县"},{"s":"庆安县"},{"s":"明水县"},{"s":"绥棱县"},{"s":"安达市"},{"s":"肇东市"},{"s":"海伦市"}]},{"n":"大兴安岭","a":[{"s":"加格达奇区"},{"s":"松岭区"},{"s":"新林区"},{"s":"呼中区"},{"s":"呼玛县"},{"s":"塔河县"},{"s":"漠河县"}]}]},{"p":"上海","c":[{"n":"黄浦区"},{"n":"卢湾区"},{"n":"徐汇区"},{"n":"长宁区"},{"n":"静安区"},{"n":"普陀区"},{"n":"闸北区"},{"n":"虹口区"},{"n":"杨浦区"},{"n":"闵行区"},{"n":"宝山区"},{"n":"嘉定区"},{"n":"浦东新区"},{"n":"金山区"},{"n":"松江区"},{"n":"奉贤区"},{"n":"青浦区"},{"n":"崇明县"}]},{"p":"江苏","c":[{"n":"南京","a":[{"s":"玄武区"},{"s":"白下区"},{"s":"秦淮区"},{"s":"建邺区"},{"s":"鼓楼区"},{"s":"下关区"},{"s":"浦口区"},{"s":"栖霞区"},{"s":"雨花台区"},{"s":"江宁区"},{"s":"六合区"},{"s":"溧水县"},{"s":"高淳县"}]},{"n":"无锡","a":[{"s":"崇安区"},{"s":"南长区"},{"s":"北塘区"},{"s":"锡山区"},{"s":"惠山区"},{"s":"滨湖区"},{"s":"江阴市"},{"s":"宜兴市"}]},{"n":"徐州","a":[{"s":"鼓楼区"},{"s":"云龙区"},{"s":"九里区"},{"s":"贾汪区"},{"s":"泉山区"},{"s":"丰县"},{"s":"沛县"},{"s":"铜山县"},{"s":"睢宁县"},{"s":"新沂市"},{"s":"邳州市"}]},{"n":"常州","a":[{"s":"天宁区"},{"s":"钟楼区"},{"s":"戚墅堰区"},{"s":"新北区"},{"s":"武进区"},{"s":"溧阳市"},{"s":"金坛市"}]},{"n":"苏州","a":[{"s":"沧浪区"},{"s":"平江区"},{"s":"金阊区"},{"s":"虎丘区"},{"s":"吴中区"},{"s":"相城区"},{"s":"常熟市"},{"s":"张家港市"},{"s":"昆山市"},{"s":"吴江市"},{"s":"太仓市"}]},{"n":"南通","a":[{"s":"崇川区"},{"s":"港闸区"},{"s":"海安县"},{"s":"如东县"},{"s":"启东市"},{"s":"如皋市"},{"s":"通州市"},{"s":"海门市"}]},{"n":"连云港","a":[{"s":"连云区"},{"s":"新浦区"},{"s":"海州区"},{"s":"赣榆县"},{"s":"东海县"},{"s":"灌云县"},{"s":"灌南县"}]},{"n":"淮安","a":[{"s":"清河区"},{"s":"楚州区"},{"s":"淮阴区"},{"s":"清浦区"},{"s":"涟水县"},{"s":"洪泽县"},{"s":"盱眙县"},{"s":"金湖县"}]},{"n":"盐城","a":[{"s":"亭湖区"},{"s":"盐都区"},{"s":"响水县"},{"s":"滨海县"},{"s":"阜宁县"},{"s":"射阳县"},{"s":"建湖县"},{"s":"东台市"},{"s":"大丰市"}]},{"n":"扬州","a":[{"s":"广陵区"},{"s":"邗江区"},{"s":"维扬区"},{"s":"宝应县"},{"s":"仪征市"},{"s":"高邮市"},{"s":"江都市"}]},{"n":"镇江","a":[{"s":"京口区"},{"s":"润州区"},{"s":"丹徒区"},{"s":"丹阳市"},{"s":"扬中市"},{"s":"句容市"}]},{"n":"泰州","a":[{"s":"海陵区"},{"s":"高港区"},{"s":"兴化市"},{"s":"靖江市"},{"s":"泰兴市"},{"s":"姜堰市"}]},{"n":"宿迁","a":[{"s":"宿城区"},{"s":"宿豫区"},{"s":"沭阳县"},{"s":"泗阳县"},{"s":"泗洪县"}]}]},{"p":"浙江","c":[{"n":"杭州","a":[{"s":"上城区"},{"s":"下城区"},{"s":"江干区"},{"s":"拱墅区"},{"s":"西湖区"},{"s":"滨江区"},{"s":"萧山区"},{"s":"余杭区"},{"s":"桐庐县"},{"s":"淳安县"},{"s":"建德市"},{"s":"富阳市"},{"s":"临安市"}]},{"n":"宁波","a":[{"s":"海曙区"},{"s":"江东区"},{"s":"江北区"},{"s":"北仑区"},{"s":"镇海区"},{"s":"鄞州区"},{"s":"象山县"},{"s":"宁海县"},{"s":"余姚市"},{"s":"慈溪市"},{"s":"奉化市"}]},{"n":"温州","a":[{"s":"鹿城区"},{"s":"龙湾区"},{"s":"瓯海区"},{"s":"洞头县"},{"s":"永嘉县"},{"s":"平阳县"},{"s":"苍南县"},{"s":"文成县"},{"s":"泰顺县"},{"s":"瑞安市"},{"s":"乐清市"}]},{"n":"嘉兴","a":[{"s":"南湖区"},{"s":"秀洲区"},{"s":"嘉善县"},{"s":"海盐县"},{"s":"海宁市"},{"s":"平湖市"},{"s":"桐乡市"}]},{"n":"湖州","a":[{"s":"吴兴区"},{"s":"南浔区"},{"s":"德清县"},{"s":"长兴县"},{"s":"安吉县"}]},{"n":"绍兴","a":[{"s":"越城区"},{"s":"绍兴县"},{"s":"新昌县"},{"s":"诸暨市"},{"s":"上虞市"},{"s":"嵊州市"}]},{"n":"金华","a":[{"s":"婺城区"},{"s":"金东区"},{"s":"武义县"},{"s":"浦江县"},{"s":"磐安县"},{"s":"兰溪市"},{"s":"义乌市"},{"s":"东阳市"},{"s":"永康市"}]},{"n":"衢州","a":[{"s":"柯城区"},{"s":"衢江区"},{"s":"常山县"},{"s":"开化县"},{"s":"龙游县"},{"s":"江山市"}]},{"n":"舟山","a":[{"s":"定海区"},{"s":"普陀区"},{"s":"岱山县"},{"s":"嵊泗县"}]},{"n":"台州","a":[{"s":"椒江区"},{"s":"黄岩区"},{"s":"路桥区"},{"s":"玉环县"},{"s":"三门县"},{"s":"天台县"},{"s":"仙居县"},{"s":"温岭市"},{"s":"临海市"}]},{"n":"丽水","a":[{"s":"莲都区"},{"s":"青田县"},{"s":"缙云县"},{"s":"遂昌县"},{"s":"松阳县"},{"s":"云和县"},{"s":"庆元县"},{"s":"景宁畲族自治县"},{"s":"龙泉市"}]}]},{"p":"安徽","c":[{"n":"合肥","a":[{"s":"瑶海区"},{"s":"庐阳区"},{"s":"蜀山区"},{"s":"包河区"},{"s":"长丰县"},{"s":"肥东县"},{"s":"肥西县"}]},{"n":"芜湖","a":[{"s":"镜湖区"},{"s":"弋江区"},{"s":"鸠江区"},{"s":"三山区"},{"s":"芜湖县"},{"s":"繁昌县"},{"s":"南陵县"}]},{"n":"蚌埠","a":[{"s":"龙子湖区"},{"s":"蚌山区"},{"s":"禹会区"},{"s":"淮上区"},{"s":"怀远县"},{"s":"五河县"},{"s":"固镇县"}]},{"n":"淮南","a":[{"s":"大通区"},{"s":"田家庵区"},{"s":"谢家集区"},{"s":"八公山区"},{"s":"潘集区"},{"s":"凤台县"}]},{"n":"马鞍山","a":[{"s":"金家庄区"},{"s":"花山区"},{"s":"雨山区"},{"s":"当涂县"}]},{"n":"淮北","a":[{"s":"杜集区"},{"s":"相山区"},{"s":"烈山区"},{"s":"濉溪县"}]},{"n":"铜陵","a":[{"s":"铜官山区"},{"s":"狮子山区"},{"s":"郊区"},{"s":"铜陵县"}]},{"n":"安庆","a":[{"s":"迎江区"},{"s":"大观区"},{"s":"宜秀区"},{"s":"怀宁县"},{"s":"枞阳县"},{"s":"潜山县"},{"s":"太湖县"},{"s":"宿松县"},{"s":"望江县"},{"s":"岳西县"},{"s":"桐城市"}]},{"n":"黄山","a":[{"s":"屯溪区"},{"s":"黄山区"},{"s":"徽州区"},{"s":"歙县"},{"s":"休宁县"},{"s":"黟县"},{"s":"祁门县"}]},{"n":"滁州","a":[{"s":"琅琊区"},{"s":"南谯区"},{"s":"来安县"},{"s":"全椒县"},{"s":"定远县"},{"s":"凤阳县"},{"s":"天长市"},{"s":"明光市"}]},{"n":"阜阳","a":[{"s":"颍州区"},{"s":"颍东区"},{"s":"颍泉区"},{"s":"临泉县"},{"s":"太和县"},{"s":"阜南县"},{"s":"颍上县"},{"s":"界首市"}]},{"n":"宿州","a":[{"s":"埇桥区"},{"s":"砀山县"},{"s":"萧县"},{"s":"灵璧县"},{"s":"泗县"}]},{"n":"巢湖","a":[{"s":"居巢区"},{"s":"庐江县"},{"s":"无为县"},{"s":"含山县"},{"s":"和县"}]},{"n":"六安","a":[{"s":"金安区"},{"s":"裕安区"},{"s":"寿县"},{"s":"霍邱县"},{"s":"舒城县"},{"s":"金寨县"},{"s":"霍山县"}]},{"n":"亳州","a":[{"s":"谯城区"},{"s":"涡阳县"},{"s":"蒙城县"},{"s":"利辛县"}]},{"n":"池州","a":[{"s":"贵池区"},{"s":"东至县"},{"s":"石台县"},{"s":"青阳县"}]},{"n":"宣城","a":[{"s":"宣州区"},{"s":"郎溪县"},{"s":"广德县"},{"s":"泾县"},{"s":"绩溪县"},{"s":"旌德县"},{"s":"宁国市"}]}]},{"p":"福建","c":[{"n":"福州","a":[{"s":"鼓楼区"},{"s":"台江区"},{"s":"仓山区"},{"s":"马尾区"},{"s":"晋安区"},{"s":"闽侯县"},{"s":"连江县"},{"s":"罗源县"},{"s":"闽清县"},{"s":"永泰县"},{"s":"平潭县"},{"s":"福清市"},{"s":"长乐市"}]},{"n":"厦门","a":[{"s":"思明区"},{"s":"海沧区"},{"s":"湖里区"},{"s":"集美区"},{"s":"同安区"},{"s":"翔安区"}]},{"n":"莆田","a":[{"s":"城厢区"},{"s":"涵江区"},{"s":"荔城区"},{"s":"秀屿区"},{"s":"仙游县"}]},{"n":"三明","a":[{"s":"梅列区"},{"s":"三元区"},{"s":"明溪县"},{"s":"清流县"},{"s":"宁化县"},{"s":"大田县"},{"s":"尤溪县"},{"s":"沙县"},{"s":"将乐县"},{"s":"泰宁县"},{"s":"建宁县"},{"s":"永安市"}]},{"n":"泉州","a":[{"s":"鲤城区"},{"s":"丰泽区"},{"s":"洛江区"},{"s":"泉港区"},{"s":"惠安县"},{"s":"安溪县"},{"s":"永春县"},{"s":"德化县"},{"s":"金门县"},{"s":"石狮市"},{"s":"晋江市"},{"s":"南安市"}]},{"n":"漳州","a":[{"s":"芗城区"},{"s":"龙文区"},{"s":"云霄县"},{"s":"漳浦县"},{"s":"诏安县"},{"s":"长泰县"},{"s":"东山县"},{"s":"南靖县"},{"s":"平和县"},{"s":"华安县"},{"s":"龙海市"}]},{"n":"南平","a":[{"s":"延平区"},{"s":"顺昌县"},{"s":"浦城县"},{"s":"光泽县"},{"s":"松溪县"},{"s":"政和县"},{"s":"邵武市"},{"s":"武夷山市"},{"s":"建瓯市"},{"s":"建阳市"}]},{"n":"龙岩","a":[{"s":"新罗区"},{"s":"长汀县"},{"s":"永定县"},{"s":"上杭县"},{"s":"武平县"},{"s":"连城县"},{"s":"漳平市"}]},{"n":"宁德","a":[{"s":"蕉城区"},{"s":"霞浦县"},{"s":"古田县"},{"s":"屏南县"},{"s":"寿宁县"},{"s":"周宁县"},{"s":"柘荣县"},{"s":"福安市"},{"s":"福鼎市"}]}]},{"p":"江西","c":[{"n":"南昌","a":[{"s":"东湖区"},{"s":"西湖区"},{"s":"青云谱区"},{"s":"湾里区"},{"s":"青山湖区"},{"s":"南昌县"},{"s":"新建县"},{"s":"安义县"},{"s":"进贤县"}]},{"n":"景德镇","a":[{"s":"昌江区"},{"s":"珠山区"},{"s":"浮梁县"},{"s":"乐平市"}]},{"n":"萍乡","a":[{"s":"安源区"},{"s":"湘东区"},{"s":"莲花县"},{"s":"上栗县"},{"s":"芦溪县"}]},{"n":"九江","a":[{"s":"庐山区"},{"s":"浔阳区"},{"s":"九江县"},{"s":"武宁县"},{"s":"修水县"},{"s":"永修县"},{"s":"德安县"},{"s":"星子县"},{"s":"都昌县"},{"s":"湖口县"},{"s":"彭泽县"},{"s":"瑞昌市"}]},{"n":"新余","a":[{"s":"渝水区"},{"s":"分宜县"}]},{"n":"鹰潭","a":[{"s":"月湖区"},{"s":"余江县"},{"s":"贵溪市"}]},{"n":"赣州","a":[{"s":"章贡区"},{"s":"赣县"},{"s":"信丰县"},{"s":"大余县"},{"s":"上犹县"},{"s":"崇义县"},{"s":"安远县"},{"s":"龙南县"},{"s":"定南县"},{"s":"全南县"},{"s":"宁都县"},{"s":"于都县"},{"s":"兴国县"},{"s":"会昌县"},{"s":"寻乌县"},{"s":"石城县"},{"s":"瑞金市"},{"s":"南康市"}]},{"n":"吉安","a":[{"s":"吉州区"},{"s":"青原区"},{"s":"吉安县"},{"s":"吉水县"},{"s":"峡江县"},{"s":"新干县"},{"s":"永丰县"},{"s":"泰和县"},{"s":"遂川县"},{"s":"万安县"},{"s":"安福县"},{"s":"永新县"},{"s":"井冈山市"}]},{"n":"宜春","a":[{"s":"袁州区"},{"s":"奉新县"},{"s":"万载县"},{"s":"上高县"},{"s":"宜丰县"},{"s":"靖安县"},{"s":"铜鼓县"},{"s":"丰城市"},{"s":"樟树市"},{"s":"高安市"}]},{"n":"抚州","a":[{"s":"临川区"},{"s":"南城县"},{"s":"黎川县"},{"s":"南丰县"},{"s":"崇仁县"},{"s":"乐安县"},{"s":"宜黄县"},{"s":"金溪县"},{"s":"资溪县"},{"s":"东乡县"},{"s":"广昌县"}]},{"n":"上饶","a":[{"s":"信州区"},{"s":"上饶县"},{"s":"广丰县"},{"s":"玉山县"},{"s":"铅山县"},{"s":"横峰县"},{"s":"弋阳县"},{"s":"余干县"},{"s":"鄱阳县"},{"s":"万年县"},{"s":"婺源县"},{"s":"德兴市"}]}]},{"p":"山东","c":[{"n":"济南","a":[{"s":"历下区"},{"s":"市中区"},{"s":"槐荫区"},{"s":"天桥区"},{"s":"历城区"},{"s":"长清区"},{"s":"平阴县"},{"s":"济阳县"},{"s":"商河县"},{"s":"章丘市"}]},{"n":"青岛","a":[{"s":"市南区"},{"s":"市北区"},{"s":"四方区"},{"s":"黄岛区"},{"s":"崂山区"},{"s":"李沧区"},{"s":"城阳区"},{"s":"胶州市"},{"s":"即墨市"},{"s":"平度市"},{"s":"胶南市"},{"s":"莱西市"}]},{"n":"淄博","a":[{"s":"淄川区"},{"s":"张店区"},{"s":"博山区"},{"s":"临淄区"},{"s":"周村区"},{"s":"桓台县"},{"s":"高青县"},{"s":"沂源县"}]},{"n":"枣庄","a":[{"s":"市中区"},{"s":"薛城区"},{"s":"峄城区"},{"s":"台儿庄区"},{"s":"山亭区"},{"s":"滕州市"}]},{"n":"东营","a":[{"s":"东营区"},{"s":"河口区"},{"s":"垦利县"},{"s":"利津县"},{"s":"广饶县"}]},{"n":"烟台","a":[{"s":"芝罘区"},{"s":"福山区"},{"s":"牟平区"},{"s":"莱山区"},{"s":"长岛县"},{"s":"龙口市"},{"s":"莱阳市"},{"s":"莱州市"},{"s":"蓬莱市"},{"s":"招远市"},{"s":"栖霞市"},{"s":"海阳市"}]},{"n":"潍坊","a":[{"s":"潍城区"},{"s":"寒亭区"},{"s":"坊子区"},{"s":"奎文区"},{"s":"临朐县"},{"s":"昌乐县"},{"s":"青州市"},{"s":"诸城市"},{"s":"寿光市"},{"s":"安丘市"},{"s":"高密市"},{"s":"昌邑市"}]},{"n":"济宁","a":[{"s":"市中区"},{"s":"任城区"},{"s":"微山县"},{"s":"鱼台县"},{"s":"金乡县"},{"s":"嘉祥县"},{"s":"汶上县"},{"s":"泗水县"},{"s":"梁山县"},{"s":"曲阜市"},{"s":"兖州市"},{"s":"邹城市"}]},{"n":"泰安","a":[{"s":"泰山区"},{"s":"岱岳区"},{"s":"宁阳县"},{"s":"东平县"},{"s":"新泰市"},{"s":"肥城市"}]},{"n":"威海","a":[{"s":"环翠区"},{"s":"文登市"},{"s":"荣成市"},{"s":"乳山市"}]},{"n":"日照","a":[{"s":"东港区"},{"s":"岚山区"},{"s":"五莲县"},{"s":"莒县"}]},{"n":"莱芜","a":[{"s":"莱城区"},{"s":"钢城区"}]},{"n":"临沂","a":[{"s":"兰山区"},{"s":"罗庄区"},{"s":"河东区"},{"s":"沂南县"},{"s":"郯城县"},{"s":"沂水县"},{"s":"苍山县"},{"s":"费县"},{"s":"平邑县"},{"s":"莒南县"},{"s":"蒙阴县"},{"s":"临沭县"}]},{"n":"德州","a":[{"s":"德城区"},{"s":"陵县"},{"s":"宁津县"},{"s":"庆云县"},{"s":"临邑县"},{"s":"齐河县"},{"s":"平原县"},{"s":"夏津县"},{"s":"武城县"},{"s":"乐陵市"},{"s":"禹城市"}]},{"n":"聊城","a":[{"s":"东昌府区"},{"s":"阳谷县"},{"s":"莘县"},{"s":"茌平县"},{"s":"东阿县"},{"s":"冠县"},{"s":"高唐县"},{"s":"临清市"}]},{"n":"滨州","a":[{"s":"滨城区"},{"s":"惠民县"},{"s":"阳信县"},{"s":"无棣县"},{"s":"沾化县"},{"s":"博兴县"},{"s":"邹平县"}]},{"n":"菏泽","a":[{"s":"牡丹区"},{"s":"曹县"},{"s":"单县"},{"s":"成武县"},{"s":"巨野县"},{"s":"郓城县"},{"s":"鄄城县"},{"s":"定陶县"},{"s":"东明县"}]}]},{"p":"河南","c":[{"n":"郑州","a":[{"s":"中原区"},{"s":"二七区"},{"s":"管城回族区"},{"s":"金水区"},{"s":"上街区"},{"s":"惠济区"},{"s":"中牟县"},{"s":"巩义市"},{"s":"荥阳市"},{"s":"新密市"},{"s":"新郑市"},{"s":"登封市"}]},{"n":"开封","a":[{"s":"龙亭区"},{"s":"顺河回族区"},{"s":"鼓楼区"},{"s":"禹王台区"},{"s":"金明区"},{"s":"杞县"},{"s":"通许县"},{"s":"尉氏县"},{"s":"开封县"},{"s":"兰考县"}]},{"n":"洛阳","a":[{"s":"老城区"},{"s":"西工区"},{"s":"廛河回族区"},{"s":"涧西区"},{"s":"吉利区"},{"s":"洛龙区"},{"s":"孟津县"},{"s":"新安县"},{"s":"栾川县"},{"s":"嵩县"},{"s":"汝阳县"},{"s":"宜阳县"},{"s":"洛宁县"},{"s":"伊川县"},{"s":"偃师市"}]},{"n":"平顶山","a":[{"s":"新华区"},{"s":"卫东区"},{"s":"石龙区"},{"s":"湛河区"},{"s":"宝丰县"},{"s":"叶县"},{"s":"鲁山县"},{"s":"郏县"},{"s":"舞钢市"},{"s":"汝州市"}]},{"n":"安阳","a":[{"s":"文峰区"},{"s":"北关区"},{"s":"殷都区"},{"s":"龙安区"},{"s":"安阳县"},{"s":"汤阴县"},{"s":"滑县"},{"s":"内黄县"},{"s":"林州市"}]},{"n":"鹤壁","a":[{"s":"鹤山区"},{"s":"山城区"},{"s":"淇滨区"},{"s":"浚县"},{"s":"淇县"}]},{"n":"新乡","a":[{"s":"红旗区"},{"s":"卫滨区"},{"s":"凤泉区"},{"s":"牧野区"},{"s":"新乡县"},{"s":"获嘉县"},{"s":"原阳县"},{"s":"延津县"},{"s":"封丘县"},{"s":"长垣县"},{"s":"卫辉市"},{"s":"辉县市"}]},{"n":"焦作","a":[{"s":"解放区"},{"s":"中站区"},{"s":"马村区"},{"s":"山阳区"},{"s":"修武县"},{"s":"博爱县"},{"s":"武陟县"},{"s":"温县"},{"s":"沁阳市"},{"s":"孟州市"}]},{"n":"濮阳","a":[{"s":"华龙区"},{"s":"清丰县"},{"s":"南乐县"},{"s":"范县"},{"s":"台前县"},{"s":"濮阳县"}]},{"n":"许昌","a":[{"s":"魏都区"},{"s":"许昌县"},{"s":"鄢陵县"},{"s":"襄城县"},{"s":"禹州市"},{"s":"长葛市"}]},{"n":"漯河","a":[{"s":"源汇区"},{"s":"郾城区"},{"s":"召陵区"},{"s":"舞阳县"},{"s":"临颍县"}]},{"n":"三门峡","a":[{"s":"湖滨区"},{"s":"渑池县"},{"s":"陕县"},{"s":"卢氏县"},{"s":"义马市"},{"s":"灵宝市"}]},{"n":"南阳","a":[{"s":"宛城区"},{"s":"卧龙区"},{"s":"南召县"},{"s":"方城县"},{"s":"西峡县"},{"s":"镇平县"},{"s":"内乡县"},{"s":"淅川县"},{"s":"社旗县"},{"s":"唐河县"},{"s":"新野县"},{"s":"桐柏县"},{"s":"邓州市"}]},{"n":"商丘","a":[{"s":"梁园区"},{"s":"睢阳区"},{"s":"民权县"},{"s":"睢县"},{"s":"宁陵县"},{"s":"柘城县"},{"s":"虞城县"},{"s":"夏邑县"},{"s":"永城市"}]},{"n":"信阳","a":[{"s":"浉河区"},{"s":"平桥区"},{"s":"罗山县"},{"s":"光山县"},{"s":"新县"},{"s":"商城县"},{"s":"固始县"},{"s":"潢川县"},{"s":"淮滨县"},{"s":"息县"}]},{"n":"周口","a":[{"s":"川汇区"},{"s":"扶沟县"},{"s":"西华县"},{"s":"商水县"},{"s":"沈丘县"},{"s":"郸城县"},{"s":"淮阳县"},{"s":"太康县"},{"s":"鹿邑县"},{"s":"项城市"}]},{"n":"驻马店","a":[{"s":"驿城区"},{"s":"西平县"},{"s":"上蔡县"},{"s":"平舆县"},{"s":"正阳县"},{"s":"确山县"},{"s":"泌阳县"},{"s":"汝南县"},{"s":"遂平县"},{"s":"新蔡县"}]},{"n":"济源","a":[{"s":"济源"}]}]},{"p":"湖北","c":[{"n":"武汉","a":[{"s":"江岸区"},{"s":"江汉区"},{"s":"硚口区"},{"s":"汉阳区"},{"s":"武昌区"},{"s":"青山区"},{"s":"洪山区"},{"s":"东西湖区"},{"s":"汉南区"},{"s":"蔡甸区"},{"s":"江夏区"},{"s":"黄陂区"},{"s":"新洲区"}]},{"n":"黄石","a":[{"s":"黄石港区"},{"s":"西塞山区"},{"s":"下陆区"},{"s":"铁山区"},{"s":"阳新县"},{"s":"大冶市"}]},{"n":"十堰","a":[{"s":"茅箭区"},{"s":"张湾区"},{"s":"郧县"},{"s":"郧西县"},{"s":"竹山县"},{"s":"竹溪县"},{"s":"房县"},{"s":"丹江口市"}]},{"n":"宜昌","a":[{"s":"西陵区"},{"s":"伍家岗区"},{"s":"点军区"},{"s":"猇亭区"},{"s":"夷陵区"},{"s":"远安县"},{"s":"兴山县"},{"s":"秭归县"},{"s":"长阳土家族自治县"},{"s":"五峰土家族自治县"},{"s":"宜都市"},{"s":"当阳市"},{"s":"枝江市"}]},{"n":"襄樊","a":[{"s":"襄城区"},{"s":"樊城区"},{"s":"襄阳区"},{"s":"南漳县"},{"s":"谷城县"},{"s":"保康县"},{"s":"老河口市"},{"s":"枣阳市"},{"s":"宜城市"}]},{"n":"鄂州","a":[{"s":"梁子湖区"},{"s":"华容区"},{"s":"鄂城区"}]},{"n":"荆门","a":[{"s":"东宝区"},{"s":"掇刀区"},{"s":"京山县"},{"s":"沙洋县"},{"s":"钟祥市"}]},{"n":"孝感","a":[{"s":"孝南区"},{"s":"孝昌县"},{"s":"大悟县"},{"s":"云梦县"},{"s":"应城市"},{"s":"安陆市"},{"s":"汉川市"}]},{"n":"荆州","a":[{"s":"沙市区"},{"s":"荆州区"},{"s":"公安县"},{"s":"监利县"},{"s":"江陵县"},{"s":"石首市"},{"s":"洪湖市"},{"s":"松滋市"}]},{"n":"黄冈","a":[{"s":"黄州区"},{"s":"团风县"},{"s":"红安县"},{"s":"罗田县"},{"s":"英山县"},{"s":"浠水县"},{"s":"蕲春县"},{"s":"黄梅县"},{"s":"麻城市"},{"s":"武穴市"}]},{"n":"咸宁","a":[{"s":"咸安区"},{"s":"嘉鱼县"},{"s":"通城县"},{"s":"崇阳县"},{"s":"通山县"},{"s":"赤壁市"}]},{"n":"随州","a":[{"s":"曾都区"},{"s":"随县"},{"s":"广水市"}]},{"n":"恩施","a":[{"s":"恩施市"},{"s":"利川市"},{"s":"建始县"},{"s":"巴东县"},{"s":"宣恩县"},{"s":"咸丰县"},{"s":"来凤县"},{"s":"鹤峰县"}]},{"n":"仙桃","a":[{"s":"仙桃"}]},{"n":"潜江","a":[{"s":"潜江"}]},{"n":"天门","a":[{"s":"天门"}]},{"n":"神农架","a":[{"s":"神农架"}]}]},{"p":"湖南","c":[{"n":"长沙","a":[{"s":"芙蓉区"},{"s":"天心区"},{"s":"岳麓区"},{"s":"开福区"},{"s":"雨花区"},{"s":"长沙县"},{"s":"望城县"},{"s":"宁乡县"},{"s":"浏阳市"}]},{"n":"株洲","a":[{"s":"荷塘区"},{"s":"芦淞区"},{"s":"石峰区"},{"s":"天元区"},{"s":"株洲县"},{"s":"攸县"},{"s":"茶陵县"},{"s":"炎陵县"},{"s":"醴陵市"}]},{"n":"湘潭","a":[{"s":"雨湖区"},{"s":"岳塘区"},{"s":"湘潭县"},{"s":"湘乡市"},{"s":"韶山市"}]},{"n":"衡阳","a":[{"s":"珠晖区"},{"s":"雁峰区"},{"s":"石鼓区"},{"s":"蒸湘区"},{"s":"南岳区"},{"s":"衡阳县"},{"s":"衡南县"},{"s":"衡山县"},{"s":"衡东县"},{"s":"祁东县"},{"s":"耒阳市"},{"s":"常宁市"}]},{"n":"邵阳","a":[{"s":"双清区"},{"s":"大祥区"},{"s":"北塔区"},{"s":"邵东县"},{"s":"新邵县"},{"s":"邵阳县"},{"s":"隆回县"},{"s":"洞口县"},{"s":"绥宁县"},{"s":"新宁县"},{"s":"城步苗族自治县"},{"s":"武冈市"}]},{"n":"岳阳","a":[{"s":"岳阳楼区"},{"s":"云溪区"},{"s":"君山区"},{"s":"岳阳县"},{"s":"华容县"},{"s":"湘阴县"},{"s":"平江县"},{"s":"汨罗市"},{"s":"临湘市"}]},{"n":"常德","a":[{"s":"武陵区"},{"s":"鼎城区"},{"s":"安乡县"},{"s":"汉寿县"},{"s":"澧县"},{"s":"临澧县"},{"s":"桃源县"},{"s":"石门县"},{"s":"津市市"}]},{"n":"张家界","a":[{"s":"永定区"},{"s":"武陵源区"},{"s":"慈利县"},{"s":"桑植县"}]},{"n":"益阳","a":[{"s":"资阳区"},{"s":"赫山区"},{"s":"南县"},{"s":"桃江县"},{"s":"安化县"},{"s":"沅江市"}]},{"n":"郴州","a":[{"s":"北湖区"},{"s":"苏仙区"},{"s":"桂阳县"},{"s":"宜章县"},{"s":"永兴县"},{"s":"嘉禾县"},{"s":"临武县"},{"s":"汝城县"},{"s":"桂东县"},{"s":"安仁县"},{"s":"资兴市"}]},{"n":"永州","a":[{"s":"零陵区"},{"s":"冷水滩区"},{"s":"祁阳县"},{"s":"东安县"},{"s":"双牌县"},{"s":"道县"},{"s":"江永县"},{"s":"宁远县"},{"s":"蓝山县"},{"s":"新田县"},{"s":"江华瑶族自治县"}]},{"n":"怀化","a":[{"s":"鹤城区"},{"s":"中方县"},{"s":"沅陵县"},{"s":"辰溪县"},{"s":"溆浦县"},{"s":"会同县"},{"s":"麻阳苗族自治县"},{"s":"新晃侗族自治县"},{"s":"芷江侗族自治县"},{"s":"靖州苗族侗族自治县"},{"s":"通道侗族自治县"},{"s":"洪江市"}]},{"n":"娄底","a":[{"s":"娄星区"},{"s":"双峰县"},{"s":"新化县"},{"s":"冷水江市"},{"s":"涟源市"}]},{"n":"湘西","a":[{"s":"吉首市"},{"s":"泸溪县"},{"s":"凤凰县"},{"s":"花垣县"},{"s":"保靖县"},{"s":"古丈县"},{"s":"永顺县"},{"s":"龙山县"}]}]},{"p":"广东","c":[{"n":"广州","a":[{"s":"荔湾区"},{"s":"越秀区"},{"s":"海珠区"},{"s":"天河区"},{"s":"白云区"},{"s":"黄埔区"},{"s":"番禺区"},{"s":"花都区"},{"s":"南沙区"},{"s":"萝岗区"},{"s":"增城市"},{"s":"从化市"}]},{"n":"韶关","a":[{"s":"武江区"},{"s":"浈江区"},{"s":"曲江区"},{"s":"始兴县"},{"s":"仁化县"},{"s":"翁源县"},{"s":"乳源瑶族自治县"},{"s":"新丰县"},{"s":"乐昌市"},{"s":"南雄市"}]},{"n":"深圳","a":[{"s":"罗湖区"},{"s":"福田区"},{"s":"南山区"},{"s":"宝安区"},{"s":"龙岗区"},{"s":"盐田区"}]},{"n":"珠海","a":[{"s":"香洲区"},{"s":"斗门区"},{"s":"金湾区"}]},{"n":"汕头","a":[{"s":"龙湖区"},{"s":"金平区"},{"s":"濠江区"},{"s":"潮阳区"},{"s":"潮南区"},{"s":"澄海区"},{"s":"南澳县"}]},{"n":"佛山","a":[{"s":"禅城区"},{"s":"南海区"},{"s":"顺德区"},{"s":"三水区"},{"s":"高明区"}]},{"n":"江门","a":[{"s":"蓬江区"},{"s":"江海区"},{"s":"新会区"},{"s":"台山市"},{"s":"开平市"},{"s":"鹤山市"},{"s":"恩平市"}]},{"n":"湛江","a":[{"s":"赤坎区"},{"s":"霞山区"},{"s":"坡头区"},{"s":"麻章区"},{"s":"遂溪县"},{"s":"徐闻县"},{"s":"廉江市"},{"s":"雷州市"},{"s":"吴川市"}]},{"n":"茂名","a":[{"s":"茂南区"},{"s":"茂港区"},{"s":"电白县"},{"s":"高州市"},{"s":"化州市"},{"s":"信宜市"}]},{"n":"肇庆","a":[{"s":"端州区"},{"s":"鼎湖区"},{"s":"广宁县"},{"s":"怀集县"},{"s":"封开县"},{"s":"德庆县"},{"s":"高要市"},{"s":"四会市"}]},{"n":"惠州","a":[{"s":"惠城区"},{"s":"惠阳区"},{"s":"博罗县"},{"s":"惠东县"},{"s":"龙门县"}]},{"n":"梅州","a":[{"s":"梅江区"},{"s":"梅县"},{"s":"大埔县"},{"s":"丰顺县"},{"s":"五华县"},{"s":"平远县"},{"s":"蕉岭县"},{"s":"兴宁市"}]},{"n":"汕尾","a":[{"s":"城区"},{"s":"海丰县"},{"s":"陆河县"},{"s":"陆丰市"}]},{"n":"河源","a":[{"s":"源城区"},{"s":"紫金县"},{"s":"龙川县"},{"s":"连平县"},{"s":"和平县"},{"s":"东源县"}]},{"n":"阳江","a":[{"s":"江城区"},{"s":"阳西县"},{"s":"阳东县"},{"s":"阳春市"}]},{"n":"清远","a":[{"s":"清城区"},{"s":"佛冈县"},{"s":"阳山县"},{"s":"连山壮族瑶族自治县"},{"s":"连南瑶族自治县"},{"s":"清新县"},{"s":"英德市"},{"s":"连州市"}]},{"n":"东莞","a":[{"s":"东莞市"}]},{"n":"中山","a":[{"s":"中山市"}]},{"n":"潮州","a":[{"s":"湘桥区"},{"s":"潮安县"},{"s":"饶平县"}]},{"n":"揭阳","a":[{"s":"榕城区"},{"s":"揭东县"},{"s":"揭西县"},{"s":"惠来县"},{"s":"普宁市"}]},{"n":"云浮","a":[{"s":"云城区"},{"s":"新兴县"},{"s":"郁南县"},{"s":"云安县"},{"s":"罗定市"}]}]},{"p":"广西","c":[{"n":"南宁","a":[{"s":"兴宁区"},{"s":"青秀区"},{"s":"江南区"},{"s":"西乡塘区"},{"s":"良庆区"},{"s":"邕宁区"},{"s":"武鸣县"},{"s":"隆安县"},{"s":"马山县"},{"s":"上林县"},{"s":"宾阳县"},{"s":"横县"}]},{"n":"柳州","a":[{"s":"城中区"},{"s":"鱼峰区"},{"s":"柳南区"},{"s":"柳北区"},{"s":"柳江县"},{"s":"柳城县"},{"s":"鹿寨县"},{"s":"融安县"},{"s":"融水苗族自治县"},{"s":"三江侗族自治县"}]},{"n":"桂林","a":[{"s":"秀峰区"},{"s":"叠彩区"},{"s":"象山区"},{"s":"七星区"},{"s":"雁山区"},{"s":"阳朔县"},{"s":"临桂县"},{"s":"灵川县"},{"s":"全州县"},{"s":"兴安县"},{"s":"永福县"},{"s":"灌阳县"},{"s":"龙胜各族自治县"},{"s":"资源县"},{"s":"平乐县"},{"s":"荔蒲县"},{"s":"恭城瑶族自治县"}]},{"n":"梧州","a":[{"s":"万秀区"},{"s":"蝶山区"},{"s":"长洲区"},{"s":"苍梧县"},{"s":"藤县"},{"s":"蒙山县"},{"s":"岑溪市"}]},{"n":"北海","a":[{"s":"海城区"},{"s":"银海区"},{"s":"铁山港区"},{"s":"合浦县"}]},{"n":"防城港","a":[{"s":"港口区"},{"s":"防城区"},{"s":"上思县"},{"s":"东兴市"}]},{"n":"钦州","a":[{"s":"钦南区"},{"s":"钦北区"},{"s":"灵山县"},{"s":"浦北县"}]},{"n":"贵港","a":[{"s":"港北区"},{"s":"港南区"},{"s":"覃塘区"},{"s":"平南县"},{"s":"桂平市"}]},{"n":"玉林","a":[{"s":"玉州区"},{"s":"容县"},{"s":"陆川县"},{"s":"博白县"},{"s":"兴业县"},{"s":"北流市"}]},{"n":"百色","a":[{"s":"右江区"},{"s":"田阳县"},{"s":"田东县"},{"s":"平果县"},{"s":"德保县"},{"s":"靖西县"},{"s":"那坡县"},{"s":"凌云县"},{"s":"乐业县"},{"s":"田林县"},{"s":"西林县"},{"s":"隆林各族自治县"}]},{"n":"贺州","a":[{"s":"八步区"},{"s":"昭平县"},{"s":"钟山县"},{"s":"富川瑶族自治县"}]},{"n":"河池","a":[{"s":"金城江区"},{"s":"南丹县"},{"s":"天峨县"},{"s":"凤山县"},{"s":"东兰县"},{"s":"罗城仫佬族自治县"},{"s":"环江毛南族自治县"},{"s":"巴马瑶族自治县"},{"s":"都安瑶族自治县"},{"s":"大化瑶族自治县"},{"s":"宜州市"}]},{"n":"来宾","a":[{"s":"兴宾区"},{"s":"忻城县"},{"s":"象州县"},{"s":"武宣县"},{"s":"金秀瑶族自治县"},{"s":"合山市"}]},{"n":"崇左","a":[{"s":"江洲区"},{"s":"扶绥县"},{"s":"宁明县"},{"s":"龙州县"},{"s":"大新县"},{"s":"天等县"},{"s":"凭祥市"}]}]},{"p":"海南","c":[{"n":"海口","a":[{"s":"秀英区"},{"s":"龙华区"},{"s":"琼山区"},{"s":"美兰区"}]},{"n":"三亚","a":[{"s":"三亚市"}]},{"n":"五指山","a":[{"s":"五指山"}]},{"n":"琼海","a":[{"s":"琼海"}]},{"n":"儋州","a":[{"s":"儋州"}]},{"n":"文昌","a":[{"s":"文昌"}]},{"n":"万宁","a":[{"s":"万宁"}]},{"n":"东方","a":[{"s":"东方"}]}]},{"p":"重庆","c":[{"n":"万州区"},{"n":"涪陵区"},{"n":"渝中区"},{"n":"大渡口区"},{"n":"江北区"},{"n":"沙坪坝区"},{"n":"九龙坡区"},{"n":"南岸区"},{"n":"北碚区"},{"n":"万盛区"},{"n":"双挢区"},{"n":"渝北区"},{"n":"巴南区"},{"n":"长寿区"},{"n":"綦江县"},{"n":"潼南县"},{"n":"铜梁县"},{"n":"大足县"},{"n":"荣昌县"},{"n":"壁山县"},{"n":"梁平县"},{"n":"城口县"},{"n":"丰都县"},{"n":"垫江县"},{"n":"武隆县"},{"n":"忠县"},{"n":"开县"},{"n":"云阳县"},{"n":"奉节县"},{"n":"巫山县"},{"n":"巫溪县"},{"n":"黔江区"},{"n":"石柱土家族自治县"},{"n":"秀山土家族苗族自治县"},{"n":"酉阳土家族苗族自治县"},{"n":"彭水苗族土家族自治县"},{"n":"江津区"},{"n":"合川区"},{"n":"永川区"},{"n":"南川区"}]},{"p":"四川","c":[{"n":"成都","a":[{"s":"锦江区"},{"s":"青羊区"},{"s":"金牛区"},{"s":"武侯区"},{"s":"成华区"},{"s":"龙泉驿区"},{"s":"青白江区"},{"s":"新都区"},{"s":"温江区"},{"s":"金堂县"},{"s":"双流县"},{"s":"郫县"},{"s":"大邑县"},{"s":"蒲江县"},{"s":"新津县"},{"s":"都江堰市"},{"s":"彭州市"},{"s":"邛崃市"},{"s":"崇州市"}]},{"n":"自贡","a":[{"s":"自流井区"},{"s":"贡井区"},{"s":"大安区"},{"s":"沿滩区"},{"s":"荣县"},{"s":"富顺县"}]},{"n":"攀枝花","a":[{"s":"东区"},{"s":"西区"},{"s":"仁和区"},{"s":"米易县"},{"s":"盐边县"}]},{"n":"泸州","a":[{"s":"江阳区"},{"s":"纳溪区"},{"s":"龙马潭区"},{"s":"泸县"},{"s":"合江县"},{"s":"叙永县"},{"s":"古蔺县"}]},{"n":"德阳","a":[{"s":"旌阳区"},{"s":"中江县"},{"s":"罗江县"},{"s":"广汉市"},{"s":"什邡市"},{"s":"绵竹市"}]},{"n":"绵阳","a":[{"s":"涪城区"},{"s":"游仙区"},{"s":"三台县"},{"s":"盐亭县"},{"s":"安县"},{"s":"梓潼县"},{"s":"北川羌族自治县"},{"s":"平武县"},{"s":"江油市"}]},{"n":"广元","a":[{"s":"利州区"},{"s":"元坝区"},{"s":"朝天区"},{"s":"旺苍县"},{"s":"青川县"},{"s":"剑阁县"},{"s":"苍溪县"}]},{"n":"遂宁","a":[{"s":"船山区"},{"s":">安居区"},{"s":">蓬溪县"},{"s":">射洪县"},{"s":">大英县"}]},{"n":"内江","a":[{"s":"市中区"},{"s":"东兴区"},{"s":"威远县"},{"s":"资中县"},{"s":"隆昌县"}]},{"n":"乐山","a":[{"s":"市中区"},{"s":"沙湾区"},{"s":"五通桥区"},{"s":"金口河区"},{"s":"犍为县"},{"s":"井研县"},{"s":"夹江县"},{"s":"沐川县"},{"s":"峨边彝族自治县"},{"s":"马边彝族自治县"},{"s":"峨眉山市"}]},{"n":"南充","a":[{"s":"顺庆区"},{"s":"高坪区"},{"s":"嘉陵区"},{"s":"南部县"},{"s":"营山县"},{"s":"蓬安县"},{"s":"仪陇县"},{"s":"西充县"},{"s":"阆中市"}]},{"n":"眉山","a":[{"s":"东坡区"},{"s":"仁寿县"},{"s":"彭山县"},{"s":"洪雅县"},{"s":"丹棱县"},{"s":"青神县"}]},{"n":"宜宾","a":[{"s":"翠屏区"},{"s":"宜宾县"},{"s":"南溪县"},{"s":"江安县"},{"s":"长宁县"},{"s":"高县"},{"s":"珙县"},{"s":"筠连县"},{"s":"兴文县"},{"s":"屏山县"}]},{"n":"广安","a":[{"s":"广安区"},{"s":"岳池县"},{"s":"武胜县"},{"s":"邻水县"},{"s":"华蓥市"}]},{"n":"达川","a":[{"s":"通川区"},{"s":"达县"},{"s":"宣汉县"},{"s":"开江县"},{"s":"大竹县"},{"s":"渠县"},{"s":"万源市"}]},{"n":"雅安","a":[{"s":"雨城区"},{"s":"名山县"},{"s":"荥经县"},{"s":"汉源县"},{"s":"石棉县"},{"s":"天全县"},{"s":"芦山县"},{"s":"宝兴县"}]},{"n":"巴中","a":[{"s":"巴州区"},{"s":"通江县"},{"s":"南江县"},{"s":"平昌县"}]},{"n":"资阳","a":[{"s":"雁江区"},{"s":"安岳县"},{"s":"乐至县"},{"s":"简阳市"}]},{"n":"阿坝","a":[{"s":"汶川县"},{"s":"理县"},{"s":"茂县"},{"s":"松潘县"},{"s":"九寨沟县"},{"s":"金川县"},{"s":"小金县"},{"s":"黑水县"},{"s":"马尔康县"},{"s":"壤塘县"},{"s":"阿坝县"},{"s":"若尔盖县"},{"s":"红原县"}]},{"n":"甘孜","a":[{"s":"康定县"},{"s":"泸定县"},{"s":"丹巴县"},{"s":"九龙县"},{"s":"雅江县"},{"s":"道孚县"},{"s":"炉霍县"},{"s":"甘孜县"},{"s":"新龙县"},{"s":"德格县"},{"s":"白玉县"},{"s":"石渠县"},{"s":"色达县"},{"s":"理塘县"},{"s":"巴塘县"},{"s":"乡城县"},{"s":"稻城县"},{"s":"得荣县"}]},{"n":"凉山","a":[{"s":"西昌市"},{"s":"木里藏族自治县"},{"s":"盐源县"},{"s":"德昌县"},{"s":"会理县"},{"s":"会东县"},{"s":"宁南县"},{"s":"普格县"},{"s":"布拖县"},{"s":"金阳县"},{"s":"昭觉县"},{"s":"喜德县"},{"s":"冕宁县"},{"s":"越西县"},{"s":"甘洛县"},{"s":"美姑县"},{"s":"雷波县"}]}]},{"p":"贵州","c":[{"n":"贵阳","a":[{"s":"南明区"},{"s":"云岩区"},{"s":"花溪区"},{"s":"乌当区"},{"s":"白云区"},{"s":"小河区"},{"s":"开阳县"},{"s":"息烽县"},{"s":"修文县"},{"s":"清镇市"}]},{"n":"六盘水","a":[{"s":"钟山区"},{"s":"六枝特区"},{"s":"水城县"},{"s":"盘县"}]},{"n":"遵义","a":[{"s":"红花岗区"},{"s":"汇川区"},{"s":"遵义县"},{"s":"桐梓县"},{"s":"绥阳县"},{"s":"正安县"},{"s":"道真仡佬族苗族自治县"},{"s":"务川仡佬族苗族自治县"},{"s":"凤冈县"},{"s":"湄潭县"},{"s":"余庆县"},{"s":"习水县"},{"s":"赤水市"},{"s":"仁怀市"}]},{"n":"安顺","a":[{"s":"西秀区"},{"s":"平坝县"},{"s":"普定县"},{"s":"镇宁布依族苗族自治县"},{"s":"关岭布依族苗族自治县"},{"s":"紫云苗族布依族自治县"}]},{"n":"铜仁","a":[{"s":"铜仁市"},{"s":"江口县"},{"s":"玉屏侗族自治县"},{"s":"石阡县"},{"s":"思南县"},{"s":"印江土家族苗族自治县"},{"s":"德江县"},{"s":"沿河土家族自治县"},{"s":"松桃苗族自治县"},{"s":"万山特区"}]},{"n":"黔西南","a":[{"s":"兴义市"},{"s":"兴仁县"},{"s":"普安县"},{"s":"晴隆县"},{"s":"贞丰县"},{"s":"望谟县"},{"s":"册亨县"},{"s":"安龙县"}]},{"n":"毕节","a":[{"s":"毕节市"},{"s":"大方县"},{"s":"黔西县"},{"s":"金沙县"},{"s":"织金县"},{"s":"纳雍县"},{"s":"威宁彝族回族苗族自治县"},{"s":"赫章县"}]},{"n":"黔东南","a":[{"s":"凯里市"},{"s":"黄平县"},{"s":"施秉县"},{"s":"三穗县"},{"s":"镇远县"},{"s":"岑巩县"},{"s":"天柱县"},{"s":"锦屏县"},{"s":"剑河县"},{"s":"台江县"},{"s":"黎平县"},{"s":"榕江县"},{"s":"从江县"},{"s":"雷山县"},{"s":"麻江县"},{"s":"丹寨县"}]},{"n":"黔南","a":[{"s":"都匀市"},{"s":"福泉市"},{"s":"荔波县"},{"s":"贵定县"},{"s":"瓮安县"},{"s":"独山县"},{"s":"平塘县"},{"s":"罗甸县"},{"s":"长顺县"},{"s":"龙里县"},{"s":"惠水县"},{"s":"三都水族自治县"}]}]},{"p":"云南","c":[{"n":"昆明","a":[{"s":"五华区"},{"s":"盘龙区"},{"s":"官渡区"},{"s":"西山区"},{"s":"东川区"},{"s":"呈贡县"},{"s":"晋宁县"},{"s":"富民县"},{"s":"宜良县"},{"s":"石林彝族自治县"},{"s":"嵩明县"},{"s":"禄劝彝族苗族自治县"},{"s":"寻甸回族彝族自治县"},{"s":"安宁市"}]},{"n":"曲靖","a":[{"s":"麒麟区"},{"s":"马龙县"},{"s":"陆良县"},{"s":"师宗县"},{"s":"罗平县"},{"s":"富源县"},{"s":"会泽县"},{"s":"沾益县"},{"s":"宣威市"}]},{"n":"玉溪","a":[{"s":"红塔区"},{"s":"江川县"},{"s":"澄江县"},{"s":"通海县"},{"s":"华宁县"},{"s":"易门县"},{"s":"峨山彝族自治县"},{"s":"新平彝族傣族自治县"},{"s":"元江哈尼族彝族傣族自治县"}]},{"n":"保山","a":[{"s":"隆阳区"},{"s":"施甸县"},{"s":"腾冲县"},{"s":"龙陵县"},{"s":"昌宁县"}]},{"n":"昭通","a":[{"s":"昭阳区"},{"s":"鲁甸县"},{"s":"巧家县"},{"s":"盐津县"},{"s":"大关县"},{"s":"永善县"},{"s":"绥江县"},{"s":"镇雄县"},{"s":"彝良县"},{"s":"威信县"},{"s":"水富县"}]},{"n":"丽江","a":[{"s":"古城区"},{"s":"玉龙纳西族自治县"},{"s":"永胜县"},{"s":"华坪县"},{"s":"宁蒗彝族自治县"}]},{"n":"普洱","a":[{"s":"思茅区"},{"s":"宁洱镇"},{"s":"墨江哈尼族自治县"},{"s":"景东彝族自治县"},{"s":"景谷傣族彝族自治县"},{"s":"镇沅彝族哈尼族拉祜族自治县"},{"s":"江城哈尼族彝族自治县"},{"s":"孟连傣族拉祜族佤族自治县"},{"s":"澜沧拉祜族自治县"},{"s":"西盟佤族自治县"}]},{"n":"临沧","a":[{"s":"临翔区"},{"s":"凤庆县"},{"s":"云县"},{"s":"永德县"},{"s":"镇康县"},{"s":"双江拉祜族佤族布朗族傣族自治县"},{"s":"耿马傣族佤族自治县"},{"s":"沧源佤族自治县"}]},{"n":"楚雄","a":[{"s":"楚雄市"},{"s":"双柏县"},{"s":"牟定县"},{"s":"南华县"},{"s":"姚安县"},{"s":"大姚县"},{"s":"永仁县"},{"s":"元谋县"},{"s":"武定县"},{"s":"禄丰县"}]},{"n":"红河","a":[{"s":"个旧市"},{"s":"开远市"},{"s":"蒙自县"},{"s":"屏边苗族自治县"},{"s":"建水县"},{"s":"石屏县"},{"s":"弥勒县"},{"s":"泸西县"},{"s":"元阳县"},{"s":"红河县"},{"s":"金平苗族瑶族傣族自治县"},{"s":"绿春县"},{"s":"河口瑶族自治县"}]},{"n":"文山","a":[{"s":"文山县"},{"s":"砚山县"},{"s":"西畴县"},{"s":"麻栗坡县"},{"s":"马关县"},{"s":"丘北县"},{"s":"广南县"},{"s":"富宁县"}]},{"n":"西双版纳","a":[{"s":"景洪市"},{"s":"勐海县"},{"s":"勐腊县"}]},{"n":"大理","a":[{"s":"大理市"},{"s":"漾濞彝族自治县"},{"s":"祥云县"},{"s":"宾川县"},{"s":"弥渡县"},{"s":"南涧彝族自治县"},{"s":"巍山彝族回族自治县"},{"s":"永平县"},{"s":"云龙县"},{"s":"洱源县"},{"s":"剑川县"},{"s":"鹤庆县"}]},{"n":"德宏","a":[{"s":"瑞丽市"},{"s":"潞西市"},{"s":"梁河县"},{"s":"盈江县"},{"s":"陇川县"}]},{"n":"怒江傈","a":[{"s":"泸水县"},{"s":"福贡县"},{"s":"贡山独龙族怒族自治县"},{"s":"兰坪白族普米族自治县"}]},{"n":"迪庆","a":[{"s":"香格里拉县"},{"s":"德钦县"},{"s":"维西傈僳族自治县"}]}]},{"p":"西藏","c":[{"n":"拉萨","a":[{"s":"城关区"},{"s":"林周县"},{"s":"当雄县"},{"s":"尼木县"},{"s":"曲水县"},{"s":"堆龙德庆县"},{"s":"达孜县"},{"s":"墨竹工卡县"}]},{"n":"昌都","a":[{"s":"昌都县"},{"s":"江达县"},{"s":"贡觉县"},{"s":"类乌齐县"},{"s":"丁青县"},{"s":"察雅县"},{"s":"八宿县"},{"s":"左贡县"},{"s":"芒康县"},{"s":"洛隆县"},{"s":"边坝县"}]},{"n":"山南","a":[{"s":"乃东县"},{"s":"扎囊县"},{"s":"贡嘎县"},{"s":"桑日县"},{"s":"琼结县"},{"s":"曲松县"},{"s":"措美县"},{"s":"洛扎县"},{"s":"加查县"},{"s":"隆子县"},{"s":"错那县"},{"s":"浪卡子县"}]},{"n":"日喀则","a":[{"s":"日喀则市"},{"s":"南木林县"},{"s":"江孜县"},{"s":"定日县"},{"s":"萨迦县"},{"s":"拉孜县"},{"s":"昂仁县"},{"s":"谢通门县"},{"s":"白朗县"},{"s":"仁布县"},{"s":"康马县"},{"s":"定结县"},{"s":"仲巴县"},{"s":"亚东县"},{"s":"吉隆县"},{"s":"聂拉木县"},{"s":"萨嘎县"},{"s":"岗巴县"}]},{"n":"那曲","a":[{"s":"那曲县"},{"s":"嘉黎县"},{"s":"比如县"},{"s":"聂荣县"},{"s":"安多县"},{"s":"申扎县"},{"s":"索县"},{"s":"班戈县"},{"s":"巴青县"},{"s":"尼玛县"}]},{"n":"阿里","a":[{"s":"普兰县"},{"s":"札达县"},{"s":"噶尔县"},{"s":"日土县"},{"s":"革吉县"},{"s":"改则县"},{"s":"措勤县"}]},{"n":"林芝","a":[{"s":"林芝县"},{"s":"工布江达县"},{"s":"米林县"},{"s":"墨脱县"},{"s":"波密县"},{"s":"察隅县"},{"s":"朗县"}]}]},{"p":"陕西","c":[{"n":"西安","a":[{"s":"新城区"},{"s":"碑林区"},{"s":"莲湖区"},{"s":"灞桥区"},{"s":"未央区"},{"s":"雁塔区"},{"s":"阎良区"},{"s":"临潼区"},{"s":"长安区"},{"s":"蓝田县"},{"s":"周至县"},{"s":"户县"},{"s":"高陵县"}]},{"n":"铜川","a":[{"s":"王益区"},{"s":"印台区"},{"s":"耀州区"},{"s":"宜君县"}]},{"n":"宝鸡","a":[{"s":"渭滨区"},{"s":"金台区"},{"s":"陈仓区"},{"s":"凤翔县"},{"s":"岐山县"},{"s":"扶风县"},{"s":"眉县"},{"s":"陇县"},{"s":"千阳县"},{"s":"麟游县"},{"s":"凤县"},{"s":"太白县"}]},{"n":"咸阳","a":[{"s":"秦都区"},{"s":"杨凌区"},{"s":"渭城区"},{"s":"三原县"},{"s":"泾阳县"},{"s":"乾县"},{"s":"礼泉县"},{"s":"永寿县"},{"s":"彬县"},{"s":"长武县"},{"s":"旬邑县"},{"s":"淳化县"},{"s":"武功县"},{"s":"兴平市"}]},{"n":"渭南","a":[{"s":"临渭区"},{"s":"华县"},{"s":"潼关县"},{"s":"大荔县"},{"s":"合阳县"},{"s":"澄城县"},{"s":"蒲城县"},{"s":"白水县"},{"s":"富平县"},{"s":"韩城市"},{"s":"华阴市"}]},{"n":"延安","a":[{"s":"宝塔区"},{"s":"延长县"},{"s":"延川县"},{"s":"子长县"},{"s":"安塞县"},{"s":"志丹县"},{"s":"吴起县"},{"s":"甘泉县"},{"s":"富县"},{"s":"洛川县"},{"s":"宜川县"},{"s":"黄龙县"},{"s":"黄陵县"}]},{"n":"汉中","a":[{"s":"汉台区"},{"s":"南郑县"},{"s":"城固县"},{"s":"洋县"},{"s":"西乡县"},{"s":"勉县"},{"s":"宁强县"},{"s":"略阳县"},{"s":"镇巴县"},{"s":"留坝县"},{"s":"佛坪县"}]},{"n":"榆林","a":[{"s":"榆阳区"},{"s":"神木县"},{"s":"府谷县"},{"s":"横山县"},{"s":"靖边县"},{"s":"定边县"},{"s":"绥德县"},{"s":"米脂县"},{"s":"佳县"},{"s":"吴堡县"},{"s":"清涧县"},{"s":"子洲县"}]},{"n":"安康","a":[{"s":"汉滨区"},{"s":"汉阴县"},{"s":"石泉县"},{"s":"宁陕县"},{"s":"紫阳县"},{"s":"岚皋县"},{"s":"平利县"},{"s":"镇坪县"},{"s":"旬阳县"},{"s":"白河县"}]},{"n":"商洛","a":[{"s":"商州区"},{"s":"洛南县"},{"s":"丹凤县"},{"s":"商南县"},{"s":"山阳县"},{"s":"镇安县"},{"s":"柞水县"}]}]},{"p":"甘肃","c":[{"n":"兰州","a":[{"s":"区(县)"},{"s":"城关区"},{"s":"七里河区"},{"s":"西固区"},{"s":"安宁区"},{"s":"红古区"},{"s":"永登县"},{"s":"皋兰县"},{"s":"榆中县"}]},{"n":"嘉峪关","a":[{"s":"嘉峪关市"}]},{"n":"金昌","a":[{"s":"金川区"},{"s":"永昌县"}]},{"n":"白银","a":[{"s":"白银区"},{"s":"平川区"},{"s":"靖远县"},{"s":"会宁县"},{"s":"景泰县"}]},{"n":"天水","a":[{"s":"秦城区"},{"s":"麦积区"},{"s":"清水县"},{"s":"秦安县"},{"s":"甘谷县"},{"s":"武山县"},{"s":"张家川回族自治县"}]},{"n":"武威","a":[{"s":"凉州区"},{"s":"民勤县"},{"s":"古浪县"},{"s":"天祝藏族自治县"}]},{"n":"张掖","a":[{"s":"甘州区"},{"s":"肃南裕固族自治县"},{"s":"民乐县"},{"s":"临泽县"},{"s":"高台县"},{"s":"山丹县"}]},{"n":"平凉","a":[{"s":"崆峒区"},{"s":"泾川县"},{"s":"灵台县"},{"s":"崇信县"},{"s":"华亭县"},{"s":"庄浪县"},{"s":"静宁县"}]},{"n":"酒泉","a":[{"s":"肃州区"},{"s":"金塔县"},{"s":"瓜州县"},{"s":"肃北蒙古族自治县"},{"s":"阿克塞哈萨克族自治县"},{"s":"玉门市"},{"s":"敦煌市"}]},{"n":"庆阳","a":[{"s":"西峰区"},{"s":"庆城县"},{"s":"环县"},{"s":"华池县"},{"s":"合水县"},{"s":"正宁县"},{"s":"宁县"},{"s":"镇原县"}]},{"n":"定西","a":[{"s":"安定区"},{"s":"通渭县"},{"s":"陇西县"},{"s":"渭源县"},{"s":"临洮县"},{"s":"漳县"},{"s":"岷县"}]},{"n":"陇南","a":[{"s":"武都区"},{"s":"成县"},{"s":"文县"},{"s":"宕昌县"},{"s":"康县"},{"s":"西和县"},{"s":"礼县"},{"s":"徽县"},{"s":"两当县"}]},{"n":"临夏","a":[{"s":"临夏市"},{"s":"临夏县"},{"s":"康乐县"},{"s":"永靖县"},{"s":"广河县"},{"s":"和政县"},{"s":"东乡族自治县"},{"s":"积石山保安族东乡族撒拉族自治县"}]},{"n":"甘南","a":[{"s":"合作市"},{"s":"临潭县"},{"s":"卓尼县"},{"s":"舟曲县"},{"s":"迭部县"},{"s":"玛曲县"},{"s":"碌曲县"},{"s":"夏河县"}]}]},{"p":"青海","c":[{"n":"西宁","a":[{"s":"城东区"},{"s":"城中区"},{"s":"城西区"},{"s":"城北区"},{"s":"大通回族土族自治县"},{"s":"湟中县"},{"s":"湟源县"}]},{"n":"海东","a":[{"s":"平安县"},{"s":"民和回族土族自治县"},{"s":"乐都县"},{"s":"互助土族自治县"},{"s":"化隆回族自治县"},{"s":"循化撒拉族自治县"}]},{"n":"海北","a":[{"s":"门源回族自治县"},{"s":"祁连县"},{"s":"海晏县"},{"s":"刚察县"}]},{"n":"黄南","a":[{"s":"同仁县"},{"s":"尖扎县"},{"s":"泽库县"},{"s":"河南蒙古族自治县"}]},{"n":"海南","a":[{"s":"共和县"},{"s":"同德县"},{"s":"贵德县"},{"s":"兴海县"},{"s":"贵南县"}]},{"n":"果洛","a":[{"s":"玛沁县"},{"s":"班玛县"},{"s":"甘德县"},{"s":"达日县"},{"s":"久治县"},{"s":"玛多县"}]},{"n":"玉树","a":[{"s":"玉树县"},{"s":"杂多县"},{"s":"称多县"},{"s":"治多县"},{"s":"囊谦县"},{"s":"曲麻莱县"}]},{"n":"梅西","a":[{"s":"格尔木市"},{"s":"德令哈市"},{"s":"乌兰县"},{"s":"都兰县"},{"s":"天峻县"}]}]},{"p":"宁夏","c":[{"n":"银川","a":[{"s":"兴庆区"},{"s":"西夏区"},{"s":"金凤区"},{"s":"永宁县"},{"s":"贺兰县"},{"s":"灵武市"}]},{"n":"石嘴山","a":[{"s":"大武口区"},{"s":"惠农区"},{"s":"平罗县"}]},{"n":"吴忠","a":[{"s":"利通区"},{"s":"红寺堡区"},{"s":"盐池县"},{"s":"同心县"},{"s":"青铜峡市"}]},{"n":"固原","a":[{"s":"原州区"},{"s":"西吉县"},{"s":"隆德县"},{"s":"泾源县"},{"s":"彭阳县"}]},{"n":"中卫","a":[{"s":"沙坡头区"},{"s":"中宁县"},{"s":"海原县"}]}]},{"p":"新疆","c":[{"n":"乌鲁木齐","a":[{"s":"天山区"},{"s":"沙依巴克区"},{"s":"新市区"},{"s":"水磨沟区"},{"s":"头屯河区"},{"s":"达坂城区"},{"s":"米东区"},{"s":"乌鲁木齐县"}]},{"n":"克拉玛依","a":[{"s":"独山子区"},{"s":"克拉玛依区"},{"s":"白碱滩区"},{"s":"乌尔禾区"}]},{"n":"吐鲁番","a":[{"s":"吐鲁番市"},{"s":"鄯善县"},{"s":"托克逊县"}]},{"n":"哈密","a":[{"s":"哈密市"},{"s":"巴里坤哈萨克自治县"},{"s":"伊吾县"}]},{"n":"昌吉","a":[{"s":"昌吉市"},{"s":"阜康市"},{"s":"呼图壁县"},{"s":"玛纳斯县"},{"s":"奇台县"},{"s":"吉木萨尔县"},{"s":"木垒哈萨克自治县"}]},{"n":"博尔塔拉","a":[{"s":"博乐市"},{"s":"精河县"},{"s":"温泉县"}]},{"n":"巴音郭楞","a":[{"s":"库尔勒市"},{"s":"轮台县"},{"s":"尉犁县"},{"s":"若羌县"},{"s":"且末县"},{"s":"焉耆回族自治县"},{"s":"和静县"},{"s":"和硕县"},{"s":"博湖县"}]},{"n":"阿克苏","a":[{"s":"阿克苏市"},{"s":"温宿县"},{"s":"库车县"},{"s":"沙雅县"},{"s":"新和县"},{"s":"拜城县"},{"s":"乌什县"},{"s":"阿瓦提县"},{"s":"柯坪县"}]},{"n":"克孜勒苏","a":[{"s":"阿图什市"},{"s":"阿克陶县"},{"s":"阿合奇县"},{"s":"乌恰县"}]},{"n":"喀什","a":[{"s":"喀什市"},{"s":"疏附县"},{"s":"疏勒县"},{"s":"英吉沙县"},{"s":"泽普县"},{"s":"莎车县"},{"s":"叶城县"},{"s":"麦盖提县"},{"s":"岳普湖县"},{"s":"伽师县"},{"s":"巴楚县"},{"s":"塔什库尔干县塔吉克自治"}]},{"n":"和田","a":[{"s":"和田市"},{"s":"和田县"},{"s":"墨玉县"},{"s":"皮山县"},{"s":"洛浦县"},{"s":"策勒县"},{"s":"于田县"},{"s":"民丰县"}]},{"n":"伊犁","a":[{"s":"伊宁市"},{"s":"奎屯市"},{"s":"伊宁县"},{"s":"察布查尔锡伯自治县"},{"s":"霍城县"},{"s":"巩留县"},{"s":"新源县"},{"s":"昭苏县"},{"s":"特克斯县"},{"s":"尼勒克县"}]},{"n":"塔城","a":[{"s":"塔城市"},{"s":"乌苏市"},{"s":"额敏县"},{"s":"沙湾县"},{"s":"托里县"},{"s":"裕民县"},{"s":"和布克赛尔蒙古自治县"}]},{"n":"阿勒泰","a":[{"s":"阿勒泰市"},{"s":"布尔津县"},{"s":"富蕴县"},{"s":"福海县"},{"s":"哈巴河县"},{"s":"青河县"},{"s":"吉木乃县"}]},{"n":"石河子","a":[{"s":"石河子"}]},{"n":"阿拉尔","a":[{"s":"阿拉尔"}]},{"n":"图木舒克","a":[{"s":"图木舒克"}]},{"n":"五家渠","a":[{"s":"五家渠"}]}]},{"p":"香港","c":[{"n":"中西区"},{"n":"东区"},{"n":"九龙城区"},{"n":"观塘区"},{"n":"南区"},{"n":"深水区"},{"n":"湾仔区"},{"n":"黄大仙区"},{"n":"油尖旺区"},{"n":"离岛区"},{"n":"葵青区"},{"n":"北区"},{"n":"西贡区"},{"n":"沙田区"},{"n":"屯门区"},{"n":"大埔区"},{"n":"荃湾区"},{"n":"元朗区"}]},{"p":"澳门","c":[{"n":"花地玛堂区"},{"n":"圣安多尼堂区"},{"n":"大堂区"},{"n":"望德堂区"},{"n":"风顺堂区"},{"n":"嘉模堂区"},{"n":"圣方济各堂区"}]},{"p":"台湾","c":[{"n":"台北市"},{"n":"高雄市"},{"n":"基隆市"},{"n":"台中市"},{"n":"台南市"},{"n":"新竹市"},{"n":"嘉义市"},{"n":"台北县"},{"n":"宜兰县"},{"n":"新竹县"},{"n":"桃园县"},{"n":"苗栗县"},{"n":"台中县"},{"n":"彰化县"},{"n":"南投县"},{"n":"嘉义县"},{"n":"云林县"},{"n":"台南县"},{"n":"高雄县"},{"n":"屏东县"},{"n":"台东县"},{"n":"花莲县"},{"n":"澎湖县"}]},{"p":"国外"}]

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n<div class=\"select-region form-inline\" style=\"top: -356px; display: block;\">\r\n    <div class=\"select-region-container\">\r\n        <ul>\r\n            <li>\r\n                <!-- 省份 -->\r\n                <span v-for=\"item in provinces\" @click=\"change($event).p($index)\" v-text=\"item.p\"></span>\r\n            </li>\r\n\r\n            <li v-if=\"cities\">\r\n                <!-- 城市 -->\r\n                <span v-for=\"item in cities\" @click=\"change($event).c($index)\" v-text=\"item.n\"></span>\r\n            </li>\r\n            <!-- <li v-if=\"dists\"> -->\r\n                <!-- 县级 -->\r\n                <!-- <span v-for=\"item in dists\" @click=\"change($event).d($index)\" v-text=\"item.s\"></span>\r\n            </li> -->\r\n\r\n        </ul>\r\n    </div>\r\n\r\n    <!-- <div class=\"container-footer\">\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"石油\" checked=\"\">石油</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"天然气\">天然气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"煤层气\">煤层气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"页岩气\">页岩气</label></div>\r\n      <div class=\"radio\"><label><input type=\"radio\" name=\"radios\" v-model=\"values.n\" value=\"其他\">其他</label></div>\r\n    </div> -->\r\n\r\n    <div class=\"select-region-footer\">\r\n        <span class=\"pull-right\">\r\n          <button @click=\"clear\" class=\"btn btn-link\">清空</button>\r\n          <button @click=\"submit\" class=\"btn btn-success\" type=\"submit\">确定</button>\r\n        </span>\r\n\r\n        <strong class=\"text-danger\"> {{values.p + ' ' + values.c + ' ' + values.d}} </strong>\r\n        <!-- <input v-show=\"values.p\" v-model=\"values.x\" class=\"form-control\" type=\"text\" placeholder=\"具体地址\"> -->\r\n    </div>\r\n</div>\r\n\r\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n<div class=\"container-row\">\n\n  <div class=\"tbar toolbar-actions\">\n    <button class=\"btn btn-default\" v-on:click=\"add\" v-show=\"addshow\">\n      <span class=\"icon icon-plus icon-text\"></span>\n      添加\n    </button>\n    <button class=\"btn btn-primary\" v-on:click=\"save\">\n      <span class=\"icon icon-home icon-text white\"></span>\n      保存\n    </button>\n\n    <div class=\"pull-right\">\n      <button class=\"btn btn-positive\" v-on:click=\"exportExcel\">\n        <span class=\"icon icon-export icon-text white\"></span>\n        导出\n      </button>\n\n      <button class=\"btn btn-positive\" v-on:click=\"importExcel\">\n        <span class=\"icon icon-download icon-text white\"></span>\n        导入\n      </button>\n    </div>\n  </div>\n\n  <div class=\"head\">\n      <h2>{{DATAYEAR}} {{$route.cname}}</h2>\n      <div class=\"info\">\n        <span style=\"font-size: 14px;\">填报单位：{{DATACOM}}</span>\n      </div>\n  </div>\n\n  <div class=\"pane\">\n    <spread-sheet :columns=\"columns\"></spread-sheet>\n  </div>\n\n\n  <div class=\"table-tabs\">\n\n    <div class=\"tab-group\">\n        <div class=\"tab-item\" name='DEF' v-on:click=\"changeTab\">{{$route.cname}}</div>\n    </div>\n\n    <a href=\"javascript:;\" class=\"xbut\" @click=\"toggleInfo\">\n      <span class=\"icon icon-info-circled icon-text\"></span>\n      填表说明\n    </a>\n\n  </div>\n  <select-region></select-region>\n\n  <div class=\"g-modal\">\n    <div class=\"container-row\">\n\n\n      <div class=\"content\">\n        <h3>{{$route.cname}}</h3>\n        <p>\n            <span>填报说明：</span>\n        </p>\n        <p style=\"text-indent:26px;line-height:26px\">\n            <span style=\"font-size:14px;font-family:黑体\">油气田规模</span><strong> </strong><span>填报的油气田规模要达到现行《矿产资源储量规模划分标准》中规定的小型规模上限的二分之一以上。石油规模，大型：≥10000万吨；中型：1000-10000万吨；小型：＜1000万吨。天然气规模，大型：≥300亿立方米；中型：50-300亿立方米；小型：＜50亿立方米。<strong></strong></span>\n        </p>\n        <p style=\"text-indent:26px;line-height:26px\">\n            <span style=\"font-size:14px;font-family:黑体\">计量单位</span><strong> </strong><span>石油：万吨；天然气、煤层气、页岩气：亿立方米。</span>\n        </p>\n        <p style=\"text-indent:26px;line-height:26px\">\n            <span style=\"font-size:14px;font-family:黑体\">新发现油气田储量</span><strong> </strong><span>报告期内在新区块、新层系发现的油气田储量情况。</span>\n        </p>\n        <p style=\"text-indent:26px;line-height:26px\">\n            <span style=\"font-size:14px;font-family:黑体\">油气田新查明储量</span><strong> </strong><span>报告期内在老油田扩边新探明、原未开发探明地质储量复算净增地质储量情况。</span>\n        </p>\n\n      </div>\n\n      <footer class=\"footer\">\n        <div class=\"actions\">\n          <button class=\"btn\"  @click=\"toggleInfo\">\n            关 闭\n          </button>\n        </div>\n      </footer>\n\n    </div>\n  </div>\n\n</div>\n\n";

/***/ }
]);;
//# sourceMappingURL=16-22385d66cc10f5be965b.js.map