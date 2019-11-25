const tagsMixin = {
  methods: {
    setTagsViewTitle (title) {
      const route = Object.assign({}, this.tempRoute, {
        title: `${title}-${this.postForm.id}`
      })
      this.$store.dispatch('tagsView/updateVisitedView', route)
    }
  }
}

export default tagsMixin
