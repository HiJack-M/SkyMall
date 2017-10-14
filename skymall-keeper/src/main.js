// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import router from '@/router'
// normalize css
import 'normalize.css/normalize.css'
// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/icons.scss'
// Bmob setup
import '@/utils/bootstrap'
// App Layout
import App from './App'

Vue.use(ElementUI)
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
})
