<template>
  <div class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      @submit.prevent="false"
      :rules="rules"
      class="form-container"
    >
      <sticky :z-index="10" :class-name="'sub-navbar '+postForm.active">
        <StatusDropdown v-model="postForm.active" />
        <BannerUrlDropdown v-model="postForm.imgBanner" />
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
          v-text="isEdit ? 'Save changes': 'Save'"
        ></el-button>
        <el-button
          v-loading="loading"
          v-show="isEdit"
          type="danger"
          @click="deleteCourse"
        >Delete course</el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" />
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="nameCourse">
              <MDinput
                v-model="postForm.nameCourse"
                :maxlength="100"
                name="nameCourse"
                required
              >Course name</MDinput>
            </el-form-item>
            <el-form-item style="margin-bottom: 40px;" prop="summary">
              <el-input v-model="postForm.summary" type="textarea" :rows="5" placeholder="Summary" />
            </el-form-item>
            <el-form-item style="margin-bottom: 40px;" prop="description">
              <el-input
                v-model="postForm.description"
                type="textarea"
                :rows="5"
                placeholder="Description"
              />
            </el-form-item>
            <div class="postInfo-container">
              <el-row>
                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item label="Price:" prop="price" class="postInfo-container-item">
                    <el-input
                      v-model="postForm.price"
                      placeholder="Price"
                      type="number"
                      prefix-icon="el-icon-info"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item
                    label="Start date:"
                    prop="startDate"
                    class="postInfo-container-item"
                  >
                    <el-input
                      prefix-icon="el-icon-date"
                      v-model="postForm.startDate"
                      type="text"
                      placeholder="Enter date"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item label="End date:" prop="endDate" class="postInfo-container-item">
                    <el-input
                      prefix-icon="el-icon-date"
                      v-model="postForm.endDate"
                      type="text"
                      placeholder="Enter date"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item label="Corum:" prop="corum" class="postInfo-container-item">
                    <el-input
                      v-model="postForm.corum"
                      placeholder="Corum"
                      type="number"
                      prefix-icon="el-icon-info"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item label="Discount:" prop="discount" class="postInfo-container-item">
                    <el-input
                      v-model="postForm.discount"
                      placeholder="Discount"
                      type="number"
                      prefix-icon="el-icon-info"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
                  <el-form-item
                    label="Date discount:"
                    prop="dateDiscount"
                    class="postInfo-container-item"
                  >
                    <el-input
                      prefix-icon="el-icon-date"
                      v-model="postForm.dateDiscount"
                      type="text"
                      placeholder="Enter date"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <h4>Learn</h4>
            <Learn />
          </el-col>
          <el-col :span="24" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <h4>Requirements</h4>
            <Requirements />
          </el-col>
          <el-col :span="24" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <h4>Material</h4>
            <Material />
          </el-col>
        </el-row>
        <el-row>
          <br />
          <br />
          <el-col :span="24">
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
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
    <el-dialog title="Add Module" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Tema: ">
          <el-input v-model="form.module" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @keyup.enter="dialogFormVisible = false, newModule()"
          @click="dialogFormVisible = false, newModule()"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { validURL } from "@/utils/validate";
import { mapState } from "vuex";
import { fetchCourse, createCourse, updateCourse } from "@/api/member";
import axios from "axios";
import qs from "qs";

import loadingMixin from "@/mixins/loading";
const defaultForm = {
  active: false,
  subject: [],
  corum: 0,
  content: [],
  requirements: [],
  material: [],
  imgBanner: "https://imagesadc.s3.amazonaws.com/logos/logohor_bco2.png",
  nameCourse: "",
  summary: "",
  description: "",
  startDate: "2019-10-31",
  endDate: "2019-10-31",
  price: 200,
  discount: 100,
  dateDiscount: "2019-10-31",
  created_at: "2019-10-31"
};
export default {
  name: "CourseDetail",
  mixins: [loadingMixin],
  components: {
    Warning: () => import("./Warning"),
    Requirements: () => import("./Todos/Requirements"),
    Material: () => import("./Todos/Material"),
    Learn: () => import("./Todos/Learn"),
    StatusDropdown: () => import("./Dropdown/Status"),
    PlatformDropdown: () => import("./Dropdown/Platform"),
    BannerUrlDropdown: () => import("./Dropdown/BannerUrl"),
    JsonEditor: () => import("@/components/JsonEditor"),
    MDinput: () => import("@/components/MDinput"),
    Sticky: () => import("@/components/Sticky")
  },
  props: {
    namespace: {
      type: String,
      default: ""
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === "") {
        this.$message({
          message: rule.name + " is required",
          type: "error"
        });
        callback(new Error("Required field"));
      } else {
        callback();
      }
    };
    const validateUrl = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback();
        } else {
          this.$message({
            message: "Invalid URL format",
            type: "error"
          });
          callback(new Error("Invalid URL"));
        }
      } else {
        callback();
      }
    };
    return {
      loading: false,
      rules: {
        price: [{ validator: validateRequire, name: "Price" }],
        startDate: [{ validator: validateRequire, name: "Start date" }],
        endDate: [{ validator: validateRequire, name: "End date" }],
        discount: [{ validator: validateRequire, name: "Discount" }],
        corum: [{ validator: validateRequire, name: "Corum" }],
        description: [{ validator: validateRequire, name: "Description" }],
        dateDiscount: [{ validator: validateRequire, name: "Date discount" }],
        nameCourse: [{ validator: validateRequire, name: "Course name" }],
        summary: [{ validator: validateRequire, name: "Summary" }],
        imgBanner: [
          { validator: validateUrl, trigger: "blur" },
          { validator: validateRequire, name: "Banner URL" }
        ]
      },
      tempRoute: {},
      dialogFormVisible: false,
      form: {
        module: ""
      },
      id: null,
      value: [],
      formLabelWidth: "120px"
    };
  },
  watch: {
    content(data) {
      this.value = this.postForm.content;
    }
  },
  computed: {
    ...mapState("courses", ["postForm"]),
    content() {
      return this.postForm.content;
    }
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("courses/SET_COURSE", defaultForm);
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    newModule() {
      if (this.form.module.trim()) {
        if (this.value.length)
          this.$store.commit("courses/UPDATE_CONTENT", JSON.parse(this.value));

        this.$store.commit("courses/ADD_MODULE", {
          tema: this.form.module,
          points: []
        });
        this.form.module = "";
        this.value = this.postForm.content;
      }
    },
    fetchData(uuid) {
      let loading = this.loadingFullPage();
      fetchCourse(uuid)
        .then(data => {
          loading.close();
          console.log(data);
          this.$store.commit("courses/SET_COURSE", data[0]);
        })
        .catch(err => {
          loading.close();
          console.log(err);
        });
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (parseInt(this.postForm.discount) > parseInt(this.postForm.price)) {
          this.$message({
            message: "Discount must be less than the price.",
            type: "error"
          });
          return;
        }
        if (
          !this.postForm.material.length ||
          !this.postForm.requirements.length
        ) {
          this.$message({
            message: "Requirements and Material are required",
            type: "error"
          });
          return;
        }
        if (!this.value.length) {
          this.$message({
            message: "Content cannot be empty",
            type: "error"
          });
          return;
        }
        if (valid) {
          this.loading = true;
          this.$store.commit("courses/UPDATE_CONTENT", JSON.parse(this.value));
          let request;
          //let data = qs.stringify(this.postForm);
          //console.log(data)
          if (this.isEdit)
            //request = updateCourse(data)
            request = createCourse(this.postForm);
          else request = createCourse(this.postForm);

          request
            .then(response => {
              this.$notify({
                title: `Course ${this.isEdit ? "updated" : "created"}`,
                dangerouslyUseHTMLString: true,
                message: `Course <b>${this.postForm.nameCourse}</b> was sucessfully saved`,
                type: "success",
                duration: 2000
              });
              console.log(response);
              this.loading = false;
              this.$router.push('/courses/' + response.id)
            })
            .catch(error => {
              this.loading = false;
              console.log(error);

              this.$message({
                message: "Something went wrong:( Try again",
                type: "error"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteCourse() {
      if (
        this.postForm.nameCourse.length === 0 ||
        this.postForm.summary.length === 0
      ) {
        this.$message({
          message: "",
          type: "warning"
        });
        return;
      }
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `Course <b>${this.postForm.nameCourse}</b> was sucessfully deleted`,
        type: "success",
        showClose: true,
        duration: 2000
      });
      this.postForm.active = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.createPost-container {
  position: relative;

  .createPost-main-container {
    padding: 40px 45px 20px 50px;

    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;

      .postInfo-container-item {
        float: left;
      }
    }
  }

  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea /deep/ {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
