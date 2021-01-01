<template>
  <vue-copy-to-clipboard :text="text" @copy="handleCopy">
    <slot  />
  </vue-copy-to-clipboard>
</template>

<script>
import VueCopyToClipboard from 'vue-copy-to-clipboard'
export default {
  props: ['text'],
  components: {
    VueCopyToClipboard
  },
  methods: {
    handleCopy (result) {
      console.log('onCopy', result)
      this.$buefy.toast.open({
        message: 'Copied!',
        type: 'is-success',
        queue: false
      })
    }
  }
}
</script>
