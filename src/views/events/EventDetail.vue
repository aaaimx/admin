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
          <EventForm v-if="event.id" :event="event" />
        </card-component>
        <card-component
          v-if="event.title"
          title="Event details"
          icon="calendar"
          class="tile is-child"
        >
          <EventPreview :event="event" />
        </card-component>
      </tiles>
      <ParticipantsTable :event_id="id"/>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import Notification from '@/components/Notification'
import ParticipantsTable from '@/views/participants/Table'
import EventPreview from './EventPreview'
import EventForm from './EventForm'
import { fetch } from '@/api/events'
export default {
  name: 'EventDetail',
  components: {
    Tiles,
    HeroBar,
    TitleBar,
    Notification,
    EventPreview,
    EventForm,
    ParticipantsTable
  },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      isLoading: false,
      isModalActive: false,
      event: this.getClearFormObject(),
      createdReadable: null
    }
  },
  computed: {
    titleStack () {
      let lastCrumb

      if (this.id) {
        lastCrumb = this.event.title
      } else {
        lastCrumb = 'New event'
      }
      return ['Admin', 'Events', lastCrumb]
    },
    heroTitle () {
      if (this.id) {
        return this.event.title
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
            this.event = item
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
    }
  }
}
</script>
