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
        <QR v-show="isEdit" v-model="postForm.QR" />
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
            <div class="grid-content bg-purple-dark" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple" />
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>

                <el-col :span="12" :xs="24">
                  <Upload v-show="this.isEdit" v-model="photo" />
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Facilitator:"
                    prop="to"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.to"
                      placeholder="NOMBRE(S) APPELLIDO(S)"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12" :xs="24">
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
                <el-col v-show="isEdit" :span="12" :xs="24">
                  <el-form-item
                  v-show="postForm.file"
                    label="Currently:"
                    class="postInfo-container-item"
                  >
                  <a target="_blank" class="link-type" :href="postForm.file"><svg-icon icon-class="link" /></a>
                  </el-form-item>
                  <el-form-item
                    label="Change:"
                    prop="file"
                    class="postInfo-container-item"
                  >
                    <input type="file" id="file" ref="file"/>
                  </el-form-item>
                    <!-- <el-upload
                      class="upload-demo"
                      ref="file"
                      :multiple="false"
                      action="https://aaaimx-admin.herokuapp.com"
                      :auto-upload="false"
                    >
                      <el-button slot="trigger" size="small" type="primary"
                        >Selecciona un archivo</el-button
                      >
                      <el-button
                        style="margin-left: 10px;"
                        size="small"
                        type="success"
                        @click="submitUpload"
                        >Cargar al servidor</el-button
                      >
                      <div slot="tip" class="el-upload__tip">
                        Solo archivos jpg/png con un tamaño menor de 500kb
                      </div>
                    </el-upload> -->
                </el-col>
                <qrcode v-show="isEdit" :value="postForm.QR" :options="{ width: 200 }"></qrcode>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validURL } from "@/utils/validate";
import { mapState } from "vuex";
import { fetch, create, update } from "@/api/certificate";
import axios from "axios";
import qs from "qs";
import rules from "./validators";
import loadingMixin from "@/mixins/loading";

const defaultForm = {
  type: "RECOGNITION",
  to: "",
  QR: "",
  file: ""
};
export default {
  name: "CertificateDetail",
  mixins: [loadingMixin],
  components: {
    QR: () => import("./Dropdown/BannerUrl"),
    JsonEditor: () => import("@/components/JsonEditor"),
    Upload: () => import("@/components/Upload/CertPreview"),
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
      photo: "",
      id: null,
      value: [],
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState("certificates", ["postForm", "types"])
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    } else {
      this.$store.commit("certificates/SET_CERT", defaultForm);
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
          this.$store.commit("certificates/SET_CERT", data);
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
          if (this.$refs.file.files.length) form_data.append('file', this.$refs.file.files[0]);
          else delete this.postForm.file
          for (var key in this.postForm) {
            form_data.append(key, this.postForm[key]);
          }
          if (this.isEdit) request = update(this.id, form_data);
          else request = create(form_data);

          request
            .then(response => {
              this.$notify({
                title: ` ${this.isEdit ? "Updated" : "Created"}`,
                dangerouslyUseHTMLString: true,
                message: `${this.namespace} <b>${this.postForm.type}: ${this.postForm.to}</b> was sucessfully saved`,
                type: "success",
                duration: 2000
              });
              console.log(response);
              this.loading = false;
              this.photo = this.getPhoto(response.file);
              this.$refs.file.value = ""
              this.$router.push("/certificates/" + response.uuid);
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
    deleteCert() {
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
