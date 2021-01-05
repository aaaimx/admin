<template>
  <section class="hero is-hero-bar is-main-hero">
    <div class="hero-body">
      <div class="level">
        <div class="level-left">
          <div class="level-item is-hero-avatar-item">
            <div class="image is-user-avatar">
              <img :src="userAvatar" />
            </div>
          </div>
          <div class="level-item is-hero-content-item">
            <div>
              <h1 class="title is-spaced">
                Welcome, <b>{{ userName }}</b
                >!
              </h1>
              <h3 class="subtitle">
                Last login <b>just now</b>
              </h3>
              <p>There are pendings <b>tasks</b> and incoming <b>events</b></p>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <router-link to="/profile" class="button is-light" title="Profile">
              <b-icon icon="account" custom-size="default" />
              <span>Profile</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeroBarMain',
  data () {
    return {
      lastLoginTimeString: '12 mins ago',
      lastLoginIpString: '192.168.1.1'
    }
  },
  computed: {
    ...mapState(['userName', 'userAvatar', 'userLastLogin'])
  }
}
</script>
