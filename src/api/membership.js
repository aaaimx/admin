import request from '@/services/axios'

export function fetchListC () {
  return request({
    url: '/memberships/',
    method: 'GET'
  })
}

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/memberships/',
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
    url: `/memberships/${id}/`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function create (data) {
  return request({
    url: '/memberships/',
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
    url: `/memberships/${id}/`,
    method: 'PUT',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}

/**
 *
 * @param {*} id String
 * @param {*} data Object
 */
export function updateStatus (id, status) {
  return request({
    url: `/memberships/${id}/`,
    method: 'PATCH',
    data: {
      status
    }
  })
}

/**
 *
 * @param {*} id String
 */
export function remove (id) {
  return request({
    url: `/memberships/${id}/`,
    method: 'DELETE'
  })
}
