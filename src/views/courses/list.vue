<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        style="max-width: 300px"
        v-model="listQuery.nameCourse"
        placeholder="Title"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <!--<el-select
        v-model.number="listQuery.status"
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
      </el-select>-->
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
        v-model="showAllDates"
        class="filter-item"
        style="margin-left:15px;"
        @change="tableKey=tableKey+1"
      >All dates</el-checkbox>
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
      <el-table-column
        label="ID"
        prop="uuid"
        sortable="custom"
        align="center"
        width="80"
        :class-name="getSortClass('uuid')"
      >
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.uuid }}</span>
        </template>
      </el-table-column>
      <el-table-column sortable prop="startDate" label="Start date" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.startDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showAllDates" label="End Date" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.endDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showAllDates" label="Date discount" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.dateDiscount | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Course Name" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.nameCourse }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Price" sortable prop="price" width="110px" align="center">
        <template slot-scope="scope">
          <span>${{ scope.row.price }}.00</span>
        </template>
      </el-table-column>
      <el-table-column label="Discount" sortable prop="discount" width="110px" align="center">
        <template slot-scope="scope">
          <span>${{ scope.row.discount }}.00</span>
        </template>
      </el-table-column>
      <el-table-column label="Corum" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.corum" class="link-type">{{ row.corum }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.active | statusFilter">{{ row.active ? 'Active' : 'Deactivate' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <!--<el-button type="primary" size="mini" @click="handleUpdate(row)">Edit</el-button>-->
          <el-button
            v-if="!row.active"
            size="small"
            type="success"
            @click="handleModifyStatus(row, true)"
          >Publish</el-button>
          <el-button
            v-else
            size="small"
            type="danger"
            @click="handleModifyStatus(row,false)"
          >Deactivate</el-button>
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
  createArticle,
  updateArticle
} from "@/api/course";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: true, display_name: "Deactivate" },
  { key: false, display_name: "Active" }
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "CoursesTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      return status ? "success" : "danger";
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
        limit: 5,
        // nameCourse: undefined,
        // status: undefined,
        // sort: "+uuid"
      },
      ratingOptions: [1, 2, 3, 4, 5],
      calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+uuid" },
        { label: "ID Descending", key: "-uuid" }
      ],
      showAllDates: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        console.log(response);

        this.list = response.courses;
        this.total = response.totalCourses;
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
      this.$router.push("/courses/create");
    },
    handleUpdate(row) {
      this.$router.push("/courses/" + row.uuid);
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
