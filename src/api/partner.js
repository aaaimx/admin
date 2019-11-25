import request from '@/services/axios'

export function fetchListP () {
  return request({
    url: '/partners/',
    method: 'get',
    params: {
      limit: 50
    }
  })
}
