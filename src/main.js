import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import DatePicker from 'element-ui/lib/date-picker'
import VueI18n from 'vue-i18n'
import request from './services/axios'
import ElementLocale from 'element-ui/lib/locale'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
// import vuePopper from 'element-ui/lib/utils/vue-popper'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
const Service = {}
Service.install = function (Vue, options) {
  Vue.prototype.$http = request
}

Vue.use(VueI18n)
Vue.use(DatePicker)
Vue.use(Service)
Vue.use(ElementUI, { locale })

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = true

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
