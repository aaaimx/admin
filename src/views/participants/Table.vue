<template>
  <card-component
    title="Participants"
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
        :backend-pagination="true"
        :backend-sorting="true"
        :striped="true"
        :hoverable="true"
        :checkable="true"
        :detailed="false"
        :paginated="false"
        :show-detail-icon="true"
        :checked-rows.sync="checkedRows"
        :loading="isLoading"
        :current-page="listQuery.page"
        :per-page="listQuery.limit"
        :total="total"
        :opened-detailed="defaultOpenedDetails"
        @details-open="row => onCollapse(row.id)"
        detail-key="id"
      >
        <b-table-column label="Email" field="email" sortable v-slot="props">
          {{ props.row.email }}
        </b-table-column>
        <b-table-column label="Name" field="fullname" sortable v-slot="props">
          {{ props.row.fullname }}
        </b-table-column>
        <b-table-column
          label="Adscription"
          field="adscription"
          sortable
          v-slot="props"
        >
          {{ props.row.adscription }}
        </b-table-column>
        <b-table-column label="Career" field="career" sortable v-slot="props">
          {{ props.row.career }}
        </b-table-column>
        <b-table-column
          label="Department"
          field="department"
          sortable
          v-slot="props"
        >
          {{ props.row.department }}
        </b-table-column>
        <b-table-column
          label="Enroll"
          field="enrollment"
          sortable
          v-slot="props"
        >
          {{ props.row.enrollment }}
        </b-table-column>
        <b-table-column
          custom-key="actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons is-right">
            <button
              :class="{ 'is-success': props.row.published }"
              class="button is-small"
              type="button"
              @click.prevent="trashModal(props.row)"
            >
              <b-icon icon="web" size="is-small" />
            </button>
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
          <Pagination :listQuery="listQuery" :total="total" />
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
      listQuery: {
        event: this.event_id,
        page: 1,
        limit: 10,
        offset: 0
      }
    }
  },
  methods: {
    handleClick (type) {
      console.log(type)
      this.listQuery.type = type
    },
    actionSample () {},
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
    }
  }
}
</script>
