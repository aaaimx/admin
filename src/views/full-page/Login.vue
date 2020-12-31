<template>
  <card-component
    title="Login"
    icon="lock"
    :has-card-header-background="false"
    has-title-slot
  >
    <h1 slot="title" class="title is-5 has-text-white">Sign In your Account</h1>
    <form @submit.prevent="submit" method="POST">
      <b-field>
        <b-input
          icon="account"
          name="username"
          type="username"
          placeholder="Username"
          v-model="form.username"
          required
          autofocus
        />
      </b-field>

      <b-field>
        <b-input
          icon="lock"
          v-model="form.password"
          password-reveal
          type="password"
          placeholder="Password"
          required
        />
      </b-field>

      <b-field>
        <b-checkbox type="is-link" class="is-thin">
          Remember me
        </b-checkbox>
      </b-field>

      <hr />

      <b-field>
        <div class="control">
          <button
            type="submit"
            class="button is-primary is-fullwidth"
            :class="{ 'is-loading': isLoading }"
          >
            Login
          </button>
        </div>
      </b-field>
    </form>
  </card-component>
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
