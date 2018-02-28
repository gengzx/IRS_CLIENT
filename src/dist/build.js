/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		if(installedChunks[chunkId] === 1) callback.call(null, __webpack_require__);
/******/ 		else if(!installedChunks[chunkId]) {
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var filename = __dirname + "/dist/chunks/" + chunkId + "-" + {"1":"e4c3b6ea01ff9e8f725a","8":"8708280d37282b887f8d","9":"2ed8ffe2adcd5d4f56bf","10":"0c15d74520ab4a28ee70","11":"7a13c9b79adde324b53a","12":"76993653f7fbc140bb4e","13":"c4cf2c1e3923c992a6b1","14":"07abb8981edd96f0121c","15":"2d5f59972ba70948197d","16":"6f3d636902c7a22f0cc9","17":"2e6d0414a94bebcb9c37","18":"5bd20d5106c224f0cc7e","19":"df8bc410db54e3f60cc9","20":"d53f4b526d6420a4958a"}[chunkId] + ".js";
/******/ 			require('fs').readFile(filename, 'utf-8',  function(err, content) {
/******/ 				if(err) { if(__webpack_require__.onError) return __webpack_require__.onError(err); else throw err; }
/******/ 				var chunk = {};
/******/ 				require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 				var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 				for(var moduleId in moreModules) {
/******/ 					modules[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < chunkIds.length; i++) {
/******/ 					if(Array.isArray(installedChunks[chunkIds[i]]))
/******/ 						callbacks = callbacks.concat(installedChunks[chunkIds[i]]);
/******/ 					installedChunks[chunkIds[i]] = 1;
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++)
/******/ 					callbacks[i].call(null, __webpack_require__);
/******/ 			});
/******/ 		} else installedChunks[chunkId].push(callback);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\SublimeWorkspaces\\IRS_CLIENT/src/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	const Vue = __webpack_require__(1)
	const VueRouter = __webpack_require__(2)
	
	global.routes = __webpack_require__(3)
	global.routes_imp = __webpack_require__(80)
	
	// use router
	Vue.use(VueRouter)
	
	Vue.config.debug = true
	// Vue.config.devtools = true
	
	var App = __webpack_require__(111)
	
	// create router
	var router = new VueRouter({
	  hashbang: false,
	  history: true,
	  saveScrollPosition: true,
	  root: '/'
	})
	
	let rroutes = {}
	for (var r in routes) { rroutes[r] = routes[r] }
	for (var r in routes_imp) { rroutes[r] = routes_imp[r] }
	
	router.map(rroutes)
	
	router.start(App, 'app');
	
	// router.go({path:"/home"})
	
	global.common = __webpack_require__(116)(Vue)
	global.commonVue = __webpack_require__(117)(Vue)


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("vue-router");

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	
	
	module.exports = {
	
	
	  // 主页
	  '/home': {
	    name: 'home',
	    cname: '开始',
	    component: function(resolve){
	      __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(4)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	/*
	  // 地质勘查投入情况
	  '/table/DZKC_TRQK/:type': {
	    name: 'DZKC_TRQK',
	    cname: '地质勘查投入情况',
	    component: function(resolve){
	      require(['./Table-DZKC_TRQK.vue'], resolve)
	    }
	  },
	
	  // 地质勘查工作完成情况
	  '/table/DZKC_GZWCQK': {
	    name: 'DZKC_GZWCQK',
	    cname: '地质勘查工作完成情况',
	    component: function(resolve){
	      require(['./Table-DZKC_GZWCQK.vue'], resolve)
	    }
	  },
	
	  // 地质勘查新发现矿产地
	  '/table/DZKC_XFXKC': {
	    name: 'DZKC_XFXKC',
	    cname: '地质勘查新发现矿产地',
	    component: function(resolve){
	      require(['./Table-DZKC_XFXKC.vue'], resolve)
	    }
	  },
	
	  // 地质勘查新查明矿产资源
	  '/table/DZKC_XCMKCZY': {
	    name: 'DZKC_XCMKCZY',
	    cname: '地质勘查新查明矿产资源',
	    component: function(resolve){
	      require(['./Table-DZKC_XCMKCZY.vue'], resolve)
	    }
	  },
	*/
	
	
	
	  // 地质勘查新发现矿产地
	  '/table/DZKC_XFXKC': {
	    name: 'DZKC_XFXKC',
	    cname: '地质勘查新发现矿产地*',
	    component: function(resolve){
	      __webpack_require__.e/* require */(14, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(122)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this))
	    }
	  },
	  	  
	
	  // 快报1
	  '/table/fastreport/Table1': {
	    name: 'FAST_REPORT_TABLE1',
	    cname: '按地区分列油气勘查投入与工作量情况表',
	    tbname: 'T_BUSI_YQKCTRGZL',
	    type:'快报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(15, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 快报2
	  '/table/fastreport/Table2': {
	    name: 'FAST_REPORT_TABLE2',
	    cname: '油气田新增储量情况表',
	    tbname: 'T_BUSI_YQTXZCL',
	    type:'快报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(16, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(30)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 年报1
	  '/table/yearreport/Table1': {
	    name: 'YEAR_REPORT_TABLE1',
	    cname: '油气勘查开采投资及工作量完成情况表',
	    tbname: 'T_YQKCTZ_GZL_NB',
	    type:'年报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(17, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 年报2
	  '/table/yearreport/Table2': {
	    name: 'YEAR_REPORT_TABLE2',
	    cname: '重点探井情况',
	    tbname: 'T_ZDTJQK_NB',
	    type:'年报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(18, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(65)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 年报3
	  '/table/yearreport/Table3': {
	    name: 'YEAR_REPORT_TABLE3',
	    cname: '油气资源调查评价投资及工作量完成情况表',
	    tbname: 'T_YQZYDCPJ_GZLWC_NB',
	    type:'年报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(19, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(70)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 季报1
	  '/table/seasonreport/Table1': {
	    name: 'SEASON_REPORT_TABLE1',
	    cname: '季度油气勘查开采情况表',
	    tbname: 'T_YQKCKCQK_JB',
	    type:'季报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(20, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(75)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  }
	
	};


/***/ },

/***/ 7:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 10:
/***/ function(module, exports) {

	
	module.exports = {
	    "YGS": {
	        "中国石油": "F_ZGSY",
	        "中国石化": "F_ZGSH",
	        "中国海油": "F_ZGHY",
	        "延长石油": "F_YCSY",
	        "中联公司": "F_ZLGS",
	        "中国地调局": "F_ZGDDJ"
	    },
	    "FGS": {
	      "中国石油":["大庆","吉林","辽河","华北","大港","冀东","新疆","塔里木","吐哈","玉门","青海","长庆","西南","南方","浙江","中油煤"],
	      "中国石化":["胜利","中原","河南","江汉","江苏","西北","西南","华东","东北","华北","上海","勘探"],
	      "中国海油":["天津","深圳","湛江","上海"],
	      "中联公司":["晋城","太原"],
	      "延长石油":[],
	      "地调局":[]
	    },
	    "YQT": {
	      "中国石油_大庆":["贝尔","乌尔逊","哈尔温","肇州","肇源","古龙","方正","喇嘛甸","葡萄花","龙虎泡","永乐","金腾","太平屯","敖包塔","朝阳沟","敖古拉","升平","高台子","齐家","龙南","高西","榆树林","卫星","徐家围子","葡西","杏树岗","杏西","宋芳屯","新店","萨西","新肇","双城","长春岭","白音诺勒","他拉哈","二站","新站","萨尔图","头台","四站","五站","龙井","阿拉新","羊草","汪家屯","宋站","汤原","昌德","太平庄","三站","徐深","涝洲","泰康"],
	      "中国石油_吉林":["新北","新庙","乾安","长春岭","海坨子","新立","木头","新民","长春","莫里青","大老爷府","大安","扶余","双坨子","红岗","孤店","两井","四五家子","大情字井","套保","永平","英台","南山湾","布海","小城子","龙深","伏龙泉","长岭1号","农安"],
	      "中国石油_辽河":["兴隆台","高升","欢喜岭","曙光","双台子","于楼","黄金带","热河台","法哈牛","青龙台","大民屯","牛居","大平房","静安堡","双南","茨榆坨","边台","牛心坨","大洼","海外河","冷家堡","荣兴屯","小洼","科尔沁","桃园","欧利坨子","科尔康","交力格","笔架岭","太阳岛","黄沙坨","葵花岛","广发","前河","新开","月海","龙湾筒","铁匠炉","奈曼","元宝山"],
	      "中国石油_华北":["雁翎","刘李庄","鄚州","高家堡","岔河集","中岔口","柳泉","别古庄","永清","文安","河西务","凤河营","顾辛庄","南马庄","深西","深南","何庄","何庄西","南小陈","荆丘","苏桥","西柳","台家庄","武强","榆科","高阳","留楚","河间","留北","留西","大王庄","八里庄","八里庄西","薛庄","肃宁","车城","侯尚村","高邑","南孟","百户","任丘","龙虎庄","赵州桥","哈达图","吉格森","阿尔善","欣苏木","赛汉","锡林","包尔","宝饶","吉和","扎布","乌兰诺尔","宝力格","乌里雅斯太","阿尔","沁水"],
	      "中国石油_大港":["北大港港西","北大港港东","北大港港中","北大港六间房","北大港联盟","北大港马东","北大港马西","北大港唐家河","板桥","周清庄","塘沽","长芦","王徐庄","羊三木","羊二庄","孔店","王官屯","小集","枣园","段六拨","齐家务","舍女寺","刘官庄","扣村","乌马营","埕海张巨河","埕海赵东","埕海关家堡","埕海张东东","埕海三区","叶三拨","滨海","千米桥","大张坨"],
	      "中国石油_冀东":[],
	      "中国石油_新疆":[],
	      "中国石油_塔里木":[],
	      "中国石油_吐哈":[],
	      "中国石油_玉门":[],
	      "中国石油_青海":[],
	      "中国石油_长庆":[],
	      "中国石油_西南":[],
	      "中国石油_南方":[],
	      "中国石油_浙江":[],
	      "中国石油_中油煤":[],
	      "中国石化_胜利":["胜坨","永安镇","利津","单家寺","郑家","盐家","宁海","滨南","王庄","尚店","平方王","林樊家","高青","郝家","梁家楼","金家","新立村","小营","乔庄","平南","博兴","正理庄","纯化","史南","乐安","八面河","王家岗","广利","大芦湖","牛庄","现河庄","东辛","桥东","青南","垦利","垦西","邵家","义东","罗家","五号桩","新滩","孤南","长堤","河滩","红柳","埕岛","埕东","飞雁滩","新北","花沟","孤东","渤南","老河口","陈家庄","孤岛","桩西","大王庄","义北","套尔河","大王北","太平","英雄滩","东风港","富台","义和庄","商河","玉皇庙","临南","曲堤","江家店","临盘","潍北","莫西庄","春风","惠安"],
	      "中国石化_中原":[],
	      "中国石化_河南":[],
	      "中国石化_江汉":[],
	      "中国石化_江苏":[],
	      "中国石化_西北":[],
	      "中国石化_西南":[],
	      "中国石化_华东":[],
	      "中国石化_东北":[],
	      "中国石化_华北":[],
	      "中国石化_上海":[],
	      "中国石化_勘探":[],
	      "中国海油_天津":["垦利9-5/6","垦利20-1","垦利3-2","垦利10-1","垦利9-1","秦皇岛29-2","秦皇岛32-6","秦皇岛33-1","秦皇岛33-1南","埕北","歧口17-3","歧口17-2","歧口18-1","歧口18-2","南堡35-2","曹妃甸18-2","曹妃甸18-1","曹妃甸11-1","曹妃甸11-2","曹妃甸2-1","曹妃甸11-3/5","曹妃甸11-6","曹妃甸12-1南","曹妃甸21-3","渤中34-2/4","渤中3-1","渤中13-1","渤中28-1","渤中26-2","渤中25-1南","渤中34-1","渤中19-4","渤中28-2南","渤中26-3","渤中25-1","渤中29-4","渤中3-2","渤中34-6/7","渤中35-2","渤中2-1","蓬莱25-6","蓬莱19-3","蓬莱19-9","蓬莱13-2","蓬莱9-1","旅大5-2北","旅大27-2","旅大4-2","旅大32-2","绥中36-1","旅大10-1","旅大5-2","旅大6-2","锦州9-3","锦州25-1南","锦州25-1","锦州20-2北","锦州20-2","锦州21-1","金县1-1","渤中8-4","旅大21-2","垦利10-4","锦州23-2","渤中34-9","旅大16-3","曹妃甸6-4"],
	      "中国海油_深圳":["西江24-3","惠州21-1","番禺11-5","恩平23-1","陆丰13-1","番禺4-2","惠州25-3","陆丰15-1","惠州25-1","惠州26-1","恩平18-1","惠州25-4","惠州26-2","番禺10-2","惠州19-3","惠州19-2","西江30-2","番禺10-8","惠州32-3","陆丰7-2","陆丰13-2","惠州32-5","西江23-1","惠州25-8","惠州32-2","惠州33-1","恩平24-2","恩平23-7","番禺10-4","番禺10-5","恩平23-2","惠州19-1","流花16-2","流花4-1","番禺30-1","番禺34-1","流花11-1","陆丰22-1","番禺5-1","番禺11-6","流花19-5","流花34-2","番禺35-2","番禺35-1","荔湾3-1","流花29-1","流花29-2","流花27-1","流花20-2","流花21-2","流花28-2","陆丰14-4"],
	      "中国海油_湛江":[],
	      "中国海油_上海":[],
	      "中联公司_晋城":[],
	      "中联公司_太原":[],
	      "延长石油":["涧峪岔","蟠龙","赛汗乌力吉","宏博","川口","子长","丰富川","姚店","宝勒根陶海","甘谷驿","青化砭","劳山","王家川","南泥湾","子北","永坪","下寺湾","延长","河庄坪","青平川","瓦窑堡","延安","富北","子洲"]
	    },
	    "YQT_ALL": ["兴隆台","高升","欢喜岭","曙光","双台子","于楼","黄金带","热河台","法哈牛","青龙台","大民屯","牛居","大平房","静安堡","双南","茨榆坨","边台","牛心坨","大洼","海外河","冷家堡","荣兴屯","小洼","科尔沁","桃园","欧利坨子","科尔康","交力格","笔架岭","太阳岛","黄沙坨","葵花岛","广发","前河","新开","月海","龙湾筒","铁匠炉","奈曼","元宝山","雁翎","刘李庄","鄚州","高家堡","岔河集","中岔口","柳泉","别古庄","永清","文安","河西务","凤河营","顾辛庄","南马庄","深西","深南","何庄","何庄西","南小陈","荆丘","苏桥","西柳","台家庄","武强","榆科","高阳","留楚","河间","留北","留西","大王庄","八里庄","八里庄西","薛庄","肃宁","车城","侯尚村","高邑","南孟","百户","任丘","龙虎庄","赵州桥","哈达图","吉格森","阿尔善","欣苏木","赛汉","锡林","包尔","宝饶","吉和","扎布","乌兰诺尔","宝力格","乌里雅斯太","阿尔","沁水","北大港港西","北大港港东","北大港港中","北大港六间房","北大港联盟","北大港马东","北大港马西","北大港唐家河","板桥","周清庄","塘沽","长芦","王徐庄","羊三木","羊二庄","孔店","王官屯","小集","枣园","段六拨","齐家务","舍女寺","刘官庄","扣村","乌马营","埕海张巨河","埕海赵东","埕海关家堡","埕海张东东","埕海三区","叶三拨","滨海","千米桥","大张坨","高尚堡","柳赞","老爷庙","南堡","唐海","哈得逊","塔中Ⅰ号","塔中4","塔中10","塔中16","塔中6","巴什托普","轮古","英买力","哈拉哈塘","牙哈","红旗","英买7号","轮南","东河塘","解放渠东","大宛齐","羊塔克","吉拉克","提尔根","玉东2","和田河","柯克亚","克拉2","吐孜洛克","依奇克里克","迪那2","大北","克拉苏","阿克莫木","伊拉湖","火焰山","丘东","红台","鄯勒","牛东","鄯善","玉果","北小湖","巴喀","吐鲁番","鲁克沁","七泉湖","恰勒坎","三塘湖","温米","丘陵","红连","胜北","葡北","神泉","雁木西","海石湾","北三台","克拉玛依","独山子","三台","彩南","百口泉","石西","乌尔禾","夏子街","红山嘴","风城","车排子","齐古","滴水泉","火烧山","甘河","玛北","小拐","昌吉","石南","沙南","莫北","陆梁","卡因迪克","沙北","五彩湾","呼图壁","莫索湾","克拉美丽","玛河","金龙","艾湖","贝尔","乌尔逊","哈尔温","肇州","肇源","古龙","方正","喇嘛甸","葡萄花","龙虎泡","永乐","金腾","太平屯","敖包塔","朝阳沟","敖古拉","升平","高台子","齐家","龙南","高西","榆树林","卫星","徐家围子","葡西","杏树岗","杏西","宋芳屯","新店","萨西","新肇","双城","长春岭","白音诺勒","他拉哈","二站","新站","萨尔图","头台","四站","五站","龙井","阿拉新","羊草","汪家屯","宋站","汤原","昌德","太平庄","三站","徐深","涝洲","泰康","新北","新庙","乾安","海坨子","新立","木头","新民","长春","莫里青","大老爷府","大安","扶余","双坨子","红岗","孤店","两井","四五家子","大情字井","套保","永平","英台","南山湾","布海","小城子","龙深","伏龙泉","长岭1号","农安","莲池","公山庙","桂花","金华镇","中台山","黄草峡","大池干井","亭子铺","东溪","石油沟","双龙","福成寨","沙罐坪","板东","雷音铺","七里峡","铜锣峡","石龙峡","相国寺","卧龙河","张家场","邻北","新市","蒲西","云安厂","苟西","寨沟湾","金珠坪","七里北","渡口河","罗家寨","高都铺","西河口","铁山坡","高峰场","大天池","铁山","云和寨","阳高寺","九奎山","黄瓜山","龙洞坪","花果山","来苏场","东山","川主庙","新店子","古佛坎","宝华场","得胜","长宁","坛子坝","荔枝滩","南井","广福坪","永安场","桐梓园","付家庙","老翁场","宋家场","牟家坪","沈公山","打鼓场","高木顶","五通场","长垣坝","白节滩","纳溪","合江","中兴场","庙高寺","榕山镇","李子坝","塘河","鹿角场","丹凤场","朱沱镇","梁董庙","临峰场","转龙场","同福场","灵音寺","八角场","遂南","磨溪","龙女寺","广安","充西","合川","安岳","秋林","中坝","河湾场","魏城","九龙山","梓潼","沙坪坝","邛西","白马庙","圣灯山","杨家山","瓦市","龙市镇","隆昌","荷包场","古佛山","宜宾","麻柳场","龙岗","赵场","威远","自流井","邓井关","兴隆场","孔滩","观音场","大塔场","青杠坪","黄家场","李庄子","马坊","马家滩","马岭","吴旗","红井子","城壕","摆宴井","元城","华池","直罗","油房庄","安塞","庙湾","东红庄","樊家川","南梁","王洼子","白豹","镇北","胡尖山","五蛟","演武","大水坑","西峰","靖安","姬塬","绥靖","胜利井","刘家庄","靖边","米脂","苏里格","乌审旗","子洲","榆林","华庆","神木","彭阳","黄陵","新安边","环江","竹山岗","宝月","美台","花场","白莲","永安","白驹","刘庄","海安","白杨河","单北","鸭儿峡","老君庙","青西","酒东","南翼山","咸水泉","七个泉","狮子沟","冷湖","跃进二号","尕斯库勒","乌南","油泉子","红柳泉","花土沟","鱼卡","南八仙","马北","红沟子","昆北","开特米里克","尖顶山","英东","马海","盐湖","涩北一号","涩北二号","驼峰山","台南","马西","东坪","大风山","小梁山","鄂东","韩城","大吉","胜坨","永安镇","利津","单家寺","郑家","盐家","宁海","滨南","王庄","尚店","平方王","林樊家","高青","郝家","梁家楼","金家","新立村","小营","乔庄","平南","博兴","正理庄","纯化","史南","乐安","八面河","王家岗","广利","大芦湖","牛庄","现河庄","东辛","桥东","青南","垦利","垦西","邵家","义东","罗家","五号桩","新滩","孤南","长堤","河滩","红柳","埕岛","埕东","飞雁滩","花沟","孤东","渤南","老河口","陈家庄","孤岛","桩西","义北","套尔河","大王北","太平","英雄滩","东风港","富台","义和庄","商河","玉皇庙","临南","曲堤","江家店","临盘","潍北","莫西庄","春风","惠安","濮城","庆祖集","马寨","胡状集","赵庄","古云集","南湖","文东","卫城","文南","文中","文明寨","徐集","前梨园","三春集","桥口","白庙","马厂","达尔其","桑合","中康","吉祥","如意","三水宝月","普光","春光","魏岗","东庄","张店","北马庄","双河","下二门","赵凹","王集","井楼","古城","杨楼","新庄","杜坡","本布图","宝浪","王场","钟市","广华","张港","浩口","习家口","高场","浩西","老新","拖市","黄场","广北","潭口","代河","严河","马王庙","光明台","周矶","花园","沙市","荆西","万城","谢凤桥","南岗","采穴","八岭山","丫角","新沟","洪湖","建南","兴隆","曹庄","联盟庄","许庄","马家嘴","沙埝","码头庄","徐家庄","邵伯","邱家","真武","周庄","黄珏","富民","瓦庄","花庄","肖刘庄","赤岸","陈堡","卞东","闵桥","崔庄","杨家坝","范庄","李庄","石港","墩塘","安乐","小关","王龙庄","高集","梁垛","李堡","新街","安丰","朱家墩","溪南庄","红庄","草舍","储家楼","陶思庄","角墩子","洲城","茅山","淤溪","台兴","泰兴","祝庄","殷庄","边城","北汉庄","帅垛","淮建","吕家庄","腰滩","金南","张家垛","延川南","塔河","雅克拉","西达里亚","大涝坝","轮台","巴什托","亚松迪","三道桥","八屋","十屋","七棵树","秦家屯","苏家屯","后五家户","孤家子","皮家","所图","腰英台","长岭","松南","彰武","金山","龙凤山","柏垭","石龙场","孝泉","合兴场","新场","东泰","洛带","新都","成都","中江","上法","花茶","塘寨","子寅","雷公","那坤","太和场","旺隆","宝元","官渡","大牛圈","大嘴子","永铸街","曲靖","富县","大牛地","泾河","渭北","镇泾","红河","柳杨堡","环池","宁东","东胜","额热","呼仁布其","武云亭","残雪","宝云亭","绍兴36-5","孔雀亭","黄岩1-1","团结亭","黄岩2-2","残雪北","春晓","天外天","宁波22-1","宁波17-1","断桥","元坝","通南巴","涪陵","黄岩14-1","丽水36-1","西江24-3","惠州21-1","番禺11-5","恩平23-1","陆丰13-1","番禺4-2","惠州25-3","陆丰15-1","惠州25-1","惠州26-1","恩平18-1","惠州25-4","惠州26-2","番禺10-2","惠州19-3","惠州19-2","西江30-2","番禺10-8","惠州32-3","陆丰7-2","陆丰13-2","惠州32-5","西江23-1","惠州25-8","惠州32-2","惠州33-1","恩平24-2","恩平23-7","番禺10-4","番禺10-5","恩平23-2","惠州19-1","流花16-2","流花4-1","番禺30-1","番禺34-1","流花11-1","陆丰22-1","番禺5-1","番禺11-6","流花19-5","流花34-2","番禺35-2","番禺35-1","荔湾3-1","流花29-1","流花29-2","流花27-1","流花20-2","流花21-2","流花28-2","陆丰14-4","垦利9-5/6","垦利20-1","垦利3-2","垦利10-1","垦利9-1","秦皇岛29-2","秦皇岛32-6","秦皇岛33-1","秦皇岛33-1南","埕北","歧口17-3","歧口17-2","歧口18-1","歧口18-2","南堡35-2","曹妃甸18-2","曹妃甸18-1","曹妃甸11-1","曹妃甸11-2","曹妃甸2-1","曹妃甸11-3/5","曹妃甸11-6","曹妃甸12-1南","曹妃甸21-3","渤中34-2/4","渤中3-1","渤中13-1","渤中28-1","渤中26-2","渤中25-1南","渤中34-1","渤中19-4","渤中28-2南","渤中26-3","渤中25-1","渤中29-4","渤中3-2","渤中34-6/7","渤中35-2","渤中2-1","蓬莱25-6","蓬莱19-3","蓬莱19-9","蓬莱13-2","蓬莱9-1","旅大5-2北","旅大27-2","旅大4-2","旅大32-2","绥中36-1","旅大10-1","旅大5-2","旅大6-2","锦州9-3","锦州25-1南","锦州25-1","锦州20-2北","锦州20-2","锦州21-1","金县1-1","渤中8-4","旅大21-2","垦利10-4","锦州23-2","渤中34-9","旅大16-3","曹妃甸6-4","涠洲12-8","涠洲12-2","涠洲6-10","涠洲10-3","涠洲11-1N","涠洲6-9","涠洲6-8","涠洲11-2","涠洲11-7N","涠洲12-1W","涠洲11-4N","涠洲11-4","涠洲6-12","涠洲10-3N","涠洲11-1","涠洲5-7","涠洲12-1","涠洲6-1","乌石16-1","乌石1-5","乌石17-2","文昌14-3","文昌13-6","文昌10-3","文昌8-3","文昌13-2","文昌13-1","琼海18-1","文昌19-1","文昌15-1","涠洲6-13","文昌19-6","文昌9-2","文昌9-3","崖城13-1","崖城13-4","乐东22-1","东方1-4","乐东15-1","东方1-1","东方29-1","东方13-2","陵水17-2","陵水13-2","陵水18-1","陵水25-1","乌石16-1W","乌石16-9","涧峪岔","蟠龙","赛汗乌力吉","宏博","川口","子长","丰富川","姚店","宝勒根陶海","甘谷驿","青化砭","劳山","王家川","南泥湾","子北","永坪","下寺湾","延长","河庄坪","青平川","瓦窑堡","延安","富北","潘庄","大宁","柿庄南","柿庄北","宿州","临兴","柳林","古交","寿阳","南庄","大阳泉","荫营","五矿","平湖","富拉尔基","田东","大兴矿","长子","东梁","下黄岩"],
	    "CLLX": ["新发现","新查明"],
	    "YQLX": ["石油","天然气","煤层气","页岩气"],
	    "PD": ["渤海湾盆地","松辽盆地","彰武-黑山盆地","赤峰盆地","二连盆地","沁水盆地","塔里木盆地","吐鲁番-哈密盆地","三塘湖盆地","民和盆地","准噶尔盆地","海拉尔盆地","依兰伊通盆地","延吉盆地","四川盆地","鄂尔多斯盆地","三水盆地","北部湾盆地","苏北盆地","酒西盆地","酒东盆地","柴达木盆地","银-额盆地","南襄盆地","焉耆盆地","江汉盆地","百色盆地","景谷盆地","陆良盆地","保山盆地","曲靖盆地","东海盆地","珠江口盆地","渤海海域","琼东南盆地","莺歌海盆地","南华北盆地","阜新盆地"]
	}


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	
	
	var db_interface = function(){
	
	}
	
	db_interface.prototype = {
	
	  query:function (params, callback) {},
	
	  save:function (record, params, callback) {},
	
	  add:function () {}
	
	}
	
	module.exports = function (dbtype) {
	
	  if(dbtype) db_interface.prototype = __webpack_require__(12)("./db." + dbtype + '.js')
	  else console.error('no dbtype')
	
	  return new db_interface()
	
	}

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./db.html5.js": 13,
		"./db.sqlite3.js": 14
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 12;


/***/ },

/***/ 13:
/***/ function(module, exports) {

	 // 使用 html5 本地存储
	var storage = window.localStorage
	
	const DEF_DATA = {
	  DEF:[{F_DQ:'全国'},{F_DQ:'北京'},{F_DQ:'天津'},{F_DQ:'河北'},{F_DQ:'山西'},{F_DQ:'内蒙古'},{F_DQ:'辽宁'},{F_DQ:'吉林'},{F_DQ:'黑龙江'},{F_DQ:'上海'},{F_DQ:'江苏'},{F_DQ:'浙江'},{F_DQ:'安徽'},{F_DQ:'福建'},{F_DQ:'江西'},{F_DQ:'山东'},{F_DQ:'河南'},{F_DQ:'湖北'},{F_DQ:'湖南'},{F_DQ:'广东'},{F_DQ:'广西'},{F_DQ:'海南'},{F_DQ:'重庆'},{F_DQ:'四川'},{F_DQ:'贵州'},{F_DQ:'云南'},{F_DQ:'西藏'},{F_DQ:'陕西'},{F_DQ:'甘肃'},{F_DQ:'青海'},{F_DQ:'宁夏'},{F_DQ:'新疆'}],
	  KZ:[{F_NAME:'石油'},{F_NAME:'天然气'},{F_NAME:'煤层气'},{F_NAME:'页岩气'},{F_NAME:'其他'}]
	}
	
	var copyDefaultData = function (type) {
	  return JSON.parse(JSON.stringify(DEF_DATA[type] || {}))
	}
	
	var getStorageKey = function (tbname) {
	  return tbname + "_" + DATAYEAR + "_" + DATACOM + "_" + DATATYPE
	}
	
	var queryByName = function(tbname){
	
	  tbname = getStorageKey(tbname)
	  let data = {}
	  if(storage[tbname]){
	    data = JSON.parse(storage[tbname])
	  }
	  return data;
	
	}
	
	var implement = {
	
	  getStorageKey: getStorageKey,
	  
	  queryAll: function () {
	    return storage
	  },
	
	  query: function (params, callback) {
	
	    let data = queryByName(params.tbname)[params.type]
	    let isinit = false
	    if(!data){
	      data = copyDefaultData(params.type)
	      isinit = true
	    }
	    callback(data,isinit)
	
	  },
	
	  save: function (record, params, callback) {
	
	    const tbname = getStorageKey(params.tbname)
	    let sdata = queryByName(params.tbname)
	    sdata[params.type] = record
	    if(record.length > 0 || !common.isEmptyObject(record)){
	      storage[tbname] = JSON.stringify(sdata)
	    } else{
	      delete storage[tbname]
	    }
	
	    callback(true)
	
	  },
	
	  add: function () {
	      alert('implement-add')
	  },
	
	  close: function () {
	    db.close()
	  }
	}
	
	
	module.exports = implement


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	var sqlite3 = __webpack_require__(15).verbose()
	var fs = __webpack_require__(16)
	
	var db = new sqlite3.Database('sqlite3.db')
	
	
	fs.readFile('src/script/db/db.sqlite3.sql','utf-8', function(err,data){  
	  if(err){  
	      console.log("error");  
	  }else{  
	      db.run(data)
	  }  
	})
	
	
	var implement = {
	
	  query: function (params, callback) {
	
	    db.all(`SELECT rowid,* FROM ${params.tbname} `, function(err, rows) {
	      callback(rows)
	    })
	
	  },
	
	  save: function (record, params, callback) {
	
	    let sql = "",stmt = null
	
	    record.forEach(function (row,index) {
	
	      let values = [],fields = [],place = []
	
	      for(let field in row){
	        values.push(row[field])
	        fields.push(field)
	        place.push('?')
	      }
	
	      if(index == 0){
	        stmt = db.prepare("INSERT OR REPLACE INTO " +params.tbname+ "(" + fields.join(',') + ") VALUES (" + place.join(',') + ")");
	      }
	      stmt.run(values)
	    })
	
	    stmt.finalize()
	
	    callback(true)
	  },
	
	  add: function () {
	      alert('implement-add')
	  },
	
	  close: function () {
	    db.close()
	  }
	}
	
	
	module.exports = implement

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = require("sqlite3");

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	
	
	module.exports = {
	
	  // 主页
	  '/home': {
	    name: 'home',
	    cname: '开始',
	    component: function(resolve){
	      __webpack_require__.e/* require */(1/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(4)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 快报1
	  '/table/fastreport/Table1_IMP': {
	    name: 'FAST_REPORT_TABLE1_IMP',
	    cname: '按地区分列油气勘查投入与工作量情况表',
	    tbname: 'T_BUSI_YQKCTRGZL',
	    type:'快报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(81)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	  // 快报2
	  '/table/fastreport/Table2_IMP': {
	    name: 'FAST_REPORT_TABLE2_IMP',
	    cname: '油气田新增储量情况表',
	    tbname: 'T_BUSI_YQTXZCL',
	    type:'快报',
	    component: function(resolve){
	      __webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(86)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    }
	  },
	
	
	
	    // 年报1
	    '/table/yearreport/Table1_IMP': {
	      name: 'YEAR_REPORT_TABLE1_IMP',
	      cname: '油气勘查开采投资及工作量完成情况表',
	      tbname: 'T_YQKCTZ_GZL_NB',
	      type:'年报',
	      component: function(resolve){
	        __webpack_require__.e/* require */(10, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(91)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	      }
	    },
	
	    // 年报2
	    '/table/yearreport/Table2_IMP': {
	      name: 'YEAR_REPORT_TABLE2_IMP',
	      cname: '重点探井情况',
	      tbname: 'T_ZDTJQK_NB',
	      type:'年报',
	      component: function(resolve){
	        __webpack_require__.e/* require */(11, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(96)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	      }
	    },
	
	    // 年报3
	    '/table/yearreport/Table3_IMP': {
	      name: 'YEAR_REPORT_TABLE3_IMP',
	      cname: '油气资源调查评价投资及工作量完成情况表',
	      tbname: 'T_YQZYDCPJ_GZLWC_NB',
	      type:'年报',
	      component: function(resolve){
	        __webpack_require__.e/* require */(12, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(101)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	      }
	    },
	
	    // 季报1
	    '/table/seasonreport/Table1_IMP': {
	      name: 'SEASON_REPORT_TABLE1_IMP',
	      cname: '季度油气勘查开采情况表',
	      tbname: 'SEASON_REPORT_TABLE1',
	      type:'季报',
	      component: function(resolve){
	        __webpack_require__.e/* require */(13, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(106)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	      }
	    }
	
	};


/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(112)
	__vue_script__ = __webpack_require__(114)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(115)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-aba65f84/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n\r\n.fade-transition {\r\n  -webkit-transition: opacity .1s ease;\r\n  transition: opacity .1s ease;\r\n}\r\n.fade-enter, .fade-leave {\r\n  opacity: 0;\r\n}\r\n\r\n.start-modal{\r\n  position: absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding: 0;\r\n  background-color: #eff9fd;\r\n  pointer-events: none;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n  -webkit-transition: visibility 0s .22s linear , opacity .22s ease-in, -webkit-transform .22s ease-in;\r\n  transition: visibility 0s .22s linear , opacity .22s ease-in, -webkit-transform .22s ease-in;\r\n  transition: visibility 0s .22s linear , opacity .22s ease-in, transform .22s ease-in;\r\n  transition: visibility 0s .22s linear , opacity .22s ease-in, transform .22s ease-in , -webkit-transform .22s ease-in;\r\n}\r\n\r\n.is-shown {\r\n  pointer-events: auto;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transform: scale(1);\r\n          transform: scale(1);\r\n  -webkit-transition: visibility 0s 0s linear , opacity .34s ease-out, -webkit-transform .34s ease-out;\r\n  transition: visibility 0s 0s linear , opacity .34s ease-out, -webkit-transform .34s ease-out;\r\n  transition: visibility 0s 0s linear , opacity .34s ease-out, transform .34s ease-out;\r\n  transition: visibility 0s 0s linear , opacity .34s ease-out, transform .34s ease-out , -webkit-transform .34s ease-out;\r\n}\r\n\r\n.start-modal-wrapper {\r\n    margin: auto;\r\n}\r\n\r\n.start-modal-header {\r\n  padding: 30px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n@media (min-width: 940px) {\r\n  .start-modal-header {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    border-right: 1px solid #ddd;\r\n    border-bottom: none;\r\n  }\r\n  .start-modal-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.start-modal-logo {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.start-modal h2 {\r\n  text-align: center;\r\n  margin: 0 0 1em 0;\r\n}\r\n.start-modal-sections {\r\n  max-width: 680px;\r\n  padding: 30px;\r\n}\r\n.start-modal-section {\r\n  margin: 30px;\r\n}\r\n.start-modal-button{\r\n  display: block;\r\n  margin: 0 auto;\r\n  font-size: 1.4em;\r\n  font-weight: 700;\r\n  color: #007fb2;\r\n  border: 1px solid #007fb2;\r\n  height: 40px;\r\n  width: 120px;\r\n  background: #ffffff;\r\n  opacity: 1;\r\n  -webkit-transition: opacity .32s ease-in, -webkit-transform .32s ease-in;\r\n  transition: opacity .32s ease-in, -webkit-transform .32s ease-in;\r\n  transition: opacity .32s ease-in, transform .32s ease-in;\r\n  transition: opacity .32s ease-in, transform .32s ease-in, -webkit-transform .32s ease-in;\r\n}\r\n.start-modal-button:hover{\r\n  background: #c8efff;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.urls {\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 23px;\r\n    text-align: center;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.urls .item {\r\n    font-size: 1.2em;\r\n    font-weight: 700;\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 9px;\r\n    margin-left: 9px;\r\n    -webkit-transition: all .2s;\r\n    transition: all .2s;\r\n    border: 4px solid transparent;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-align: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    color: #3C9365;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #3C9365;\r\n    -webkit-transition: all .12s ease-in;\r\n    transition: all .12s ease-in;\r\n}\r\n.urls .item.checked,\r\n.urls .item:hover {\r\n    color: #fff;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.urls .item span {\r\n    line-height: 1.4;\r\n    display: inline-block;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.urls .fast {color: #FABF8F;border-color: #FDE3CD;box-shadow: inset 0 0 1px 1px #FABF8F;}\r\n.urls .fast.checked,.urls .fast:hover {background: #FABF8F;}\r\n.urls .year {color: #8DB4E2;border-color: #D9EAFF;box-shadow: inset 0 0 1px 1px #8DB4E2;}\r\n.urls .year.checked,.urls .year:hover {background: #8DB4E2;}\r\n.urls .season {color: #76933C;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #76933C;}\r\n.urls .season.checked,.urls .season:hover {background: #76933C;}\r\n\r\n.urls .month {color: #22B1AC;border-color: #C1E5E4;box-shadow: inset 0 0 1px 1px #22B1AC;}\r\n.urls .month.checked,.urls .month:hover {background: #22B1AC;}\r\n.urls .special {color: #C3C3C3;border-color: #E4E4E4;box-shadow: inset 0 0 1px 1px #C3C3C3;}\r\n.urls .special.checked,.urls .special:hover {background: #C3C3C3;}\r\n.urls .other {color: #7092BE;border-color: #BDD5F4;box-shadow: inset 0 0 1px 1px #7092BE;}\r\n.urls .other.checked,.urls .other:hover {background: #7092BE;}\r\n\r\n\r\n.wclose{\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #a9d1fb;\r\n  text-align: center;\r\n}\r\n", "", {"version":3,"sources":["/./src/App.vue?4e73144c"],"names":[],"mappings":";;AAEA;EACA,qCAAA;EAAA,6BAAA;CACA;AACA;EACA,WAAA;CACA;;AAEA;EACA,mBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,0BAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,8BAAA;UAAA,sBAAA;EACA,qGAAA;EAAA,6FAAA;EAAA,qFAAA;EAAA,sHAAA;CACA;;AAEA;EACA,qBAAA;EACA,oBAAA;EACA,WAAA;EACA,4BAAA;UAAA,oBAAA;EACA,qGAAA;EAAA,6FAAA;EAAA,qFAAA;EAAA,uHAAA;CACA;;AAEA;IACA,aAAA;CACA;;AAEA;EACA,cAAA;EACA,8BAAA;CACA;;AAEA;EACA;IACA,4BAAA;QAAA,mBAAA;IACA,6BAAA;IACA,oBAAA;GACA;EACA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;GACA;CACA;;AAEA;EACA,eAAA;EACA,eAAA;CACA;;AAEA;EACA,mBAAA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;EACA,cAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,0BAAA;EACA,aAAA;EACA,aAAA;EACA,oBAAA;EACA,WAAA;EACA,yEAAA;EAAA,iEAAA;EAAA,yDAAA;EAAA,yFAAA;CACA;AACA;EACA,oBAAA;EACA,WAAA;CACA;;;AAGA;IAEA,qBAAA;IACA,qBAAA;IAAA,cAAA;IACA,iBAAA;IACA,mBAAA;IAEA,sBAAA;IACA,yBAAA;YAAA,wBAAA;CACA;AACA;IACA,iBAAA;IACA,iBAAA;IAEA,qBAAA;IACA,qBAAA;IAAA,cAAA;IACA,YAAA;IACA,aAAA;IACA,kBAAA;IACA,iBAAA;IACA,4BAAA;IAAA,oBAAA;IACA,8BAAA;IACA,mBAAA;IACA,iBAAA;IAEA,sBAAA;IACA,yBAAA;YAAA,wBAAA;IAEA,uBAAA;IACA,0BAAA;YAAA,oBAAA;IACA,eAAA,sBAAA,sCAAA;IACA,qCAAA;IAAA,6BAAA;CACA;AACA;;IAEA,YAAA;IACA,8BAAA;YAAA,sBAAA;CACA;AACA;IACA,iBAAA;IACA,sBAAA;IACA,YAAA;IACA,mBAAA;CACA;;;AAGA,aAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,uCAAA,oBAAA,CAAA;AACA,aAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,uCAAA,oBAAA,CAAA;AACA,eAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,2CAAA,oBAAA,CAAA;;AAEA,cAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,yCAAA,oBAAA,CAAA;AACA,gBAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,6CAAA,oBAAA,CAAA;AACA,cAAA,eAAA,sBAAA,sCAAA,CAAA;AACA,yCAAA,oBAAA,CAAA;;;AAGA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,mBAAA;CACA","file":"App.vue","sourcesContent":["<style>\r\n\r\n.fade-transition {\r\n  transition: opacity .1s ease;\r\n}\r\n.fade-enter, .fade-leave {\r\n  opacity: 0;\r\n}\r\n\r\n.start-modal{\r\n  position: absolute;\r\n  display: flex;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding: 0;\r\n  background-color: #eff9fd;\r\n  pointer-events: none;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transform: scale(1.1);\r\n  transition: visibility 0s .22s linear , opacity .22s ease-in, transform .22s ease-in;\r\n}\r\n\r\n.is-shown {\r\n  pointer-events: auto;\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  transition: visibility 0s 0s linear , opacity .34s ease-out, transform .34s ease-out;\r\n}\r\n\r\n.start-modal-wrapper {\r\n    margin: auto;\r\n}\r\n\r\n.start-modal-header {\r\n  padding: 30px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n@media (min-width: 940px) {\r\n  .start-modal-header {\r\n    align-self: center;\r\n    border-right: 1px solid #ddd;\r\n    border-bottom: none;\r\n  }\r\n  .start-modal-wrapper {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n.start-modal-logo {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.start-modal h2 {\r\n  text-align: center;\r\n  margin: 0 0 1em 0;\r\n}\r\n.start-modal-sections {\r\n  max-width: 680px;\r\n  padding: 30px;\r\n}\r\n.start-modal-section {\r\n  margin: 30px;\r\n}\r\n.start-modal-button{\r\n  display: block;\r\n  margin: 0 auto;\r\n  font-size: 1.4em;\r\n  font-weight: 700;\r\n  color: #007fb2;\r\n  border: 1px solid #007fb2;\r\n  height: 40px;\r\n  width: 120px;\r\n  background: #ffffff;\r\n  opacity: 1;\r\n  transition: opacity .32s ease-in, transform .32s ease-in;\r\n}\r\n.start-modal-button:hover{\r\n  background: #c8efff;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.urls {\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 23px;\r\n    text-align: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n}\r\n.urls .item {\r\n    font-size: 1.2em;\r\n    font-weight: 700;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 9px;\r\n    margin-left: 9px;\r\n    transition: all .2s;\r\n    border: 4px solid transparent;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    color: #3C9365;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #3C9365;\r\n    transition: all .12s ease-in;\r\n}\r\n.urls .item.checked,\r\n.urls .item:hover {\r\n    color: #fff;\r\n    transform: scale(1.2);\r\n}\r\n.urls .item span {\r\n    line-height: 1.4;\r\n    display: inline-block;\r\n    width: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.urls .fast {color: #FABF8F;border-color: #FDE3CD;box-shadow: inset 0 0 1px 1px #FABF8F;}\r\n.urls .fast.checked,.urls .fast:hover {background: #FABF8F;}\r\n.urls .year {color: #8DB4E2;border-color: #D9EAFF;box-shadow: inset 0 0 1px 1px #8DB4E2;}\r\n.urls .year.checked,.urls .year:hover {background: #8DB4E2;}\r\n.urls .season {color: #76933C;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #76933C;}\r\n.urls .season.checked,.urls .season:hover {background: #76933C;}\r\n\r\n.urls .month {color: #22B1AC;border-color: #C1E5E4;box-shadow: inset 0 0 1px 1px #22B1AC;}\r\n.urls .month.checked,.urls .month:hover {background: #22B1AC;}\r\n.urls .special {color: #C3C3C3;border-color: #E4E4E4;box-shadow: inset 0 0 1px 1px #C3C3C3;}\r\n.urls .special.checked,.urls .special:hover {background: #C3C3C3;}\r\n.urls .other {color: #7092BE;border-color: #BDD5F4;box-shadow: inset 0 0 1px 1px #7092BE;}\r\n.urls .other.checked,.urls .other:hover {background: #7092BE;}\r\n\r\n\r\n.wclose{\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #a9d1fb;\r\n  text-align: center;\r\n}\r\n</style>\r\n<template>\r\n\r\n<div class=\"window js-context-menu\">\r\n\r\n  <!-- header -->\r\n  <header class=\"toolbar toolbar-header\">\r\n    <h1 class=\"title\">\r\n      <div class=\"btns\">\r\n        <button class=\"btn btn-default\" v-on:click=\"refresh\">\r\n          <span class=\"icon icon-home\"></span>\r\n        </button>\r\n\r\n<!--         <div class=\"btn-group\">\r\n          <button class=\"btn btn-default\" @click=\"goBefore\">\r\n            <span class=\"icon icon-left\"></span>\r\n          </button>\r\n          <button class=\"btn btn-default\" @click=\"goAfter\">\r\n            <span class=\"icon icon-right\"></span>\r\n          </button>\r\n        </div> -->\r\n\r\n<!--         <button class=\"btn btn-default\">\r\n          <span class=\"icon icon-cog\"></span>\r\n        </button> -->\r\n\r\n      </div>\r\n      <span class=\"text\">信息报送客户端 - <span style=\"color:#108EE9\">{{type}}</span></span>\r\n      <div class=\"tools\">\r\n        <a setup=\"minus\" v-on:click=\"minAppWindow\"><span class=\"icon icon-minus\"></span></a>\r\n        <a setup=\"resize\" v-on:click=\"resizeAppWindow\"><span class=\"icon icon-popup\"></span></a>\r\n        <a setup=\"close\" v-on:click=\"closeAppWindow\"><span class=\"icon icon-cancel\"></span></a>\r\n      </div>\r\n    </h1>\r\n  </header>\r\n\r\n\r\n  <div class=\"tab-group\">\r\n\r\n\r\n    <a v-for=\"route in routes\" v-show=\"!route.type || route.type == type\" v-link=\"{ path: $key }\">\r\n      <div class=\"tab-item\" v-text=\"route.cname\">\r\n        <!-- <span class=\"icon icon-cancel icon-close-tab\"></span> -->\r\n      </div>\r\n    </a>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"window-content\">\r\n    <router-view transition=\"fade\" transition-mode=\"out-in\"></router-view>\r\n  </div>\r\n\r\n\r\n  <!-- footer -->\r\n  <footer class=\"toolbar toolbar-footer\">\r\n    <h1 class=\"title\">石大正信@2016</h1>\r\n  </footer>\r\n\r\n  <div class=\"start-modal is-shown\">\r\n\r\n    <a class=\"wclose\" setup=\"close\" v-on:click=\"closeAppWindow\"><span class=\"icon icon-cancel\"></span></a>\r\n\r\n    <div class=\"start-modal-wrapper\">\r\n      <header class=\"start-modal-header\">\r\n        <img class=\"start-modal-logo\" src=\"data:image/png;base64,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\">\r\n        <h2>信息报送客户端</h2>\r\n        <p>国土资源部油气资源战略研究中心</p>\r\n        <p>地址：北京市西城区兵马司胡同19号（100034）</p>\r\n        <p>邮箱：youqizhongxin@163.com</p>\r\n      </header>\r\n\r\n      <main class=\"start-modal-sections\">\r\n        <section class=\"start-modal-section play-along\">\r\n          <h2>填报设置</h2>\r\n\r\n            <div class=\"urls\">\r\n                <a href=\"javascript:;\" class=\"item year\" :class=\"{ checked: type == '年报' }\" @click=\"checkDataType\"><span>年报</span></a>\r\n                <a href=\"javascript:;\" class=\"item fast\" :class=\"{ checked: type == '快报' }\" @click=\"checkDataType\"><span>快报</span></a>\r\n                <a href=\"javascript:;\" class=\"item season\" :class=\"{ checked: type == '季报' }\" @click=\"checkDataType\"><span>季报</span></a>\r\n                <a href=\"javascript:;\" class=\"item month\" :class=\"{ checked: type == '月报' }\" @click=\"checkDataType\"><span>月报</span></a>\r\n                <a href=\"javascript:;\" class=\"item special\" :class=\"{ checked: type == '专报' }\" @click=\"checkDataType\"><span>专报</span></a>\r\n                <a href=\"javascript:;\" class=\"item other\" :class=\"{ checked: type == '其他' }\" @click=\"checkDataType\"><span>其他</span></a>\r\n            </div>\r\n            <p>\r\n              <label>填报年份:</label>\r\n              <select class=\"form-control\" id=\"datayear\">\r\n                <option>2016</option><option>2017</option><option>2018</option>\r\n                <option>2019</option><option>2020</option><option>2021</option>\r\n                <option>2022</option><option>2023</option><option>2024</option>\r\n                <option>2025</option>\r\n              </select>\r\n            </p>\r\n            <p v-show=\"type == '月报'\">\r\n              <label>填报月份:</label>\r\n              <select class=\"form-control\" id=\"datamonth\">\r\n                <option>1月</option><option>2月</option><option>3月</option>\r\n                <option>4月</option><option>5月</option><option>6月</option>\r\n                <option>7月</option><option>8月</option><option>9月</option>\r\n                <option>10月</option><option>11月</option><option>12月</option>\r\n              </select>\r\n            </p>\r\n            <p v-show=\"type == '季报'\">\r\n              <label>填报季度:</label>\r\n              <select class=\"form-control\" id=\"dataseason\">\r\n                <option>第一季度</option><option>第二季度</option><option>第三季度</option>\r\n                <option>第四季度</option>\r\n              </select>\r\n            </p>\r\n            <p>\r\n              <label>填报单位:</label>\r\n              <select class=\"form-control\" id=\"datacom\">\r\n                <option v-for=\"option in YGS\" v-bind:value=\"$key\">\r\n                  {{ $key }}\r\n                </option>\r\n              </select>\r\n            </p>\r\n\r\n        </section>\r\n\r\n        <footer class=\"start-modal-section footer\">\r\n          <div class=\"rainbow-button-wrapper\">\r\n            <button @click=\"initParam\" class=\"btn start-modal-button\">确定</button>\r\n          </div>\r\n        </footer>\r\n      </main>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</template>\r\n\r\n<script>\r\nconst ipc = require('electron').ipcRenderer\r\nimport { YGS } from 'Db/datas'\r\n\r\nexport default {\r\n  data () {\r\n    return {\r\n      routes:routes,\r\n      YGS:YGS,\r\n      type:'快报'\r\n    }\r\n  },\r\n  methods: {\r\n    refresh: function () {\r\n      ipc.send('refresh')\r\n    },\r\n    closeAppWindow: function () { ipc.send('close-appwindow') },\r\n    resizeAppWindow: function () { ipc.send('resize-appwindow') },\r\n    minAppWindow: function () { ipc.send('min-appwindow') },\r\n\r\n    goBefore: function(){ ipc.send('go-before') },\r\n    goAfter: function(){ ipc.send('go-after') },\r\n\r\n    toggerModal:function(){\r\n      common.queryElement('.start-modal').classList.toggle('is-shown')\r\n    },\r\n    checkDataType: function(event){\r\n      this.type = event.srcElement.innerText.trim()\r\n    },\r\n    initParam: function(){\r\n      this.toggerModal()\r\n\r\n      let home = this.$children[0]\r\n\r\n      global.DATAYEAR = common.queryElement('#datayear').value\r\n      global.DATACOM = common.queryElement('#datacom').value\r\n      global.DATATYPE = this.type\r\n\r\n      global.DATAMONTH = common.queryElement('#datamonth').value\r\n      global.DATASEASON = common.queryElement('#dataseason').value\r\n\r\n      if(home){\r\n        home.initData()\r\n      }else{\r\n        this.$router.go({path:\"/home\"})\r\n      }\r\n    }\r\n  }\r\n}\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _datas = __webpack_require__(10);
	
	var ipc = __webpack_require__(17).ipcRenderer;
	exports.default = {
	  data: function data() {
	    return {
	      routes: routes,
	      YGS: _datas.YGS,
	      type: '快报'
	    };
	  },
	
	  methods: {
	    refresh: function refresh() {
	      ipc.send('refresh');
	    },
	    closeAppWindow: function closeAppWindow() {
	      ipc.send('close-appwindow');
	    },
	    resizeAppWindow: function resizeAppWindow() {
	      ipc.send('resize-appwindow');
	    },
	    minAppWindow: function minAppWindow() {
	      ipc.send('min-appwindow');
	    },
	
	    goBefore: function goBefore() {
	      ipc.send('go-before');
	    },
	    goAfter: function goAfter() {
	      ipc.send('go-after');
	    },
	
	    toggerModal: function toggerModal() {
	      common.queryElement('.start-modal').classList.toggle('is-shown');
	    },
	    checkDataType: function checkDataType(event) {
	      this.type = event.srcElement.innerText.trim();
	    },
	    initParam: function initParam() {
	      this.toggerModal();
	
	      var home = this.$children[0];
	
	      global.DATAYEAR = common.queryElement('#datayear').value;
	      global.DATACOM = common.queryElement('#datacom').value;
	      global.DATATYPE = this.type;
	
	      global.DATAMONTH = common.queryElement('#datamonth').value;
	      global.DATASEASON = common.queryElement('#dataseason').value;
	
	      if (home) {
	        home.initData();
	      } else {
	        this.$router.go({ path: "/home" });
	      }
	    }
	  }
	};

/***/ },

/***/ 115:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n<div class=\"window js-context-menu\">\r\n\r\n  <!-- header -->\r\n  <header class=\"toolbar toolbar-header\">\r\n    <h1 class=\"title\">\r\n      <div class=\"btns\">\r\n        <button class=\"btn btn-default\" v-on:click=\"refresh\">\r\n          <span class=\"icon icon-home\"></span>\r\n        </button>\r\n\r\n<!--         <div class=\"btn-group\">\r\n          <button class=\"btn btn-default\" @click=\"goBefore\">\r\n            <span class=\"icon icon-left\"></span>\r\n          </button>\r\n          <button class=\"btn btn-default\" @click=\"goAfter\">\r\n            <span class=\"icon icon-right\"></span>\r\n          </button>\r\n        </div> -->\r\n\r\n<!--         <button class=\"btn btn-default\">\r\n          <span class=\"icon icon-cog\"></span>\r\n        </button> -->\r\n\r\n      </div>\r\n      <span class=\"text\">信息报送客户端 - <span style=\"color:#108EE9\">{{type}}</span></span>\r\n      <div class=\"tools\">\r\n        <a setup=\"minus\" v-on:click=\"minAppWindow\"><span class=\"icon icon-minus\"></span></a>\r\n        <a setup=\"resize\" v-on:click=\"resizeAppWindow\"><span class=\"icon icon-popup\"></span></a>\r\n        <a setup=\"close\" v-on:click=\"closeAppWindow\"><span class=\"icon icon-cancel\"></span></a>\r\n      </div>\r\n    </h1>\r\n  </header>\r\n\r\n\r\n  <div class=\"tab-group\">\r\n\r\n\r\n    <a v-for=\"route in routes\" v-show=\"!route.type || route.type == type\" v-link=\"{ path: $key }\">\r\n      <div class=\"tab-item\" v-text=\"route.cname\">\r\n        <!-- <span class=\"icon icon-cancel icon-close-tab\"></span> -->\r\n      </div>\r\n    </a>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"window-content\">\r\n    <router-view transition=\"fade\" transition-mode=\"out-in\"></router-view>\r\n  </div>\r\n\r\n\r\n  <!-- footer -->\r\n  <footer class=\"toolbar toolbar-footer\">\r\n    <h1 class=\"title\">石大正信@2016</h1>\r\n  </footer>\r\n\r\n  <div class=\"start-modal is-shown\">\r\n\r\n    <a class=\"wclose\" setup=\"close\" v-on:click=\"closeAppWindow\"><span class=\"icon icon-cancel\"></span></a>\r\n\r\n    <div class=\"start-modal-wrapper\">\r\n      <header class=\"start-modal-header\">\r\n        <img class=\"start-modal-logo\" src=\"data:image/png;base64,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\">\r\n        <h2>信息报送客户端</h2>\r\n        <p>国土资源部油气资源战略研究中心</p>\r\n        <p>地址：北京市西城区兵马司胡同19号（100034）</p>\r\n        <p>邮箱：youqizhongxin@163.com</p>\r\n      </header>\r\n\r\n      <main class=\"start-modal-sections\">\r\n        <section class=\"start-modal-section play-along\">\r\n          <h2>填报设置</h2>\r\n\r\n            <div class=\"urls\">\r\n                <a href=\"javascript:;\" class=\"item year\" :class=\"{ checked: type == '年报' }\" @click=\"checkDataType\"><span>年报</span></a>\r\n                <a href=\"javascript:;\" class=\"item fast\" :class=\"{ checked: type == '快报' }\" @click=\"checkDataType\"><span>快报</span></a>\r\n                <a href=\"javascript:;\" class=\"item season\" :class=\"{ checked: type == '季报' }\" @click=\"checkDataType\"><span>季报</span></a>\r\n                <a href=\"javascript:;\" class=\"item month\" :class=\"{ checked: type == '月报' }\" @click=\"checkDataType\"><span>月报</span></a>\r\n                <a href=\"javascript:;\" class=\"item special\" :class=\"{ checked: type == '专报' }\" @click=\"checkDataType\"><span>专报</span></a>\r\n                <a href=\"javascript:;\" class=\"item other\" :class=\"{ checked: type == '其他' }\" @click=\"checkDataType\"><span>其他</span></a>\r\n            </div>\r\n            <p>\r\n              <label>填报年份:</label>\r\n              <select class=\"form-control\" id=\"datayear\">\r\n                <option>2016</option><option>2017</option><option>2018</option>\r\n                <option>2019</option><option>2020</option><option>2021</option>\r\n                <option>2022</option><option>2023</option><option>2024</option>\r\n                <option>2025</option>\r\n              </select>\r\n            </p>\r\n            <p v-show=\"type == '月报'\">\r\n              <label>填报月份:</label>\r\n              <select class=\"form-control\" id=\"datamonth\">\r\n                <option>1月</option><option>2月</option><option>3月</option>\r\n                <option>4月</option><option>5月</option><option>6月</option>\r\n                <option>7月</option><option>8月</option><option>9月</option>\r\n                <option>10月</option><option>11月</option><option>12月</option>\r\n              </select>\r\n            </p>\r\n            <p v-show=\"type == '季报'\">\r\n              <label>填报季度:</label>\r\n              <select class=\"form-control\" id=\"dataseason\">\r\n                <option>第一季度</option><option>第二季度</option><option>第三季度</option>\r\n                <option>第四季度</option>\r\n              </select>\r\n            </p>\r\n            <p>\r\n              <label>填报单位:</label>\r\n              <select class=\"form-control\" id=\"datacom\">\r\n                <option v-for=\"option in YGS\" v-bind:value=\"$key\">\r\n                  {{ $key }}\r\n                </option>\r\n              </select>\r\n            </p>\r\n\r\n        </section>\r\n\r\n        <footer class=\"start-modal-section footer\">\r\n          <div class=\"rainbow-button-wrapper\">\r\n            <button @click=\"initParam\" class=\"btn start-modal-button\">确定</button>\r\n          </div>\r\n        </footer>\r\n      </main>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n";

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	const ipc = __webpack_require__(17).ipcRenderer
	
	// 公共方法
	const common = function(Vue){
	
	
	  var on = function (selectors,event, callback) {
	    queryElement(selectors).addEventListener(event, callback)
	  }
	
	  var queryElement = function (selectors) {
	    let element = document.querySelectorAll(selectors)
	
	    return element.length > 1 ? element : element[0]
	  }
	
	  var toggleClassByLevel = function(el, className){
	
	    var forClass = function(_className,callback){
	      _className.split(" ").forEach(function(_c) {
	        callback(_c)
	      })
	    }
	
	    for(let _el of el.parentElement.children){
	      forClass(className, function(_c){ _el.classList.remove(_c) })
	    }
	    forClass(className, function(_c){ el.classList.add(_c) })
	
	  }
	
	  /**
	   * 判断json对象是否为空
	   */
	  var isEmptyObject = function(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	  }
	
	  return {
	    toggleClassByLevel:toggleClassByLevel,
	    queryElement: queryElement,
	    on:on,
	    isEmptyObject: isEmptyObject,
	    msg: function (msg) {
	      ipc.send('show-message',msg)
	    }
	  }
	}
	
	module.exports = common


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	// 为 vue.js view组建 提供 公共方法
	const db = __webpack_require__(11)('html5')
	const ipc = __webpack_require__(17).ipcRenderer
	const fs = __webpack_require__(16)
	var path = __webpack_require__(118)
	const xlsx = __webpack_require__(119)
	
	const xml2js = __webpack_require__(120)
	var zip = __webpack_require__(121)
	var builder = new xml2js.Builder({
	  rootName: "DataRoot"
	});  // JSON->xml
	
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};
	
	const commonVue = function(Vue){
	
	  var getSTtype = function(){
	    let stype = "DEF"
	
	    if(DATATYPE == '季报') stype = DATASEASON
	    if(DATATYPE == '月报') stype = DATAMONTH
	
	    return stype
	  }
	
	  var getDataStr = function(){
	    var date = new Date();//.转换成毫秒
	    var str = date.getFullYear() + "-"
	            + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-"
	            + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
	    return str
	  }
	
	  var isEmptyObject = function(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	  }
	
	  var mkdirsSync = function(dirname, mode){
	    if(fs.existsSync(dirname)){
	        return true;
	    }else{
	        if(mkdirsSync(path.dirname(dirname), mode)){
	            fs.mkdirSync(dirname, mode);
	            return true;
	        }
	    }
	  }
	
	  var fsExistsSync = function(path) {
	    try{
	        fs.accessSync(path,fs.F_OK);
	    }catch(e){
	        return false;
	    }
	    return true;
	  }
	
	  var getMergeData = function(dbname, keys){
	
	    let storage = db.queryAll()
	    let stype = getSTtype()
	    let mergeObj = {}
	    let newData = []
	
	    if(storage[dbname]){
	      var data = JSON.parse(storage[dbname])[stype]
	      if(data){
	        data.forEach(function(row, idx){
	
	          let keyStr = ""
	          for (var i = 0; i < keys.length; i++) { keyStr += "_" + row[ keys[i] ] }
	          if(!mergeObj[keyStr]){
	            mergeObj[keyStr] = {}
	          }
	
	          for(field in row){
	            const val = row[field]
	            if(field == 'F_FGS') continue
	            if(!isNaN(val)){
	              if( !mergeObj[keyStr][field] ) mergeObj[keyStr][field] = 0
	              mergeObj[keyStr][field] += (1*val)
	            }else{
	              mergeObj[keyStr][field] = val
	            }
	          }
	
	        })
	
	        for(k in mergeObj){ newData.push(mergeObj[k]) }
	        var newObj = {}
	        newObj[stype] = newData
	        // storage[dbname] = JSON.stringify( newObj )
	        storage[dbname.replace("_IMP","")] = JSON.stringify( newObj )
	      }
	    }
	    return mergeObj
	  }
	
	  // 数据打包
	  var dataPack = function (tables, files, path, fillperson, comment, reviewer) {
	
	    if(!fillperson && !comment) {
	      ipc.send('show-message','请填写 填报人或填报说明！')
	      return
	    }
	
	    if(isEmptyObject(tables) && files.length == 0) {
	      ipc.send('show-message','请选择打包数据！')
	      return
	    }
	
	    let info = {
	      Baseinfo:{
	        YEAR:DATAYEAR,
	        NAME:zipName,
	        COMPANY:DATACOM,
	        TYPE: DATATYPE,
	        INFORMANT: fillperson,
	        REVIEWER: reviewer,
	        REVIEWTIME: "",
	        COMMENT: comment
	      },
	      DataPack:{ Record:[] },
	      FilePack:{ Record:[] }
	    }
	    if(DATATYPE == '季报') info.Baseinfo.SEASON = DATASEASON
	    if(DATATYPE == '月报') info.Baseinfo.MONTH = DATAMONTH
	
	    let _zip = new zip()
	
	    let storage = db.queryAll()
	    let stype = getSTtype()
	
	    // 表
	    for(let name in tables){
	      let tname = db.getStorageKey(name)
	      const tobj = tables[name][0]
	      if(storage[tname]){
	        let tableData = JSON.parse(storage[tname])
	        let d = tableData[stype]
	        if(d) _zip.file("data/"+name + ".xml", builder.buildObject({Record:d}))
	
	        info.DataPack.Record.push(tobj);
	
	        // tables[name].forEach(function(type, index){
	        //   let d = tableData[type]
	        //   if(d) _zip.file("data/"+name + ".xml", builder.buildObject({Record:d}))
	        // })
	
	      }
	    }
	    ipc.send('show-progressBar',0.5)
	    // 文件
	    var flength = files.length;
	    for(var i=0;i<flength;i++){
	      const fitem = files[i]
	      info.FilePack.Record.push(fitem);
	
	      if(fsExistsSync(fitem.path))
	        _zip.file("file/"+fitem.type + "/" + fitem.name, fs.readFileSync(fitem.path))
	      else
	        ipc.send('show-message','[' + fitem.path + '] 文件不存在！')
	    }
	    ipc.send('show-progressBar',0.7)
	
	    // 基本信息
	    _zip.file("info.xml", builder.buildObject(info))
	
	    if(isEmptyObject(_zip.files)) {
	      ipc.send('show-message','未发现数据！')
	      return
	    }
	
	    let data = _zip.generate({base64:false,compression:'DEFLATE'});
	    fs.writeFileSync(path, data, 'binary')
	    ipc.send('show-message','打包数据成功！')
	    ipc.send('show-progressBar',-1)
	    common.queryElement('#savepath').value = '';
	
	  }
	
	  // 数据导入/合并
	  var dataImport = function (path, fgs) {
	
	    if(!path) {
	      ipc.send('show-message','请选择导入数据！')
	      return
	    }
	
	    const temp = "C:/IRS/"
	    // const temp = __dirname.replace(/\\/g,'/') + "/"
	
	    let _zip = new zip(fs.readFileSync(path),{base64: false, checkCRC32: true})
	    let storage = db.queryAll()
	    let stype = getSTtype()
	
	    const type_en = {
	      "报告":"report",
	      "图件":"photo",
	      "附件":"file"
	    }
	    let filedatas = { file:[],report:[],photo:[] }
	
	    const files = _zip.files
	    for(const key in files){
	
	      // 文件
	      if(key.indexOf("file/") > -1){
	        var file = temp + key
	        var name = file.substr(file.lastIndexOf("/") + 1)
	        var fpath = file.substring(0, file.lastIndexOf("/"))
	        var type = fpath.substring(fpath.lastIndexOf("/") + 1)
	
	        mkdirsSync(fpath)
	        fs.writeFileSync(file, files[key].asBinary(), 'binary')
	
	        filedatas[type_en[type]].splice(0, 0, {
	          name: name,
	          type: type,
	          path: file
	        });
	
	      }
	
	      // 数据
	      if(key.indexOf("data/") > -1){
	        const name = key.substring(5, key.length - 4).toUpperCase() + "_IMP"
	        const dbname = db.getStorageKey(name)
	        let storagedata = storage[dbname] ? JSON.parse(storage[dbname]) : {}
	        if(!storagedata[stype]) storagedata[stype] = []
	
	        removeExist(fgs, storagedata[stype])
	
	        xml2js.parseString(files[key].asText(), {mergeAttrs:true,explicitArray: false}, function (err, result) {
	          var data = result.DataRoot.Record.constructor == Array ? result.DataRoot.Record : [result.DataRoot.Record]
	          for (var i = 0; i < data.length; i++) {
	            data[i].F_FGS = fgs
	          }
	
	          storagedata[stype] = storagedata[stype].concat(data)
	          storage[dbname] = JSON.stringify( storagedata )
	        });
	
	      }
	    }
	
	    // 删除重复数据
	    function removeExist(fgs, data){
	      for (var i = 0; i < data.length; i++) {
	        if(fgs == data[i].F_FGS){
	          data.splice(i,1)
	          removeExist(fgs, data)
	          break
	        }
	      }
	    }
	
	    // 保存文件
	    var fdbname = db.getStorageKey("FILES")
	    let storagedata = storage[fdbname] ? JSON.parse(storage[fdbname]) : {}
	    if(isEmptyObject(storagedata[stype])) storagedata[stype] = { file:[],report:[],photo:[] }
	    for(t in filedatas){
	      storagedata[stype][t] = storagedata[stype][t].concat(filedatas[t])
	    }
	    storage[fdbname] = JSON.stringify( storagedata )
	
	
	    ipc.send('show-message','导入完成！')
	    common.queryElement('.modal-layer').classList.toggle('modal-layer-visible')
	    common.queryElement('.dataimport-modal').classList.toggle('visible')
	  }
	
	  var mergeImpData = function(tables){
	
	    const ts = toNative(tables)
	    const keys = {
	      "FAST_REPORT_TABLE1_IMP" : ["F_DQ"],
	      "FAST_REPORT_TABLE2_IMP" : ["F_TYPE", "F_KZMC", "F_YQTFGS", "F_SHENG", "F_YQTMC"]
	    }
	
	    ts.forEach(function(item, idx){
	
	      const name = item.name
	      const dbname = db.getStorageKey(name)
	
	      getMergeData(dbname, keys[name])
	    })
	
	
	  }
	
	  // 打开文件
	  var openPath = function (callback) {
	
	    ipc.send('open-dialog','zip')
	    ipc.once('opened-file', function (event, path) {
	      if (path) {
	        path = (''+path).replace(/\\/g,'//')
	        let _zip = new zip(fs.readFileSync(path),{base64: false, checkCRC32: true})
	
	        const info = _zip.files["info.xml"]
	        if(info){
	          new xml2js.Parser().parseString(info.asText(), function (err, result) {
	              callback(path, result.DataRoot)
	          });
	        }else{
	          ipc.send('show-message','请选择正确的数据！')
	        }
	
	      }
	    })
	
	  }
	
	  // 浏览路径
	  var savePath = function (callback) {
	    global.zipName = `${DATAYEAR}年${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`
	    if(DATATYPE == '季报') global.zipName = `${DATAYEAR}年${DATASEASON}${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`
	    if(DATATYPE == '月报') global.zipName = `${DATAYEAR}年${DATAMONTH}${DATACOM}油气勘探开发信息报告[${DATATYPE}][${getDataStr()}]`
	
	    ipc.send('save-dialog','zip', zipName)
	    ipc.once('saved-file', function (event, path) {
	      if (path) callback(path)
	    })
	  }
	
	  // 将 vue get/set化的json对象 转换为原生json
	  var toNative = function(data){
	    return JSON.parse(JSON.stringify(data))
	  }
	
	  let methods = {
	
	    save: function(comp, params){
	
	      db.save(toNative(comp.data) ,params,function () {
	        ipc.send('show-message','数据保存完成！')
	      })
	
	    },
	
	    query: function (comp, params, callback) {
	      db.query(params, callback)
	    },
	
	    changeTab: function(event){
	
	      if(event.toElement.classList[1]) return
	      common.toggleClassByLevel(event.toElement, "active")
	      params.type = event.toElement.getAttribute("name")
	
	      this.query()
	    },
	
	    exportExcel: function(comp, data, title, _columns){
	
	      const { cname } = comp.$route
	      title = `${cname}-${DATACOM}${DATAYEAR}年`
	      if(DATATYPE == '季报') title += DATASEASON
	      if(DATATYPE == '月报') title += DATAMONTH
	
	      const columns = toNative(_columns);
	      let jsonData = toNative(data)
	      ipc.send('save-dialog','excel', title)
	      ipc.on('saved-file', function (event, path) {
	        if (path) {
	
	          let data = []
	          columns.forEach(function(obj,index){
	
	            let tname = obj.shw
	            if(tname.constructor == Object){
	                tname = obj.shw.text
	            } else if(tname.constructor == Array){
	              tname = ""
	              obj.shw.forEach(function(_shw){
	                if(_shw) tname = (_shw.constructor == Object ? _shw.text : _shw)
	              })
	            }
	            data.push(tname.replace(/<[^>]+>/g,""))
	          })
	          data = [data]
	          jsonData.forEach(function(record){
	            let row = []
	            columns.forEach(function(obj){
	              row.push(record[obj.tag])
	            })
	            data.push(row)
	          })
	          var buffer = xlsx.build([{name: title, data: data}])
	          fs.writeFileSync(path, buffer, 'binary')
	
	        }
	      })
	
	    },
	    importExcel: function(comp, _columns){
	
	      const columns = toNative(_columns);
	      const csize = columns.length;
	
	      const fixedRow = {
	        "FAST_REPORT_TABLE1" : 33,
	        "YEAR_REPORT_TABLE3" : 8,
	        "SEASON_REPORT_TABLE1" : 9
	      }
	
	      ipc.send('open-dialog','excel')
	      ipc.once('opened-file', function (event, path) {
	        if (path) {
	          path = (''+path).replace(/\\/g,'//')
	          var data = xlsx.parse(path)[0].data
	          if(data.length > 0 && fixedRow[comp.$route.name]){
	            data = data.splice(0,fixedRow[comp.$route.name])
	          }
	
	          let jsonArray = []
	          data.forEach(function(row, rowIdx){
	            let jsonObj = {}
	            row.forEach(function(val, colIdx){
	              if(colIdx < csize) jsonObj[columns[colIdx].tag] = val
	            })
	            jsonArray.push(jsonObj)
	          })
	          jsonArray.splice(0, 1);
	
	          if(jsonArray.length > 0) {
	            comp.SpreadSheet.loadData(jsonArray);
	          }
	
	        }
	      })
	
	    }
	
	  }
	
	  return {
	    methods:methods,
	    dataPack:dataPack,
	    dataImport:dataImport,
	    mergeImpData:mergeImpData,
	    savePath:savePath,
	    openPath:openPath
	  }
	}
	
	module.exports = commonVue


/***/ },

/***/ 118:
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },

/***/ 119:
/***/ function(module, exports) {

	module.exports = require("node-xlsx");

/***/ },

/***/ 120:
/***/ function(module, exports) {

	module.exports = require("xml2js");

/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = require("node-zip");

/***/ }

/******/ });
//# sourceMappingURL=build.js.map