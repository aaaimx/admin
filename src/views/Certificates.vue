<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Certificates
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-info">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b>Certificates table.</b>&nbsp;Search and filter that you need
        </div>
      </notification>
      <card-component class="has-table has-thead-hidden">
        <Table />
      </card-component>
    </section>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import Table from './certificates/Table'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Certificates',
  components: { HeroBar, TitleBar, Table, Notification },
  computed: {
    titleStack () {
      return ['Admin', 'Certificates']
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
