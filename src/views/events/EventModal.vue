<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
    full-screen
    scroll="keep"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Event</p>
      </header>
      <section class="modal-card-body">
        <EventForm ref="form" />
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" :loading="isLoading" @click.prevent="confirm">
          Create event</b-button
        >
        <button class="button is-danger" @click="cancel">Cancel</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
import EventForm from './EventForm'
export default {
  name: 'EventModal',
  components: {
    EventForm
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    trashObjectName: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isLoading: false,
      isModalActive: false
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    async confirm () {
      this.isLoading = true
      await this.$refs.form.submit()
      this.isLoading = false
      this.isModalActive = false
      this.$emit('confirm')
    }
  },
  watch: {
    isActive (newValue) {
      this.isModalActive = newValue
    },
    isModalActive (newValue) {
      if (!newValue) {
        this.cancel()
      }
    }
  }
}
</script>

<style>
.datepicker .select select {
  color: black !important;
}
</style>
