/* Styles */
import '@/scss/main.scss'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'
import linkify from 'vue-linkify'

/* Router & Store */
import router from './router'
import store from './store'

/* Service Worker */
import './registerServiceWorker'

/* Global filters */
import * as filters from './filters'

/* Vue. Main component */
import App from './App.vue'

/* register multiple components */
const GlobalComponents = require.context('@/components/Global', true, /\.vue$/)
GlobalComponents.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = GlobalComponents(modulePath)
  Vue.component(moduleName, value.default)
  return modules
}, {})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.directive('linkified', linkify)

/* Default title tag */
const defaultDocumentTitle = 'AAAIMX Productivity Manager'

/* Collapse mobile aside menu on route change & set title */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)
  store.commit('overlayToggle', false)
  store.commit('asideActiveForcedKeyToggle', null)

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.documentElement.classList.remove('has-spinner-active')
  }
}).$mount('#app')
