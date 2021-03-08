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
      @button-click="isParticipantModalActive = true"
    />
    <card-toolbar slot="toolbar" class="is-upper">
      <form slot="left">
        <SearchInput :listQuery="listQuery" />
      </form>
      <div slot="right" class="columns">
        <b-field class="mr-2" grouped>
          <b-datepicker
            icon="calendar-today"
            size="is-small"
            :mobile-native="false"
            placeholder="By date range"
            v-model="listQuery.range"
            range
          >
          </b-datepicker>
          <b-datepicker
            type="month"
            icon="calendar-today"
            size="is-small"
            :mobile-native="false"
            placeholder="By month range"
            v-model="listQuery.range"
            range
          >
          </b-datepicker>
        </b-field>
        <b-field class="mr-2">
          <b-select
            v-model="listQuery.adscription"
            placeholder="Adscription"
            size="is-small"
            expanded
          >
            <option>ITM</option>
            <option :value="null">Todos</option>
          </b-select>
        </b-field>
        <b-field class="mr-2">
          <b-select
            v-model="listQuery.department"
            placeholder="Departamento"
            size="is-small"
            expanded
          >
            <option value="Departamento de Sistemas y Computación (DSC)"
              >DSC</option
            >
            <option value="Departamento de Ing. Eléctrica y Electrónica (DIEE)"
              >DIEE</option
            >
            <option :value="null">Todos</option>
          </b-select>
        </b-field>
        <b-field class="mr-2">
          <b-select
            v-model="listQuery.ocupation"
            placeholder="Ocupación"
            size="is-small"
            expanded
          >
            <option>Estudiante</option>
            <option>Docente</option>
            <option :value="null">Todos</option>
          </b-select>
        </b-field>

        <action-button
          class="mr-2"
          slot="button"
          icon="autorenew"
          label="Clear filters"
          @button-click="clearFilters"
        />
      </div>
    </card-toolbar>
    <div>
      <modal-box
        :is-active="isModalActive"
        :trash-object-name="trashObjectName"
        @confirm="trashConfirm"
        @cancel="trashCancel"
      />
      <EmailModal
        v-if="event"
        :event="event"
        :is-active="isEmailModalActive"
        :checked-rows="checkedRows"
        @cancel="isEmailModalActive = false"
      />
      <CreateModal
        v-if="event"
        :event="event"
        :is-active="isParticipantModalActive"
        @cancel=";(isParticipantModalActive = false), getData()"
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
        :mobile-cards="false"
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
          <template v-if="item.field !== 'event'">{{
            props.row[item.field]
          }}</template>
          <template v-else>
            <small v-if="!props.row.event" class="has-text-grey is-abbr-like"
              >No event</small
            >
            <small v-else
              ><router-link
                tag="a"
                :to="{
                  name: 'event.edit',
                  params: { id: props.row.event.id }
                }"
              >
                {{ props.row.event.title }}
              </router-link></small
            >
          </template>
        </b-table-column>
        <b-table-column
          custom-key="actions"
          centered
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons">
            <button
              v-if="props.row.cc_hours === 0"
              class="button is-small is-success"
              @click="validateCC(props.row, event.hours)"
              type="button"
            >
              <b-tooltip type="is-success" label="Validate CC">
                <b-icon icon="check-circle" size="is-small"
              /></b-tooltip>
            </button>
            <button
              v-else
              class="button is-small is-danger"
              @click="validateCC(props.row, 0)"
              type="button"
            >
              <b-tooltip type="is-danger" label="Revoke CC">
                <b-icon icon="close-circle" size="is-small"
              /></b-tooltip>
            </button>
            <button
              v-if="event"
              @click.prevent="createCert(props.row)"
              class="button is-small is-info"
              type="button"
            >
              <b-tooltip type="is-info" label="Create certificate">
                <b-icon icon="pencil" size="is-small"
              /></b-tooltip>
            </button>
            <button
              v-if="event"
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

        <template slot="detail" slot-scope="props">
          <article class="media">
            <figure class="media-left">
              <p class="image ">
                <img
                  :src="
                    `https://avatars.dicebear.com/4.5/api/initials/${getInitials(
                      props.row.fullname
                    )}.svg?b=%23800000`
                  "
                  class="is-rounded is-64x64"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <strong>{{ props.row.fullname }}</strong
                >&nbsp; <small>@{{ props.row.email }}</small
                >&nbsp;
                <b-icon
                  v-if="props.row.is_responsible"
                  size="is-small"
                  type="is-warning"
                  icon="account-star"
                ></b-icon>
                &nbsp;
                <b-icon
                  v-if="props.row.cc_hours > 0"
                  size="is-small"
                  type="is-success"
                  icon="check-circle"
                ></b-icon>
                <br />
                <ul>
                  <li v-if="props.row.phone">
                    <b>Phone: </b>{{ props.row.phone }}
                  </li>
                  <li v-if="props.row.ocupation">
                    <b>Ocupation: </b>{{ props.row.ocupation }}
                  </li>
                  <li v-if="props.row.gender">
                    <b>Gender: </b>{{ props.row.gender }}
                  </li>
                  <li v-if="props.row.grade">
                    <b>Grade: </b>{{ props.row.grade }}
                  </li>
                  <li v-if="props.row.adscription">
                    <b>Adscription: </b>{{ props.row.adscription }}
                  </li>
                  <li v-if="props.row.department">
                    <b>Department: </b>{{ props.row.department }}
                  </li>
                  <li v-if="props.row.career">
                    <b>Career: </b>{{ props.row.career }}
                  </li>
                  <li v-if="props.row.enrollment">
                    <b>Enrollment: </b>{{ props.row.enrollment }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </template>

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
                      class="has-text-link media-left"
                      icon="account-star"
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

                <b-dropdown-item aria-role="listitem" @click="export2Excel">
                  <div class="media">
                    <b-icon
                      class="has-text-primary media-left"
                      icon="file-excel-box"
                    />
                    <div class="media-content">
                      <h3>Export as Excel</h3>
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
import { fetchList, update, remove } from '@/api/participants'
import ModalBox from '@/components/ConfirmDelete'
import EmailModal from './EmailForm'
import CreateModal from './Modal'
import tableMixin from '@/mixins/table'
import { ccHeaders, participantHeaders } from './headers'

export default {
  name: 'ParticipantsTable',
  components: { ModalBox, EmailModal, CreateModal },
  mixins: [tableMixin],
  props: {
    event: {
      default: null
    }
  },
  data () {
    return {
      listQuery: {
        event: this.event ? this.event.id : null,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      },
      key: 'id',
      sortField: 'name',
      isEmailModalActive: false,
      isParticipantModalActive: false
    }
  },
  created () {
    if (!this.event) {
      this.listQuery.isCC = true
    }
  },
  computed: {
    headers () {
      return this.event ? participantHeaders : ccHeaders
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
    clearFilters () {
      this.listQuery = {
        event: this.event ? this.event.id : null,
        ordering: null,
        page: 1,
        limit: 10,
        offset: 0
      }
      if (!this.event) {
        this.listQuery.isCC = true
      }
      this.sortField = 'name'
      this.defaultSortOrder = 'asc'
    },
    getInitials (name) {
      const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')

      let initials = [...name.matchAll(rgx)] || []

      initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
      ).toUpperCase()

      return initials
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
    createCert (p) {
      this.$store.commit('basic', {
        key: 'postForm',
        value: {
          event: this.event,
          to: p.fullname,
          type: 'PARTICIPATION',
          description: this.event.title
        }
      })
      this.$router.push('/certificates/new')
    },
    async validateCC (row, hours) {
      try {
        await update(row.id, { cc_hours: hours })
        this.getData()
      } catch (error) {
        console.log(error)
      }
    },
    handleClick (type) {
      console.log(type)
      this.listQuery.type = type
    },
    export2Excel () {
      this.isLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const header = this.headers.map(el => el.label)
        const filterVal = this.headers.map(el => el.field)
        const rows = [...new Set(this.checkedRows)]
        const data = rows.map(v => filterVal.map(j => v[j]))
        const filename = this.event
          ? this.event.title.replace(' ', '_')
          : 'CreditosComplementarios'
        excel.export_json_to_excel({
          header,
          data,
          filename,
          autoWidth: true,
          bookType: 'xlsx'
        })
        this.isLoading = false
      })
    }
  }
}
</script>
