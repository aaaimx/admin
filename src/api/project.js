import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/projects/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchLines (query) {
  return request({
    url: '/lines/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} query Object
 */
export function createLine (data) {
  return request({
    url: '/lines/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} uuid String
 */
export function fetchProj (uuid) {
  return request({
    url: `/projects/${uuid}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/projects/',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} uuid String
 * @param {*} data Object
 */
export function update (data) {
  return request({
    url: `/projects/${data.uuid}/`,
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
    url: `/projects/${data.id}/`,
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
    url: `/projects/${id}`,
    method: 'DELETE',
    data
  })
}
