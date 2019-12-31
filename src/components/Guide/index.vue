<template>
  <div class="app-container">
    <h1>Wellcome to AAAIMX Admin Dashboard </h1>
    <aside>
      The guide is useful for some people who entered the project for the first time. You can briefly introduce the
      features of the project. <br> Atte.:
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">AAAIMX Team</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      Show Guide
    </el-button>
  </div>
</template>

<script>
import guideMixin from '@/mixins/guide'
export default {
  name: 'DashboardGuide',
  mixins: [guideMixin]
}
</script>