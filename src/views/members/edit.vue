<template>
  <Detail :is-edit="true" namespace="Member" />
</template>

<script>
import Detail from './components/Detail'

export default {
  name: 'EditForm',
  components: { Detail }
}
</script>

