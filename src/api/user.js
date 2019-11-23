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

export function refreshToken (refresh) {
  return request({
    url: '/refresh/',
    method: 'post',
    data: { refresh }
  })
}

export function verifyToken (token) {
  return request({
    url: '/token/verify/',
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
