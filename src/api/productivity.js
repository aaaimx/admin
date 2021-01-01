import request from '@/services/axios'

export function getAllDivisions () {
  return request({
    url: '/divisions/',
    method: 'get',
    params: {
      all: ''
    }
  })
}
