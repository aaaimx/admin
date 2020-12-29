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
        <Status
          v-if="isEdit"
          :labels="['Published', 'Draft']"
          v-model="postForm.published"
        />
        <QR v-if="isEdit" v-model="postForm.QR" />
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
          v-text="isEdit ? 'Save changes' : 'Save'"
        ></el-button>
        <el-tooltip
          class="item"
          effect="dark"
          content="Send certificate by email"
          placement="top"
        >
          <el-button
            type="secondary"
            icon="people"
            v-if="isEdit"
            @click="sendEmail(postForm)"
            ><svg-icon icon-class="guide"
          /></el-button>
        </el-tooltip>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="12" :xs="24">
                  <Upload v-show="isEdit" v-model="postForm.file" />
                </el-col>
                <el-col :span="12" :xs="24">
                  <el-form-item
                    v-if="isEdit"
                    label="ID:"
                    prop="uuid"
                    class="postInfo-container-item"
                  >
                    <el-input :value="postForm.uuid" disabled type="text">
                      <el-button
                        slot="append"
                        type="success"
                        icon="el-icon-document"
                        @click="handleCopy(postForm.uuid, $event, 'ID')"
                        >Copy</el-button
                      ></el-input
                    >
                  </el-form-item>
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
                <el-col :span="12" :xs="24">
                  <el-form-item
                    label="Event:"
                    prop="event"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.event"
                      filterable
                      placeholder="Select event"
                    >
                      <el-option
                        v-for="item in $store.getters.events"
                        :key="item.title"
                        :label="item.title"
                        :value="item.title === 'No event' ? null : item.title"
                      ></el-option>
                    </el-select>
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

                <el-col v-show="isEdit" :span="24" :xs="24">
                  <aside>
                    <h2>Upload file (FTP)</h2>
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
                      label="Folder:"
                      prop="upload"
                      class="postInfo-container-item"
                    >
                      <br />
                      <el-select
                        v-model="postForm.upload"
                        filterable
                        clearable
                        placeholder="Select folder"
                      >
                        <el-option
                          v-for="item in folders"
                          :key="item"
                          :label="item"
                          :value="item"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item
                      label="Change:"
                      prop="file"
                      class="postInfo-container-item"
                    >
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="file"
                        ref="file"
                      />
                    </el-form-item>
                    <el-button
                      type="warning"
                      icon="el-icon-upload"
                      v-if="isEdit"
                      @click="changeFile(postForm.uuid)"
                      >Upload file</el-button
                    >
                  </aside>
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
import { mapState } from 'vuex'
import {
  fetch,
  create,
  update,
  getFolders,
  uploadFile
} from '@/api/certificate'
import { getDrivePhoto } from '@/utils/google-drive'
import rules from './validators'
import formsMixin from '@/mixins/forms'
import clipMixin from '@/mixins/clipboard'
import certsMixin from '@/mixins/certificates'

const defaultForm = {
  type: 'RECOGNITION',
  description: '',
  published: false,
  to: '',
  QR: '',
  file: ''
}
export default {
  name: 'CertificateDetail',
  mixins: [formsMixin, certsMixin, clipMixin],
  components: {
    Status: () => import('@/components/Dropdown/Status'),
    QR: () => import('@/components/Dropdown/BannerUrl'),
    Upload: () => import('@/components/Upload/CertPreview'),
    MDinput: () => import('@/components/MDinput'),
    Sticky: () => import('@/components/Sticky')
  },
  data () {
    return {
      loading: false,
      rules,
      uploadTo: '',
      tempRoute: {},
      folders: [],
      photo: '',
      id: null
    }
  },
  computed: {
    ...mapState('certificates', ['postForm', 'types'])
  },
  async created () {
    let res = await getFolders()
    this.folders = res.folders.filter(el => el.search(/\./) === -1)
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id
      this.fetchData(this.id)
    } else {
      this.$store.commit('certificates/SET_CERT', defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    async fetchData (id) {
      let loading = this.loadingFullPage()
      try {
        const data = await fetch(id)
        this.$store.commit('certificates/SET_CERT', data)
      } catch (error) {
        console.log(err)
      } finally {
        loading.close()
      }
    },
    async changeFile (uuid) {
      const loading = this.loadingFullPage()
      const form_data = new FormData()
      try {
        if (this.$refs.file.files.length)
          form_data.append('file', this.$refs.file.files[0])
        else delete this.postForm.file
        for (var key in this.postForm) {
          form_data.append(key, this.postForm[key])
        }
        const res = await uploadFile(uuid, form_data)
      } catch (error) {
        console.log(error)
      } finally {
        loading.close()
      }
    },
    async submitForm () {
      this.$refs.postForm.validate(async valid => {
        if (valid) {
          const loading = this.loadingFullPage()
          let response
          try {
            if (this.isEdit) response = await update(this.id, this.postForm)
            else response = await create(this.postForm)
            this.handleSave(
              `${this.namespace} <b>${this.postForm.uuid}</b> was sucessfully saved`
            )
            if (this.isEdit) this.fetchData(this.id)
            this.$refs.file.value = ''
            this.$router.push('/certificates/' + response.uuid)
          } catch (error) {
            console.log(error)
            this.handleError()
          } finally {
           loading.close()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    deleteCert () {
      // this.handleDelete()
      // this.postForm.active = false
    }
  }
}
</script>
