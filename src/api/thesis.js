import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/theses/',
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
    url: '/advisors/',
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
    url: `/theses/${uuid}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/theses/',
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
    url: `/theses/${data.uuid}/`,
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
    url: `/theses/${data.id}/`,
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
    url: `/theses/${id}`,
    method: 'DELETE',
    data
  })
}
