<template>
  <ValidationProvider
    :vid="vid"
    :name="$attrs.label"
    :rules="rules"
    v-slot="{ errors, valid }"
  >
    <b-field
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="errors"
    >
      <b-select
        class="index"
        placeholder="Selecciona una opción"
        v-model="innerValue"
        expanded
      >
        <slot />
      </b-select>
    </b-field>
  </ValidationProvider>
</template>

<style scoped>
.index {
  z-index: 0;
}
</style>

<script>
export default {
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>
