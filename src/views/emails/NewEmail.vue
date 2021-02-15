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
      <tiles>
        <card-component
          :title="formCardTitle"
          icon="file-edit"
          class="tile is-child"
        >
          <b-field label="Email" message="From email">
            <b-input
              icon="email"
              placeholder=""
              name="title"
              v-model="email"
              required
            />
          </b-field>
          <b-field label="Subject" message="Message subject">
            <b-input
              icon="email"
              placeholder=""
              name="title"
              v-model="subject"
              required
            />
          </b-field>
          <b-field class="email-card" label="Recipients">
            <b-taginput
              v-model="to"
              ellipsis
              type="email"
              icon="email-plus"
              placeholder="Add email"
              aria-close-label="Delete this email"
            >
            </b-taginput>
          </b-field>
          <b-field label="Message">
            <ckeditor
              :editor="editor"
              :value="body"
              :config="editorConfig"
            ></ckeditor>
          </b-field>
          <b-field>
            <b-button
              @click="submit"
              type="is-primary"
              :loading="isLoading"
              native-type="submit"
              >Send</b-button
            >
          </b-field>
        </card-component>
      </tiles>
    </section>
  </div>
</template>
<style>
.ck h1,
.ck h2,
.ck h3,
.ck p,
.ck strong,
.ck ol,
.ck ul,
.ck li,
.email-card input {
  color: black !important;
}
</style>
<script>
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Email } from '@/vendor/SMTP'

export default {
  name: 'EmailModal',
  props: {
    event: {
      type: Object,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Tiles,
    HeroBar,
    TitleBar
  },
  data () {
    return {
      isModalActive: false,
      isLoading: false,
      to: [],
      email: 'AAAIMX Student Chapter <raul.novelo@aaaimx.org>',
      subject: 'AAAIMX Student Chapter',
      body: '',
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the rich-text editor.
        // toolbar: ['headers', 'bold', 'italic', '|', 'link']
      }
    }
  },
  computed: {
    titleStack () {
      let lastCrumb

      if (this.id) {
        lastCrumb = this.form.uuid
      } else {
        lastCrumb = 'New email'
      }

      return ['Admin', 'Email', lastCrumb]
    },
    heroTitle () {
      if (this.id) {
        return this.form.to
      } else {
        return 'Send email'
      }
    },
    heroRouterLinkTo () {
      if (this.id) {
        return { name: 'email.new' }
      } else {
        return '/'
      }
    },
    heroRouterLinkLabel () {
      if (this.id) {
        return 'New email'
      } else {
        return 'Dashboard'
      }
    },
    formCardTitle () {
      if (this.id) {
        return 'Edit email'
      } else {
        return 'New Email'
      }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      Email.send({
        SecureToken: '9bae29bc-1cbc-41c5-a289-6156d9190086',
        To: this.to,
        From: this.email,
        Subject: this.subject,
        Body: this.body
      }).then(message => {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Email sent!',
          type: 'is-success',
          queue: false
        })
      })
    }
  }
}
</script>
