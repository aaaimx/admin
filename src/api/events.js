import request from '@/services/axios'

export function fetchList (params) {
  return request({
    url: '/events/',
    method: 'GET',
    params
  })
}

export function getFutureEvents () {
  return request({
    url: '/events/future/',
    method: 'GET'
  })
}

/**
 *
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/events/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} id String
 */
export function create (data) {
  return request({
    url: '/events/',
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
    url: `/events/${id}/`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id) {
  return request({
    url: `/events/${id}/`,
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
