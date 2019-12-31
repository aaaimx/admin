<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ label }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu
      slot="dropdown"
      class="no-padding no-border"
      style="width:400px"
    >
      <el-form-item label-width="0px" style="margin-bottom: 0px" prop="url">
        <el-input
          v-model="url"
          @focus="handleCopy(url, $event, label)"
          type="url"
          placeholder="Please enter the content"
        >
          <template slot="prepend">
            URL
          </template>
        </el-input>
      </el-form-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import clipMixin from "@/mixins/clipboard";

export default {
  mixins: [clipMixin],
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Link"
    }
  },
  computed: {
    url: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>
