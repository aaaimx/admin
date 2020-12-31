<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
    :width="700"
    scroll="keep"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Event</p>
      </header>
      <section class="modal-card-body">
        <form>
          <b-field label="Title" message="Event name">
            <b-input
              placeholder="e.g. SINABIA 2019"
              name="title"
              v-model="form.to"
              required
            />
          </b-field>
          <b-field horizontal label="Type" message="Event type">
            <b-select v-model="form.type" placeholder="Select a type" expanded>
              <option value="Workshop">Workshop</option>
              <option value="Course">Course</option>
              <option value="Webinar">Webinar</option>
              <option value="Simposium">Simposium</option>
              <option value="Other">Other</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Division" message="Division event">
            <b-select
              v-model="form.division"
              placeholder="Select division"
              expanded
            >
              <option
                v-for="item in $store.state.divisions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></option>
            </b-select>
          </b-field>
          <b-field
            label="Room space"
            message="Number of particpants"
            horizontal
            v-if="!form.isPublic"
          >
            <b-input
              name="max"
              min="1"
              max="100"
              type="number"
              v-model="form.max_particpants"
              required
            />
          </b-field>
          <b-field horizontal>
            <b-checkbox type="is-link" v-model="form.isPublic" class="is-thin">
              Open to the public
            </b-checkbox>
          </b-field>
          <b-field horizontal label="Date start" message="Event start">
            <b-datetimepicker
              placeholder="Select a datetime..."
              icon="calendar-today"
              :locale="locale"
              v-model="form.date_start"
              :timepicker="{ hourFormat }"
            >
            </b-datetimepicker>
          </b-field>
          <b-field horizontal label="Date end" message="Event end">
            <b-datetimepicker
              v-model="form.date_end"
              placeholder="Select a datetime..."
              icon="calendar-today"
              :locale="locale"
              :timepicker="{ hourFormat }"
            >
            </b-datetimepicker>
          </b-field>

          <b-field label="Hours" message="Total hours (CC)" horizontal>
            <b-input
              name="max"
              min="1"
              max="100"
              type="number"
              v-model="form.hours"
            />
          </b-field>

          <b-field label="Description">
            <b-input
              :rows="10"
              maxlength="500"
              v-model="form.description"
              type="textarea"
            ></b-input>
          </b-field>
        </form>
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" :loading="isLoading" native-type="submit">{{
          id ? 'Save changes' : 'Create event'
        }}</b-button>
        <button class="button is-danger" @click="cancel">Cancel</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalBox',
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
      hourFormat: undefined, // Browser locale
      locale: undefined, // Browser locale
      isLoading: false,
      isModalActive: false,
      id: null,
      form: {},
      divisions: []
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
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
