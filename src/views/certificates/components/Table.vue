<template>
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
        label="Name"
        min-width="150px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span
            class="link-type"
            @click="handleCreateOrUpdate('/members/' + row.id)"
            >{{ row.name }} {{ row.surname }}</span
          >
        </template>
      </el-table-column>
      <el-table-column
        label="Charge"
        sortable
        prop="charge"
        min-width="80px"
        align="center"
      >
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
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Divisions"
        sortable
        prop="divisions"
        class-name="status-col"
        width="200"
      >
        <template slot-scope="{ row }">
          <el-tag
            v-for="div in row.divisions"
            size="mini"
            :key="div"
            type="info"
            >{{ getDiv(div) }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column
        label="Status"
        sortable
        prop="active"
        class-name="status-col"
        width="100"
      >
        <template slot-scope="{ row }">
          <el-tag :type="row.active | statusFilter">{{
            row.active ? 'Active' : 'Inactive'
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
      </el-table-column>
    </el-table>

</template>
