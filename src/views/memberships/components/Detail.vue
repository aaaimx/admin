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
        <!-- <Status
          v-if="isEdit"
          :labels="['Published', 'Draft']"
          v-model="postForm.published"
        /> -->
        <QR v-model="postForm.QR" label="QR" />
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
          @click="deleteCert"
          >Delete {{ namespace }}</el-button
        >
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Name:"
                    prop="display_name"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.display_name"
                      placeholder="NOMBRE(S) APPELLIDO(S)"
                      type="text"
                    />
                  </el-form-item>
                  <el-form-item
                    label="Expiration:"
                    prop="exp"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-date-picker
                      v-model="postForm.exp"
                      format="MMM dd, yyyy"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="Pick a day"
                    ></el-date-picker>
                  </el-form-item>

                  <el-form-item
                    v-show="postForm.file"
                    label="Currently:"
                    class="postInfo-container-item"
                  >
                    <a target="_blank" class="link-type" :href="postForm.file"
                      ><svg-icon icon-class="link"
                    /></a>
                  </el-form-item>
                  <el-form-item
                    label="Change File:"
                    prop="file"
                    class="postInfo-container-item"
                  >
                    <input type="file" id="file" ref="file" />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
                </el-col>
                <el-col :span="12" :xs="24">
                  <Upload v-model="photo" />
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
import { fetch, create, update } from "@/api/membership";
import rules from "./validators";
import moment from "moment";
import formsMixin from "@/mixins/forms";

const defaultForm = {
  display_name: "",
  QR: "",
  exp: moment().add(6, 'M').format(),
  file: null,
  member: null
};
export default {
  name: "MembershipDetail",
  mixins: [formsMixin],
  components: {
    Status: () => import("@/components/Dropdown/Status"),
    QR: () => import("@/components/Dropdown/BannerUrl"),
    Upload: () => import("@/components/Upload/CertPreview"),
    MDinput: () => import("@/components/MDinput"),
    Sticky: () => import("@/components/Sticky")
  },
  data() {
    return {
      loading: false,
      rules,
      tempRoute: {},
      photo: "membership.jpg",
      id: null
    };
  },
  computed: {
    ...mapState("memberships", ["postForm"])
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("memberships/SET_MEMBERSHIP", defaultForm);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    submitUpload(file) {
      this.$refs.upload.submit();
    },
    getPhoto(photo) {
      try {
        var res = photo.split("https://drive.google.com/file/d/");
        res = res[1];
        res = res.split("/view?usp=drivesdk");
        return "https://drive.google.com/uc?id=" + res[0];
      } catch (error) {
        return "";
      }
    },
    fetchData(id) {
      let loading = this.loadingFullPage();
      fetch(id)
        .then(data => {
          loading.close();
          this.photo = this.getPhoto(data.file);
          this.$store.commit("memberships/SET_MEMBERSHIP", data);
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
          var form_data = new FormData();
          if (this.$refs.file.files.length)
            form_data.append("file", this.$refs.file.files[0]);
          else delete this.postForm.file;
          delete this.postForm.member;
          for (var key in this.postForm) {
            form_data.append(key, this.postForm[key]);
          }
          if (this.isEdit) request = update(this.id, form_data);
          else request = create(form_data);

          request
            .then(response => {
              this.handleSave(
                `${this.namespace} <b>${this.postForm.display_name}</b> was sucessfully saved`
              );
              this.loading = false;
              if (this.isEdit) this.fetchData(this.id);
              else this.photo = this.getPhoto(response.file);
              this.$refs.file.value = "";
              this.$router.push("/memberships/" + response.uuid);
            })
            .catch(error => {
              this.loading = false;
              console.log(error);
              this.handleError();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    deleteCert() {
      this.handleDelete();
      this.postForm.active = false;
    }
  }
};
</script>
