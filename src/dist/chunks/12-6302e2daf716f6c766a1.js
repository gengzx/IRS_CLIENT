exports.ids = [12];
exports.modules = {

/***/ 23:
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

/***/ 24:
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

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\r\n\r\n\r\n.sheet-container{\r\n  /*width: 900px;\r\n  margin: 0 auto;*/\r\n\r\n  /*margin: 0 120px 0 120px;*/\r\n\r\n}\r\n.sheet-container .sheet{\r\n  /*width: 100%;*/\r\n}\r\n.sheet-container .sheet .sheet-readonly{\r\n  background: #F3F3F3;\r\n}\r\n\r\n.sheet-container .sheet .htCore tr td{\r\n  vertical-align:middle;\r\n}\r\n\r\n\r\n.sheet-container .sheet .htCore tr td.hidden{\r\n  display: none;\r\n}\r\n.sheet-container .sheet .htCore tr td.center{\r\n  text-align: center;\r\n}\r\n.sheet-container .sheet .htCore tr td.right{\r\n  text-align: right;\r\n}\r\n\r\n.pane{\r\n  /*overflow: hidden;*/\r\n}\r\n", "", {"version":3,"sources":["/./src/components/SpreadSheet.vue?765ea806"],"names":[],"mappings":";;;;AAIA;EACA;mBACA;;EAEA,4BAAA;;CAEA;AACA;EACA,gBAAA;CACA;AACA;EACA,oBAAA;CACA;;AAEA;EACA,sBAAA;CACA;;;AAGA;EACA,cAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;CACA;;AAEA;EACA,qBAAA;CACA","file":"SpreadSheet.vue","sourcesContent":["\r\n<style>\r\n\r\n\r\n.sheet-container{\r\n  /*width: 900px;\r\n  margin: 0 auto;*/\r\n\r\n  /*margin: 0 120px 0 120px;*/\r\n\r\n}\r\n.sheet-container .sheet{\r\n  /*width: 100%;*/\r\n}\r\n.sheet-container .sheet .sheet-readonly{\r\n  background: #F3F3F3;\r\n}\r\n\r\n.sheet-container .sheet .htCore tr td{\r\n  vertical-align:middle;\r\n}\r\n\r\n\r\n.sheet-container .sheet .htCore tr td.hidden{\r\n  display: none;\r\n}\r\n.sheet-container .sheet .htCore tr td.center{\r\n  text-align: center;\r\n}\r\n.sheet-container .sheet .htCore tr td.right{\r\n  text-align: right;\r\n}\r\n\r\n.pane{\r\n  /*overflow: hidden;*/\r\n}\r\n</style>\r\n<template>\r\n\r\n  <div class=\"sheet-container\">\r\n\r\n    <div class=\"sheet\" id=\"handsontable\"></div>\r\n\r\n  </div>\r\n\r\n</template>\r\n\r\n<script>\r\n\r\nconst SpreadSheet = require('script/SpreadSheet')\r\n\r\nexport default {\r\n  data () {\r\n    return {\r\n\r\n    }\r\n  },\r\n  props: {\r\n    // 列配置\r\n    columns:[],\r\n\r\n    // 表格右键菜单\r\n    contextMenu:{default: true},\r\n\r\n    // 是否求和\r\n    summary:{default: false},\r\n\r\n    nosetup:true\r\n  },\r\n  methods: {\r\n    readyHandsontable: function(columns){\r\n      this.SpreadSheet = new SpreadSheet('handsontable',{\r\n        columns:columns,\r\n        contextMenu:this.contextMenu,\r\n        summary:this.summary\r\n      },this);\r\n    }\r\n  },\r\n  ready: function (columns) {\r\n\r\n    this.readyHandsontable(this.columns || columns);\r\n\r\n  },\r\n  events: {\r\n  },\r\n  filters:{\r\n\r\n  },\r\n  watch:{\r\n    // 'data': function (val, oldVal) {\r\n    //   // this.SpreadSheet.loadData(val);\r\n    // }\r\n  }\r\n}\r\n\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 26:
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

/***/ 27:
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

/***/ 28:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"sheet-container\">\n\n  <div class=\"sheet\" id=\"handsontable\"></div>\n\n</div>\n\n";

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(102)
	__vue_script__ = __webpack_require__(104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\yearreport\\Table3_IMP.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3c9be10c/Table3_IMP.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table3_IMP.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table3_IMP.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Table3_IMP.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var SpreadSheet = __webpack_require__(23);
	
	var params = {
	  type: 'DEF'
	};
	
	exports.default = {
	  components: {
	    SpreadSheet: SpreadSheet
	  },
	  data: function data() {
	    return {
	      DATAYEAR: DATAYEAR,
	      DATACOM: DATACOM,
	      data: [],
	      columns: function () {
	
	        return [{ tag: "F_FL", shw: { text: "分类", rowspan: 3 }, siz: 20, editor: false, readOnly: true, align: 'center' }, { tag: "F_KZ", shw: { text: "矿种/区域", rowspan: 3 }, siz: 100, readOnly: true, align: 'center' }, { tag: "F_TZ", shw: { text: "投资(亿元)", rowspan: 3 }, siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_DZLXDCGZL", shw: [{ text: "完成工作量", colspan: 7 }, { text: "地面地质调查", colspan: 2 }, "地质路线调查<br/>(千米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_DZPMCLGZL", shw: ["", "", "地质剖面测量<br/>(千米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_DZGZL_EW", shw: ["", { text: "地球物理调查", colspan: 3 }, "二维地震<br/>(千米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_DZGZL_SW", shw: ["", "", "三维地震<br/>(平方千米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_ZCDZHWTCLGZL", shw: ["", "", "重磁电综合物探测量<br/>(千米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_DCJJS", shw: ["", { text: "地质调查井", colspan: 2 }, "井数<br/>(口)"], siz: 100, type: 'numeric', format: '0' }, { tag: "F_DCJJC", shw: ["", "", "进尺<br/>(万米)"], siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_FGS", shw: { text: "分公司", rowspan: 3 }, align: 'center', siz: 20 }];
	      }()
	
	    };
	  },
	
	  methods: {
	    save: function save() {
	      this.data = this.SpreadSheet.getData();
	      commonVue.methods.save(this, params);
	    },
	
	    query: function query() {
	
	      var thisz = this;
	      commonVue.methods.query(this, params, function (rows, isinit) {
	
	        if (isinit) {
	          rows = [{ "F_FL": '合计' }, { "F_FL": '按矿种', "F_KZ": '石油天然气' }, { "F_FL": '按矿种', "F_KZ": '煤层气' }, { "F_FL": '按矿种', "F_KZ": '页岩气' }, { "F_FL": '按矿种', "F_KZ": '其他' }, { "F_FL": '按区域', "F_KZ": '陆域' }, { "F_FL": '按区域', "F_KZ": '海域' }];
	        }
	        thisz.SpreadSheet.loadData(rows);
	      });
	    },
	
	    changeTab: function changeTab(event) {
	
	      if (event.toElement.classList[1]) return;
	      common.toggleClassByLevel(event.toElement, "active");
	      params.type = event.toElement.getAttribute("name");
	
	      this.query();
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

/***/ },

/***/ 105:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div class=\"container-row\">\n\n  <div class=\"tbar toolbar-actions\">\n    <button class=\"btn btn-primary\" v-on:click=\"save\">\n      <span class=\"icon icon-home icon-text white\"></span>\n      保存\n    </button>\n\n    <div class=\"pull-right\">\n      <button class=\"btn btn-positive\" v-on:click=\"exportExcel\">\n        <span class=\"icon icon-export icon-text white\"></span>\n        导出\n      </button>\n\n      <button class=\"btn btn-positive\" v-on:click=\"importExcel\">\n        <span class=\"icon icon-download icon-text white\"></span>\n        导入\n      </button>\n    </div>\n  </div>\n\n  <div class=\"head\">\n      <h2>{{DATAYEAR}} {{$route.cname}}</h2>\n      <div class=\"info\">\n        <span style=\"font-size: 14px;\">填报单位：{{DATACOM}}</span>\n      </div>\n  </div>\n\n  <div class=\"pane\">\n    <spread-sheet context-menu=false summary=true :columns=\"columns\" nosetup=true></spread-sheet>\n  </div>\n\n  <div class=\"table-tabs\">\n\n    <div class=\"tab-group\">\n        <div class=\"tab-item\" name='DEF' v-on:click=\"changeTab\">{{$route.cname}}</div>\n    </div>\n\n    <a href=\"javascript:;\" class=\"xbut\" @click=\"toggleInfo\">\n      <span class=\"icon icon-info-circled icon-text\"></span>\n      填表说明\n    </a>\n\n  </div>\n\n\n\n\n<div class=\"g-modal\">\n  <div class=\"container-row\">\n\n\n    <div class=\"content\">\n      <h3>{{$route.cname}}</h3>\n      <p>\n          <span>填报说明：</span>\n      </p>\n      <p style=\"text-indent:28px;line-height:28px\">\n          <span style=\"font-size:14px;font-family:黑体\">1、</span><strong> </strong><span>按矿种合计<strong></strong></span>\n      </p>\n      <p style=\"text-indent:26px;line-height:28px\">\n          <span style=\"font-size:14px;font-family:黑体\">2、</span><strong> </strong><span>校验矿种与区域的合计数是否闭合</span>\n      </p>\n      <p>\n          <br/>\n      </p>\n\n    </div>\n\n    <footer class=\"footer\">\n      <div class=\"actions\">\n        <button class=\"btn\"  @click=\"toggleInfo\">\n          关 闭\n        </button>\n      </div>\n    </footer>\n\n  </div>\n</div>\n\n\n\n</div>\n";

/***/ }

};;
//# sourceMappingURL=12-6302e2daf716f6c766a1.js.map