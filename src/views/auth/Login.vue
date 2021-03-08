<template>
  <section
    class="hero is-fullheight is-error-section"
    :style="
      `background: url('https://www.aaaimx.org/img/sections-background/hero.jpg') no-repeat 50% fixed; background-size: cover;`
    "
  >
    <div class="hero-body" style="justify-content: center;">
      <div class="login">
        <div class="box">
          <div class="has-text-centered">
            <h1 class="title is-size-4">AAAIMX Events Manager</h1>
            <figure class="avatar">
              <img
                class="logo"
                tag="img"
                src="@/assets/logo-square.png"
                width="125px"
                alt="Logo"
              />
            </figure>
          </div>
          <ValidationObserver ref="form" v-slot="{ handleSubmit }">
            <BInputWithValidation
              label="Usuario"
              placeholder="Username"
              rules="required"
              name="username"
              icon="account"
              required
              v-model="form.username"
            />
            <BInputWithValidation
              label="Contraseña"
              rules="required"
              name="password"
              type="password"
              placeholder="Contraseña"
              password-reveal
              icon="lock"
              v-model="form.password"
              @keyup.enter="submit"
            />
            <hr />
            <button
              class="button is-block is-info is-medium is-fullwidth"
              :class="{ 'is-loading': isLoading }"
              @click.prevent="handleSubmit(submit)"
            >
              Iniciar sesión
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import redirectMixin from '@/mixins/redirect'
export default {
  name: 'Login',
  mixins: [redirectMixin],
  data () {
    return {
      isLoading: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      try {
        await this.$store.dispatch('login', this.form)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })
      } catch (error) {
        this.$buefy.snackbar.open({
          message: error.data.detail,
          position: 'is-bottom',
          type: 'is-danger'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.hero.is-success {
  background: rgb(247, 247, 247);
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 0rem;
  background: white;
  border-radius: 10px;
}
.avatar img {
  padding: 0px;
  background: white;
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr {
  border-bottom: 1px solid rgb(7, 7, 7);
}

.has-text-black {
  color: black;
}

.field {
  padding-bottom: 10px;
}

.fa {
  margin-left: 5px;
}

.button {
  background: #800000;
}

.button:hover {
  background: #d9ad26;
  color: black;
  transition: 0.6s;
}

.box h1 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -2px;
}

.logo:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
