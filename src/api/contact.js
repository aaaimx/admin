import request from '@/services/axios'

export function fetchList (query) {
  return request({
    url: '/users/',
    method: 'get'
    // params: query
  })
}
