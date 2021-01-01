<template>
  <div id="app">
    <nav-bar />
    <aside-menu
      :menu="menu"
      :menu-bottom="menuBottom"
      @menu-click="menuClick"
      :class="{ 'has-secondary': !!menuSecondary }"
    />
    <aside-menu
      v-if="menuSecondary"
      :menu="menuSecondary"
      :is-secondary="true"
      :label="menuSecondaryLabel"
      :icon="menuSecondaryIcon"
      @menu-click="menuClick"
      @close="menuSecondaryCloseClick"
    />
    <router-view />
    <aside-right />
    <bottom-nav />
    <footer-bar />
    <overlay />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import BottomNav from '@/components/BottomNav'
import AsideMenu from '@/components/Aside/AsideMenu'
import FooterBar from '@/components/FooterBar'
import Overlay from '@/components/Overlay'
import AsideRight from '@/components/Aside/AsideRight'
import menu from './menu'

export default {
  name: 'App',
  components: {
    AsideRight,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    BottomNav
  },
  data () {
    return {
      menuSecondary: null,
      menuSecondaryLabel: null,
      menuSecondaryIcon: null,
      menu
    }
  },
  computed: {
    menuBottom () {
      return [
        {
          action: 'logout',
          icon: 'logout',
          label: 'Log out',
          state: 'info'
        }
      ]
    },
    ...mapState(['isOverlayVisible'])
  },
  created () {
    this.$store.commit('darkModeToggle')
    this.$store.dispatch('getData')
    this.$store.commit('user', {
      name: 'Admin',
      email: 'admin@aaaimx.org',
      avatar:
        'https://avatars.dicebear.com/4.5/api/bottts/mxssssssssssssssssss.svg'
    })
  },
  methods: {
    async menuClick (item) {
      if (item.menuSecondary) {
        this.menuSecondary = item.menuSecondary
        this.menuSecondaryLabel = item.menuSecondaryLabel
          ? item.menuSecondaryLabel
          : null
        this.menuSecondaryIcon = item.menuSecondaryIcon
          ? item.menuSecondaryIcon
          : null

        this.$store.commit('asideActiveForcedKeyToggle', item)
        this.$store.commit('overlayToggle', true)
      } else if (item.action) {
        if (item.action === 'logout') {
          await this.$store.dispatch('logout')
          window.location.reload()
          this.$buefy.toast.open({
            message: 'Log out clicked',
            type: 'is-danger',
            queue: false
          })
        } else if (item.action === 'dark-mode-toggle') {
          this.$store.commit('darkModeToggle')
        }
      }
    },
    menuSecondaryCloseClick () {
      this.$store.commit('overlayToggle', false)
    },
    menuSecondaryClose () {
      this.menuSecondary = this.menuSecondaryLabel = this.menuSecondaryIcon = null
      this.$store.commit('asideActiveForcedKeyToggle', null)
    }
  },
  watch: {
    isOverlayVisible (newValue) {
      if (!newValue) {
        this.menuSecondaryClose()
      }
    }
  }
}
</script>
