<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ type ?  type: 'Resarch type' }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-padding">
      <el-dropdown-item>
        <el-radio-group v-model="type" style="padding: 10px;">
          <el-radio label="Thesis">
            Thesis
          </el-radio>
          <el-radio label="Article">
            Article
          </el-radio>
          <el-radio label="Presentation">
            Presentation
          </el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    }
  },
  computed: {
    type: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
