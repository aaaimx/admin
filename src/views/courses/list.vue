<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.fullname"
        placeholder="Search by name"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model.number="listQuery.active"
        @change="handleFilter"
        placeholder="Status"
        clearable
        class="filter-item"
      >
        <el-option
          v-for="item in calendarTypeOptions"
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
        @click="handleCreate"
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
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column sortable prop="fullname" label="Fullname" min-width="150px" align="center">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.fullname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Adscription" sortable prop="adscription" min-width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.adscription }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Charge" sortable prop="charge" min-width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.charge }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showAllFields" sortable prop="email"  label="Email" align="center" min-width="90">
        <template slot-scope="{row}">
          <span class="link-type">{{ row.email }}</span>
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
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">Edit</el-button>
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
import {
  fetchList,
  fetchPv,
  create,
  update,
  remove
} from "@/api/member";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { off } from 'element-ui/lib/utils/dom';

const calendarTypeOptions = [
  { key: false, display_name: "Inactive" },
  { key: true, display_name: "Active" }
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "MembersTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(active) {
      return active ? "success" : "danger";
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
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
      ratingOptions: [1, 2, 3, 4, 5],
      calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+uuid" },
        { label: "ID Descending", key: "-uuid" }
      ],
      showAllFields: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      let { limit, page, offset } = this.listQuery
      this.listQuery.offset = limit*(page -1)
      fetchList(this.listQuery).then(res => {
        console.log(res);
        this.list = res.results
        this.total = res.count;
        this.listLoading = false;
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "Course status changed",
        type: "success"
      });
      row.active = status;
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "uuid") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+uuid";
      } else {
        this.listQuery.sort = "-uuid";
      }
      this.handleFilter();
    },
    handleCreate() {
      this.$router.push("/members/create");
    },
    handleUpdate(row) {
      this.$router.push("/members/" + row.uuid);
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
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}`
        ? "ascending"
        : sort === `-${key}`
        ? "descending"
        : "";
    }
  }
};
</script>
