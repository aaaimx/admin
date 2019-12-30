import request from '@/services/axios'

export function login (data) {
  return request({
    url: '/token/',
    method: 'post',
    data
  })
}

export function getGroups () {
  return request({
    url: '/groups/',
    method: 'get'
  })
}

export function getInfo (id) {
  return request({
    url: `/users/${id}/`,
    method: 'get'
    // params: { token }
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
