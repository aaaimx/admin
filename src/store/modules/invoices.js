import { fetchList } from '@/api/invoices'

const state = {
  list: []
}
const mutations = {
  SET_LIST(state, invoices) {
    state.list = invoices
  }
}
const actions = {
  async getInvoices({ commit }, query) {
    const data = await fetchList(query)
    commit('SET_LIST', data.results)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

