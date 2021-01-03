<template>
  <card-component
    :title="`${clients.length} Members`"
    icon="account-multiple"
    class="has-table"
    :has-button-slot="true"
  >
    <action-button slot="button" @button-click="getData" />
    <card-toolbar slot="toolbar" class="is-upper">
      <form slot="left">
        <SearchInput :listQuery="listQuery" />
      </form>
      <form slot="right">
        <b-select
          @input="getData"
          placeholder="Select a role"
          v-model="listQuery.role"
        >
          <option v-for="role in roles" :key="role" :value="role">{{
            role
          }}</option>
        </b-select>
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
        :checked-rows.sync="checkedRows"
        :checkable="false"
        :loading="isLoading"
        :paginated="paginated"
        :per-page="perPage"
        :striped="true"
        :hoverable="true"
        :narrowed="true"
        default-sort="name"
        :show-detail-icon="true"
        :data="clients"
        detailed
        detail-key="id"
      >
        <b-table-column
          cell-class="has-no-head-mobile is-image-cell"
          v-slot="props"
        >
          <div class="image">
            <img :src="props.row.avatar" class="is-rounded" />
          </div>
        </b-table-column>
        <b-table-column label="Name" field="name" sortable>
          <!-- <template slot="searchable" slot-scope="props">
            <b-input
              v-model="props.filters[props.column.field]"
              placeholder="Search..."
              icon="magnify"
              size="is-small"
            />
          </template> -->
          <template v-slot="props">
            {{ props.row.name }}
          </template>
        </b-table-column>
        <b-table-column
          label="Username"
          field="username"
          sortable
          v-slot="props"
        >
          {{ props.row.username }}
        </b-table-column>
        <b-table-column label="ID" field="id" sortable v-slot="props">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column label="Date joined" v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.dateJoined"
            >{{ props.row.dateJoined }}</small
          >
        </b-table-column>
        <b-table-column
          custom-key="actions"
          cell-class="is-actions-cell"
          v-if="false"
          v-slot="props"
        >
          <div class="buttons is-right">
            <a class="button is-small is-primary">
              <b-icon icon="account-edit" size="is-small" />
            </a>
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
          <article class="media">
            <figure class="media-left">
              <p class="image ">
                <img :src="props.row.avatar" class="is-rounded is-64x64" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ props.row.name }}</strong
                  >&nbsp;
                  <small>@{{ props.row.username }}</small>
                  <br />
                  <b-tag
                    rounded
                    type="is-primary is-light"
                    size="is-small"
                    v-for="role in props.row.roles"
                    :key="role"
                    >{{ role }}</b-tag
                  >
                </p>
              </div>
            </div>
          </article>
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
      </b-table>
    </div>
  </card-component>
</template>

<script>
import ModalBox from '@/components/ConfirmDelete'
import roles from '@/data-sources/roles'
import clients from '@/data-sources/clients'

export default {
  name: 'ClientsTableSample',
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: '/data-sources/clients.json'
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      listQuery: {
        search: null
      },
      clients: [],
      roles: roles.data,
      isLoading: false,
      paginated: true,
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
  watch: {
    listQuery: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      if (this.dataUrl) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.clients = clients.data
          if (this.listQuery.role) {
            this.clients = this.clients.filter(
              m => m.roles.indexOf(this.listQuery.role) !== -1
            )
          }
          if (this.listQuery.search) {
            this.clients = this.clients.filter(
              m =>
                m.name
                  .toUpperCase()
                  .indexOf(this.listQuery.search.toUpperCase()) !== -1 ||
                m.username
                  .toUpperCase()
                  .indexOf(this.listQuery.search.toUpperCase()) !== -1 ||
                m.id
                  .toUpperCase()
                  .indexOf(this.listQuery.search.toUpperCase()) !== -1
            )
          }
        }, 1000)
      }
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
