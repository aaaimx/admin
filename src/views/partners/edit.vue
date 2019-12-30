<template>
  <Detail :is-edit="true" namespace="Partner" />
</template>

<script>
import Detail from './components/Detail'

export default {
  name: 'EditForm',
  components: { Detail }
}
</script>

