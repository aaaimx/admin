import { tableSteps } from './steps'

export default {
  created () {
    this.$store.commit('app/SET_STEPS', tableSteps)
  },
  methods: {
    // selected items
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },

    // routing
    handleCreateOrUpdate (to) {
      this.$router.push(to)
    },

    // filter
    handleFilter () {
      this.listQuery.page = 1
      this.getList()
    },

    // sorting
    sortByID (order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    sortChange (data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    getSortClass: function (key) {
      const sort = this.listQuery.sort
      return sort === `+${key}`
        ? 'ascending'
        : sort === `-${key}`
        ? 'descending'
        : ''
    }
  }
}
