<template>
  <div class="content has-text-grey has-text-centered">
    <template v-if="isLoading">
      <p>
        <b-icon icon="dots-horizontal" size="is-large" />
      </p>
      <p>Fetching data...</p>
    </template>
    <template v-else>
      <p>
        <b-icon icon="emoticon-sad" size="is-large" />
      </p>
      <p>Nothing's here&hellip;</p>
    </template>
  </div>
</template>

<script>
export default {
  props: ['isLoading']
}
</script>
