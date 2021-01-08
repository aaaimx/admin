<template>
  <card-component
    :title="`${total} Certificates`"
    icon="certificate"
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
        <button
          class="button is-link"
          @click="listQuery.type = 'RECOGNITION'"
          :class="{ 'is-active': listQuery.type === 'RECOGNITION' }"
        >
          RECOGNITION
        </button>
        <button
          class="button is-link"
          @click="listQuery.type = 'APPRECIATION'"
          :class="{ 'is-active': listQuery.type === 'APPRECIATION' }"
        >
          APPRECIATION
        </button>
        <button
          class="button is-link"
          @click="listQuery.type = 'PARTICIPATION'"
          :class="{ 'is-active': listQuery.type === 'PARTICIPATION' }"
        >
          PARTICIPATION
        </button>
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
        :bordered="false"
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
        <!-- <b-table-column label="ID" field="uuid" sortable v-slot="props">
        {{ props.row.uuid }}
      </b-table-column> -->
        <b-table-column label="To" field="to" sortable v-slot="props">
          <template>
            <router-link tag="a" :to="'/certificates/' + props.row.uuid">
              <small>{{ props.row.to }}</small>
            </router-link>
          </template>
        </b-table-column>
        <b-table-column label="Type" sortable field="type" v-slot="props">
          <small>{{ props.row.type }}</small>
        </b-table-column>
        <b-table-column label="Event" field="event" v-slot="props">
          <small v-if="!props.row.event" class="has-text-grey is-abbr-like"
            >No event</small
          >
          <small v-else>{{
            props.row.event.title.length > 15
              ? props.row.event.title.slice(0, 30) + '...'
              : props.row.event.title
          }}</small>
        </b-table-column>
        <b-table-column label="Date" sortable field="created_at" v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.created_at"
            >{{ new Date(props.row.created_at).toLocaleDateString() }}</small
          >
        </b-table-column>
        <b-table-column
          field="published"
          label="Status"
          sortable
          centered
          v-slot="props"
        >
          <span
            class="tag is-rounded"
            :class="{
              'is-success': props.row.published,
              'is-danger': !props.row.published
            }"
          >
            {{ props.row.published ? 'Online' : 'Draft' }}
          </span>
        </b-table-column>
        <b-table-column
          custom-key="actions"
          label="Actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons">
            <a
              tag="a"
              target="_blank"
              :href="
                'https://www.aaaimx.org/certificates/?id=' + props.row.uuid
              "
              class="button is-small is-info"
            >
              <b-tooltip type="is-info" label="View online"
                ><b-icon icon="open-in-new" size="is-small"
              /></b-tooltip>
            </a>
            <button
              class="button is-small is-primary"
              type="button"
              @click.prevent="generateCert(props.row)"
            >
              <b-tooltip type="is-link" label="Generate image"
                ><b-icon icon="refresh" size="is-small"
              /></b-tooltip>
            </button>
            <button
              class="button is-small is-light"
              type="button"
              @click.prevent="sendCertMessage(props.row)"
            >
              <b-tooltip type="is-primary" label="Send a Discord"
                ><b-icon icon="discord" size="is-small"
              /></b-tooltip>
            </button>
            <button
              class="button is-small is-danger"
              type="button"
              @click.prevent="trashModal(props.row)"
            >
              <b-tooltip type="is-danger" label="Delete">
                <b-icon icon="trash-can" size="is-small"
              /></b-tooltip>
            </button>
          </div>
        </b-table-column>

        <template slot="detail" slot-scope="props">
          <Preview :cert="props.row" styleMode="single" />
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
            <div class="column">
              <Pagination :listQuery="listQuery" :total="total" />
            </div>
          </div>
        </div>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList, remove, update } from '@/api/certificates'
import { sendCertToDiscord } from '@/api/discord'
import ModalBox from '@/components/ConfirmDelete'
import Preview from './CertPreview'
import tableMixin from '@/mixins/table'

export default {
  name: 'CertificatesTable',
  components: { ModalBox, Preview },
  props: {
    event: {
      type: Number,
      default: null
    }
  },
  mixins: [tableMixin],
  data () {
    return {
      listQuery: {
        type: '',
        event: this.event,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      },
      key: 'uuid',
      sortField: 'date_created',
      defaultSortOrder: 'asc',
      action: ''
    }
  },
  methods: {
    handleClick (type) {
      console.log(type)
      this.listQuery.type = type
    },
    clearFilters () {
      this.listQuery = {
        type: '',
        event: this.event,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      }
      this.sortField = 'date_created'
      this.defaultSortOrder = 'asc'
    },
    actionSample () {
      this.$router.push('/certificates/new')
    },
    getData () {
      this.isLoading = true
      this.listQuery.offset = this.listQuery.limit * (this.listQuery.page - 1)
      fetchList(this.listQuery).then(res => {
        this.list = res.results
        this.total = res.count
        this.isLoading = false
      })
    },
    async generateCert (row) {
      this.isLoading = true
      try {
        await update(row.uuid, row)
        this.getData()
      } catch (error) {
        console.log(error)
        this.$buefy.dialog.alert({
          title: 'Something went wrong :(',
          message:
            'Please navigate to the certificate detail and cofirm the required information not be empty',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } finally {
        this.isLoading = false
      }
    },
    async onAction (action) {
      console.log(action)
      switch (action) {
        case 'certs':
          this.isLoading = true
          try {
            const promises = this.checkedRows.map(element => {
              return update(element.uuid, element)
            })
            Promise.all(promises).then(values => {
              this.getData()
            })
          } catch (error) {
            console.log(error)
          } finally {
            this.isLoading = false
          }
          break
        default:
          break
      }
    },
    async sendCertMessage (data) {
      this.isLoading = true
      try {
        await sendCertToDiscord(data)
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
    async trashConfirm () {
      this.isModalActive = false
      try {
        await remove(this.trashObject.uuid)
      } catch (error) {
        console.log(error)
      } finally {
        this.getData()
      }

      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    }
  }
}
</script>
