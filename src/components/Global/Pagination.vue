<template>
  <div class="is-flex is-justify-content-space-between">
    <b-dropdown
      style="margin: 0.5rem;"
      v-model="listQuery.limit"
      append-to-body
      aria-role="list"
    >
      <button
        class="button is-secondary is-small"
        slot="trigger"
        slot-scope="{ active }"
      >
        <span>Per page: {{ listQuery.limit }}</span>
        <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
      </button>
      <b-dropdown-item aria-role="listitem" :value="5">5</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" :value="10">10</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" :value="25">25</b-dropdown-item>
      <b-dropdown-item aria-role="listitem" :value="50">50</b-dropdown-item>
    </b-dropdown>
    &nbsp;
    <b-pagination
      :total="total"
      v-model="listQuery.page"
      :simple="false"
      :rounded="false"
      size="is-small"
      :per-page="listQuery.limit"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    listQuery: {
      type: Object
    }
  }
}
</script>
