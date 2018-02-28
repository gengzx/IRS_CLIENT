

module.exports = {


  // 主页
  '/home': {
    name: 'home',
    cname: '开始',
    component: function(resolve){
      require(['./Home.vue'], resolve);
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
      require(['./Table-DZKC_XFXKC.vue'], resolve)
    }
  },
  	  

  // 快报1
  '/table/fastreport/Table1': {
    name: 'FAST_REPORT_TABLE1',
    cname: '按地区分列油气勘查投入与工作量情况表',
    tbname: 'T_BUSI_YQKCTRGZL',
    type:'快报',
    component: function(resolve){
      require(['./fastreport/Table1.vue'], resolve);
    }
  },

  // 快报2
  '/table/fastreport/Table2': {
    name: 'FAST_REPORT_TABLE2',
    cname: '油气田新增储量情况表',
    tbname: 'T_BUSI_YQTXZCL',
    type:'快报',
    component: function(resolve){
      require(['./fastreport/Table2.vue'], resolve);
    }
  },

  // 年报1
  '/table/yearreport/Table1': {
    name: 'YEAR_REPORT_TABLE1',
    cname: '油气勘查开采投资及工作量完成情况表',
    tbname: 'T_YQKCTZ_GZL_NB',
    type:'年报',
    component: function(resolve){
      require(['./yearreport/Table1.vue'], resolve);
    }
  },

  // 年报2
  '/table/yearreport/Table2': {
    name: 'YEAR_REPORT_TABLE2',
    cname: '重点探井情况',
    tbname: 'T_ZDTJQK_NB',
    type:'年报',
    component: function(resolve){
      require(['./yearreport/Table2.vue'], resolve);
    }
  },

  // 年报3
  '/table/yearreport/Table3': {
    name: 'YEAR_REPORT_TABLE3',
    cname: '油气资源调查评价投资及工作量完成情况表',
    tbname: 'T_YQZYDCPJ_GZLWC_NB',
    type:'年报',
    component: function(resolve){
      require(['./yearreport/Table3.vue'], resolve);
    }
  },

  // 季报1
  '/table/seasonreport/Table1': {
    name: 'SEASON_REPORT_TABLE1',
    cname: '季度油气勘查开采情况表',
    tbname: 'T_YQKCKCQK_JB',
    type:'季报',
    component: function(resolve){
      require(['./seasonreport/Table1.vue'], resolve);
    }
  }

};
