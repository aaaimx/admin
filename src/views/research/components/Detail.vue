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
                      rows="7"
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
                      :loading="searching"
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
                    <LineModal />
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
                    <el-select
                      v-model="postForm.grade"
                      placeholder="Licenciatura"
                      clearable
                      allow-create
                      filterable
                      class="filter-item"
                    >
                      <el-option
                  
                        v-for="item in ['Licenciatura', 'Maestría', 'Doctorado', 'Postdoctorado']"
                        :key="item"
                        :label="item"
                        :value="item"
                        ></el-option
                      >
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col
                  v-if="postForm.type == 'Presentation'"
                  :span="24"
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
                      v-model="postForm.pub_in"
                      clearable
                      class="filter-item"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
    <el-row>
      <el-col v-show="isEdit" :span="12" :lg="12" :xs="24">
        <Authors :authors="postForm.authors" title="Authors" />
      </el-col>
      <el-col
        v-show="postForm.type === 'Thesis' && isEdit"
        :span="12"
        :lg="12"
        :xs="24"
      >
        <Advisors :advisors="postForm.advisors" title="Advisors" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validURL } from "@/utils/validate";
import { mapState } from "vuex";
import { fetch, create, update, remove } from "@/api/research";
import { fetchProj } from "@/api/project";
import { searchProject } from "@/api/remote-search";
import rules from "./validators";
import formsMixin from "@/mixins/forms";
import authorsMixin from "@/mixins/authors";
const defaultForm = {
  title: "",
  resume: "",
  year: 2018,
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
  mixins: [authorsMixin, formsMixin],
  components: {
    MDinput: () => import("@/components/MDinput"),
    Sticky: () => import("@/components/Sticky"),
    TypeDropdown: () => import("./Type"),
    BannerUrlDropdown: () => import("@/components/Dropdown/BannerUrl"),
    LineModal: () => import("@/components/Modals/Line"),
    Authors: () => import("./Authors"),
    Advisors: () => import("./Advisors")
  },
  data() {
    return {
      rules,
      tempRoute: {},
      id: null,
      projects: []
    };
  },
  computed: {
    ...mapState("members", ["partners", "collaborators", "divisions", "roles"]),
    ...mapState("research", ["postForm"]),
    ...mapState("projects", ["lines"])
  },
  async created() {
    if (!this.lines.length) await this.$store.dispatch("projects/fetchLines");
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
      this.searching = true;
      searchProject(title).then(res => {
        this.projects = res.results;
        this.searching = false;
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
          data.advisors.sort(this.compare);
          let projects = [];
          data.projects.forEach(el => {
            projects.push(fetchProj(el));
          });
          Promise.all(projects).then(values => {
            this.projects = values;
            loading.close();
          });
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
          let loading = this.loadingFullPage();
          let request;
          if (this.isEdit) request = update(this.postForm);
          else request = create(this.postForm);
          let start = new Date(this.postForm.start);
          let end = new Date(this.postForm.end);
          this.postForm.start = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`;
          this.postForm.end = `${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`;
          request
            .then(response => {
              this.handleSave(
                `${this.namespace} <b>${this.postForm.title}</b> was sucessfully saved`
              );

              loading.close();
              if (!this.isEdit)
                this.$store.dispatch("tagsView/delAllVisitedViews");
              this.$router.push("/research/" + response.uuid);
            })
            .catch(error => {
              loading.close();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteResearch() {
      remove(this.$route.params.id).then(
        res => {
          this.handleError()
          this.$store.dispatch("tagsView/delAllVisitedViews");
          this.$router.push({ name: "ResearchList" });
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
