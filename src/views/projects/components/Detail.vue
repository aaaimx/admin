<template>
  <div class="createPost-container">
    <el-form
      ref="postForm"
      :model="postForm"
      @submit.prevent="false"
      :rules="rules"
      class="form-container"
    >
      <sticky :z-index="10" :class-name="'sub-navbar ' + postForm.active">
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
          @click="deleteProject"
          >Delete project</el-button
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
                      placeholder="i.e: Segmentación de regiones basado en atributos de textura de datos bidimensionales..."
                      type="textarea"
                      rows="3"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Start date:"
                    prop="start"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-date-picker
                      v-model="postForm.start"
                      format="MMM dd, yyyy"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="Pick a day"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="End date:"
                    prop="end"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-date-picker
                      v-model="postForm.end"
                      format="MMM dd, yyyy"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="Pick a day"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Institute:"
                    prop="institute"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.institute"
                      filterable
                      clearable
                      placeholder="Select institute"
                    >
                      <el-option
                        v-for="item in partners"
                        :key="item.uuid"
                        :label="item.alias"
                        :value="item.uuid"
                      >
                        <small style="color: #8492a6; font-size: 13px">{{
                          item.name
                        }}</small>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Responsable:"
                    prop="responsible"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.responsible"
                      remote
                      clearable
                      filterable
                      :remote-method="fetchMember"
                      placeholder="Select responsible person"
                    >
                      <el-option
                        v-for="item in collaborators"
                        :key="item.name"
                        :label="item.name + ' ' + item.surname"
                        :value="item.name"
                      ></el-option>
                    </el-select>
                    <MemberModal />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
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

                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Collaborators:"
                    prop="collaborators"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.collaborators"
                      remote
                      multiple
                      filterable
                      :remote-method="fetchMember"
                      placeholder="Select collaborators"
                    >
                      <el-option
                        v-for="item in collaborators"
                        :key="item.id"
                        :label="item.name + ' ' + item.surname"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                    <MemberModal />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchProj, create, update, remove } from "@/api/project";
import { fetchList, fetch } from "@/api/member";
import axios from "axios";
import rules from "./validators";
import loadingMixin from "@/mixins/loading";
import moment from "moment";

const defaultForm = {
  title: "",
  start: "",
  end: "",
  in_charge: "",
  institute: "",
  collaborators: [],
  lines: []
};
export default {
  name: "ProjectDetail",
  mixins: [loadingMixin],
  components: {
    MDinput: () => import("@/components/MDinput"),
    LineModal: () => import("@/components/Modals/Line"),
    MemberModal: () => import("@/components/Modals/Member"),
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
      collaborators: [],
      value1: "",
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState("members", ["partners"]),
    ...mapState("projects", ["postForm", "lines"])
  },
  created() {
    if (!this.lines.length) this.$store.dispatch("projects/fetchLines");
    if (!this.partners.length) this.$store.dispatch("members/fetchPartners");
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("projects/SET_PROJECT", defaultForm);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    fetchMember(name) {
      fetchList({
        name
      }).then(res => {
        this.collaborators = res.results;
      });
    },
    fetchData(id) {
      let loading = this.loadingFullPage();
      fetchProj(id)
        .then(data => {
          let colls = [];
          data.collaborators.forEach(el => {
            colls.push(fetch(el));
          });
          Promise.all(colls).then(values => {
            this.collaborators = values;
            loading.close();
          });
          this.$store.commit("projects/SET_PROJECT", data);
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
              this.$router.push("/projects/" + response.uuid);
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
    deleteProject() {
      // remove(this.$route.params.id)
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
@import "~@/styles/create-form.scss";
</style>
