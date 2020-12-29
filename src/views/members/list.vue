<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.name"
        @input="handleFilter"
        @keyup.enter="handleFilter"
        placeholder="Search by name"
        clearable
        class="filter-item"
      />
      <el-select
        v-model.number="listQuery.active"
        @change="handleFilter"
        placeholder="Status"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="item in statusOptions"
          :key="item.key"
          :label="item.display_name"
          :value="item.key"
        />
      </el-select>
      <el-select
        v-model.number="listQuery.division"
        @change="handleFilter"
        placeholder="Division"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="item in divisions"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>

      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/members/create')"
        >Create</el-button
      >

      <el-checkbox
        v-model="listQuery.panel"
        class="filter-item"
        style="margin-left:15px;"
        @change="handleFilter"
        >Board & Committee</el-checkbox
      >
    </div>
    <el-row>
      <el-col
        :span="8"
        :xs="24"
        :md="12"
        :lg="8"
        v-for="o in list"
        :key="o.id"
      >
        <CardDetail :member="o" />
      </el-col>
    </el-row>

    <div style="margin-top: 20px">
      <el-select size="mini" v-model="performAction" placeholder="------------">
        <el-option label="------------" value></el-option>
        <el-option label="delete selected members" value="delete"></el-option>
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
    <JsonEditor v-if="json" :value="json" />
  </div>
</template>

<script>
import { fetchList, remove, updateStatus } from '@/api/member'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import JsonEditor from '@/components/JsonEditor'
import { off } from 'element-ui/lib/utils/dom'
import { mapState } from 'vuex'
import tableMixin from '@/mixins/table-handlers'

const statusOptions = [
  { key: false, display_name: 'Inactive' },
  { key: true, display_name: 'Active' }
]

export default {
  name: 'MembersTable',
  components: { Pagination, JsonEditor, CardDetail: () => import('./components/Card') },
  directives: { waves },
  filters: {
    statusFilter (active) {
      return active ? 'success' : 'danger'
    },
    statusRole (active) {
      return active ? 'success' : 'danger'
    }
  },
  mixins: [tableMixin],
  computed: {
    ...mapState('members', ['partners', 'divisions', 'roles', 'listQuery'])
  },
  data () {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      downloadLoading: false,
      json: null,
      statusOptions,
      sortOptions: [
        { label: 'ID Ascending', key: '+id' },
        { label: 'ID Descending', key: '-id' }
      ],
      performAction: '',
      showAllFields: false
    }
  },
  async created () {
    if (!this.divisions.length)
      await this.$store.dispatch('members/fetchDivisions')
    if (!this.partners.length)
      await this.$store.dispatch('members/fetchPartners')
    this.getList()
  },
  methods: {
    // mixins
    getInstitute (uuid) {
      let i = this.partners.filter(el => el.uuid === uuid)
      return i[0] ? i[0].alias : '-----'
    },

    getDiv (div) {
      return this.divisions.filter(el => el.id === div)[0].name
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
    handleDownload () {
      this.downloadLoading = true
      this.json = this.list
      this.downloadLoading = false
    },
    handleModifyStatus (row, active) {
      updateStatus({
        id: row.id,
        active
      }).then(
        res => {
          this.$message({
            message: 'Member status changed',
            type: 'success'
          })
          row.active = active
        },
        err => {
          this.$message({
            message: 'Something went wrong:( Try Again!',
            type: 'error'
          })
        }
      )
    },

    handleDelete (row) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    }
  }
}
</script>
