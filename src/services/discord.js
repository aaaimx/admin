import axios from 'axios'
console.log(process.env.VUE_APP_DISCORD_API_URL, process.env.NODE_ENV)
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_DISCORD_API_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  mode: 'cors',
  credentials: 'same-origin'
})

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
