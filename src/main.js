// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// main.js
import '@fortawesome/fontawesome-free/css/all.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import HttpService from './services'

Vue.use(Vuetify)
Vue.use(HttpService)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
