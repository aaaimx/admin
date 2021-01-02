module.exports = {
  data () {
    return {
      total: 0,
      list: [],
      checkedRows: [],
      defaultOpenedDetails: [],
      trashObject: null,
      isModalActive: false,
      isLoading: false
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    listQuery: {
      handler (val) {
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
    onCollapse (id) {
      this.defaultOpenedDetails = [id]
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
