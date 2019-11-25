import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/research/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchAuthors (query) {
  return request({
    url: '/authors/',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} uuid String
 */
export function fetch (uuid) {
  return request({
    url: `/research/${uuid}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/research/',
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
    url: `/research/${data.uuid}/`,
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
    url: `/research/${data.id}/`,
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
    url: `/research/${id}/`,
    method: 'DELETE',
    data
  })
}
