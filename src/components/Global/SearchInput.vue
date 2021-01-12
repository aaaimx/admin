<template>
  <b-field>
    <b-autocomplete
      rounded
      expanded
      size="is-small"
      v-model="listQuery.search"
      placeholder="Search..."
      icon="magnify"
      clearable
    >
    </b-autocomplete>
  </b-field>
</template>

<script>
export default {
  name: 'SearchInput',
  props: ['listQuery']
}
</script>
