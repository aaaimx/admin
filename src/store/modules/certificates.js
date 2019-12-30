import { fetchListC } from '@/api/certificate'

const state = {
  certs: [],
  types: ['RECOGNITION', 'APPRECIATION', 'PARTICIPATION'],
  postForm: {
    type: '',
    to: '',
    QR: '',
    file: ''
  }
}

const mutations = {
  SET_CERT: (state, cert) => {
    state.postForm = Object.assign({}, cert)
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
