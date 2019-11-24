import trae from 'trae'
import { getToken } from '@/utils/auth'
import { HOST } from '@/settings'

// create a trae instance
const api = trae.create({
  baseUrl: HOST + '/api'
})
api.defaults({
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
})
api.before(config => {
  config.headers.Autorization = getToken()
  config.headers['Content-Type'] = 'application/json'
  config.headers.Accept = 'application/json; version=1'
  return config
})
api.after(
  res => {
    console.log(res)
    res.data.foo = 'bar'
    return res
  },
  err => {
    console.error(err)
    err.foo = 'bar'
    return Promise.reject(err)
  }
)
api.finally((config, url) => {
  console.log('The End')
})

export default config => {
  return api[config.method](config.url, config.data)
}
