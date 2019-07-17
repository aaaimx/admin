const state = {
  collaborators: [],
  roles: [],
  author: {
    email: "",
    name: "",
    active: true,
    lastname: "",
    Adscription: {
      institute: ""
    },
    Roles: [],
    extra: {
      roles: [],
      lines: []
    }
  }

}

const mutations = {
  setCollaborators (state, collaborators) {
    state.collaborators = collaborators
  },
  setRoles (state, roles) {
    state.roles = roles
  }
}

export const colls = {
  namespaced: true,
  state,
  mutations
}
