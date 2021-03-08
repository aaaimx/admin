<template>
  <ValidationProvider
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
    v-slot="{ errors, valid }"
  >
    <b-field
      class="mb-3"
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="errors"
    >
      <b-input v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
import inputMixin from '@/mixins/input'

export default {
  mixins: [inputMixin],
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    }
  }
}
</script>
