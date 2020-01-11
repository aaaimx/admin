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

        <Status v-if="isEdit" :labels="['Published', 'Draft']" v-model="postForm.published" />
        <QR v-if="isEdit" v-model="postForm.QR" />
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
                  <Upload v-show="isEdit" v-model="photo" />
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
                  <el-form-item prop="description">
                    <el-input
                      v-model="postForm.description"
                      type="textarea"
                      :rows="5"
                      placeholder="Description"
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
                    <a target="_blank" class="link-type" :href="postForm.file"
                      ><svg-icon icon-class="link"
                    /></a>
                  </el-form-item>
                  <el-form-item
                    label="Change:"
                    prop="file"
                    class="postInfo-container-item"
                  >
                    <input type="file" id="file" ref="file" />
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
                <!-- https://github.com/RaulNovelo/aaaimx-admin/issues/4 -->
                <!-- <qrcode :value="postForm.QR" :options="{ width: 200 }"></qrcode> -->
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
import { fetch, create, update } from "@/api/certificate";
import rules from "./validators";
import formsMixin from "@/mixins/forms";

const defaultForm = {
  type: "RECOGNITION",
  description: "",
  published: false,
  to: "",
  QR: "",
  file: ""
};
export default {
  name: "CertificateDetail",
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
      photo: "",
      id: null
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
          if (this.$refs.file.files.length)
            form_data.append("file", this.$refs.file.files[0]);
          else delete this.postForm.file;
          for (var key in this.postForm) {
            form_data.append(key, this.postForm[key]);
          }
          if (this.isEdit) request = update(this.id, form_data);
          else request = create(form_data);

          request
            .then(response => {
              this.handleSave(
                `${this.namespace} <b>${this.postForm.type}: ${this.postForm.to}</b> was sucessfully saved`
              );
              this.loading = false;
              if (this.isEdit)
                this.fetchData(this.id);
              else
                this.photo = this.getPhoto(response.file);
              this.$refs.file.value = "";
              this.$router.push("/certificates/" + response.uuid);
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
