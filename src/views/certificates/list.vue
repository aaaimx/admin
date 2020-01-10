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
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreateOrUpdate('/certificates/create')"
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
            @click="handleCreateOrUpdate('/certificates/' + row.uuid)"
            >{{ row.uuid }}</span
          >
        </template>
      </el-table-column>
      <el-table-column
        label="Member"
        sortable
        prop="to"
        min-width="90px"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.to }}</span>
        </template>
      </el-table-column>

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

      <el-table-column
        label="Description"
        sortable
        prop="active"
        class-name="status-col"
        width="300"
      >
        <template slot-scope="{ row }">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="QR"
        sortable
        prop="QR"
        min-width="25"
        align="center"
      >
        <template v-if="scope.row.QR" slot-scope="scope">
          <a target="_blank" class="link-type" :href="'http://' + scope.row.QR"
            ><svg-icon icon-class="link"
          /></a>
        </template>
      </el-table-column>

      <el-table-column
        label="Cert"
        sortable
        prop="file"
        min-width="25"
        align="center"
      >
        <template v-if="scope.row.file" slot-scope="scope">
          <a target="_blank" class="link-type" :href="scope.row.file"
            ><svg-icon icon-class="link"
          /></a>
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="Actions"
        align="center"
        fixed="right"
        min-width="100"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button
            v-if="!row.active"
            size="mini"
            type="success"
            @click="handleModifyStatus(row, true)"
            >Active</el-button
          >
          <el-button
            v-else
            size="small"
            type="danger"
            @click="handleModifyStatus(row, false)"
            >Inactive</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>
    <div style="margin-top: 20px">
      <el-select size="mini" v-model="performAction" placeholder="------------">
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
  </div>
</template>

<script>
import { fetchList, remove, updateStatus } from "@/api/certificate";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { off } from "element-ui/lib/utils/dom";
import { mapState } from "vuex";
import tableMixin from "@/mixins/table-handlers";

export default {
  name: "CertificatesTable",
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
    ...mapState("certificates", ["types"])
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      downloadLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        offset: 0,
        type: undefined
      },
      performAction: "",
      showAllFields: false
    };
  },
  beforeMount() {
    this.getList();
  },
  methods: {
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
    handleDownload() {
      this.downloadLoading = true;
      this.json = this.list;
      this.downloadLoading = false;
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
