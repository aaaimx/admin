<template>
  <section class="section is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <ul>
            <li v-for="(title, index) in titleStack" :key="index">
              {{ title }}
            </li>
          </ul>
        </div>
      </div>
      <CreateEvent :is-active="isModalActive" @cancel="cancel" />
      <div class="level-right">
        <div class="level-item">
          <div class="buttons is-right">
            <a class="button is-light" @click="isModalActive = true">
              <b-icon icon="calendar" custom-size="default" />
              <span>Create event</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreateEvent from './CreateEvent'
export default {
  name: 'TitleBar',
  components: {
    CreateEvent
  },
  data () {
    return {
      isModalActive: false
    }
  },
  props: {
    titleStack: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    cancel () {
      this.isModalActive = false
    }
  }
}
</script>
