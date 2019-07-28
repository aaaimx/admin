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
    const { institute, title, in_charge, uuid, lines, start, end } = project
    state.project = {
      title,
      Adscription: {
        institute
      },
      uuid,
      InCharge: {
        fullname: in_charge
      },
      Topics: lines,
      start: start.slice(0, 10),
      end: end.slice(0, 10),
    }
  },
  clearProject(state) {
    delete state.project.uuid
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
