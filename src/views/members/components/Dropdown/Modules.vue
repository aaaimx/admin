<template>
  <div class="custom-tree-container">
    <br />
    <br />
    <div class="block">
      <strong>Content</strong> &nbsp;
      <el-tooltip content="Add module" placement="top">
        <el-button
          type="info"
          @click="dialogFormVisible = true"
          icon="el-icon-plus"
          size="mini"
          circle
        ></el-button>
      </el-tooltip>
      <div class="editor-container">
        <br />
        <json-editor ref="jsonEditor" v-model="value" />
        <br />
      </div>
      <el-button v-if="!(postForm.content === value)" @click.prevent="updateContent()">Save content</el-button>
      <el-dialog title="Add Module" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Tema: ">
            <el-input v-model="form.module" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false, newModule()">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Modules",
  components: {
    JsonEditor: () => import("@/components/JsonEditor")
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        module: ""
      },
      value: [],
      formLabelWidth: "120px"
    };
  },
  watch: {
    content(data) {
      this.value = this.postForm.content
    }
  },
  computed: {
    ...mapState("courses", ["postForm"]),
    content() {
      return this.postForm.content
    }
  },
  methods: {
    updateContent() {
      this.$store.commit("courses/UPDATE_CONTENT", JSON.parse(this.value));
    },
    newModule() {
      if (this.form.module.trim()) {
        this.$store.commit("courses/UPDATE_CONTENT", JSON.parse(this.value));
        this.$store.commit("courses/ADD_MODULE", {
          tema: this.form.module,
          points: []
        });
        this.form.module = "";
        this.value = this.postForm.content;
      }
    }
  }
};
</script>