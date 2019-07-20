const state = {
  lines: [],
  projects: [],
  project: {
    title: "",
    Adscription: {
      institute: ""
    },
    InCharge: {
      fullname: ""
    },
    Topics: [],
    start: null,
    end: null
  },
}

const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
  setLines(state, lines) {
    state.lines = lines
  },
  removeProjectTopic(state, line) {
    const index = state.project.Topics.indexOf(line.topic);
    if (index >= 0) state.project.Topics.splice(index, 1);
  }
}

export const projects = {
  namespaced: true,
  state,
  mutations
}
