<template>
  <card-component
    :title="`${total} Members`"
    icon="account-multiple"
    class="has-table"
    :has-button-slot="true"
  >
    <action-button slot="button" @button-click="getData(), (listQuery = {})" />
    <card-toolbar slot="toolbar" class="is-upper">
      <div slot="left">
        <SearchInput :listQuery="listQuery" />
      </div>
      <div slot="right">
        <b-dropdown
          v-model="listQuery.role"
          :max-height="500"
          scrollable
          multiple
          append-to-body
          position="is-bottom-left"
          aria-role="list"
        >
          <button
            class="button is-link is-small"
            slot="trigger"
            slot-scope="{ active }"
          >
            <span>{{ listQuery.role || 'Select role' }}</span>
            <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
          </button>
          <b-dropdown-item
            v-for="role in roles"
            :key="role.name"
            :value="role.name"
            aria-role="listitem"
          >
            <div class="media" :style="{ color: role.color }">
              <b-icon size="is-small" class="media-left" icon="tag" />
              <div class="media-content">
                <h3>{{ role.name }}</h3>
              </div>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </card-toolbar>
    <div>
      <modal-box
        :is-active="isModalActive"
        :trash-object-name="trashObjectName"
        @confirm="trashConfirm"
        @cancel="trashCancel"
      />
      <!-- START Members Table -->
      <b-table
        :checked-rows.sync="checkedRows"
        :checkable="true"
        :loading="isLoading"
        :paginated="paginated"
        :per-page="perPage"
        :striped="true"
        :hoverable="true"
        :narrowed="true"
        default-sort="name"
        :show-detail-icon="true"
        :data="list"
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
            {{ props.row.name }} (<small>@{{ props.row.username }}</small>)
          </template>
        </b-table-column>
        <b-table-column
          label="Roles"
          field="roles"
          sortable
          v-slot="props"
        >
          <small><b>{{ props.row.roles.join(', ') }}</b></small>
        </b-table-column>
        <b-table-column label="ID" field="id" sortable v-slot="props">
          {{ props.row.id.slice(0, 10) }}
        </b-table-column>
        <b-table-column label="Date joined" sortable v-slot="props">
          <small
            class="has-text-grey is-abbr-like"
            :title="props.row.dateJoined"
            >{{ props.row.dateJoined }}</small
          >
        </b-table-column>
        <b-table-column
          custom-key="actions"
          label="Actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons">
            <!-- <a class="button is-small is-primary">
              <b-icon icon="account-edit" size="is-small" />
            </a> -->
            <b-tooltip type="is-primary" label="Kick member">
              <button
                class="button is-small is-danger"
                type="button"
                @click.prevent="trashModal(props.row)"
              >
                <b-icon icon="karate" size="is-small" />
              </button>
            </b-tooltip>
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
          <EmptyData :isLoading="isLoading" />
        </section>
        <div slot="footer">
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
                  <b-icon class="media-left" type="is-danger" icon="karate" />
                  <div class="media-content">
                    <h3>Kick selected</h3>
                  </div>
                </div>
              </b-dropdown-item>
            </b-dropdown>
            <!-- <Pagination :listQuery="listQuery" :total="total" /> -->
          </div>
        </div>
      </b-table>
      <!-- END Members Table -->
    </div>
  </card-component>
</template>

<script>
import ModalBox from '@/components/ConfirmDelete'
import { getMembers } from '@/api/discord'

export default {
  name: 'MembersTable',
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: '/data-sources/list.json'
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
      total: 0,
      stric_mode: false,
      members: [],
      list: [],
      roles: [],
      isLoading: false,
      paginated: true,
      perPage: 30,
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
        this.handleFilters()
      },
      deep: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      if (this.dataUrl) {
        this.isLoading = true
        try {
          const data = await getMembers()
          this.total = data.members.length
          this.members = data.members
          this.roles = data.roles
          this.list = data.members
        } catch (error) {
          console.log(error)
        } finally {
          this.isLoading = false
        }
      }
    },
    /**
     * Returns TRUE if the first specified array contains all elements
     * from the second one. FALSE otherwise.
     *
     * @param {array} superset
     * @param {array} subset
     *
     * @returns {boolean}
     */
    arrayContainsArray (superset, subset) {
      if (subset.length === 0) {
        return false
      }
      return subset.every(function (value) {
        return superset.indexOf(value) >= 0
      })
    },
    handleFilters () {
      this.list = this.members
      if (this.listQuery.role) {
        this.list = this.list.filter(m => {
          // return this.listQuery.role.some(role => m.roles.includes(role))
          return this.arrayContainsArray(m.roles, this.listQuery.role)
        })
      }
      if (this.listQuery.search) {
        this.list = this.list.filter(
          m =>
            m.name
              .toUpperCase()
              .indexOf(this.listQuery.search.toUpperCase()) !== -1 ||
            m.username
              .toUpperCase()
              .indexOf(this.listQuery.search.toUpperCase()) !== -1 ||
            m.id.toUpperCase().indexOf(this.listQuery.search.toUpperCase()) !==
              -1
        )
      }
      this.total = this.list.length
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
