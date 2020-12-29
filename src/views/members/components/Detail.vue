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
        <Status v-model="postForm.active" />
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
          @click="deleteMember"
          >Delete member</el-button
        >
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="8" :lg="7" :xs="24">
                  <Upload v-model="postForm.thumbnailFile" />
                </el-col>

                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Name:"
                    prop="name"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.name"
                      placeholder="Nombre(s)"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Surname:"
                    prop="surname"
                    class="postInfo-container-item"
                  >
                    <el-input
                      v-model="postForm.surname"
                      placeholder="apellidoP-apellidoM"
                      type="text"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24">
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
                <el-col :span="8" :xs="24">
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
                        <small style="color: #8492a6; font-size: 13px">{{
                          item.name
                        }}</small>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <!-- <el-col :span="8" :xs="24">
                  <el-form-item
                    label="Roles:"
                    prop="roles"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.roles"
                      multiple
                      placeholder="Select roles"
                    >
                      <el-option
                        v-for="item in roles"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col> -->

                <el-col :span="24" :lg="12">
                  <el-form-item
                    label="Role / Charge:"
                    prop="charge"
                    class="postInfo-container-item"
                  >
                    <el-checkbox v-model="postForm.board" class="filter-item"
                      >Board</el-checkbox
                    >
                    <el-checkbox
                      v-model="postForm.committee"
                      class="filter-item"
                      >Committee</el-checkbox
                    >
                    <el-input
                      v-model="postForm.charge"
                      placeholder="Co-Chair / ITM Researcher"
                      type="text"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="8" :lg="12">
                  <el-form-item
                    label="Divisions:"
                    prop="divisions"
                    class="postInfo-container-item"
                  >
                    <br />
                    <el-select
                      v-model="postForm.divisions"
                      multiple
                      placeholder="Select divisions"
                    >
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
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fetch, create, update } from '@/api/member'
import rules from './validators'
import formsMixin from '@/mixins/forms'
const defaultForm = {
  name: '',
  surname: '',
  email: '',
  active: false,
  board: false,
  committee: false,
  thumbnailUrl: '',
  thumbnailFile: null,
  charge: '',
  adscription: null,
  membership: null,
  divisions: [],
  roles: []
}
export default {
  name: 'MemberDetail',
  mixins: [formsMixin],
  components: {
    Status: () => import('@/components/Dropdown/Status'),
    Upload: () => import('@/components/Upload/SingleImage3'),
    MDinput: () => import('@/components/MDinput'),
    Sticky: () => import('@/components/Sticky')
  },
  data () {
    return {
      loading: false,
      rules,
      tempRoute: {},
      id: null,
      photo: ''
    }
  },
  computed: {
    ...mapState('members', ['postForm', 'partners', 'divisions', 'roles'])
  },
  async created () {
    if (!this.divisions.length) await this.$store.dispatch('members/fetchDivisions')
    if (!this.partners.length) await this.$store.dispatch('members/fetchPartners')
    if (this.isEdit) await this.fetchData(this.$route.params.id)
    else this.$store.commit('members/SET_MEMBER', defaultForm)
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    async fetchData (id) {
      let loading = this.loadingFullPage()
      try {
        const data = await fetch(id)
        this.$store.commit('members/SET_MEMBER', data)
      } catch (error) {
        console.log(error)
      } finally {
        loading.close()
      }
    },
    async submitForm () {
      this.$refs.postForm.validate(async (valid) => {
        if (valid) {
          const loading = this.loadingFullPage()
          let response
          let data = this.postForm
          try {
            if (this.isEdit) response = await update(data)
            else response = await create(data)
            this.$router.push('/members/' + response.id)
            this.handleSave(
                `${this.namespace} <b>${this.postForm.surname}, ${this.postForm.name}</b> was sucessfully saved`
              )
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
    deleteMember () {
      this.handleDelete()
      this.postForm.active = false
    }
  }
}
</script>
