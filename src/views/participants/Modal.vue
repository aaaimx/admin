<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
    :width="700"
    scroll="keep"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create participant</p>
      </header>
      <section class="modal-card-body">
        <Form ref="form" />
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" :loading="isLoading" @click.prevent="confirm">
          Create participant</b-button
        >
        <button class="button is-danger" @click="cancel">Cancel</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
import Form from './Form'
export default {
  name: 'EventModal',
  components: {
    Form
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
