<template>
  <div class="dashboard-editor-container">
    <list-loader v-if="loading"></list-loader>
    <list-loader v-if="loading"></list-loader>
    <el-row v-else :gutter="32">
      <el-col :xs="24" :md="10" :lg="10">
        <div class="chart-wrapper">
          <pie-chart
            legend="RESEARCH WORK"
            v-if="statistics.research.length"
            :data="statistics.research"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="14" :lg="14">
        <div class="chart-wrapper">
          <pie-chart
            legend="DIVISION MEMBERS"
            v-if="statistics.divisions.length"
            :data="statistics.divisions"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="12">
        <div class="chart-wrapper">
          <pie-chart
            legend="PARTNERS"
            v-if="statistics.partners.length"
            :data="statistics.partners"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="12">
        <div class="chart-wrapper">
          <pie-chart
            legend="CERTIFICATES"
            v-if="statistics.certs.length"
            :data="statistics.certs"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="8" :lg="8">
        <div class="chart-wrapper">
          <pie-chart
            legend="MEMBERS"
            v-if="statistics.members.length"
            :data="statistics.members"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="8" :lg="8">
        <div class="chart-wrapper">
          <pie-chart
            legend="EXECUTIVE COMMITTEE"
            v-if="statistics.committee.length"
            :data="statistics.committee"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="8" :lg="8">
        <div class="chart-wrapper">
          <pie-chart
            legend="FINANCES"
            format="{a} <br/>{b} : ${c}"
            v-if="statistics.finances.length"
            :data="statistics.finances"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PieChart from './components/PieChart.vue'
import { statistics } from '@/api/research'
import { ListLoader } from 'vue-content-loader'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: 'DashboardAdmin',
  components: {
    PieChart,
    ListLoader
  },
  data () {
    return {
      lineChartData: lineChartData.newVisitis,
      loading: true,
      statistics: {
        research: [],
        members: [],
        partners: [],
        finances: [],
        certs: [],
        divisions: [],
        committee: []
      }
    }
  },
  created () {
    statistics().then(res => {
      this.statistics = res
      this.loading = false
    })
  },
  methods: {
    handleSetLineChartData (type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
