import request from '@/services/email'

/**
 *
 * @param {*} data Object
 */
export function sendEmail (data) {
  return request({
    url: '/emails/',
    method: 'POST',
    data
  })
}
