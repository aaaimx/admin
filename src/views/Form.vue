<template>
  <div>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register box">
          <div class="card">
            <div class="card-image">
              <figure class="image ">
                <img src="../assets/logos.png" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2 register box">
          <div class="columns">
            <div class="column left is-hidden-mobile has-text-centered">
              <img
                src="https://www.aaaimx.org/img/sections-background/community.jpg"
              />
              <h2 class="title colored is-4">AAAIMX Student Chapter</h2>
              <p>
                We are a group of students and researchers from the ITM along
                with researchers from the Center for Mathematical Research
                (CIMAT) and CentroGeo. <br />
              </p>
              <br />
              <img
                src="https://www.aaaimx.org/img/sprites/aaai-transpeps.png"
                width="90px"
                alt=""
              />
              <img src="../assets/logo.png" width="90px" alt="" />
              <br />
              <small>
                Contributing to more students having knowledge of Artificial
                Intelligence and other increasingly popular related fields.
              </small>
            </div>
            <div class="column right">
              <div class="has-text-centered">
                <h1 class="title is-4">
                  Inscripción a curso, taller o plática
                </h1>
                <p class="description">
                  Ingrese sus datos para validar su inscripción y recibirá un
                  correo de confirmación.
                </p>
              </div>

              <b-loading
                :is-full-page="true"
                v-model="isLoading"
                :can-cancel="false"
              ></b-loading>

              <form @submit.prevent="submit">
                <b-field
                  label="Nombre completo"
                  message="Nombre(s) y apellidos"
                >
                  <b-input
                    icon="account"
                    v-model="form.fullname"
                    placeholder="Tu nombre completo"
                    name="name"
                    required
                  />
                </b-field>

                <b-field
                  label="Correo electrónico"
                  message="Dirección de correo electrónico"
                >
                  <b-input
                    icon="email"
                    type="email"
                    v-model="form.email"
                    placeholder="Tu direcciòn de correo electrónico"
                    name="email"
                    required
                  />
                </b-field>
                <b-field
                  label="Evento"
                  message="Curso, taller o plática al que desea inscribirse"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona un evento"
                    v-model="form.event"
                    required
                  >
                    <option
                      v-for="(option, index) in events"
                      :key="index"
                      :value="option.id"
                    >
                      {{ option.title }}
                    </option>
                  </b-select>
                </b-field>
                <b-field
                  label="Adscripción"
                  message="Escuela o universidad de procedencia"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.adscription"
                    required
                  >
                    <option
                      v-for="(option, index) in universities"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                </b-field>
                <b-field
                  label="Departamento"
                  message="Departamento (solo estudiantes del ITM)"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.department"
                  >
                    <option
                      v-for="(option, index) in departments"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                </b-field>
                <b-field label="Carrera" message="Área o campo de estudio">
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.career"
                  >
                    <option
                      v-for="(option, index) in careers"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                </b-field>
                <b-field label="Matricula" message="Matricula (o equivalente)">
                  <b-input
                    type="text"
                    v-model="form.enrollment"
                    placeholder=""
                    name="matricula"
                    required
                  />
                </b-field>
                <hr />
                <b-field>
                  <div class="control">
                    <b-button
                      native-type="submit"
                      :loading="isLoading"
                      expanded
                      type="is-primary"
                      >Enviar</b-button
                    >
                  </div>
                </b-field>
                <small
                  ><em
                    >We appreciate your interest in helping this community that
                    strives every day to be better especially for you.</em
                  ></small
                >
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <a
                  class="social-link"
                  :href="link.href"
                  target="_blank"
                  :key="link.icon"
                  v-for="link in socialLinks"
                >
                  <b-icon :icon="link.icon"></b-icon>
                </a>
                <a
                  class="social-link"
                  href="mailto:contact@aaaimx.org"
                  target="_blank"
                >
                  <b-icon icon="email"></b-icon>
                </a>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item">
                &copy; AAAIMX Student Chapter. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import mapValues from 'lodash/mapValues'
import { getFutureEvents, registerParticipant } from '@/api/events'
import socialLinks from '@/router/menus/social_links'

const defaulForm = {
  fullname: 'raul novelo cruz',
  email: 'raul.novelo@aaaimx.org',
  enrollment: '',
  department: 'Departamento de Sistemas y Computación (DSC)',
  career: 'Ingeniería en Sistemas Computacionales',
  adscription: 'ITM'
}

export default {
  name: 'EventRegisterForm',
  data () {
    return {
      isLoading: false,
      form: defaulForm,
      socialLinks,
      events: [],
      careers: [
        'Ingeniería en Gestión Empresarial',
        'Ingeniería Ambiental',
        'Ingeniería Bioquímica',
        'Ingeniería Biomédica',
        'Ingeniería Química',
        'Ingeniería Eléctrica',
        'Ingeniería Electrónica',
        'Ingeniería Mecánica',
        'Ingeniería Civil',
        'Ingeniería Industrial',
        'Ingeniería en Sistemas Computacionales',
        'Licenciatura en Administración',
        'Otra'
      ],
      universities: ['ITM', 'UADY', 'UPY', 'Anahuac Mayab', 'Otro'],
      departments: [
        'Departamento de Sistemas y Computación (DSC)',
        'Departamento de Ing. Eléctrica y Electrónica (DIEE)',
        'Otro'
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const data = await getFutureEvents()
      this.events = data.results
    },
    async submit () {
      try {
        this.isLoading = true
        this.form.fullname = this.form.fullname.toUpperCase()
        this.form.enrollment = this.form.enrollment.toUpperCase()
        await registerParticipant(this.form)
        this.$buefy.dialog.alert({
          title: 'Respuesta enviada',
          message:
            '<b>¡Enhoranbuena!</b> Se ha enviado tu respuesta.<br/> Se te enviará un correo con el <b>link de acceso</b>, a más tardar 12 hrs antes del evento.<br/><b>¡Nos vemos pronto!</b>...',
          type: 'is-success',
          hasIcon: true,
          icon: 'check-circle',
          ariaRole: 'alertdialog',
          confirmText: 'Entendido',
          ariaModal: true
        })
        this.reset()
      } catch (error) {
        console.log(error)
        this.$buefy.dialog.alert({
          title: 'Registro fallido',
          message:
            'No se ha podido completar tu <b>registro</b>.<br/>No se permiten <b>registros duplicados</b> o algo ha salido mal durante el proceso. <br/>Te recomendamos intentar más tarde.',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } finally {
        this.isLoading = false
      }
    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })
    }
  },
  mounted () {
    this.$store.commit('fullPage', true)
    this.$store.commit('asideRightToggle', false)
  },
  beforeDestroy () {
    this.$store.commit('fullPage', false)
  }
}
</script>
<style>
:root {
  --brandColor: hsl(166, 67%, 51%);
  --background: #f9f3de;
  --textDark: hsla(0, 0%, 0%, 0.66);
  --textLight: hsla(0, 0%, 0%, 0.33);
}

body {
  background: var(--background);
  color: var(--textDark);
}

.field:not(:last-child) {
  margin-bottom: 1rem;
}

.register {
  background: white;
}

.left,
.right {
  padding: 2rem;
}

.left .title {
  font-weight: 800;
  letter-spacing: -2px;
}

.left .colored {
  font-weight: 700;
  margin-top: 1rem !important;
  letter-spacing: -1px;
}

.left p {
  color: var(--textLight);
  font-size: 1.15rem;
}

.right .title {
  font-weight: 800;
  letter-spacing: -1px;
}

.right .description {
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  color: var(--textLight);
  font-size: 1rem;
}

.right small {
  color: var(--textLight);
}

input {
  font-size: 1rem;
}

.social-link {
  color: var(--textLight);
  margin-right: 0.3rem;
}
</style>
