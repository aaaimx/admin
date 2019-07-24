const state = {
  collaborators: [],
  roles: [],
  author: {
    email: "",
    active: true,
    fullname: "",
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
  setColl(state, author) {
    const { fullname, adscription, active, email, roles, uuid } = author
    state.author = {
      fullname,
      active,
      email,
      uuid,
      Roles: roles,
      Adscription: {
        institute: adscription
      },
    }
    console.log(state.author)
  },
  clearColl(state) {
    state.author = {
      fullname: null,
      email: null,
      active: true,
      uuid: null,
      Roles: [],
      Adscription: {
        institute: ''
      },
    }
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
