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
      <div slot="left" class="buttons has-addons">
        <button class="button is-active" @click="actionSample">
          All time
        </button>
        <button class="button" disabled>This month</button>
        <button class="button" disabled>This year</button>
      </div>
      <form slot="right">
        <SearchInput :listQuery="listQuery" />
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
              <small>{{ props.row.title }}</small>
            </router-link>
          </template>
        </b-table-column>
        <b-table-column label="Type" field="type" sortable v-slot="props">
          <small>{{ props.row.type }}</small>
        </b-table-column>
        <b-table-column label="Place" field="place" sortable v-slot="props">
          <small>{{ props.row.place }}</small>
        </b-table-column>
        <b-table-column label="Date start" v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.date_start"
            >{{ new Date(props.row.date_start).toLocaleDateString() }}</small
          >
        </b-table-column>
        <b-table-column label="Date end" v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.date_end"
            >{{ new Date(props.row.date_end).toLocaleDateString() }}</small
          >
        </b-table-column>
        <b-table-column label="Hours" centered sortable v-slot="props">
          <small>{{ props.row.hours }}</small>
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

        <template slot="detail" slot-scope="props">
          <EventPreview :event="props.row" />
          <hr />
          <CertList ref="certlist" :event="current_event" />
        </template>

        <section class="section" slot="empty">
          <EmptyData :isLoading="isLoading" />
        </section>

        <div slot="footer">
          <div class="is-flex is-justify-content-space-between">
            <div style="margin: 0.5rem;">
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
                    <b-icon class="media-left" type="is-success" icon="web" />
                    <div class="media-content">
                      <h3>Publish selected</h3>
                    </div>
                  </div>
                </b-dropdown-item>
                <b-dropdown-item aria-role="listitem">
                  <div class="media has-text-dark">
                    <b-icon class="media-left" type="is-danger" icon="web" />
                    <div class="media-content">
                      <h3>Mark as draft</h3>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <Pagination :listQuery="listQuery" :total="total" />
          </div>
        </div>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList as fetchEvents, remove } from '@/api/events'
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
    async trashConfirm () {
      await remove(this.trashObject.id)
      this.$buefy.snackbar.open({
        message: 'Event deleted',
        queue: false
      })
      this.isModalActive = false
      this.getEvents()
    }
  }
}
</script>
