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

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
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

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

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
