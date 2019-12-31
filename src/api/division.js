import request from '@/services/axios'

export function fetchListD () {
  return request({
    url: '/divisions/',
    method: 'get',
    params: {
      all: ''
    }
  })
}
