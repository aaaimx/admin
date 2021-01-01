import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/api'
      : 'https://aaaimx-admin.herokuapp.com/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 40000, // request timeout
  headers: { Accept: 'application/json; version=1' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
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
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) {
      // errMessage(res.err)

      // 401/403: Unauthorized / Token expired
      if (res.status === 401 || res.status === 403) {
        // to re-login
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    const { response, message } = error
    console.log(response, message)

    // 401/403: Unauthorized / Token expired
    if (response.status === 401 || response.status === 403) {
      // to re-login
    }
    return Promise.reject(response)
  }
)

export default service
