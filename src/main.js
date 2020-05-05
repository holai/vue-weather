// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import {tag,Row,Col,Loading,card,input,option,button,Submenu,select,tabs,TabPane,Menu,MenuItem} from 'element-ui'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false

// 挂载 axios 全局
Vue.prototype.$http=axios



 // 按需引入 Element
Vue.use(input)
Vue.use(option)
Vue.use(button)
Vue.use(select)
Vue.use(tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(card)
Vue.use(Loading)
Vue.use(Row)
Vue.use(Col)
Vue.use(tag)



// 按需引用 echarts
let echarts = require('echarts/lib/echarts')
// 引入折线图等组件
require('echarts/lib/chart/line')    // 折线
require('echarts/lib/chart/gauge')   // 表盘
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
