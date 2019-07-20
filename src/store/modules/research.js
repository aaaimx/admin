const state = {
  researches: [],
  research: {
    title: "",
    year: 2019,
    type: "Tesis",
    pub_type: "",
    grade: "",
    pub_in: "",
    event: "",
    Projects: [],
    Topics: [],
    extra: {
      Authors: [],
      Advisors: []
    }
  },

}

const mutations = {
  setResearches(state, researches) {
    state.researches = researches
  }
}

export const research = {
  namespaced: true,
  state,
  mutations
}
