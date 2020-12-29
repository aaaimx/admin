<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.to"
        placeholder="Search by member"
        @input="handleFilter"
        clearable
        class="filter-item"
      />
      <!-- <el-input
            style="max-width: 300px"
            v-model="listQuery.query"
            placeholder="Search by query"
            @change="handleFilter"
            clearable
            class="filter-item"
          /> -->
      <el-select
        v-model.number="listQuery.type"
        @change="handleFilter"
        placeholder="Type"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="item in types"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select
        v-model.number="listQuery.status"
        @change="handleFilter"
        placeholder="Status"
        clearable
        class="filter-item"
      >
        <el-option label="Draft" :value="false" />
        <el-option label="Published" :value="true" />
      </el-select>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/certificates/create')"
        >Create</el-button
      >
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="success"
        icon="el-icon-date"
        @click="createEvent()"
        >Event</el-button
      >
    </div>

    <el-collapse accordion v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="event in $store.getters.events"
        :key="event.id"
        :name="event.title"
      >
        <template slot="title">
          <h3>{{ event.title.slice(0, 30) }}...</h3>
        </template>

        <el-row>
          <el-col
            :span="8"
            :xs="24"
            :md="12"
            :lg="8"
            v-for="o in list"
            :key="o.uuid"
          >
            <CardDetail :cert="o" />
          </el-col>
        </el-row>

        <div style="margin-top: 20px">
          <el-select
            size="mini"
            v-model="performAction"
            placeholder="------------"
          >
            <el-option label="------------" value></el-option>
            <el-option
              label="delete selected certificates"
              value="delete"
            ></el-option>
          </el-select>
          <el-button size="mini" @click="toggleSelection()">Go</el-button>
        </div>
        <pagination
          v-show="total > 0"
          :total="total"
          :page.sync="listQuery.page"
          :limit.sync="listQuery.limit"
          @pagination="getList"
        />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { fetchList, remove } from '@/api/certificate'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { off } from 'element-ui/lib/utils/dom'
import { mapState } from 'vuex'
import tableMixin from '@/mixins/table-handlers'
export default {
  name: 'CertificatesTable',
  components: {
    Pagination,
    CardDetail: () => import('./components/CardDetail')
  },
  directives: { waves },
  filters: {
    typeFilter (active) {
      return active ? 'success' : 'danger'
    },
    statusRole (active) {
      return active ? 'success' : 'danger'
    }
  },
  mixins: [tableMixin],
  computed: {
    ...mapState('certificates', ['types', 'listQuery'])
  },
  data () {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      loading: false,
      listLoading: true,
      downloadLoading: false,
      activeNames: [],
      performAction: '',
      showAllFields: false
    }
  },
  async beforeMount () {
    // this.getList()
    await this.$store.dispatch('certificates/fetchEvents')
  },
  methods: {
    handleChange (val) {
      val === 'No event'
        ? (this.listQuery.event = null)
        : (this.listQuery.event = val)
      this.list = []
      this.handleFilter()
    },

    checkUrl (url) {
      if (url.indexOf('http') !== -1) return url
      else return 'http://' + url
    },
    // methods
    getList () {
      this.listLoading = true
      let { limit, page, offset } = this.listQuery
      this.listQuery.offset = limit * (page - 1)
      fetchList(this.listQuery).then(res => {
        this.list = res.results
        this.total = res.count
        this.listLoading = false
      })
    },
    createEvent () {
      this.$prompt('Event', 'Create new event', {
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel',
        inputValue: '',
      })
        .then(({ value }) => {
          this.$notify({
            title: 'Success',
            message: 'Event created',
            type: 'success',
            duration: 2000
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Event canceled!'
          })
        })
    },
    handleDownload () {
      this.downloadLoading = true
      this.json = this.list
      this.downloadLoading = false
    }
  }
}
</script>
