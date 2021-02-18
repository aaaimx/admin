<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Credits
      <router-link slot="right" to="/credits/new">
        <b-button icon-left="pencil-plus" type="is-success">
          New certificate
        </b-button>
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <!-- <notification class="is-info">
        <div>
          <b-icon icon="buffer" custom-size="default" />
          <b>Credits table.</b>&nbsp;Search and filter that you need
        </div>
      </notification> -->
      <card-component class="has-table">
        <Table />
      </card-component>
    </section>
  </div>
</template>

<script>
import Table from './participants/Table'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Credits',
  components: { HeroBar, TitleBar, Table },
  computed: {
    titleStack () {
      return ['Admin', 'Creditos Complementarios']
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
