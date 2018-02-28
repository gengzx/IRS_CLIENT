<style>

.fade-transition {
  transition: opacity .1s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

.start-modal{
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  background-color: #eff9fd;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transform: scale(1.1);
  transition: visibility 0s .22s linear , opacity .22s ease-in, transform .22s ease-in;
}

.is-shown {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  transition: visibility 0s 0s linear , opacity .34s ease-out, transform .34s ease-out;
}

.start-modal-wrapper {
    margin: auto;
}

.start-modal-header {
  padding: 30px;
  border-bottom: 1px solid #ddd;
}

@media (min-width: 940px) {
  .start-modal-header {
    align-self: center;
    border-right: 1px solid #ddd;
    border-bottom: none;
  }
  .start-modal-wrapper {
    display: flex;
  }
}

.start-modal-logo {
  display: block;
  margin: 0 auto;
}

.start-modal h2 {
  text-align: center;
  margin: 0 0 1em 0;
}
.start-modal-sections {
  max-width: 680px;
  padding: 30px;
}
.start-modal-section {
  margin: 30px;
}
.start-modal-button{
  display: block;
  margin: 0 auto;
  font-size: 1.4em;
  font-weight: 700;
  color: #007fb2;
  border: 1px solid #007fb2;
  height: 40px;
  width: 120px;
  background: #ffffff;
  opacity: 1;
  transition: opacity .32s ease-in, transform .32s ease-in;
}
.start-modal-button:hover{
  background: #c8efff;
  opacity: 1;
}


.urls {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 23px;
    text-align: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.urls .item {
    font-size: 1.2em;
    font-weight: 700;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 50px;
    height: 50px;
    margin-right: 9px;
    margin-left: 9px;
    transition: all .2s;
    border: 4px solid transparent;
    border-radius: 50%;
    background: #fff;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #3C9365;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #3C9365;
    transition: all .12s ease-in;
}
.urls .item.checked,
.urls .item:hover {
    color: #fff;
    transform: scale(1.2);
}
.urls .item span {
    line-height: 1.4;
    display: inline-block;
    width: 40px;
    border-radius: 50%;
}


.urls .fast {color: #FABF8F;border-color: #FDE3CD;box-shadow: inset 0 0 1px 1px #FABF8F;}
.urls .fast.checked,.urls .fast:hover {background: #FABF8F;}
.urls .year {color: #8DB4E2;border-color: #D9EAFF;box-shadow: inset 0 0 1px 1px #8DB4E2;}
.urls .year.checked,.urls .year:hover {background: #8DB4E2;}
.urls .season {color: #76933C;border-color: #CFDCB5;box-shadow: inset 0 0 1px 1px #76933C;}
.urls .season.checked,.urls .season:hover {background: #76933C;}

.urls .month {color: #22B1AC;border-color: #C1E5E4;box-shadow: inset 0 0 1px 1px #22B1AC;}
.urls .month.checked,.urls .month:hover {background: #22B1AC;}
.urls .special {color: #C3C3C3;border-color: #E4E4E4;box-shadow: inset 0 0 1px 1px #C3C3C3;}
.urls .special.checked,.urls .special:hover {background: #C3C3C3;}
.urls .other {color: #7092BE;border-color: #BDD5F4;box-shadow: inset 0 0 1px 1px #7092BE;}
.urls .other.checked,.urls .other:hover {background: #7092BE;}


.wclose{
  position: absolute;
  right: 0px;
  width: 20px;
  height: 20px;
  background: #a9d1fb;
  text-align: center;
}
</style>
<template>

<div class="window js-context-menu">

  <!-- header -->
  <header class="toolbar toolbar-header">
    <h1 class="title">
      <div class="btns">
        <button class="btn btn-default" v-on:click="refresh">
          <span class="icon icon-home"></span>
        </button>

<!--         <div class="btn-group">
          <button class="btn btn-default" @click="goBefore">
            <span class="icon icon-left"></span>
          </button>
          <button class="btn btn-default" @click="goAfter">
            <span class="icon icon-right"></span>
          </button>
        </div> -->

<!--         <button class="btn btn-default">
          <span class="icon icon-cog"></span>
        </button> -->

      </div>
      <span class="text">信息报送客户端 - <span style="color:#108EE9">{{type}}</span></span>
      <div class="tools">
        <a setup="minus" v-on:click="minAppWindow"><span class="icon icon-minus"></span></a>
        <a setup="resize" v-on:click="resizeAppWindow"><span class="icon icon-popup"></span></a>
        <a setup="close" v-on:click="closeAppWindow"><span class="icon icon-cancel"></span></a>
      </div>
    </h1>
  </header>


  <div class="tab-group">


    <a v-for="route in routes" v-show="!route.type || route.type == type" v-link="{ path: $key }">
      <div class="tab-item" v-text="route.cname">
        <!-- <span class="icon icon-cancel icon-close-tab"></span> -->
      </div>
    </a>

  </div>


  <div class="window-content">
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>


  <!-- footer -->
  <footer class="toolbar toolbar-footer">
    <h1 class="title">石大正信@2016</h1>
  </footer>

  <div class="start-modal is-shown">

    <a class="wclose" setup="close" v-on:click="closeAppWindow"><span class="icon icon-cancel"></span></a>

    <div class="start-modal-wrapper">
      <header class="start-modal-header">
        <img class="start-modal-logo" src="data:image/png;base64,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">
        <h2>信息报送客户端</h2>
        <p>国土资源部油气资源战略研究中心</p>
        <p>地址：北京市西城区兵马司胡同19号（100034）</p>
        <p>邮箱：youqizhongxin@163.com</p>
      </header>

      <main class="start-modal-sections">
        <section class="start-modal-section play-along">
          <h2>填报设置</h2>

            <div class="urls">
                <a href="javascript:;" class="item year" :class="{ checked: type == '年报' }" @click="checkDataType"><span>年报</span></a>
                <a href="javascript:;" class="item fast" :class="{ checked: type == '快报' }" @click="checkDataType"><span>快报</span></a>
                <a href="javascript:;" class="item season" :class="{ checked: type == '季报' }" @click="checkDataType"><span>季报</span></a>
                <a href="javascript:;" class="item month" :class="{ checked: type == '月报' }" @click="checkDataType"><span>月报</span></a>
                <a href="javascript:;" class="item special" :class="{ checked: type == '专报' }" @click="checkDataType"><span>专报</span></a>
                <a href="javascript:;" class="item other" :class="{ checked: type == '其他' }" @click="checkDataType"><span>其他</span></a>
            </div>
            <p>
              <label>填报年份:</label>
              <select class="form-control" id="datayear">
                <option>2016</option><option>2017</option><option>2018</option>
                <option>2019</option><option>2020</option><option>2021</option>
                <option>2022</option><option>2023</option><option>2024</option>
                <option>2025</option>
              </select>
            </p>
            <p v-show="type == '月报'">
              <label>填报月份:</label>
              <select class="form-control" id="datamonth">
                <option>1月</option><option>2月</option><option>3月</option>
                <option>4月</option><option>5月</option><option>6月</option>
                <option>7月</option><option>8月</option><option>9月</option>
                <option>10月</option><option>11月</option><option>12月</option>
              </select>
            </p>
            <p v-show="type == '季报'">
              <label>填报季度:</label>
              <select class="form-control" id="dataseason">
                <option>第一季度</option><option>第二季度</option><option>第三季度</option>
                <option>第四季度</option>
              </select>
            </p>
            <p>
              <label>填报单位:</label>
              <select class="form-control" id="datacom">
                <option v-for="option in YGS" v-bind:value="$key">
                  {{ $key }}
                </option>
              </select>
            </p>

        </section>

        <footer class="start-modal-section footer">
          <div class="rainbow-button-wrapper">
            <button @click="initParam" class="btn start-modal-button">确定</button>
          </div>
        </footer>
      </main>

    </div>

  </div>

</div>

</template>

<script>
const ipc = require('electron').ipcRenderer
import { YGS } from 'Db/datas'

export default {
  data () {
    return {
      routes:routes,
      YGS:YGS,
      type:'快报'
    }
  },
  methods: {
    refresh: function () {
      ipc.send('refresh')
    },
    closeAppWindow: function () { ipc.send('close-appwindow') },
    resizeAppWindow: function () { ipc.send('resize-appwindow') },
    minAppWindow: function () { ipc.send('min-appwindow') },

    goBefore: function(){ ipc.send('go-before') },
    goAfter: function(){ ipc.send('go-after') },

    toggerModal:function(){
      common.queryElement('.start-modal').classList.toggle('is-shown')
    },
    checkDataType: function(event){
      this.type = event.srcElement.innerText.trim()
    },
    initParam: function(){
      this.toggerModal()

      let home = this.$children[0]

      global.DATAYEAR = common.queryElement('#datayear').value
      global.DATACOM = common.queryElement('#datacom').value
      global.DATATYPE = this.type

      global.DATAMONTH = common.queryElement('#datamonth').value
      global.DATASEASON = common.queryElement('#dataseason').value

      if(home){
        home.initData()
      }else{
        this.$router.go({path:"/home"})
      }
    }
  }
}
</script>
