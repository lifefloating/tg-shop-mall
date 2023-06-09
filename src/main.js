// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
import store from './store'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

window._Vue = new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})
