const state = {
  institutes: []
}


const mutations = {
  setInstitutes (state, institutes) {
    state.institutes = institutes
  }
}

export const partners = {
  namespaced: true,
  state,
  mutations
}
