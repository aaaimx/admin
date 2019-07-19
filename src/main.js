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
import Notifications from 'vue-notification'
import '@fortawesome/fontawesome-free/css/all.css' 

Vue.use(Notifications)
Vue.use(Vuetify,{
  iconfont: 'fa'
})
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
