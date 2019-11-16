import { fetchLines } from '@/api/project'

const state = {
  lines: [],
  postForm: {
    uuid: '',
    title: '',
    start: '',
    end: '',
    in_charge: '',
    institute: '',
    collaborators: [],
    lines: []
  }
}

const getters = {
  lines: state => state.lines
}

const mutations = {
  SET_PROJECT: (state, project) => {
    state.postForm = Object.assign({}, project)
  },
  SET_LINES: (state, lines) => {
    state.lines = lines
  }
}

const actions = {
  fetchLines ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchLines()
        .then(data => {
          console.log(data)
          commit('SET_LINES', data.results)
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
