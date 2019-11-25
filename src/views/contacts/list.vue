<template>
  <div class="app-container">
    <!-- <div class="filter-container">
      <el-input
        v-model.trim="listQuery.name"
        placeholder="Nombre"
        class="filter-item"
        style="width: 500px"
        @keyup.enter.native="handleFilter"
      />
      <!--<el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>-->
      <!--<el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >Search</el-button>
    </div>-->

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
      <el-table-column label="Name" sortable prop="name" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Email" sortable prop="email" width="200px" align="center">
        <template slot-scope="scope">
          <a :href="`mailto::${scope.row.email}`" class="link-type">{{ scope.row.email }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Phone" sortable prop="phone" width="110px" align="center">
        <template slot-scope="scope">
          <a :href="`tel:${scope.row.phone}`" class="link-type">{{ scope.row.phone }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Comment" align="center" width="300px">
        <template slot-scope="{row}">
          <span>{{ row.comment }}</span>
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
            size="mini"
            type="danger"
            @click="handleModifyStatus(row,0)"
          >Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--<pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />-->
  </div>
</template>

<script>
import {
  fetchList
} from "@/api/contact";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination


export default {
  name: "ContactTable",
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        name: undefined,
        sort: "+name"
      },
      sortOptions: [
        { label: "ID Ascending", key: "+uuid" },
        { label: "ID Descending", key: "-uuid" }
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.results;
        this.total = response.counts;
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
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
      row.status = status;
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
