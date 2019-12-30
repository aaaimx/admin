<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      QR
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-padding no-border" style="width:400px">
      <el-form-item label-width="0px" style="margin-bottom: 0px" prop="thumbnailUrl">
        <el-input v-model="thumbnailUrl" type="url" placeholder="Please enter the content">
          <template slot="prepend">
            URL
          </template>
        </el-input>
      </el-form-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    thumbnailUrl: {
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
