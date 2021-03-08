import Vue from 'vue'

/* VeeValidate */
import es from 'vee-validate/dist/locale/es.json'
import * as rules from 'vee-validate/dist/rules'
import '../utils/rules'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'
import BInputWithValidation from '@/components/Inputs/BInputWithValidation'
import BSelectWithValidation from '@/components/Inputs/BSelectWithValidation'
import BCheckboxesWithValidation from '@/components/Inputs/BCheckboxesWithValidation'

localize('es', es)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('BInputWithValidation', BInputWithValidation)
Vue.component('BSelectWithValidation', BSelectWithValidation)
Vue.component('BCheckboxesWithValidation', BCheckboxesWithValidation)

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
