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
        <!-- <BannerUrlDropdown v-model="postForm.imgBanner" /> -->
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
          @click="deleteMember"
        >Delete member</el-button>
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
            <div class="postInfo-container">
              <el-row>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Fullname:" prop="fullname" class="postInfo-container-item">
                    <el-input
                      v-model="postForm.fullname"
                      placeholder="apellidoP-apellidoM, Nombre(s)"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Email (Optional):"
                    prop="email"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.email"
                      type="email"
                      placeholder="Enter valid email"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Adscription:"
                    prop="adscription"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.adscription"
                      clearable
                      placeholder="Select institute"
                    >
                      <el-option
                        v-for="item in partners"
                        :key="item.uuid"
                        :label="item.alias"
                        :value="item.uuid"
                      >
                        <small style="color: #8492a6; font-size: 13px">{{ item.name }}</small>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24">
                  <el-form-item label="Roles:" prop="roles" class="postInfo-container-item">
                    <br />
                    <el-select v-model="postForm.roles" multiple placeholder="Select roles">
                      <el-option
                        v-for="item in roles"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24">
                  <el-form-item label="Cargo:" prop="charge" class="postInfo-container-item">
                    <el-input
                      v-model="postForm.charge"
                      placeholder="Member/President/Division Leader/Board Chair"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item label="Divisions:" prop="divisions" class="postInfo-container-item">
                    <br />
                    <el-select v-model="postForm.divisions" multiple placeholder="Select roles">
                      <el-option
                        v-for="item in divisions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <!--  <el-row>
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
        </el-row>-->
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
import { fetch, create, update } from "@/api/member";
import axios from "axios";
import qs from "qs";
import rules from "./validators";
import loadingMixin from "@/mixins/loading";

const defaultForm = {
  fullname: "",
  email: "",
  charge: "",
  active: false,
  adscription: "",
  divisions: [],
  roles: []
};
export default {
  name: "MemberDetail",
  mixins: [loadingMixin],
  components: {
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
    return {
      loading: false,
      rules,
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
  computed: {
    ...mapState("members", ["postForm", "partners", "divisions", "roles"]),
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("members/SET_MEMBER", defaultForm);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    fetchData(id) {
      let loading = this.loadingFullPage();
      fetch(id)
        .then(data => {
          loading.close();
          this.$store.commit("members/SET_MEMBER", data);
        })
        .catch(err => {
          loading.close();
          console.log(err);
        });
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true;
          let request;
          if (this.isEdit)
            request = update(this.postForm);
          else request = create(this.postForm);

          request
            .then(response => {
              this.$notify({
                title: ` ${this.isEdit ? "Updated" : "Created"}`,
                dangerouslyUseHTMLString: true,
                message: `${this.namespace} <b>${this.postForm.fullname}</b> was sucessfully saved`,
                type: "success",
                duration: 2000
              });
              console.log(response);
              this.loading = false;
              this.$router.push("/members/" + response.id);
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
    deleteMember() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: `${this.namespace} was sucessfully deleted`,
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
      .postInfo-container-item {
        padding-right: 5%;
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
