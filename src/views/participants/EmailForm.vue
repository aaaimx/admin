<template>
  <b-modal
    :active.sync="isModalActive"
    has-modal-card
    full-screen
    :can-cancel="false"
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Send email</p>
      </header>
      <section class="modal-card-body">
        <b-loading
          :is-full-page="true"
          v-model="isLoading"
          :can-cancel="false"
        ></b-loading>
        <b-field label="Add some tags">
          <b-taginput
            v-model="tags"
            ellipsis
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
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="cancel">Cancel</button>
        <button class="button is-primary" @click="confirm">Enviar</button>
      </footer>
    </div>
  </b-modal>
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
.modal-card input {
  color: black !important;
}
</style>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Email } from '@/vendor/smtp'

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
    },
    checkedRows: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      isModalActive: false,
      isLoading: false,
      tags: [],
      body:
        '<p>Nos da gusto que nos estén acompañando en el <strong>(curso/taller/plática con nombre</strong>) que será impartido el día (fecha, en dado caso que sea varios días es: del día (<strong>fecha de inicio</strong>) al (<strong>fecha que termina</strong>)), a las (hora, en dado caso que sea un horario es: de (<strong>hora inicial - hora final</strong>)) a través de nuestro canal de <strong>Discord</strong> donde estarás participando con nuestros talleristas, para poder acceder es necesario que tengas una cuenta en esta plataforma y acceder con el <strong>link</strong> que se encuentra a continuación:</p><p><br><a href="https://discord.gg/N7eZzK9">https://discord.gg/N7eZzK9</a>&nbsp;</p><p><br data-cke-filler="true"></p><p>Cuando entres es necesario que te identifiques con tu <strong>nombre</strong> y te dirijas al canal exclusivo para talleres, es necesario que entres <strong>10 minutos</strong> para confirmar tu asistencia, ¡muchas gracias por acompañarnos!.&nbsp;</p><p><br data-cke-filler="true"></p><p><strong>AAAIMX Student Chapter México.</strong></p>',
      editor: ClassicEditor,
      editorConfig: {
        // The configuration of the rich-text editor.
        // toolbar: ['headers', 'bold', 'italic', '|', 'link']
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.isLoading = true
      Email.send({
        SecureToken: '9bae29bc-1cbc-41c5-a289-6156d9190086',
        To: this.tags,
        From: 'contact@aaaimx.org',
        Subject: this.event.title,
        Body: this.body
      }).then(message => {
        this.isLoading = false
        this.$buefy.toast.open({
          message: 'Email sent to particpants!',
          type: 'is-success',
          queue: false
        })
        this.$emit('confirm')
      })
    }
  },
  watch: {
    isActive (newValue) {
      this.tags = this.checkedRows.map(p => p.email)
      this.isModalActive = newValue
    },
    isModalActive (newValue) {
      if (!newValue) {
        this.cancel()
      }
    }
  }
}
</script>
