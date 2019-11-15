
const validateMixin = {
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
