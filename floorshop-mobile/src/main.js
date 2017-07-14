// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'framework7'
import Framework7Vue from 'framework7-vue'
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

import App from './App'

import initRem from '@/utils/remv'
import '@/utils/bootstrap'

// 初始化rem基准
initRem()

Vue.config.productionTip = false
Vue.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  framework7: {
    root: '#app',
    material: true
  },
  components: { App }
})
