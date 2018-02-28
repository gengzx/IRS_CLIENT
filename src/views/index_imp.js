

module.exports = {

  // 主页
  '/home': {
    name: 'home',
    cname: '开始',
    component: function(resolve){
      require(['./Home.vue'], resolve);
    }
  },

  // 快报1
  '/table/fastreport/Table1_IMP': {
    name: 'FAST_REPORT_TABLE1_IMP',
    cname: '按地区分列油气勘查投入与工作量情况表',
    tbname: 'T_BUSI_YQKCTRGZL',
    type:'快报',
    component: function(resolve){
      require(['./fastreport/Table1_IMP.vue'], resolve);
    }
  },

  // 快报2
  '/table/fastreport/Table2_IMP': {
    name: 'FAST_REPORT_TABLE2_IMP',
    cname: '油气田新增储量情况表',
    tbname: 'T_BUSI_YQTXZCL',
    type:'快报',
    component: function(resolve){
      require(['./fastreport/Table2_IMP.vue'], resolve);
    }
  },



    // 年报1
    '/table/yearreport/Table1_IMP': {
      name: 'YEAR_REPORT_TABLE1_IMP',
      cname: '油气勘查开采投资及工作量完成情况表',
      tbname: 'T_YQKCTZ_GZL_NB',
      type:'年报',
      component: function(resolve){
        require(['./yearreport/Table1_IMP.vue'], resolve);
      }
    },

    // 年报2
    '/table/yearreport/Table2_IMP': {
      name: 'YEAR_REPORT_TABLE2_IMP',
      cname: '重点探井情况',
      tbname: 'T_ZDTJQK_NB',
      type:'年报',
      component: function(resolve){
        require(['./yearreport/Table2_IMP.vue'], resolve);
      }
    },

    // 年报3
    '/table/yearreport/Table3_IMP': {
      name: 'YEAR_REPORT_TABLE3_IMP',
      cname: '油气资源调查评价投资及工作量完成情况表',
      tbname: 'T_YQZYDCPJ_GZLWC_NB',
      type:'年报',
      component: function(resolve){
        require(['./yearreport/Table3_IMP.vue'], resolve);
      }
    },

    // 季报1
    '/table/seasonreport/Table1_IMP': {
      name: 'SEASON_REPORT_TABLE1_IMP',
      cname: '季度油气勘查开采情况表',
      tbname: 'SEASON_REPORT_TABLE1',
      type:'季报',
      component: function(resolve){
        require(['./seasonreport/Table1_IMP.vue'], resolve);
      }
    }

};
