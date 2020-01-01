import request from '@/services/axios'

export function searchProject (title) {
  return request({
    url: '/projects/',
    method: 'GET',
    params: { title }
  })
}

export function searchMember (name) {
  return request({
    url: '/members/',
    method: 'GET',
    params: { name }
  })
}
