<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="static/aaaimx-white.jpg" alt="Vue Material Admin" width="200" />
                  <h1 class="flex my-4 primary--text">Sign In to Admin</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="email"
                    browser-autocomplete
                    label="Login"
                    type="email"
                    v-model="user.email"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    @focus="showpass = !showpass"
                    :type=" showpass ? 'text' : 'password'"
                    v-model="user.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fab fa-facebook-square</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fab fa-google</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fab fa-twitter</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  v-if="!loading"
                  block
                  color="primary"
                  @click="authenticate()"
                  :loading="loading"
                >Login</v-btn>
                <CircleDefault v-else />
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CircleDefault from "vue-loading-spinner/src/components/Circle";
import appMixin from '@/mixins/init'
export default {
  mixins: [appMixin],
  data() {
    return {
      login: "m-login--signin",
      showpass: false,
      loading: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    CircleDefault
  },
  methods: {
    authenticate() {
      if (this.user.email.trim() && this.user.password.trim()) {
        this.loading = true;
        this.$http.post("/accounts/login", this.user).then(
          res => {
            window.sessionStorage.setItem("access_token", res.data);
            this.$router.push("/");
            this.initialize();
            this.$notify({
              type: "success",
              title: "Wellcome, Admin!",
              text: "Lasted updates ready!"
            });
          },
          err => {
            this.$notify({
              type: "error",
              title: "Login Failed!",
              text: "Please check your credentials..."
            });
            this.loading = false;
          }
        );
      } else {
        this.$notify({
          type: "error",
          title: "Required fields!",
          text: "Email & password cannot be empty.."
        });
      }
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
