<template>
  <div class="field has-addons">
    <div class="control">
      <input
        class="input"
        v-model="listQuery.search"
        type="text"
        placeholder="Search..."
      />
    </div>
    <div class="control">
      <button type="submit" class="button is-primary">
        <b-icon icon="magnify" custom-size="default" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: ['listQuery']
}
</script>
