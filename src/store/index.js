
import Vue from 'vue';
import Vuex from 'vuex';

import { colls } from './modules/collaborators';
import { partners } from './modules/partners';
import { projects } from './modules/projects';
import { research } from './modules/research';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    research,
    projects,
    partners,
    colls,
  }
})

export default store