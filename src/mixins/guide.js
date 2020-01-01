import Driver from 'driver.js' // import driver.js
import { mapState } from 'vuex'

const guideMixin = {
  data () {
    return {
      driver: null
    }
  },
  computed: {
    ...mapState('app', ['steps'])
  },
  methods: {
    guide () {
      this.driver = new Driver({
        allowClose: true,
        opacity: 0
      })
      this.driver.defineSteps(this.steps)
      this.driver.start()
    }
  }
}

export default guideMixin
