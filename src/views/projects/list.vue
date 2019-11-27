<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.title"
        placeholder="Search by name"
        clearable
        class="filter-item"
        @input="handleFilter"
      />
      <el-select
        v-model.number="listQuery.institute"
        @change="handleFilter"
        placeholder="Institute"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="item in partners"
          :key="item.alias"
          :label="item.alias"
          :value="item.alias"
        />
      </el-select>
      <!-- <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >Search</el-button>-->
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/projects/create')"
      >Create</el-button>
      <el-checkbox
        v-model="showAllFields"
        class="filter-item"
        style="margin-left:15px;"
        @change="tableKey=tableKey+1"
      >All fields</el-checkbox>
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
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column sortable prop="title" label="Title" min-width="150px" align="center">
        <template slot-scope="{row}">
          <span
            class="link-type"
            @click="handleCreateOrUpdate('/projects/' + row.uuid)"
          >{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Institute" sortable prop="institute" min-width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ getInstitute(scope.row.institute) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Responsable"
        sortable
        prop="responsible"
        min-width="120px"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.responsible }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable label="Vigency" align="center" min-width="200">
        <template slot-scope="{row}">
          <span
            class="link-type"
          >{{ row.start.replace(/-/g, '/') }} - {{ row.end.replace(/-/g, '/') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showAllFields"
        label="Áreas de interés"
        sortable
        prop="lines"
        class-name="status-col"
        width="300"
      >
        <template slot-scope="{row}">
          <el-tag v-for="line in row.lines" size="mini" :key="line" type="info">{{ getLine(line) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Collaborators"
        align="center"
        v-if="showAllFields"
        min-width="200px"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <ul>
            <li
              class="link-type"
              @click="handleCreateOrUpdate('/members/' + getColName(col).id)"
              v-for="col in row.collaborators"
              :key="col"
            >{{getColName(col).fullname}}</li>
          </ul>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-select size="mini" v-model="performAction" placeholder="------------">
        <el-option label="------------" value></el-option>
        <el-option label="delete selected members" value="delete"></el-option>
      </el-select>
      <el-button size="mini" @click="toggleSelection()">Go</el-button>
    </div>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { fetchList, remove, updateStatus } from "@/api/project";
import { fetch } from "@/api/member";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { off } from "element-ui/lib/utils/dom";
import { mapState } from "vuex";
import tableMixin from "@/mixins/table-handlers";

export default {
  name: "MembersTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(active) {
      return active ? "success" : "danger";
    },
    statusRole(active) {
      return active ? "success" : "danger";
    }
  },
  mixins: [tableMixin],
  computed: {
    ...mapState("projects", ["lines"]),
    ...mapState("members", ["partners", "divisions", "collaborators", "roles"])
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        offset: 0,
        title: undefined,
        institute: undefined
      },
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      performAction: "",
      showAllFields: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // mixins
    getInstitute(uuid) {
      let i = this.partners.filter(el => el.uuid === uuid);
      return i[0] ? i[0].name : "-----";
    },

    getLine(line) {
      return this.lines.filter(el => el.id === line)[0].topic;
    },

    getColName(colId) {
      return this.collaborators.filter(el => el.id === colId)[0];
    },

    // methods
    getList() {
      this.listLoading = true;
      let { limit, page, offset } = this.listQuery;
      this.listQuery.offset = limit * (page - 1);
      fetchList(this.listQuery).then(res => {
        this.list = res.results;
        this.total = res.count;
        this.listLoading = false;
      });
    },
    handleModifyStatus(row, active) {
      updateStatus({
        id: row.id,
        active
      }).then(
        res => {
          this.$message({
            message: "Course status changed",
            type: "success"
          });
          row.active = active;
        },
        err => {
          this.$message({
            message: "Something went wrong:( Try Again!",
            type: "error"
          });
        }
      );
    },

    handleDelete(row) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      const index = this.list.indexOf(row);
      this.list.splice(index, 1);
    }
  }
};
</script>
