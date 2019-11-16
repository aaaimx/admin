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
 * @param {*} id String
 */
export function fetch (id) {
  return request({
    url: `/members/${id}`,
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
export function update (id, data) {
  return request({
    url: `/members//${id}`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id, data) {
  return request({
    url: `/members/${id}`,
    method: 'DELETE',
    data
  })
}
