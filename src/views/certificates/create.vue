<template>
  <Detail :is-edit="false" namespace="Certificate" />
</template>

<script>
import Detail from './components/Detail'

export default {
  name: 'CreateForm',
  components: { Detail }
}
</script>

