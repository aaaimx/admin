<template>
  <div>
    <el-button
      icon="el-icon-plus"
      size="mini"
      circle
      @click="show = true"
    ></el-button>
    <el-dialog
      v-el-drag-dialog
      :visible.sync="show"
      title="Add partner"
      @dragDialog="handleDrag"
    >
      <el-form
        :model="form"
        @submit.prevent="false"
        :rules="rules"
        ref="memberForm"
        status-icon
      >
        <el-form-item
          required
          prop="name"
          style="margin-bottom: 5%"
          label="Name"
        >
          <el-input v-model="form.name" placeholder="Enter name"></el-input>
        </el-form-item>
        <el-form-item
          required
          prop="surname"
          style="margin-bottom: 10%"
          label="Surname"
        >
          <el-input
            v-model="form.surname"
            placeholder="Enter surname"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            @click="submitForm('memberForm')"
            >Submit</el-button
          ><el-button @click="resetForm('memberForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
div {
  display: inline-block;
}
</style>
<script>
import { create } from "@/api/member";
import elDragDialog from "@/directive/el-drag-dialog"; // base on element-ui
export default {
  name: "DragDialogDemo",
  directives: { elDragDialog },
  data() {
    return {
      show: false,
      loading: false,
      form: {
        user: "",
        region: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur" }],
        surname: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    // v-el-drag-dialog onDrag callback function
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          create(this.form).then(
            res => {
              this.loading = false;
              this.$message({
                type: "success",
                message: `Collaborator is now avaliable`
              });
            },
            err => {
              this.loading = false;
              console.log(err);
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleDrag() {
      this.$refs.select.blur();
    }
  }
};
</script>
