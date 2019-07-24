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
  setProject(state, project) {
    const { institute, title, in_charge, interest_area, uuid, start, end } = project
    state.project = {
      title,
      Adscription: {
        institute
      },
      InCharge: {
        fullname: in_charge
      },
      Topics: interest_area,
      uuid,
      start: start.slice(0, 10),
      end: end.slice(0, 10),
    },
      console.log(state.project)
  },
  clearProject(state) {
    state.project.uuid = null
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
