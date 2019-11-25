<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="ID" min-width="50">
      <template slot-scope="scope">
        {{ scope.row.id }}
      </template>
    </el-table-column>
    <el-table-column label="Amount" width="195" align="center">
      <template slot-scope="scope">
        ${{ scope.row.amount | toThousandFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Date" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.date }}
      </template>
    </el-table-column>
    <el-table-column label="From" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.member }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    }
  }
}
</script>
