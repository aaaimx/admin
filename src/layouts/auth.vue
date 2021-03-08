<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import fullpageMixin from '@/mixins/fullpage'

export default {
  mixins: [fullpageMixin]
}
</script>

<style scoped>
.body-columns {
  margin-top: 10vh;
}
.card {
  margin-top: 5rem;
}
.card .header {
  padding: 5px 10px;
}
.card-footer .columns {
  width: 100%;
}
.card-footer .columns input {
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.card-footer .columns .column:last-child {
  display: flex;
  align-items: center;
}
.card-footer .columns .column:last-child button {
  border: none;
}
.footer {
  margin-top: 10vh;
  padding: 2rem 1.5rem;
}
</style>
