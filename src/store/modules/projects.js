import { fetchLines } from '@/api/project'

const state = {
  lines: [],
  listQuery: {
    page: 1,
    limit: 10,
    offset: 0,
    title: undefined,
    institute: undefined,
    order: '-start'
  },
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
  },
  ADD_LINE: (state, line) => {
    state.lines.push(line)
  }
}

const actions = {
  fetchLines ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchLines({ all: '' })
        .then(data => {
          commit('SET_LINES', data)
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
