<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <!-- <router-link slot="right" :to="heroRouterLinkTo" class="button">
        {{ heroRouterLinkLabel }}
      </router-link> -->
    </hero-bar>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>
    <section class="section is-main-section">
      <notification class="is-info">
        <div>
          <span><b>Edit event.</b> Data will be updated</span>
        </div>
      </notification>
      <tiles>
        <card-component
          :title="formCardTitle"
          icon="calendar-edit"
          class="tile is-child"
        >
          <form @submit.prevent="submit">
            <b-field label="Title" message="Event name">
              <b-input
                readonly
                placeholder="e.g. SINABIA 2019"
                name="title"
                v-model="form.title"
                required
              />
            </b-field>
            <b-field horizontal label="Place" message="Event location">
              <b-select
                v-model="form.place"
                placeholder="Select location"
                expanded
              >
                <option value="Online">Online</option>
                <option value="ITM">ITM</option>
                <option value="G4">G4</option>
                <option value="Norte">Norte</option>
                <option value="Poniente">Poniente</option>
                <option value="">Other</option>
              </b-select>
            </b-field>
            <b-field horizontal label="Type" message="Event type">
              <b-select
                v-model="form.type"
                placeholder="Select a type"
                expanded
              >
                <option value="Workshop">Workshop</option>
                <option value="Course">Course</option>
                <option value="Webinar">Webinar</option>
                <option value="Simposium">Simposium</option>
                <option value="">Other</option>
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
              label="Corum"
              message="Number of particpants"
              horizontal
              v-if="!form.isPublic"
            >
              <b-input
                name="max"
                min="1"
                max="100"
                type="number"
                v-model="form.corum"
              />
            </b-field>
            <b-field horizontal>
              <b-checkbox
                type="is-link"
                v-model="form.isPublic"
                class="is-thin"
              >
                Open to the public
              </b-checkbox>
            </b-field>
            <b-field horizontal label="Date start" message="Event start">
              <b-datetimepicker
                v-model="date_start"
                placeholder="Select a datetime..."
                icon="calendar-today"
                :locale="locale"
                :timepicker="{ hourFormat }"
              >
              </b-datetimepicker>
            </b-field>
            <b-field horizontal label="Date end" message="Event end">
              <b-datetimepicker
                v-model="date_end"
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
                v-model="form.description"
                type="textarea"
              ></b-input>
            </b-field>
            <b-field>
              <b-button
                type="is-primary"
                :loading="isLoading"
                native-type="submit"
                >Save changes</b-button
              >
            </b-field>
          </form>
        </card-component>
        <card-component
          v-if="form.title"
          title="Event details"
          icon="calendar"
          class="tile is-child"
        >
          <EventPreview :event="form" />
        </card-component>
      </tiles>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import Notification from '@/components/Notification'
import EventPreview from './EventPreview'
import { fetch, update } from '@/api/events'
export default {
  name: 'EventForm',
  components: {
    Tiles,
    HeroBar,
    TitleBar,
    Notification,
    EventPreview
  },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      hourFormat: undefined, // Browser locale
      locale: undefined, // Browser locale
      isLoading: false,
      isModalActive: false,
      date_start: null,
      date_end: null,
      form: this.getClearFormObject(),
      createdReadable: null
    }
  },
  computed: {
    titleStack () {
      let lastCrumb

      if (this.id) {
        lastCrumb = this.form.title
      } else {
        lastCrumb = 'New event'
      }
      return ['Admin', 'Events', lastCrumb]
    },
    heroTitle () {
      if (this.id) {
        return this.form.title
      } else {
        return 'Create event'
      }
    },
    heroRouterLinkTo () {
      if (this.id) {
        return { name: 'event.new' }
      } else {
        return '/'
      }
    },
    heroRouterLinkLabel () {
      if (this.id) {
        return 'New event'
      } else {
        return 'Dashboard'
      }
    },
    formCardTitle () {
      if (this.id) {
        return 'Edit event'
      } else {
        return 'New event'
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getClearFormObject () {
      return {}
    },
    getData () {
      if (this.id) {
        this.isLoading = true
        fetch(this.id)
          .then(item => {
            this.form = item
            this.date_start = new Date(item.date_start)
            this.date_end = new Date(item.date_end)
            this.isLoading = false
          })
          .catch(e => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${e}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
    },
    input (v) {
      this.createdReadable = dayjs(v).format('MMM D, YYYY')
    },
    async submit () {
      this.isLoading = true
      try {
        this.form.date_start = this.date_start
        this.form.date_end = this.date_end
        await update(this.id, this.form)
        this.$buefy.snackbar.open({
          message: 'Event updated',
          queue: false
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
