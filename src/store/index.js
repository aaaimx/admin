import Vue from 'vue'
import Vuex from 'vuex'
import each from 'lodash/each'
import { login, refreshToken, getInfo } from '@/api/user'
import {
  getToken,
  getRefresh,
  setToken,
  setRefreshToken,
  removeToken,
  decodeToken
} from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    // token
    token: getToken(),
    refresh: getToken(),

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideExpanded: false,
    isAsideMobileExpanded: false,
    asideActiveForcedKey: null,
    isAsideRightVisible: false,

    /* Updates */
    hasUpdates: false,

    /* Overlay */
    isOverlayVisible: false,

    /* Dark mode */
    isDarkModeActive: false
  },
  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user (state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    /* Full Page mode */
    fullPage (state, payload) {
      state.isNavBarVisible = !payload
      state.isAsideVisible = !payload
      state.isFooterBarVisible = !payload

      each(['has-aside-left', 'has-navbar-fixed-top'], htmlClass => {
        if (payload) {
          document.documentElement.classList.remove(htmlClass)
        } else {
          document.documentElement.classList.add(htmlClass)
        }
      })
    },

    /* Aside Desktop */
    asideStateToggle (state, payload = null) {
      const htmlAsideClassName = 'has-aside-expanded'

      let isExpand

      if (payload !== null) {
        isExpand = payload
      } else {
        isExpand = !state.isAsideExpanded
      }

      if (isExpand) {
        document.documentElement.classList.add(htmlAsideClassName)
      } else {
        document.documentElement.classList.remove(htmlAsideClassName)
      }

      state.isAsideExpanded = isExpand
    },

    /* Aside Mobile */
    asideMobileStateToggle (state, payload = null) {
      const htmlClassName = 'has-aside-mobile-expanded'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    },

    /* Aside Forced Active Key (when secondary submenu is open) */
    asideActiveForcedKeyToggle (state, payload) {
      state.asideActiveForcedKey =
        payload && payload.menuSecondaryKey ? payload.menuSecondaryKey : null
    },

    /* Aside Right */
    asideRightToggle (state, payload = null) {
      const htmlClassName = 'has-aside-right'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideRightVisible
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideRightVisible = isShow
      state.hasUpdates = false
    },

    /* Overlay */
    overlayToggle (state, payload = null) {
      if (payload === null) {
        payload = !state.isOverlayVisible
      }

      state.isOverlayVisible = !!payload
    },

    /* Dark Mode */
    darkModeToggle (state, payload = null) {
      const htmlClassName = 'is-dark-mode-active'

      state.isDarkModeActive = !state.isDarkModeActive

      if (state.isDarkModeActive) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_REFRESH: (state, token) => {
      state.refresh = token
    }
  },
  actions: {
    // user login
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then(data => {
            const { access, refresh } = data
            var decoded = decodeToken(access)
            console.log(decoded)
            commit('SET_TOKEN', access)
            setToken(access)
            setRefreshToken(refresh)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // get user info
    getInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        let token = state.token
        token = decodeToken(token)
        getInfo(token.user_id)
          .then(data => {
            const roles = data.groups
            commit('user', data)
            resolve(roles)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // user logout
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // remove token
    resetToken ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    refreshToken ({ commit }) {
      return new Promise((resolve, reject) => {
        const refresh = getRefresh()
        refreshToken(refresh)
          .then(data => {
            commit('SET_TOKEN', '')

            removeToken()
            setToken(data.access)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
