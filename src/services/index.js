
import tokenService from './authentication'
import api from './api'

api.before((config) => {
  const access_token = window.sessionStorage.access_token
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return config
})

const fullfillMiddleware = (res) => {
  const token = sessionStorage.refresh_token
  if (token) {
    tokenService.refresh_token(token).then(res => {
      window.sessionStorage.access_token = res.access_token
    })
  }
  return res
}

const rejectMiddleware = (err) => {
  console.log(err)
  return Promise.reject(err)
}

api.after(fullfillMiddleware, rejectMiddleware)

const finallyMiddleware = (config, url) => {
  console.log('The End')
}

api.finally(finallyMiddleware)

const HttpService = {}

HttpService.install = function (Vue) {
  Vue.prototype.$http = api
}

export default HttpService