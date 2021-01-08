<template>
  <card-component
    :title="`${total} Participants`"
    icon="account-multiple"
    class="has-table"
    :has-button-slot="true"
  >
    <action-button
      slot="button"
      icon="account-plus"
      label="Create participant"
      @button-click="isEmailModalActive = true"
    />
    <card-toolbar slot="toolbar" class="is-upper">
      <form slot="left">
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
      <EmailModal
        :event="event"
        :is-active="isEmailModalActive"
        :checked-rows="checkedRows"
        @cancel="isEmailModalActive = false"
      />
      <b-table
        :data="list"
        :striped="true"
        :hoverable="true"
        :bordered="false"
        :narrowed="true"
        :checkable="true"
        :checked-rows.sync="checkedRows"
        :detailed="false"
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
        <b-table-column
          v-for="item in headers"
          :key="item.field"
          :label="item.label"
          :field="item.field"
          :sortable="item.sortable"
          v-slot="props"
        >
          {{ props.row[item.field] }}
        </b-table-column>
        <b-table-column
          custom-key="actions"
          centered
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons">
            <button class="button is-small is-success" type="button">
              <b-tooltip type="is-success" label="Validate hours">
                <b-icon icon="check-circle" size="is-small"
              /></b-tooltip>
            </button>

            <button
              class="button is-small is-danger"
              type="button"
              @click.prevent="trashModal(props.row)"
            >
              <b-tooltip type="is-danger" label="Remove">
                <b-icon icon="trash-can" size="is-small"
              /></b-tooltip>
            </button>
          </div>
        </b-table-column>

        <template slot="detail"> </template>

        <section class="section" slot="empty">
          <EmptyData :isLoading="isLoading" />
        </section>

        <template slot="footer" style="padding: 1%;">
          <div class="columns">
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
                  <div class="media">
                    <b-icon
                      class="has-text-success media-left"
                      icon="check-circle"
                    />
                    <div class="media-content">
                      <h3>Mark as responsible</h3>
                    </div>
                  </div>
                </b-dropdown-item>

                <b-dropdown-item
                  aria-role="listitem"
                  @click="isEmailModalActive = true"
                >
                  <div class="media">
                    <b-icon
                      class="has-text-info media-left"
                      icon="email-send"
                    />
                    <div class="media-content">
                      <h3>Send confirmation</h3>
                    </div>
                  </div>
                </b-dropdown-item>

                <b-dropdown-item aria-role="listitem">
                  <div class="media">
                    <b-icon
                      class="has-text-primary media-left"
                      icon="file-excel-box"
                    />
                    <div class="media-content">
                      <h3>Export as xlsx</h3>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <Pagination class="column" :listQuery="listQuery" :total="total" />
          </div>
        </template>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList, remove } from '@/api/participants'
import ModalBox from '@/components/ConfirmDelete'
import EmailModal from './EmailForm'
import tableMixin from '@/mixins/table'

export default {
  name: 'ParticipantsTable',
  components: { ModalBox, EmailModal },
  mixins: [tableMixin],
  props: {
    event: {
      default: null
    }
  },
  data () {
    return {
      headers: [
        {
          label: 'Email',
          field: 'email',
          sortable: true
        },
        {
          label: 'Name',
          field: 'fullname',
          sortable: true
        },
        {
          label: 'Adscription',
          field: 'adscription',
          sortable: true
        },
        {
          label: 'Career',
          field: 'career',
          sortable: true
        },
        // {
        //   label: 'Department',
        //   field: 'department',
        //   sortable: true
        // },
        {
          label: 'Enroll',
          field: 'enrollment',
          sortable: true
        }
      ],
      listQuery: {
        event: this.event.id,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      },
      key: 'id',
      sortField: 'name',
      isEmailModalActive: false
    }
  },
  methods: {
    /*
     * Load async data
     */
    getData () {
      this.isLoading = true
      this.listQuery.offset = this.listQuery.limit * (this.listQuery.page - 1)
      fetchList(this.listQuery).then(res => {
        this.list = res.results
        this.total = res.count
        this.isLoading = false
      })
    },
    async trashConfirm () {
      this.isModalActive = false
      try {
        await remove(this.trashObject.id)
      } catch (error) {
        console.log(error)
      } finally {
        this.getData()
      }

      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    handleClick (type) {
      console.log(type)
      this.listQuery.type = type
    },
    actionSample () {}
  }
}
</script>
