<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.title"
        @change="handleFilter"
        @keyup.enter="handleFilter"
        placeholder="Search by name"
        clearable
        class="filter-item"
      />
      <el-input
        style="max-width: 150px"
        v-model="listQuery.year"
        @change="handleFilter"
        type="number"
        min="2018"
        placeholder="By year"
        clearable
        class="filter-item"
      />
      <el-select
        v-model.number="listQuery.type"
        @change="handleFilter"
        placeholder="By type"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="(key, val) in typeOptions"
          :key="val"
          :label="val"
          :value="val"
        />
      </el-select>
      <el-select
        v-model.number="listQuery.line"
        @change="handleFilter"
        placeholder="By Research Line"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="line in $store.getters.lines"
          :key="line.id"
          :label="line.topic"
          :value="line.id"
        />
      </el-select>

      <!-- <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
        >Search</el-button
      > -->
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/research/create')"
        >Create</el-button
      >
      <el-checkbox
        v-model="showAllFields"
        class="filter-item"
        style="margin-left:15px;"
        @change="tableKey = tableKey + 1"
        >All fields</el-checkbox
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
        prop="title"
        label="Title"
        min-width="200px"
        align="center"
      >
        <template slot-scope="{ row }">
          <router-link
            class="link-type"
            :to="'/research/' + row.uuid"
            tag="a"
            >{{ row.title }}</router-link
          >
        </template>
      </el-table-column>
      <el-table-column
        label="Year"
        sortable
        prop="year"
        min-width="80px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.year }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Type"
        sortable
        prop="type"
        min-width="100px"
        align="center"
      >
        <template slot-scope="{ row }">
          <el-popover trigger="hover" placement="top">
            <p v-if="row.grade">
              <strong>Grade:</strong> {{ row.grade }} <br />
            </p>
            <p v-if="row.pub_type">
              <strong>Type:</strong> {{ row.pub_type }} <br />
            </p>
            <p v-if="row.event">
              <strong>Event:</strong> {{ row.event }} <br />
            </p>
            <p v-if="row.pub_in">
              <strong>Pub. in:</strong> {{ row.pub_in }} <br />
            </p>
            <a
              :href="row.link"
              v-if="row.link"
              class="link-type"
              target="_blank"
              >Link</a
            >
            <div slot="reference" class="name-wrapper">
              <el-tag :type="typeOptions[row.type]">{{ row.type }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="Research lines"
        sortable
        prop="lines"
        class-name="status-col"
        width="200"
      >
        <template slot-scope="{ row }">
          <el-tag
            v-for="line in row.lines"
            size="mini"
            :key="line"
            type="info"
            >{{ getLine(line) }}</el-tag
          >
        </template>
      </el-table-column>

      <el-table-column
        v-if="showAllFields"
        sortable
        label="Resume"
        align="center"
        min-width="200"
      >
        <template slot-scope="{ row }">
          <span>{{ row.resume.slice(0, 150) }}...</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Authors"
        align="center"
        min-width="200px"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <router-link
            class="link-type"
            v-for="(col, index) in row.authors"
            :key="col.id"
            :to="'/members/' + col.member"
            tag="a"
            >{{ col.name }} {{ col.surname }}
            <sup class="link-type">{{ ++index }}</sup
            ><br
          /></router-link>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-select size="mini" v-model="performAction" placeholder="------------">
        <el-option label="------------" value></el-option>
        <el-option label="delete selected research" value="delete"></el-option>
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
import { fetchList, remove } from '@/api/research'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { off } from 'element-ui/lib/utils/dom'
import { mapState } from 'vuex'
import tableMixin from '@/mixins/table-handlers'
import authorsMixin from '@/mixins/authors'
export default {
  name: 'ResearchTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter (active) {
      return active ? 'success' : 'danger'
    }
  },
  mixins: [tableMixin, authorsMixin],
  computed: {
    ...mapState('projects', ['lines']),
    ...mapState('research', ['listQuery']),
    ...mapState('members', ['partners', 'divisions', 'collaborators', 'roles'])
  },
  data () {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      typeOptions: {
        Thesis: 'success',
        Article: 'info',
        Presentation: 'secondary'
      },
      sortOptions: [
        { label: 'ID Ascending', key: '+id' },
        { label: 'ID Descending', key: '-id' }
      ],
      performAction: '',
      showAllFields: false
    }
  },
  async created () {
    if (!this.lines.length) await this.$store.dispatch('projects/fetchLines')
    this.getList()
  },
  methods: {
    // mixins
    getInstitute (uuid) {
      let i = this.partners.filter(el => el.uuid === uuid)
      return i[0] ? i[0].name : '-----'
    },

    getLine (line) {
      return this.lines.filter(el => el.id === line)[0].topic
    },

    getColName (colId) {
      return this.collaborators.filter(el => el.id === colId)[0]
    },

    // methods
    getList () {
      this.listLoading = true
      let { limit, page, offset } = this.listQuery
      this.listQuery.offset = limit * (page - 1)
      fetchList(this.listQuery).then(res => {
        console.log(res)
        this.list = res.results
        this.total = res.count
        this.listLoading = false
      })
    },
    handleModifyStatus (row, active) {
      ;({
        id: row.id,
        active
      }.then(
        res => {
          this.$message({
            message: 'Course status changed',
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
      ))
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
