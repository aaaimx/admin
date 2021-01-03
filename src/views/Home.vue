<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar-main />
    <section class="section is-main-section">
      <!-- <tiles>
        <card-widget class="tile is-child" type="is-primary" icon="account-multiple" :number="512" :previous-number="384" previous-period="Aug, 2020" label="Clients"/>
        <card-widget class="tile is-child" type="is-info" icon="cart-outline" :number="7770" :previous-number="7000" previous-period="Aug, 2020" prefix="$" label="Sales"/>
        <card-widget class="tile is-child" type="is-success" icon="chart-timeline-variant" :number="256" :previous-number="384" previous-period="Aug, 2020" suffix="%" label="Performance"/>
        <card-widget class="tile is-child" type="is-danger" icon="bell" :number="32" :previous-number="64" label="Alerts" previous-period="Aug, 2020"/>
      </tiles> -->

      <!-- <card-component
        title="Performance"
        @header-icon-click="fillChartData"
        icon="finance"
        header-icon="reload"
      >
        <div v-if="defaultChart.chartData" class="chart-area">
          <line-chart
            style="height: 100%"
            ref="bigChart"
            chart-id="big-line-chart"
            :chart-data="defaultChart.chartData"
            :extra-options="defaultChart.extraOptions"
          >
          </line-chart>
        </div>
      </card-component> -->

      <!-- <div class="columns is-desktop">
        <div class="column">
          <card-scrollable
            data-url="/data-sources/comments.json"
            title="Recent Comments"
            icon="comment-multiple-outline"
            :has-share-buttons="true"
          />
        </div>
        <div class="column">
          <card-scrollable
            data-url="/data-sources/stuff-updates.json"
            title="Updates"
            icon="animation-outline"
            :has-dismiss="true"
          />
        </div>
      </div> -->

      <EventsTable />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from '@/components/TitleBar'
import EventsTable from './events/Table'
import HeroBarMain from '@/components/HeroBarMain'
export default {
  name: 'home',
  components: {
    HeroBarMain,
    EventsTable,
    TitleBar
  },
  data () {
    return {}
  },
  computed: {
    titleStack () {
      return ['Admin', 'Dashboard']
    }
  },
  mounted () {
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {}
}
</script>
