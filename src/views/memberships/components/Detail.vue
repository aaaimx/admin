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
        <QR v-model="postForm.QR" v-show="isEdit" label="QR" />
        <el-button
          v-loading="loading"
          style="margin-left: 10px;"
          type="success"
          @click="submitForm"
          v-text="isEdit ? 'Save changes' : 'Save'"
        ></el-button>
        <el-button v-loading="loading" type="danger" @click="deleteMembership"
          >Delete {{ namespace }}</el-button
        >
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col v-if="isEdit" :span="8" :lg="7" :xs="24">
                  <el-image
                    style="padding: 10%"
                    :src="postForm.file.replace('download', 'preview')"
                    :preview-src-list="[
                      postForm.file.replace('download', 'preview')
                    ]"
                  >
                  </el-image>
                </el-col>

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
                    label="Upload photo:"
                    prop="avatar"
                    class="postInfo-container-item"
                  >
                    <input type="file" id="avatar" ref="avatar" />
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
                      @change="updateExp"
                      placeholder="Select type"
                    >
                      <el-option
                        v-for="item in ['Anual', 'Semestral']"
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
import { mapState } from 'vuex'
import { fetch, create, update } from '@/api/membership'
import rules from './validators'
import moment from 'moment'
import formsMixin from '@/mixins/forms'

const defaultForm = {
  display_name: '',
  QR: '',
  exp: moment().format(),
  type: '',
  avatar: null,
  member: null
}
export default {
  name: 'MembershipDetail',
  mixins: [formsMixin],
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
      tempRoute: {},
      photo: '',
      id: null
    }
  },
  computed: {
    ...mapState('memberships', ['postForm'])
  },
  created () {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id
      this.fetchData(this.id)
    } else {
      this.$store.commit('memberships/SET_MEMBERSHIP', defaultForm)
    }
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    submitUpload (avatar) {
      this.$refs.upload.submit()
    },
    updateExp () {
      this.postForm.type === 'Anual'
        ? (this.postForm.exp = moment()
            .add(12, 'M')
            .format())
        : (this.postForm.exp = moment()
            .add(6, 'M')
            .format())
    },
    fetchData (id) {
      let loading = this.loadingFullPage()
      fetch(id)
        .then(data => {
          loading.close()
          this.$store.commit('memberships/SET_MEMBERSHIP', data)
        })
        .catch(err => {
          loading.close()
          console.log(err)
        })
    },
    submitForm () {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.postForm.exp = moment(this.postForm.exp).format()

          var form_data = new FormData()
          var data = this.postForm

          delete data.member
          delete data.file
          delete data.avatar

          for (var key in data) {
            form_data.append(key, this.postForm[key])
          }

          form_data.append('avatar', this.$refs.avatar.files[0])

          console.log(data)
          let request
          if (this.isEdit) request = update(this.id, form_data)
          else request = create(form_data)

          request
            .then(response => {
              this.handleSave(
                `${this.namespace} <b>${this.postForm.display_name}</b> was sucessfully saved`
              )
              this.loading = false
              if (this.isEdit) this.fetchData(this.id)
              this.$router.push('/memberships/' + response.uuid)
            })
            .catch(error => {
              this.loading = false
              console.log(error)
              this.handleError()
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    deleteMembership () {
      this.handleDelete()
      this.postForm.active = false
    }
  }
}
</script>
