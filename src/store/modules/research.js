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
  },
  setResearch(state, research) {
    const { title, year, type, pub_type, projects, lines, grade, pub_in, event, extra } = research
    state.research = {
      title,
      year,
      type,
      pub_type,
      grade,
      pub_in,
      event,
      Projects: [],
      Topics: [],
      extra: JSON.parse(extra)
    },
    projects.forEach(element => {
      state.research.Projects.push(element.uuid)
    });
    lines.forEach(element => {
      state.research.Topics.push(element.topic)
    });
    console.log(research)
  },
  clearResearch(state) {
    delete state.research.uuid
  }
}

export const research = {
  namespaced: true,
  state,
  mutations
}
