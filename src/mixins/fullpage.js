module.exports = {
  mounted () {
    this.$store.commit('fullPage', true)
    this.$store.commit('asideRightToggle', false)
  },
  beforeDestroy () {
    this.$store.commit('fullPage', false)
  }
}
