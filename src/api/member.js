import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/members/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchRoles (query) {
  return request({
    url: '/roles/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/members/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/members/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} id String
 * @param {*} data Object
 */
export function update (data) {
  return request({
    url: `/members/${data.id}/`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} data String
 */
export function updateStatus (data) {
  return request({
    url: `/members/${data.id}/`,
    method: 'PATCH',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (data) {
  return request({
    url: `/members/${id}/`,
    method: 'DELETE',
    data
  })
}
