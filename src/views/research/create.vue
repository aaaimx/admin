<template>
  <Detail :is-edit="false" namespace="Research" />
</template>

<script>
import Detail from './components/Detail'

export default {
  name: 'CreateForm',
  components: { Detail }
}
</script>

