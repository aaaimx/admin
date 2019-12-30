import request from '@/services/axios'

export function fetchListC () {
  return request({
    url: '/certificates/',
    method: 'GET'
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/certificates/',
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
    url: `/certificates/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/certificates/',
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
    url: `/certificates/${data.id}/`,
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
    url: `/certificates/${id}/`,
    method: 'DELETE',
    data
  })
}
