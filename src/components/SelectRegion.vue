
<style>

.select-region {
  overflow: hidden;
  position:fixed;
  left: 50%;
  margin-left: -120px;
  z-index: 19911125;
  transition:0.3s;
  box-shadow: 0 3px 12px rgba(0,0,0,.175);
  background: #fff;
  display: none;
}

.select-region.active {
  top: 101px!important;
}

.select-region-container ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.select-region-container ul li {
  width: 240px;
  padding: 10px;
  display: table-cell;
  vertical-align: middle;
}

.select-region-container ul li:nth-child(even) {
  background: #eee;
}

.select-region-container ul li span {
  font-size: 13px;
  list-style: none;
  display: inline-block;
  margin:5px 7px;
  cursor: pointer;
}

.select-region-footer {
  border-top: 1px solid #eee;
  padding: 10px 15px;
  overflow: hidden;
}

.select-region-footer input {
  min-width: 40%;
  width: 60px;
}

.select-region .label-success {
    background-color: #5cb85c;
}

.select-region .label {
  display: inline;
  padding: .2em .6em .3em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

.select-region .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  cursor: pointer;
}
.select-region .btn.btn-link{
  background-color: transparent;
  box-shadow: none;
  border-color: transparent;
  color: #428bca;
  font-weight: 400;
}

.select-region .btn.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.container-footer{
    border-top: 1px solid #eeeeee;
    height: 35px;
}
.container-footer div.radio{
  display: inline-block;
  height: 18px;
  color: red;
  vertical-align: middle;
  margin: 8px 3px;
}
</style>
<template>

<div class="select-region form-inline" style="top: -356px; display: block;">
    <div class="select-region-container">
        <ul>
            <li>
                <!-- 省份 -->
                <span v-for="item in provinces" @click="change($event).p($index)" v-text="item.p"></span>
            </li>

            <li v-if="cities">
                <!-- 城市 -->
                <span v-for="item in cities" @click="change($event).c($index)" v-text="item.n"></span>
            </li>
            <li v-if="dists">
                <!-- 县级 -->
                <span v-for="item in dists" @click="change($event).d($index)" v-text="item.s"></span>
            </li>

        </ul>
    </div>

    <!-- <div class="container-footer">
      <div class="radio"><label><input type="radio" name="radios" v-model="values.n" value="石油" checked="">石油</label></div>
      <div class="radio"><label><input type="radio" name="radios" v-model="values.n" value="天然气">天然气</label></div>
      <div class="radio"><label><input type="radio" name="radios" v-model="values.n" value="煤层气">煤层气</label></div>
      <div class="radio"><label><input type="radio" name="radios" v-model="values.n" value="页岩气">页岩气</label></div>
      <div class="radio"><label><input type="radio" name="radios" v-model="values.n" value="其他">其他</label></div>
    </div> -->

    <div class="select-region-footer">
        <span class="pull-right">
          <button @click="clear" class="btn btn-link">清空</button>
          <button @click="submit" class="btn btn-success" type="submit">确定</button>
        </span>

        <strong class="text-danger"> {{values.p + ' ' + values.c + ' ' + values.d}} </strong>
        <!-- <input v-show="values.p" v-model="values.x" class="form-control" type="text" placeholder="具体地址"> -->
    </div>
</div>

</template>

<script>

export default {
  data () {
    return {
      provinces:require('../script/city.min.js'),
      cities:null,
      dists:null,
      values:{
        //p:'',c:'',d:'',x:'',n:'石油'
        p:'',c:'',d:'',x:'',n:''
      }
    }
  },
  props: {

  },
  methods: {
    submit: function(){
      this.hide()

      let value = ""
      for(let k in this.values){
        if(this.values[k]) {
          if(value) value += ","
          value += this.values[k]
        }
      }
      common.callback(value,this.values)
    },
    getValues: function () {
      return this.values
    },
    change:function(event){

      common.toggleClassByLevel(event.toElement,"label label-success")
      let thisz = this

      return {
        p:function(idx){
          thisz.values.p = thisz.provinces[idx].p
          thisz.values.c = thisz.values.d = ''
          thisz.cities = thisz.provinces[idx].c
          thisz.dists = null
        },
        c:function(idx){
          thisz.values.c = thisz.cities[idx].n
          thisz.values.d = ''
          thisz.dists = thisz.cities[idx].a
        },
        d:function(idx){
          thisz.values.d = thisz.dists[idx].s
        }
      }

    },
    clear: function(){
      this.cities = this.dists = null
      this.values.p = this.values.c = this.values.d = this.values.x = ''
      let alabel = document.querySelectorAll('.select-region .label')
      if(alabel.length > 0) alabel[0].classList.remove('label','label-success')
    },
    show: function(callback){
      common.callback = callback
      setTimeout(function(){
        common.queryElement(".select-region").classList.add('active')
      }, 100)
    },
    hide: function(){
      let select = common.queryElement(".select-region")
      if(select) select.classList.remove('active')
    }
  },
  ready: function () {

    let thisz = this
    common.on('.select-region', 'click', function(){
      return event.stopPropagation()
    })

    document.addEventListener('click', function (evelt) {
      thisz.hide()
    })

  }
}


</script>
