import loadingMixin from '@/mixins/loading'
const validateMixin = {
  props: {
    namespace: {
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  mixins: [loadingMixin],
  methods: {
    validateRequire: (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + ' is required',
          type: 'error'
        })
        callback(new Error('Required field'))
      } else {
        callback()
      }
    },
    handleSave (message) {
      this.$notify({
        title: ` ${this.isEdit ? 'Updated' : 'Created'}`,
        dangerouslyUseHTMLString: true,
        message,
        type: 'success',
        duration: 2000
      })
    },
    handleError () {
      this.$message({
        message: 'Something went wrong:( Try again',
        type: 'error'
      })
    },
    handleDelete () {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `${this.namespace} was sucessfully deleted`,
        type: 'success',
        showClose: true,
        duration: 2000
      })
    },
    validateUrl: (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message({
            message: 'Invalid URL format',
            type: 'error'
          })
          callback(new Error('Invalid URL'))
        }
      } else {
        callback()
      }
    }
  }
}

export default validateMixin
