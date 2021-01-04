<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Certificates
      <router-link slot="right" to="/">
        <b-button icon-left="pencil-plus" type="is-success">
          New certificate
        </b-button>
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <!-- <notification class="is-info">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b>Certificates table.</b>&nbsp;Search and filter that you need
        </div>
      </notification> -->
      <card-component class="has-table">
        <Table />
      </card-component>
    </section>
  </div>
</template>

<script>
import Table from './certificates/Table'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Certificates',
  components: { HeroBar, TitleBar, Table },
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
