const state = {
  profile: {}
}

const mutations = {
  setProfile (state, user) {
    state.profile = user
  }
}

export const user = {
  namespaced: true,
  state,
  mutations
}
