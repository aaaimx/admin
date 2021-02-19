<template>
  <div class="has-text-centered">
    <h3 class="title has-text-white">AAAIMX Admin</h3>
    <hr class="login-hr" />
    <p class="subtitle has-text-white">Please login to proceed.</p>
    <div class="box">
      <figure class="avatar">
        <img width="100" src="../../assets/logo-square.png" />
      </figure>
      <form @submit.prevent="submit">
        <b-field>
          <b-input
            icon="account"
            name="username"
            required
            placeholder="Username"
            v-model="form.username"
          ></b-input>
        </b-field>
        <b-field>
          <b-input
            required
            icon="lock"
            type="password"
            name="password"
            v-model="form.password"
            placeholder="Password"
            password-reveal
          >
          </b-input>
        </b-field>
        <button
          :class="{ 'is-loading': isLoading }"
          class="button is-block is-primary is-fullwidth"
        >
          Login <i class="fa fa-sign-in" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 10px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}

.has-text-black {
  color: black;
}

.fa {
  margin-left: 5px;
}
</style>

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
