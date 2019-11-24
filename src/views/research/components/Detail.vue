<template>
  <div class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      @submit.prevent="false"
      :rules="rules"
      class="form-container"
    >
      <sticky :z-index="10" :class-name="'sub-navbar ' + postForm.type">
        <TypeDropdown v-model="postForm.type" />
        <BannerUrlDropdown v-model="postForm.link" />
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
          v-text="isEdit ? 'Save changes' : 'Save'"
        ></el-button>
        <el-button
          v-loading="loading"
          v-show="isEdit"
          type="danger"
          @click="deleteResearch"
          >Delete</el-button
        >
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
                <el-col :span="24" :xs="24">
                  <el-form-item
                    label="Title:"
                    prop="title"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.title"
                      placeholder="i.e: Segmentación de tumores cerebrales utilizando optimización..."
                      type="textarea"
                      rows="3"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24" :xs="24">
                  <el-form-item
                    label="Resume/Abstract:"
                    prop="resume"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.resume"
                      placeholder=""
                      type="textarea"
                      rows="5"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Year:"
                    prop="year"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-input
                      v-model="postForm.year"
                      type="number"
                      min="2018"
                      placeholder="Year"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Related projects:"
                    prop="projects"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.projects"
                      multiple
                      filterable
                      remote
                      reserve-keyword
                      :remote-method="fetchProjects"
                      :loading="loading"
                      clearable
                      placeholder="Search and select projects"
                    >
                      <el-option
                        v-for="item in projects"
                        :key="item.uuid"
                        :label="item.title.slice(0, 30).concat('...')"
                        :value="item.uuid"
                      >
                        <small style="color: #8492a6; font-size: 13px">{{
                          item.title.slice(0, 100).concat("...")
                        }}</small>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Áreas de interés:"
                    prop="lines"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.lines"
                      multiple
                      placeholder="Select interest areas"
                    >
                      <el-option
                        v-for="item in lines"
                        :key="item.id"
                        :label="item.topic.slice(0, 30).concat('...')"
                        :value="item.id"
                        >{{ item.topic }}</el-option
                      >
                    </el-select>
                    <el-button
                      icon="el-icon-plus"
                      size="mini"
                      circle
                    ></el-button>
                  </el-form-item>
                </el-col>

                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Grade:"
                    prop="grade"
                    v-if="postForm.type == 'Thesis'"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-input
                      v-model="postForm.grade"
                      placeholder="Licenciatura"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>
                <el-col
                  v-if="postForm.type == 'Presentation'"
                  :span="8"
                  :xs="24"
                >
                  <el-form-item
                    label="Event:"
                    prop="event"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-input
                      v-model="postForm.event"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Article type:"
                    prop="pub_type"
                    v-if="postForm.type == 'Article'"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.pub_type"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>
                <el-col v-if="postForm.type == 'Article'" :span="12" :xs="24">
                  <el-form-item
                    label="Published in:"
                    prop="púb_in"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.púb_in"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>

                <!-- <el-col :span="24" :xs="24">
                  <el-form-item
                    label="Responsable:"
                    prop="responsible"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.responsible"
                      remote
                      allow-create
                      clearable
                      filterable
                      reserve-keyword
                      placeholder="Select responsible person"
                    >
                      <el-option
                        v-for="item in collaborators"
                        :key="item.fullname"
                        :label="item.fullname"
                        :value="item.fullname"
                      ></el-option>
                    </el-select>
                    <el-button
                      icon="el-icon-plus"
                      size="mini"
                      circle
                    ></el-button>
                  </el-form-item>
                </el-col> -->
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
    <el-row>
      <el-col :span="12" :lg="12" :xs="24">
        <AuthorList :authors="postForm.authors" title="Authors" />
      </el-col>
      <el-col :span="12" :lg="12" :xs="24">
        <AuthorList :authors="postForm.authors" title="Authors" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validURL } from "@/utils/validate";
import { mapState } from "vuex";
import { fetch, create, update } from "@/api/research";
import { fetchList } from "@/api/project";
import axios from "axios";
import qs from "qs";
import rules from "./validators";
import loadingMixin from "@/mixins/loading";
import authorsMixin from "@/mixins/authors";
const defaultForm = {
  title: "",
  resume: "",
  year: null,
  grade: "",
  event: "",
  pub_in: "",
  pub_type: "",
  type: "",
  link: "",
  lines: [],
  projects: []
};
export default {
  name: "ResearchDetail",
  mixins: [loadingMixin, authorsMixin],
  components: {
    MDinput: () => import("@/components/MDinput"),
    Sticky: () => import("@/components/Sticky"),
    TypeDropdown: () => import("./Status"),
    BannerUrlDropdown: () => import("./BannerUrl"),
    AuthorList: () => import("./Authors")
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
      id: null,
      value: [],
      projects: [],
      value1: "",
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState("members", ["partners", "collaborators", "divisions", "roles"]),
    ...mapState("research", ["postForm"]),
    ...mapState("projects", ["lines"])
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("research/SET_RESEARCH_FORM", defaultForm);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    fetchProjects(title) {
      this.loading = true;
      fetchList({
        title
      }).then(res => {
        console.log(res);
        this.projects = res.results;
        this.loading = false;
      });
    },
    sortAuthors(arr) {
      arr.sort(this.compare);
      return arr;
    },
    fetchData(id) {
      let loading = this.loadingFullPage();
      fetch(id)
        .then(data => {
          data.authors.sort(this.compare);
          loading.close();
          this.$store.commit("research/SET_RESEARCH_FORM", data);
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
          if (this.isEdit) request = update(this.postForm);
          else request = create(this.postForm);
          let start = new Date(this.postForm.start);
          let end = new Date(this.postForm.end);
          this.postForm.start = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`;
          this.postForm.end = `${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`;
          request
            .then(response => {
              this.$notify({
                title: ` ${this.isEdit ? "Updated" : "Created"}`,
                dangerouslyUseHTMLString: true,
                message: `${this.namespace} <b>${this.postForm.title}</b> was sucessfully saved`,
                type: "success",
                duration: 2000
              });
              console.log(response);
              this.loading = false;
              this.$router.push("/research/" + response.uuid);
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
    deleteResearch() {
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
