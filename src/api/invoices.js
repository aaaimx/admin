import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/invoices/',
    method: 'GET',
    params: query
  })
}
