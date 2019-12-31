import clipboard from '@/directive/clipboard/index.js'
import clip from '@/utils/clipboard' // use clipboard directly

const clipMixin = {
  directives: {
    clipboard
  },
  methods: {
    handleCopy (text, event, field) {
      clip(text, event)
      this.clipboardSuccess(field)
    },
    clipboardSuccess (value) {
      this.$message({
        message: `Copy <b>${value}</b> successfully`,
        type: 'success',
        dangerouslyUseHTMLString: true,
        duration: 1500
      })
    }
  }
}

export default clipMixin
