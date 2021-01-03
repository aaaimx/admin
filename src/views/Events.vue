<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Events
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          data-url="/data-sources/clients.json"
          :checkable="true"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
import ClientsTableSample from '@/views/events/Table'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Events',
  components: { HeroBar, TitleBar, ClientsTableSample },
  computed: {
    titleStack () {
      return ['Admin', 'Events']
    }
  },
  methods: {
    actionSample () {
      this.$buefy.toast.open({
        message: 'Some action',
        type: 'is-info',
        queue: false
      })
    }
  }
}
</script>
