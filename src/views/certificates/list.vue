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
    >
      <!-- <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column> -->
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
        width="250"
      >
        <template slot-scope="{ row }">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="QR"
        sortable
        prop="QR"
        min-width="40"
        align="center"
      >
        <template v-if="scope.row.QR" slot-scope="scope">
          <a target="_blank" class="link-type" :href="checkUrl(scope.row.QR)"
            ><svg-icon icon-class="link"
          /></a>
        </template>
      </el-table-column>

      <el-table-column
        label="Cert"
        sortable
        prop="file"
        min-width="40"
        align="center"
      >
        <template v-if="scope.row.file" slot-scope="scope">
          <a target="_blank" class="link-type" :href="scope.row.file"
            ><svg-icon icon-class="link"
          /></a>
        </template>
      </el-table-column>
      <el-table-column
        label="Status"
        sortable
        prop="published"
        class-name="status-col"
        width="100"
      >
        <template slot-scope="{ row }">
          <el-tag :type="row.published | statusFilter">{{
            row.published ? "Published" : "Draft"
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        fixed="right"
        min-width="100"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button
            v-if="!row.published"
            :loading="row.loading"
            size="small"
            type="success"
            @click="handleModifyStatus(row, true)"
            >Publish</el-button
          >
          <el-button
            v-else
            size="small"
            :loading="row.loading"
            type="danger"
            @click="handleModifyStatus(row, false)"
            >Draft</el-button
          >
          <el-button
            type="secondary"
            icon="people"
            size="mini"
            @click="sendEmail(row)"
            ><svg-icon icon-class="guide"
          /></el-button>
        </template>
      </el-table-column>
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
import { fetchList, remove, publishCert } from "@/api/certificate";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import { off } from "element-ui/lib/utils/dom";
import { mapState } from "vuex";
import tableMixin from "@/mixins/table-handlers";
import certsMixin from "@/mixins/certificates";

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
  mixins: [tableMixin, certsMixin],
  computed: {
    ...mapState("certificates", ["types"])
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      loading: false,
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
    checkUrl(url) {
      if (url.indexOf("http") !== -1) return url;
      else return "http://" + url;
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
    handleDownload() {
      this.downloadLoading = true;
      this.json = this.list;
      this.downloadLoading = false;
    },
    handleModifyStatus(row, published) {
      row.loading = true;
      publishCert(row.uuid, published).then(
        res => {
          this.$message({
            message: "Certificate status changed",
            type: "success"
          });
          row.published = published;
          row.loading = false;
        },
        err => {
          row.loading = false;
          this.$message({
            message: "Something went wrong:( Try Again!",
            type: "error"
          });
        }
      );
    },
  }
};
</script>
