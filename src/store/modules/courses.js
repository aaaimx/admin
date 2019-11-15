
const state = {
  postForm: {
    subject: [],
    corum: 0,
    content: [],
    requirements: [],
    material: [],
    active: false,
    imgBanner: '',
    nameCourse: '',
    summary:
      '',
    description:
      '',
    startDate: '',
    endDate: '',
    price: 0,
    discount: 0,
    dateDiscount: ''
  }

}

const mutations = {
  SET_COURSE: (state, course) => {
    state.postForm = Object.assign({}, course)
  },
  ADD_SUBJECT: (state, l) => {
    state.postForm.subject.push(l)
  },
  DELETE_SUBJECT: (state, l) => {
    state.postForm.subject.splice(state.postForm.subject.indexOf(l), 1)
  },
  ADD_REQUIREMENT: (state, req) => {
    state.postForm.requirements.push(req)
  },
  DELETE_REQUIREMENT: (state, req) => {
    state.postForm.requirements.splice(state.postForm.requirements.indexOf(req), 1)
  },
  ADD_MATERIAL: (state, mat) => {
    state.postForm.material.push(mat)
  },
  DELETE_MATERIAL: (state, mat) => {
    state.postForm.material.splice(state.postForm.material.indexOf(mat), 1)
  },
  ADD_MODULE: (state, mod) => {
    console.log(typeof (state.postForm.content))
    try {
      state.postForm.content = JSON.parse(state.postForm.content)
      state.postForm.content.push(mod)
    } catch (error) {
      state.postForm.content.push(mod)
    }
  },
  UPDATE_CONTENT: (state, content) => {
    state.postForm.content = content
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
