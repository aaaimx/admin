import request from '@/services/axios'

export function login (data) {
  return request({
    url: '/token/',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/users/',
    method: 'get'
    //params: { token }
  })
}

export function refreshToken (token) {
  return request({
    url: '/refresh/',
    method: 'post',
    data: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
