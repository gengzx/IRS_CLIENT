exports.ids = [10];
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(46);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	var $Object = __webpack_require__(51).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(49);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(59), 'Object', {defineProperty: __webpack_require__(55).f});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(50)
	  , core      = __webpack_require__(51)
	  , ctx       = __webpack_require__(52)
	  , hide      = __webpack_require__(54)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 50 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 51 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(53);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(55)
	  , createDesc = __webpack_require__(63);
	module.exports = __webpack_require__(59) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(56)
	  , IE8_DOM_DEFINE = __webpack_require__(58)
	  , toPrimitive    = __webpack_require__(62)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(59) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(57);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(59) && !__webpack_require__(60)(function(){
	  return Object.defineProperty(__webpack_require__(61)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(60)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(57)
	  , document = __webpack_require__(50).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(57);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(92)
	__vue_script__ = __webpack_require__(94)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\yearreport\\Table1_IMP.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(95)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1413030a/Table1_IMP.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table1_IMP.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Table1_IMP.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Table1_IMP.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(45);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _datas = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SpreadSheet = __webpack_require__(23);
	
	
	var params = {
	  type: 'DEF'
	};
	
	var pageparams = {
	  KZ_DATA: ["石油天然气", "煤层气", "页岩气"],
	  SX_DATA: ["自营", "合作"]
	};
	
	exports.default = {
	  components: {
	    SpreadSheet: SpreadSheet
	  },
	  data: function data() {
	    return {
	      DATAYEAR: DATAYEAR,
	      DATACOM: DATACOM,
	      addshow: true,
	      data: [],
	      columns: function () {
	
	        return [(0, _defineProperty3.default)({ tag: "F_KZ", shw: { text: "矿种", rowspan: 3 }, siz: 20, editor: false, align: 'center' }, 'editor', { type: 'select', data: pageparams.KZ_DATA }), { tag: "F_SX", shw: { text: "属性", rowspan: 3 }, siz: 100, align: 'center', editor: { type: 'select', data: pageparams.SX_DATA } }, { tag: "F_GS", shw: { text: "油气田分<br/>(子)公司", rowspan: 3 }, siz: 100, editor: { type: 'select', data: _datas.FGS[DATACOM] }, align: 'center' }, { tag: "F_KCTZ1", shw: { text: "勘查投资<br/>(亿元)", rowspan: 3 }, siz: 100, type: 'numeric', format: '0.00' }, { tag: "F_GZL_EW", shw: [{ text: "当年完成勘查工作量", colspan: 4 }, { text: "地震", colspan: 2 }, "二维<br/>(千米)"], type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_GZL_SW", shw: ["", "", "三维<br/>(平方千米)"], type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_TJJS", shw: ["", { text: "探井", colspan: 2 }, "井数<br/>(口)"], type: 'numeric', format: '0', siz: 100 }, { tag: "F_TJJC", shw: ["", "", "进尺<br/>(万米)"], type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_KCTZ2", shw: { text: "开采投资<br/>(亿元)", rowspan: 3 }, type: 'numeric', format: '0.00', siz: 20 }, { tag: "F_ZKFJJS", shw: [{ text: "当年完成开采工作量", colspan: 6 }, { text: "总开发井", colspan: 2 }, "井数<br/>(口)"], type: 'numeric', format: '0', readOnly: true, compute: "{F_YJJS}+{F_QJJS}", siz: 100 }, { tag: "F_ZKFJJC", shw: ["", "", "进尺<br/>(万米)"], readOnly: true, compute: "{F_YJJC}+{F_QJJC}", type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_YJJS", shw: ["", { text: "油井", colspan: 2 }, "井数<br/>(口)"], type: 'numeric', format: '0', siz: 100 }, { tag: "F_YJJC", shw: ["", "", "进尺<br/>(万米)"], type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_QJJS", shw: ["", { text: "气井", colspan: 2 }, "井数<br/>(口)"], type: 'numeric', format: '0', siz: 100 }, { tag: "F_QJJC", shw: ["", "", "进尺<br/>(万米)"], type: 'numeric', format: '0.00', siz: 100 }, { tag: "F_FGS", shw: { text: "分公司", rowspan: 3 }, align: 'center', siz: 20 }];
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
	          rows = [{ "F_KZ": '石油', "F_SX": '自营' }, { "F_KZ": '石油', "F_SX": '合作' }, { "F_KZ": '天然气', "F_SX": '自营' }, { "F_KZ": '天然气', "F_SX": '合作' }, { "F_KZ": '煤层气', "F_SX": '自营' }, { "F_KZ": '煤层气', "F_SX": '合作' }, { "F_KZ": '页岩气', "F_SX": '自营' }, { "F_KZ": '页岩气', "F_SX": '合作' }];
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
/* 95 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div class=\"container-row\">\n\n  <div class=\"tbar toolbar-actions\">\n    <button class=\"btn btn-default\" v-on:click=\"add\" v-show=\"addshow\">\n      <span class=\"icon icon-plus icon-text\"></span>\n      添加\n    </button>\n    <button class=\"btn btn-primary\" v-on:click=\"save\">\n      <span class=\"icon icon-home icon-text white\"></span>\n      保存\n    </button>\n\n    <div class=\"pull-right\">\n      <button class=\"btn btn-positive\" v-on:click=\"exportExcel\">\n        <span class=\"icon icon-export icon-text white\"></span>\n        导出\n      </button>\n\n      <button class=\"btn btn-positive\" v-on:click=\"importExcel\">\n        <span class=\"icon icon-download icon-text white\"></span>\n        导入\n      </button>\n    </div>\n  </div>\n\n  <!-- <div class=\"pane\">\n    <editor-table :data=\"data\" :columns=\"columns\"></editor-table>\n  </div> -->\n\n  <div class=\"head\">\n      <h2>{{DATAYEAR}} {{$route.cname}}</h2>\n      <div class=\"info\">\n        <span style=\"font-size: 14px;\">填报单位：{{DATACOM}}</span>\n      </div>\n  </div>\n\n  <div class=\"pane\">\n    <spread-sheet :columns=\"columns\" nosetup=true></spread-sheet>\n  </div>\n\n  <div class=\"table-tabs\">\n\n    <div class=\"tab-group\">\n        <div class=\"tab-item\" name='DEF' v-on:click=\"changeTab\">{{$route.cname}}</div>\n    </div>\n\n    <a href=\"javascript:;\" class=\"xbut\" @click=\"toggleInfo\">\n      <span class=\"icon icon-info-circled icon-text\"></span>\n      填表说明\n    </a>\n\n  </div>\n\n\n\n\n<div class=\"g-modal\">\n  <div class=\"container-row\">\n\n\n    <div class=\"content description\">\n      <h3>{{$route.cname}}</h3>\n\n      <p>\n          <span>填报说明：</span>\n      </p>\n      <p style=\"text-indent:28px;line-height:28px\">\n          <span style=\"font-size:14px;font-family:黑体\">页岩气</span><strong> </strong><span>当年完成开发工作量部分只需填写总开发井的井数和进尺。<strong></strong></span>\n      </p>\n      <p style=\"text-indent:26px;line-height:28px\">\n          <span style=\"font-size:14px;font-family:黑体\">煤层气</span><strong> </strong><span>当年完成开发工作量部分只需填写总开发井的井数和进尺。</span>\n      </p>\n      <p>\n          <br/>\n      </p>\n\n    </div>\n\n    <footer class=\"footer\">\n      <div class=\"actions\">\n        <button class=\"btn\"  @click=\"toggleInfo\">\n          关 闭\n        </button>\n      </div>\n    </footer>\n\n  </div>\n</div>\n\n\n\n</div>\n";

/***/ }
]);;
//# sourceMappingURL=10-0c15d74520ab4a28ee70.js.map