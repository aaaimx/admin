import request from '@/services/axios'

export function fetchListP () {
  return request({
    url: '/partners/',
    method: 'GET',
    params: {
      all: ''
    }
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/partners/',
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
    url: `/partners/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/partners/',
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
    url: `/partners/${id}/`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (data) {
  return request({
    url: `/partners/${id}/`,
    method: 'DELETE',
    data
  })
}
