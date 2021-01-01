<template>
  <div class="has-text-centered">
    <card-component v-if="isInCard" title="404 Not Found" icon="alert" :has-button-slot="true" :has-card-header-background="true">
      <router-link slot="button" to="/" class="button is-small">
        <b-icon icon="desktop-mac" custom-size="default"/>
      </router-link>

      <error-content title="404 Not Found" @go-back="goBack"/>
    </card-component>

    <error-content v-else title="404 Not Found" @go-back="goBack"/>

  </div>

</template>

<script>
import ErrorContent from '@/components/ErrorContent'

export default {
  name: 'Error',
  components: { ErrorContent },
  props: {
    isInCard: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
