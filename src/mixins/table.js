module.exports = {
  data () {
    return {
      total: 0,
      list: [],
      checkedRows: [],
      defaultOpenedDetails: [],
      trashObject: null,
      isModalActive: false,
      isLoading: false,
      sortOrder: 'desc',
      defaultSortOrder: 'desc'
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    listQuery: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }
      return null
    }
  },
  methods: {
    /*
     * Handle sort event
     */
    onSort (field, order) {
      let ordering = field
      this.sortField = field
      this.sortOrder = order
      if (order === 'desc') ordering = '-' + field
      this.listQuery.ordering = ordering
    },
    /*
     * Handle collapse event
     */
    onCollapse (row) {
      this.defaultOpenedDetails = [row[this.key]]
    },
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
}
