
import Vue from 'vue';
import Vuex from 'vuex';

import { colls } from './modules/collaborators';
import { partners } from './modules/partners';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    partners,
    colls,
  }
})

export default store