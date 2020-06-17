<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.to"
        placeholder="Search by member"
        @change="handleFilter"
        clearable
        class="filter-item"
      />
      <el-input
        style="max-width: 300px"
        v-model="listQuery.query"
        placeholder="Search by query"
        @change="handleFilter"
        clearable
        class="filter-item"
      />
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
        @click="handleCreateOrUpdate('/memberships/create')"
        >Create</el-button
      >
    </div>

    <el-table
      :key="tableKey"
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column
        sortable
        prop="name"
        label="ID"
        min-width="50px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span
            class="link-type"
            @click="handleCreateOrUpdate('/memberships/' + row.uuid)"
            >{{ row.uuid }}</span
          >
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="Member"
        sortable
        prop="to"
        min-width="90px"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.member }}</span>
        </template>
      </el-table-column> -->

      <el-table-column
        label="Type"
        sortable
        prop="active"
        class-name="status-col"
        width="150"
      >
        <template slot-scope="{ row }">
          <el-tag type="secondary">{{ row.type }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="Preview" prop="QR" width="100" align="center">
        <template v-if="scope.row.QR" slot-scope="scope">
          <el-image
            style="width: 80px; height: 100px"
            :src="scope.row.file.replace('download', 'preview')"
            :preview-src-list="[scope.row.file.replace('download', 'preview')]"
          >
          </el-image>

          <a target="_blank" class="link-type" :href="checkUrl(scope.row.QR)"
            ><svg-icon icon-class="link"
          /></a>
          &nbsp;
          <a target="_blank" class="link-type" :href="scope.row.file"
            ><svg-icon icon-class="download"
          /></a>
        </template>
      </el-table-column>
      <el-table-column
        label="Status"
        sortable
        prop="exp"
        class-name="status-col"
        width="150"
      >
        <template slot-scope="{ row }">
          <el-tag :type="checkExp(row.exp)">{{
            row.exp | statusFilter
          }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        label="Actions"
        align="center"
        fixed="right"
        min-width="80"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button
            v-if="!row.published"
            size="small"
            type="success"
            @click="handleModifyStatus(row, true)"
            >Activate</el-button
          >
          <el-button
            v-else
            size="small"
            type="danger"
            @click="handleModifyStatus(row, false)"
            >Deactivate</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-select size="mini" v-model="performAction" placeholder="------------">
        <el-option label="------------" value></el-option>
        <el-option
          label="delete selected memberships"
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
  </div>
</template>

<script>
import { fetchList, remove, updateStatus } from '@/api/membership'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { off } from 'element-ui/lib/utils/dom'
import { mapState } from 'vuex'
import tableMixin from '@/mixins/table-handlers'
import moment from 'moment'

export default {
  name: 'CertificatesTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter (date) {
      return moment() > moment(date) ? 'Expired' : 'Valid'
    },
    statusRole (active) {
      return active ? 'success' : 'danger'
    }
  },
  mixins: [tableMixin],
  computed: {
    ...mapState('memberships', ['types', 'listQuery'])
  },
  data () {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      downloadLoading: false,
      performAction: '',
      showAllFields: false
    }
  },
  beforeMount () {
    this.getList()
  },
  methods: {
    checkUrl (url) {
      if (url.indexOf('http') !== -1) return url
      else return 'http://' + url
    },
    checkExp (date) {
      return moment() > moment(date) ? 'danger' : 'success'
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
