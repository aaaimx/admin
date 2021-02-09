import request from '@/services/axios'

export function fetchList (params) {
  return request({
    url: '/participants/',
    method: 'GET',
    params
  })
}

/**
 *
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/participants/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} id String
 */
export function create (data) {
  return request({
    url: '/participants/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function update (id, data) {
  return request({
    url: `/participants/${id}/`,
    method: 'PATCH',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id) {
  return request({
    url: `/participants/${id}/`,
    method: 'DELETE'
  })
}

export function registerParticipant (data) {
  return request({
    url: '/participants/register/',
    method: 'POST',
    data
  })
}
