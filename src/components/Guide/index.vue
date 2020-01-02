<template>
  <div class="app-container">
    <h1>Wellcome to AAAIMX Admin Dashboard </h1>
    <aside>
      The guide is useful for some people who entered the project for the first time. You can briefly introduce the
      features of the project. <br> Atte.:
      <span class="link-type">AAAIMX Team</span>
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