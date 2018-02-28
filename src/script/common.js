const ipc = require('electron').ipcRenderer

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
