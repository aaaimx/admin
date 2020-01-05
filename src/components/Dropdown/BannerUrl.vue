<template>
  <el-dropdown :show-timeout="100" class="copy-clipboard" trigger="click">
    <el-button plain>
      {{ label }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu
      slot="dropdown"
      class="no-padding no-border"
      style="max-width: 600px"
    >
      <el-form-item label-width="0px" style="margin-bottom: 0px" :prop="prop">
        <el-input
          v-model="url"
          type="url"
          placeholder="Please enter the content"
        >
          <template slot="prepend">
            URL
          </template>
          <template slot="append">
            <el-button size="mini" @click="handleCopy(url, $event, label)"
              >Copy</el-button
            >
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
    prop: {
      type: String,
      default: "link"
    },
    label: {
      type: String,
      default: "Link"
    }
  },
  mounted() {
    this.$store.commit("app/ADD_STEP", {
      element: ".copy-clipboard",
      popover: {
        title: "Copy to clipboard",
        description:
          "<b>Link</b> or <b>Url</b> fields can be easily copied to clipboard. Just click in <b>Copy</b> button",
        position: "left"
      }
    });
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
