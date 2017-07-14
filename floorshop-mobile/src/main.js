// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// UI
import 'framework7'
import Framework7Vue from 'framework7-vue'
// UI style
import 'normalize.css/normalize.css'
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'
// container
import App from './App'
import routes from '@/router'
// utils
import initRem from '@/utils/remv'
import '@/utils/bootstrap'
// 初始化rem基准
initRem()

Vue.config.productionTip = false
Vue.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  framework7: {
    root: '#app',
    material: true,
    routes
  },
  components: { App }
})
