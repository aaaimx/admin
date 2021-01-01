<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" :to="heroRouterLinkTo" class="button">
        {{ heroRouterLinkLabel }}
      </router-link>
    </hero-bar>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>
    <section class="section is-main-section">
      <notification class="is-info">
        <div>
          <span><b>Fill form.</b> Data will be saved/updated</span>
        </div>
      </notification>
      <tiles>
        <card-component
          :title="formCardTitle"
          icon="file-edit"
          class="tile is-child"
        >
          <form @submit.prevent="submit">
            <b-field v-if="id" label="ID" horizontal>
              <copy-to-clipboard :text="id">
                <b-input
                  v-model="form.uuid"
                  icon-right="clipboard"
                  icon-right-clickable
                  custom-class="is-static"
                  readonly
                />
              </copy-to-clipboard>
            </b-field>
            <hr />
            <b-field label="Facilitator" message="Certificate name" horizontal>
              <b-input
                placeholder="e.g. John Doe"
                name="name"
                v-model="form.to"
                required
              />
            </b-field>
            <b-field label="Type" message="Certificate's type" horizontal>
              <b-select
                v-model="form.type"
                placeholder="Select a type"
                expanded
              >
                <option value="RECOGNITION">RECOGNITION</option>
                <option value="APPRECIATION">APPRECIATION</option>
                <option value="PARTICIPATION">PARTICIPATION</option>
              </b-select>
            </b-field>
            <b-field label="Event" horizontal>
              <b-autocomplete
                required
                v-model="form.event"
                :data="filteredDataArray"
                placeholder="e.g. SINABIA 2019"
                clearable
                @input="getEvents"
                @select="option => (selected = option)"
              >
                <template slot="empty">No results found</template>
              </b-autocomplete>
            </b-field>
            <b-field label="Description">
              <b-input
                maxlength="255"
                v-model="form.description"
                type="textarea"
              ></b-input>
            </b-field>

            <notification v-if="id" class="is-warning">
              <div>
                <span><b>Be carefully!.</b> Image will be reseted.</span>
              </div>
            </notification>
            <b-field>
              <b-button
                type="is-primary"
                :loading="isLoading"
                native-type="submit"
                >{{ id ? 'Save changes' : 'Create certificate' }}</b-button
              >
            </b-field>
          </form>

          <form v-if="id" @submit.prevent="changeFile">
            <hr />
            <h1 class="title is-4">File and links</h1>
            <hr />
            <notification class="is-warning">
              <div>
                <span
                  ><b>Upload file.</b> Image will be uploaded to AAAIMX
                  FTP.</span
                >
              </div>
            </notification>
            <b-field label="Currently">
              <a :href="form.file" target="_blank" rel="noopener noreferrer"
                ><b-icon icon="open-in-new"></b-icon
              ></a>
              &nbsp;
              <a :href="form.QR" target="_blank" rel="noopener noreferrer"
                ><b-icon icon="qrcode"></b-icon
              ></a>
            </b-field>
            <b-field label="Change file">
              <file-picker
                required
                accept="application/pdf"
                @input="file => (newFile = file)"
              />
            </b-field>
            <b-field label="Upload to" message="FTP folder">
              <b-select
                v-model="form.upload"
                placeholder="Select a folder"
                required
                expanded
              >
                <option
                  v-for="item in folders"
                  :key="item"
                  :label="item"
                  :value="item"
                ></option>
              </b-select>
            </b-field>
            <b-field>
              <b-button
                type="is-primary"
                :loading="isLoading"
                native-type="submit"
                >Upload file</b-button
              >
            </b-field>
          </form>
        </card-component>
        <card-component
          v-if="form.uuid"
          title="Certificate"
          icon="certificate"
          class="tile is-child"
          hasButtonSlot
        >
          <a
            slot="button"
            href="#"
            class="card-header-icon"
            aria-label="more options"
            @click.prevent="form.published = !form.published"
          >
            <b-icon
              icon="web"
              :type="form.published ? 'is-success' : 'is-dark'"
              custom-size="default"
            />
          </a>
          <img :src="form.file" class="image has-max-width is-aligned-center" />
          <hr />
          <b-field label="Name">
            <b-input :value="form.to" custom-class="is-static" readonly />
          </b-field>
          <b-field label="Type">
            <b-input :value="form.type" custom-class="is-static" readonly />
          </b-field>
          <b-field label="Event">
            <b-input :value="form.event" custom-class="is-static" readonly />
          </b-field>
          <b-field label="Description">
            <b-input
              :value="form.description"
              type="textarea"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-button
            @click="updateStatus(!form.published)"
            :type="form.published ? 'is-warning' : 'is-success'"
            :loading="isLoading"
            >{{
              form.published ? 'Unpublish' : 'Publish'
            }}
            Certificate</b-button
          >

          <hr />
          <notification class="is-danger">
            <div>
              <span
                ><b>Danger zone!.</b> All certificate data will be
                removed.</span
              >
            </div>
          </notification>
          <b-field>
            <b-button type="is-danger" :loading="isLoading" @click="deleteCert"
              >Delete certificate</b-button
            >
          </b-field>
        </card-component>
      </tiles>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import FilePicker from '@/components/FilePicker'
import Notification from '@/components/Notification'
import {
  fetch,
  create,
  update,
  remove,
  publish,
  uploadFile,
  getFolders
} from '@/api/certificates'
import { fetchList as fetchEvents } from '@/api/events'
export default {
  name: 'CertificateForm',
  components: {
    FilePicker,
    Tiles,
    HeroBar,
    TitleBar,
    Notification
  },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      events: [],
      folders: [],
      newFile: null,
      name: '',
      selected: null,
      isLoading: false,
      form: this.getClearFormObject(),
      createdReadable: null,
      isProfileExists: false
    }
  },
  computed: {
    filteredDataArray () {
      return this.events.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.form.event.toLowerCase()) >= 0
        )
      })
    },
    titleStack () {
      let lastCrumb

      if (this.id) {
        lastCrumb = this.form.uuid
      } else {
        lastCrumb = 'New certificate'
      }

      return ['Admin', 'Certificates', lastCrumb]
    },
    heroTitle () {
      if (this.id) {
        return this.form.to
      } else {
        return 'Create Certificate'
      }
    },
    heroRouterLinkTo () {
      if (this.id) {
        return { name: 'certificate.new' }
      } else {
        return '/'
      }
    },
    heroRouterLinkLabel () {
      if (this.id) {
        return 'New certificate'
      } else {
        return 'Dashboard'
      }
    },
    formCardTitle () {
      if (this.id) {
        return 'Edit Certificate'
      } else {
        return 'New Certificate'
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getClearFormObject () {
      return {
        event: '',
        to: '',
        type: '',
        description: ''
      }
    },
    async getEvents () {
      const data = await fetchEvents()
      this.events = data.results.map(el => el.title)
    },
    async getData () {
      const res = await getFolders()
      this.folders = res.folders.filter(el => el.search(/\./) === -1)
      if (this.id) {
        this.isLoading = true
        fetch(this.id)
          .then(item => {
            if (item) {
              this.form = item
            } else {
              this.$router.push({ name: 'certificate.new' })
            }
            this.isLoading = false
          })
          .catch(e => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${e}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
    },
    input (v) {
      this.createdReadable = dayjs(v).format('MMM D, YYYY')
    },
    async submit () {
      this.isLoading = true
      let data
      try {
        this.form.file = ''
        if (this.id) data = await update(this.id, this.form)
        else data = await create(this.form)
        this.$buefy.snackbar.open({
          message: 'Certificate saved',
          queue: false
        })
        if (this.id) window.location.reload()
        else this.$router.push('/certificates/' + data.uuid)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async updateStatus (status) {
      this.isLoading = true
      try {
        await publish(this.id, status)
        this.$buefy.snackbar.open({
          message: 'Status updated',
          queue: false
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.form.published = status
        this.isLoading = false
      }
    },
    async deleteCert () {
      this.isLoading = true
      try {
        await remove(this.id)
        this.$buefy.snackbar.open({
          message: 'Certificate removed',
          queue: false
        })
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async changeFile () {
      this.isLoading = true
      const formData = new FormData()
      try {
        if (this.newFile) {
          formData.append('file', this.newFile)
        } else {
          delete this.form.file
        }
        for (var key in this.form) {
          formData.append(key, this.form[key])
        }
        await uploadFile(this.id, formData)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  },

  watch: {
    id (newValue) {
      this.isProfileExists = false

      if (!newValue) {
        this.form = this.getClearFormObject()
      } else {
        this.getData()
      }
    }
  }
}
</script>
