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
        <WebSite v-model="postForm.site" label="Website" />
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
          @click="deletePartner"
          >Delete {{ namespace }}</el-button
        >
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="8" :lg="7" :xs="24">
                  <Upload v-model="postForm.logoFile" />
                </el-col>

                <el-col :span="16" :xs="24">
                  <el-form-item
                    label="Name:"
                    prop="name"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.name"
                      placeholder="Partner complete name"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Alias:"
                    prop="alias"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.alias"
                      placeholder="Partner short name"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Type:"
                    prop="type"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.type"
                      filterable
                      allow-create
                      placeholder="Select type"
                    >
                      <el-option
                        v-for="item in types"
                        :key="item"
                        :label="item"
                        :value="item"
                      ></el-option>
                    </el-select>
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
import { fetch, create, update } from "@/api/partner";
import rules from "./validators";
import formsMixin from "@/mixins/forms";
const defaultForm = {
    name: '',
    alias: '',
    site: '',
    logoFile: '',
    type: ''
  };
export default {
  name: "PartnerDetail",
  mixins: [formsMixin],
  components: {
    WebSite: () => import("@/components/Dropdown/BannerUrl"),
    Upload: () => import("@/components/Upload/SingleImage3"),
    MDinput: () => import("@/components/MDinput"),
    Sticky: () => import("@/components/Sticky")
  },
  data() {
    return {
      loading: false,
      rules,
      tempRoute: {},
      photo: "",
      id: null
    };
  },
  computed: {
    ...mapState("partners", ["postForm", "types"])
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("partners/SET_PARTNER", defaultForm);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    getPhoto(photo) {
      try {
        var res = photo.split("https://drive.google.com/file/d/");
        res = res[1];
        res = res.split("/view?usp=drivesdk");
        return "https://drive.google.com/uc?id=" + res[0];
      } catch (error) {
        return ""
      }
    },
    fetchData(id) {
      let loading = this.loadingFullPage();
      fetch(id)
        .then(data => {
          loading.close();
          data.logoFile = this.getPhoto(data.logoFile)
          this.$store.commit("partners/SET_PARTNER", data);
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
          delete this.postForm.logoFile
          if (this.isEdit) request = update(this.postForm);
          else request = create(this.postForm);

          request
            .then(response => {
              this.handleSave(`${this.namespace} <b>${this.postForm.alias}</b> was sucessfully saved`)
              console.log(response);
              this.loading = false;
              this.$router.push("/partners/" + response.id);
            })
            .catch(error => {
              this.loading = false;
              console.log(error);

              this.handleError()
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deletePartner() {
      this.handleDelete()
      this.postForm.active = false;
    }
  }
};
</script>