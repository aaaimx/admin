<template>
  <card-component
    title="Certificates"
    icon="certificate"
    class="has-table has-mobile-sort-spaced"
    :has-button-slot="true"
  >
    <refresh-button
      slot="button"
      icon="pen-plus"
      label="New certificate"
      @button-click="actionSample"
    />
    <card-toolbar slot="toolbar" class="is-upper">
      <div slot="left" class="buttons has-addons">
        <button class="button is-active" @click="actionSample">
          RECOGNITION
        </button>
        <button class="button">APPRECIATION</button>
        <button class="button">PARTICIPATION</button>
      </div>
      <form slot="right" @submit.prevent="actionSample">
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Sample field..." />
          </div>
          <div class="control">
            <button type="submit" class="button is-primary">
              <b-icon icon="dots-horizontal" custom-size="default" />
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
        :checked-rows.sync="checkedRows"
        :checkable="checkable"
        :loading="isLoading"
        :paginated="paginated"
        :opened-detailed="defaultOpenedDetails"
        @details-open="onCollapse"
        detailed
        detail-key="uuid"
        :show-detail-icon="true"
        :per-page="perPage"
        :striped="true"
        :hoverable="true"
        default-sort="date_start"
        :data="list"
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
          {{ props.row.to }}
        </b-table-column>
        <b-table-column label="Type" field="type" sortable v-slot="props">
          {{ props.row.type }}
        </b-table-column>
        <b-table-column label="Event" field="event" sortable v-slot="props">
          {{ props.row.event }}
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
            :title="props.row.created_at"
            >{{ new Date(props.row.created_at).toLocaleString() }}</small
          >
        </b-table-column>
        <b-table-column
          custom-key="actions"
          cell-class="is-actions-cell"
          v-slot="props"
        >
          <div class="buttons is-right">
            <router-link
              :to="{ name: 'certificate.edit', params: { id: props.row.uuid } }"
              class="button is-small is-primary"
            >
              <b-icon icon="pencil" size="is-small" />
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
          <article class="media">
            <div class="media-left">
              <figure>
                <img width="200px" :src="props.row.file" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ props.row.to }}</strong> &nbsp;
                  <small>{{ props.row.uuid }}</small>
                  <b-icon size="is-small" icon="clipboard"></b-icon>

                  <br />
                  {{ props.row.description }}
                  <br />

                  <b-tag type="is-primary">{{ props.row.type }}</b-tag>
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
import { fetchList, remove } from '@/api/certificates'
import ModalBox from '@/components/ConfirmDelete'

export default {
  name: 'EventsTableSample',
  components: { ModalBox },
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
      defaultOpenedDetails: [],
      list: [],
      listQuery: {},
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
  mounted () {
    this.getList()
  },
  methods: {
    actionSample () {
      this.$router.push('/certificates/new')
    },
    onCollapse (row) {
      console.log(row)
      this.defaultOpenedDetails = [row.uuid]
    },
    getList () {
      this.isLoading = true
      const { limit, page } = this.listQuery
      this.listQuery.offset = limit * (page - 1)
      fetchList(this.listQuery).then(res => {
        this.list = res.results
        this.total = res.count
        this.isLoading = false
      })
    },
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
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
    trashCancel () {
      this.isModalActive = false
    }
  }
}
</script>
