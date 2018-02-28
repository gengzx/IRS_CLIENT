const Vue = require('vue')
const VueRouter = require('vue-router')

global.routes = require('./views')
global.routes_imp = require('./views/index_imp')

// use router
Vue.use(VueRouter)

Vue.config.debug = true
// Vue.config.devtools = true

var App = require('./App.vue')

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

global.common = require('./script/common.js')(Vue)
global.commonVue = require('./script/common-vue.js')(Vue)
