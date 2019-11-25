const authorsMixin = {
  methods: {
    compare (a, b) {
      if (a.position > b.position) return 1
      return -1
    }
  }
}

export default authorsMixin
