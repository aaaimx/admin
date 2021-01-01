<template>
  <card-component
    title="Events"
    icon="calendar-multiple"
    class="has-table has-mobile-sort-spaced"
    :has-button-slot="true"
  >
    <refresh-button slot="button" @click="actionSample" />
    <card-toolbar slot="toolbar" class="is-upper">
      <div slot="left" class="buttons has-addons">
        <button class="button is-active" @click="actionSample">
          This week
        </button>
        <button class="button" disabled>This month</button>
        <button class="button" disabled>This year</button>
      </div>
      <form slot="right">
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              v-model="listQuery.search"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">
              <b-icon icon="magnify" custom-size="default" />
            </button>
          </div>
        </div>
      </form>
    </card-toolbar>
    <div>
      <modal-box
        :is-active="isModalActive"
        :trash-object-name="trashObjectName"
        @confirm="trashConfirm"
        @cancel="trashCancel"
      />
      <b-table
        :data="events"
        :striped="true"
        :hoverable="true"
        :checked-rows.sync="checkedRows"
        :checkable="checkable"
        :loading="isLoading"
        :current-page="listQuery.page"
        :per-page="listQuery.limit"
        :total="total"
        backend-pagination
        :opened-detailed="openedEvents"
        @details-open="onCollapse"
        detailed
        detail-key="id"
        :show-detail-icon="true"
        default-sort="date_start"
      >
        <!-- <b-table-column
        cell-class="has-no-head-mobile is-image-cell"
        v-slot="props"
      >
        <div class="image">
          <img :src="props.row.avatar" class="is-rounded" />
        </div>
      </b-table-column> -->
        <b-table-column label="Event" field="title" sortable v-slot="props">
          {{ props.row.title.slice(0, 50) }}...
        </b-table-column>
        <b-table-column label="Type" field="type" sortable v-slot="props">
          {{ props.row.type }}
        </b-table-column>
        <b-table-column label="Place" field="place" sortable v-slot="props">
          {{ props.row.place }}
        </b-table-column>
        <!-- <b-table-column
        cell-class="is-progress-col"
        label="Progress"
        field="progress"
        sortable
        v-slot="props"
      >
        <progress
          class="progress is-small is-primary"
          :value="props.row.progress"
          max="100"
          >{{ props.row.progress }}</progress
        >
      </b-table-column> -->
        <b-table-column label="Date" v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.date_start"
            >{{ new Date(props.row.date_start).toLocaleString() }}</small
          >
        </b-table-column>
        <b-table-column
          custom-key="actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons is-right">
            <router-link
              :to="{ name: 'event.edit', params: { id: props.row.id } }"
              class="button is-small is-primary"
            >
              <b-icon icon="calendar-edit" size="is-small" />
            </router-link>
            <button
              class="button is-small is-danger"
              type="button"
              @click.prevent="trashModal(props.row)"
            >
              <b-icon icon="trash-can" size="is-small" />
            </button>
          </div>
        </b-table-column>

        <template slot="detail">
          <!-- <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="/static/img/placeholder-128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong
                  >{{ props.row }}
                  {{ props.row }}</strong
                >
                <small>@{{ props.row }}</small>
                <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
        </article> -->
          <CertList ref="certlist" :event="current_event" />
        </template>

        <section class="section" slot="empty">
          <div class="content has-text-grey has-text-centered">
            <template v-if="isLoading">
              <p>
                <b-icon icon="dots-horizontal" size="is-large" />
              </p>
              <p>Fetching data...</p>
            </template>
            <template v-else>
              <p>
                <b-icon icon="emoticon-sad" size="is-large" />
              </p>
              <p>Nothing's here&hellip;</p>
            </template>
          </div>
        </section>

        <div slot="footer">
          <Pagination :listQuery="listQuery" :total="total" />
        </div>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList as fetchEvents } from '@/api/events'
import ModalBox from '@/components/ConfirmDelete'
import CertList from './CertList'

export default {
  name: 'EventsTable',
  components: { ModalBox, CertList },
  props: {
    dataUrl: {
      type: String,
      default: null
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      openedEvents: [],
      certificates: [],
      total: 0,
      listQuery: {
        limit: 10,
        offset: 0
      },
      current_event: '',
      trashObject: null,
      events: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  created () {
    this.getEvents()
  },
  watch: {
    listQuery: {
      handler (val) {
        this.getEvents()
      },
      deep: true
    }
  },
  methods: {
    actionSample () {
      this.$buefy.toast.open({
        message: 'Some action',
        type: 'is-info',
        queue: false
      })
    },
    onCollapse (row) {
      this.openedEvents = [row.id]
      this.current_event = row.title
    },
    getEvents () {
      this.isLoading = true
      this.listQuery.offset = this.listQuery.limit * (this.listQuery.page - 1)
      fetchEvents(this.listQuery)
        .then(r => {
          this.isLoading = false
          this.total = r.count
          this.events = r.results
        })
        .catch(e => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    },
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
}
</script>
