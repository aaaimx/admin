<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <el-tag size="mini" type="success">Active</el-tag>
    </div>
    <div style="position:relative;">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="progress-item">
        <span>{{ member.name }} {{ member.surname }}</span>
      </div>
      <small>{{ member.charge }}</small> <br />
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  props: ['member']
}
</script>
