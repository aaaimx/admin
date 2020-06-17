const state = {
  listQuery: {
    page: 1,
    limit: 10,
    offset: 0,
    type: undefined
  },
  postForm: {
    display_name: '',
    QR: '',
    exp: null,
    file: null,
    member: null
  }
}

const mutations = {
  SET_MEMBERSHIP: (state, m) => {
    state.postForm = Object.assign({}, m)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
