import { fetchList } from '@/api/research'

const state = {
  research: [],
  listQuery: {
    page: 1,
    limit: 5,
    offset: 0,
    title: undefined,
    type: undefined
  },
  postForm: {
    title: '',
    resume: '',
    year: 2018,
    grade: '',
    event: '',
    pub_in: '',
    pub_type: '',
    type: '',
    link: '',
    lines: [],
    projects: []
  }
}

const getters = {}

const mutations = {
  SET_RESEARCH: (state, research) => {
    state.research = research
  },
  SET_RESEARCH_FORM: (state, research) => {
    state.postForm = Object.assign({}, research)
  }
}

const actions = {
  fetchResearch ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchList()
        .then(data => {
          console.log(data)
          commit('SET_RESEARCH', data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
