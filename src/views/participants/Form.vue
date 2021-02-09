<template>
  <div>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>

    <form @submit.prevent="submit">
      <b-field label="Nombre" message="Nombre(s) y apellidos">
        <b-input
          icon="account"
          v-model="form.fullname"
          placeholder="Nombre completo"
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
          placeholder="Dirección de correo electrónico"
          name="email"
          required
        />
      </b-field>
      <b-field>
        <b-checkbox type="is-link" v-model="form.is_responsible" class="is-thin">
          Es responsable
        </b-checkbox>
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
        <br />
        <b-input
          v-if="form.adscription === 'Otro'"
          v-model="others.adscription"
          placeholder="Especifique"
          name="adscription"
        />
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
        <br />
        <b-input
          v-if="form.department === 'Otro'"
          v-model="others.department"
          placeholder="Especifique"
          name="department"
        />
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
        <br />
        <b-input
          v-if="form.career === 'Otro'"
          v-model="others.career"
          placeholder="Especifique"
          name="career"
        />
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
    </form>
  </div>
</template>
<script>
import mapValues from 'lodash/mapValues'
import { registerParticipant } from '@/api/participants'

const defaulForm = {
  fullname: null,
  email: null,
  enrollment: null,
  department: null,
  career: null,
  adscription: null
}

export default {
  name: 'EventRegisterForm',
  data () {
    return {
      events: [],
      isLoading: false,
      form: defaulForm,
      others: {
        department: '',
        career: '',
        adscription: ''
      },
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
        'Otro'
      ],
      universities: ['ITM', 'UADY', 'UPY', 'Anahuac Mayab', 'Otro'],
      departments: [
        'Departamento de Sistemas y Computación (DSC)',
        'Departamento de Ing. Eléctrica y Electrónica (DIEE)',
        'Otro'
      ]
    }
  },
  methods: {
    async submit () {
      try {
        this.isLoading = true
        this.form.event = this.$route.params.id
        this.form.fullname = this.form.fullname.toUpperCase()
        this.form.enrollment = this.form.enrollment.toUpperCase()
        if (this.form.adscription === 'Otro') {
          this.form.adscription = this.others.adscription
        }
        if (this.form.career === 'Otro') {
          this.form.career = this.others.career
        }
        if (this.form.department === 'Otro') {
          this.form.department = this.others.department
        }
        console.log(this.form)
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
  }
}
</script>
