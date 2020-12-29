import { fetchEvents } from '@/api/certificate'

const state = {
  certs: [],
  events: [],
  types: ['RECOGNITION', 'APPRECIATION', 'PARTICIPATION'],
  listQuery: {
    page: 1,
    limit: 10,
    offset: 0,
    type: undefined
  },
  postForm: {
    type: '',
    to: '',
    published: false,
    description: '',
    QR: '',
    file: ''
  }
}

const mutations = {
  SET_CERT: (state, cert) => {
    state.postForm = Object.assign({}, cert)
  },
  SET_EVENTS: (state, events) => {
    state.events = [{ id: 0, title: 'No event' }, ...events]
  }
}

const actions = {
  fetchEvents ({ commit }) {
    return new Promise((resolve, reject) => {
      fetchEvents()
        .then(data => {
          commit('SET_EVENTS', data.results)
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
