import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { errMessage, reLogin } from '@/utils/messages'

// create an axios instance
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000'
      : 'https://aaaaimx-email.herokuapp.com/api',
  // withCredentials: true, // send cookies when cross-domain requests
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 40000, // request timeout
  headers: { 'Content-Type': 'application/json;' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  res => {
    console.log(res)
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) {
      // errMessage(res.err)

      // 401/403: Unauthorized / Token expired
      if (res.status === 401 || res.status === 403) {
        // to re-login
        reLogin()
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    const { response, message } = error
    console.log(response)
    errMessage(message)

    // 401/403: Unauthorized / Token expired
    if (response.status === 401 || response.status === 403) {
      // to re-login
      reLogin()
    }
    return Promise.reject(response)
  }
)

export default service
