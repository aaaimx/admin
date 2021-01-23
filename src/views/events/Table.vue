<template>
  <card-component
    :title="`${total} Events`"
    icon="calendar-multiple"
    class="has-table has-mobile-sort-spaced"
    :has-button-slot="true"
  >
    <action-button
      slot="button"
      icon="autorenew"
      label="Clear filters"
      @button-click="clearFilters"
    />
    <card-toolbar slot="toolbar" class="is-upper">
      <form slot="left">
        <SearchInput :listQuery="listQuery" />
      </form>
      <div slot="right" class="columns">
        <b-field class="ml-2">
          <b-datepicker
            type="month"
            icon="calendar-today"
            size="is-small"
            placeholder="Click to select..."
            v-model="listQuery.range"
            range
          >
          </b-datepicker>
        </b-field>
        <b-field class="ml-2">
          <b-select
            v-model="listQuery.type"
            placeholder="Type"
            size="is-small"
            expanded
          >
            <option value="Workshop">Workshop</option>
            <option value="Course">Course</option>
            <option value="Webinar">Webinar</option>
            <option value="Simposium">Simposium</option>
            <option value="">All</option>
          </b-select>
        </b-field>
        <b-field class="ml-2">
          <b-select
            v-model="listQuery.place"
            placeholder="Place"
            size="is-small"
            expanded
          >
            <option value="Online">Online</option>
            <option value="ITM">ITM</option>
            <option value="G4">G4</option>
            <option value="Norte">Norte</option>
            <option value="Poniente">Poniente</option>
            <option value="">All</option>
          </b-select>
        </b-field>
        <b-field class="ml-2">
          <b-select
            v-model="listQuery.division"
            placeholder="Division"
            size="is-small"
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
      </div>
    </card-toolbar>
    <div>
      <modal-box
        :is-active="isModalActive"
        :trash-object-name="trashObjectName"
        @confirm="trashConfirm"
        @cancel="trashCancel"
      />
      <b-table
        :data="list"
        :striped="true"
        :hoverable="true"
        :bordered="true"
        :narrowed="true"
        :checkable="true"
        :checked-rows.sync="checkedRows"
        :detailed="true"
        :show-detail-icon="true"
        :detail-key="key"
        :opened-detailed="defaultOpenedDetails"
        @details-open="onCollapse"
        backend-pagination
        :total="total"
        :paginated="false"
        :loading="isLoading"
        :current-page="listQuery.page"
        :per-page="listQuery.limit"
        backend-sorting
        :default-sort-direction="defaultSortOrder"
        :default-sort="[sortField, sortOrder]"
        @sort="onSort"
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
          <template>
            <router-link tag="a" :to="'/events/' + props.row.id">
              <small>{{ props.row.title.slice(0, 50) }}</small>
            </router-link>
          </template>
        </b-table-column>
        <b-table-column label="Type" field="type" sortable v-slot="props">
          <small>{{ props.row.type }}</small>
        </b-table-column>
        <b-table-column
          label="Division"
          field="division"
          sortable
          v-slot="props"
        >
          <small>{{
            props.row.division ? props.row.division.name : 'AAAIMX'
          }}</small>
        </b-table-column>
        <b-table-column label="Place" field="place" sortable v-slot="props">
          <small>{{ props.row.place }}</small>
        </b-table-column>
        <b-table-column label="Date start" sortable v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.date_start"
            >{{ new Date(props.row.date_start).toLocaleDateString() }}</small
          >
        </b-table-column>
        <b-table-column label="Date end" sortable v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.date_end"
            >{{ new Date(props.row.date_end).toLocaleDateString() }}</small
          >
        </b-table-column>
        <b-table-column
          label="Hours"
          field="hours"
          centered
          sortable
          v-slot="props"
        >
          <small>{{ props.row.hours }}</small>
        </b-table-column>
        <b-table-column
          field="is_draft"
          label="Status"
          sortable
          centered
          v-slot="props"
        >
          <span
            class="tag is-rounded"
            :class="{
              'is-success': !props.row.is_draft,
              'is-danger': props.row.is_draft
            }"
          >
            {{ !props.row.is_draft ? 'Online' : 'Draft' }}
          </span>
        </b-table-column>
        <b-table-column
          custom-key="actions"
          label="Actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons">
            <!-- <router-link
              :to="{ name: 'event.edit', params: { id: props.row.id } }"
              class="button is-small is-primary"
              ><b-tooltip type="is-link" label="Edit event"
                ><b-icon icon="calendar-edit" size="is-small"
              /></b-tooltip> </router-link
            >-->
            <button
              class="button is-small is-success"
              type="button"
              @click.prevent="publishEvent(props.row)"
            >
              <b-tooltip type="is-primary" label="Publish/Unpublish">
                <b-icon icon="web" size="is-small"
              /></b-tooltip>
            </button>
            <button
              class="button is-small is-light"
              type="button"
              @click.prevent="sendMessageReminder(props.row)"
            >
              <b-tooltip type="is-primary" label="Send a Discord">
                <b-icon icon="discord" size="is-small"
              /></b-tooltip>
            </button>
            <button class="button is-small is-info" type="button">
              <b-tooltip type="is-info" label="Participants">
                <b-icon icon="download" size="is-small"
              /></b-tooltip>
            </button>
          </div>
        </b-table-column>

        <template slot="detail" slot-scope="props">
          <EventPreview :event="props.row" />
          <hr />
          <CertList ref="certlist" :event="props.row.title" />
        </template>

        <section class="section" slot="empty">
          <EmptyData :isLoading="isLoading" />
        </section>

        <div slot="footer" style="padding: 1%;">
          <div class="columns is-desktop">
            <div class="column is-one-third-desktop">
              <b-dropdown append-to-body aria-role="list">
                <button
                  class="button is-primary is-small"
                  slot="trigger"
                  slot-scope="{ active }"
                >
                  <span>Actions</span>
                  <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
                </button>
                <b-dropdown-item aria-role="listitem">
                  <div class="media has-text-dark">
                    <b-icon
                      class="media-left"
                      type="is-primary"
                      icon="file-excel"
                    />
                    <div class="media-content">
                      <h3>Export as excel</h3>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <Pagination class="column" :listQuery="listQuery" :total="total" />
          </div>
        </div>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList as fetchEvents, remove, partialUpdate } from '@/api/events'
import { sendEventToDiscord } from '@/api/discord'
import ModalBox from '@/components/ConfirmDelete'
import CertList from './CertList'
import EventPreview from './EventPreview'
import tableMixin from '@/mixins/table'

export default {
  name: 'EventsTable',
  components: { ModalBox, CertList, EventPreview },
  mixins: [tableMixin],
  data () {
    return {
      listQuery: {
        search: '',
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      },
      key: 'id',
      sortField: 'date_start',
      defaultSortOrder: 'desc',
      certificates: [],
      current_event: ''
    }
  },
  methods: {
    clearFilters () {
      this.listQuery = {
        search: '',
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      }
      this.sortField = 'date_start'
      this.defaultSortOrder = 'asc'
    },
    actionSample () {
      this.$buefy.toast.open({
        message: 'Everything OK!',
        type: 'is-info',
        queue: false
      })
    },
    getData () {
      this.isLoading = true
      this.listQuery.offset = this.listQuery.limit * (this.listQuery.page - 1)
      fetchEvents(this.listQuery)
        .then(r => {
          this.isLoading = false
          this.total = r.count
          this.list = r.results
        })
        .catch(e => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    },
    async sendMessageReminder (data) {
      this.isLoading = true
      try {
        await sendEventToDiscord(data)
        this.$buefy.snackbar.open({
          message: 'Message sent to Discord',
          queue: false
        })
      } catch (error) {
        console.log(error)
        this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Something went wrong :(. Try later!!!',
          queue: false
        })
      } finally {
        this.isLoading = false
      }
    },
    async publishEvent (row) {
      this.isLoading = true
      try {
        await partialUpdate(row.id, { is_draft: !row.is_draft })
        this.$buefy.snackbar.open({
          message: 'Event Updated',
          queue: false
        })
      } catch (error) {
        console.log(error)
        this.$buefy.toast.open({
          type: 'is-danger',
          message: 'Something went wrong :(. Try later!!!',
          queue: false
        })
      } finally {
        this.isLoading = false
        this.getData()
      }
    },
    async trashConfirm () {
      await remove(this.trashObject.id)
      this.$buefy.snackbar.open({
        message: 'Event removed',
        queue: false
      })
      this.isModalActive = false
      this.getData()
    }
  }
}
</script>
