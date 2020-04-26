import {
  login,
  refreshToken,
  getInfo,
  getGroups,
  verifyToken
} from '@/api/user'
import { reLogin } from '@/utils/messages'
import {
  getToken,
  getRefresh,
  setToken,
  setRefreshToken,
  removeToken,
  decodeToken
} from '@/utils/auth'
import router, { resetRouter } from '@/router'

const USER = {
  roles: [],
  introduction: 'I am a super administrator',
  avatar: 'https://publicdomainvectors.org/photos/Linux-Avatar.png',
  name: 'Super Admin'
}
const state = {
  token: getToken(),
  refresh: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_REFRESH: (state, token) => {
    state.refresh = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
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
      const token = state.token
      var { user_id } = decodeToken(token)
      getInfo(user_id)
        .then(data => {
          USER.name = data.username.toUpperCase()
          if (data.is_superuser) USER.roles = ['Admin']
          else USER.roles = data.groups
          const { roles, name, avatar, introduction } = USER
          commit('SET_NAME', name)
          commit('SET_ROLES', roles)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          resolve(USER)
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
      commit('SET_ROLES', [])
      removeToken()
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
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
          commit('SET_ROLES', [])
          removeToken()
          setToken(data.access)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  inspectToken ({ dispatch, state }) {
    // verifyToken(state.token).then(
    //   res => {
    //     dispatch('refreshToken')
    //   },
    //   err => {
    //     // reLogin()
    //   }
    // )
    // return new Promise((resolve, reject) => {
    //   const token = state.token
    //   if (token) {
    //     const decoded = decodeToken(token)
    //     const { exp } = decoded
    //     var current = new Date()
    //     var now = current.now() / 1000
    //     console.log(exp - now)
    //     if (now > exp) {
    //       reLogin()
    //       resolve()
    //     }
    //     // if (
    //     //   exp - Date.now() * 1000 < 1800 &&
    //     //   Date.now() * 1000 - orig_iat < 628200
    //     // ) {
    //     //   console.log('here')
    //     //   dispatch('refreshToken').then(() => {
    //     //   })
    //     // } else if (exp - Date.now() * 1000 < 1800) {
    //     //   // DO NOTHING, DO NOT REFRESH
    //     // } else {
    //     //   // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
    //     //   reLogin()
    //     // }
    //   }
    // })
  },

  // dynamically modify permissions
  changeRoles ({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
