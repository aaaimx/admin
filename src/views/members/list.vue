<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.fullname"
        placeholder="Search by name"
        clearable
        class="filter-item"
      />
      <el-select
        v-model.number="listQuery.active"
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
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >Search</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/members/create')"
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
      <el-table-column sortable prop="fullname" label="Fullname" min-width="150px" align="center">
        <template slot-scope="{row}">
          <span
            class="link-type"
            @click="handleCreateOrUpdate('/members/' + row.id)"
          >{{ row.fullname }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Adscription"
        sortable
        prop="adscription"
        min-width="100px"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ getInstitute(scope.row.adscription) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Charge" sortable prop="charge" min-width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.charge }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showAllFields"
        sortable
        prop="email"
        label="Email"
        align="center"
        min-width="90"
      >
        <template slot-scope="{row}">
          <span class="link-type">{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showAllFields"
        label="Roles"
        sortable
        prop="roles"
        class-name="status-col"
        width="200"
      >
        <template slot-scope="{row}">
          <el-tag v-for="role in row.roles" size="mini" :key="role" type="info">{{ getRole(role) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Status" sortable prop="active" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.active | statusFilter">{{ row.active ? 'Active' : 'Inactive' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        fixed="right"
        min-width="100"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <!-- <el-button type="primary" size="mini" @click="handleUpdate(row)">Edit</el-button> -->
          <el-button
            v-if="!row.active"
            size="mini"
            type="success"
            @click="handleModifyStatus(row, true)"
          >Active</el-button>
          <el-button
            v-else
            size="small"
            type="danger"
            @click="handleModifyStatus(row, false)"
          >Inactive</el-button>
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
import { fetchList, remove, updateStatus } from "@/api/member";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { off } from "element-ui/lib/utils/dom";
import { mapState } from "vuex";
import tableMixin from "@/mixins/table-handlers";

const statusOptions = [
  { key: false, display_name: "Inactive" },
  { key: true, display_name: "Active" }
];

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
    ...mapState("members", ["partners", "divisions", "roles"])
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
        fullname: undefined,
        active: undefined
      },
      statusOptions,
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
      return i[0] ? i[0].alias : "-----";
    },

    getRole(role) {
      return this.roles.filter(el => el.id === role)[0].name;
    },

    // methods
    getList() {
      this.listLoading = true;
      let { limit, page, offset } = this.listQuery;
      this.listQuery.offset = limit * (page - 1);
      fetchList(this.listQuery).then(res => {
        console.log(res);
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
            message: "Member status changed",
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
