import { MessageBox, Message } from 'element-ui'
import store from '@/store'

/**
 * @description lauch a prompt asking for logout/login
 */
export function reLogin () {
  MessageBox.confirm(
    'You have been logged out, you can cancel to stay on this page, or log in again',
    'Confirm logout',
    {
      confirmButtonText: 'Re-Login',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  ).then(() => {
    store.dispatch('user/resetToken').then(() => {
      window.location.reload()
    })
  })
}

/**
 * @param {*} error Error payload
 * @description show a error message in screen
 */
export function errMessage (error) {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
}
