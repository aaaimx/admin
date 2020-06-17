import { fetchListC } from '@/api/certificate'

const state = {
  certs: [],
  types: ['Research Center', 'Sponsor', 'Partner', 'Division'],
  listQuery: {
    page: 1,
    limit: 10,
    offset: 0,
    type: undefined
  },
  postForm: {
    name: '',
    alias: '',
    site: '',
    logoFile: '',
    type: ''
  }
}

const mutations = {
  SET_PARTNER: (state, partner) => {
    state.postForm = Object.assign({}, partner)
  },
  SET_CERTS: (state, certs) => {
    state.certs = certs
  }
}

const actions = {
  fetchCerts ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchListC()
        .then(data => {
          commit('SET_CERTS', data.results)
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
  actions,
  mutations
}
