import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/advisors/',
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
    url: `/advisors/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/advisors/',
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
    url: `/advisors/${data.id}/`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} data String
 */
export function updatePosition (data) {
  return request({
    url: `/advisors/${data.id}/`,
    method: 'PATCH',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id, data) {
  return request({
    url: `/advisors/${id}/`,
    method: 'DELETE',
    data
  })
}
