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
      @button-click="actionSample"
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
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons is-right">
            <b-tooltip label="Validate hours">
              <button class="button is-small is-success" type="button">
                <b-icon icon="check-circle" size="is-small" />
              </button>
            </b-tooltip>
            <button
              class="button is-small is-danger"
              type="button"
              @click.prevent="trashModal(props.row)"
            >
              <b-icon icon="trash-can" size="is-small" />
            </button>
          </div>
        </b-table-column>

        <template slot="detail"> </template>

        <section class="section" slot="empty">
          <EmptyData :isLoading="isLoading" />
        </section>

        <template slot="footer">
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
                  <div class="media">
                    <b-icon
                      class="has-text-success media-left"
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
            <Pagination :listQuery="listQuery" :total="total" />
          </div>
        </template>
      </b-table>
    </div>
  </card-component>
</template>

<script>
import { fetchList, remove } from '@/api/participants'
import ModalBox from '@/components/ConfirmDelete'
import tableMixin from '@/mixins/table'

export default {
  name: 'ParticipantsTable',
  components: { ModalBox },
  mixins: [tableMixin],
  props: {
    event_id: {
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
        event: this.event_id,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      },
      key: 'id',
      sortField: 'name'
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
        await remove(this.trashObject.uuid)
      } catch (error) {
        console.log(error)
      } finally {
        this.getList()
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
