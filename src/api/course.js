import request from '@/services/axios'

/**
 *
 * @param {*} query Object
 */
export function fetchList (query) {
  return request({
    url: '/courses',
    method: 'GET',
    params: query
  })
}

/**
 *
 * @param {*} uuid String
 */
export function fetchCourse (uuid) {
  return request({
    url: `/courses/${uuid}`,
    method: 'GET'
  })
}

/**
 *
 * @param {*} data Object
 */
export function createCourse (data) {
  return request({
    url: '/courses',
    method: 'POST',
    data
  })
}

/**
 *
 * @param {*} uuid String
 * @param {*} data Object
 */
export function updateCourse (uuid, data) {
  return request({
    url: `/courses/${uuid}`,
    method: 'PUT',
    data
  })
}

/**
 *
 * @param {*} uuid String
 */
export function deleteCourse (uuid, data) {
  return request({
    url: `/courses/${uuid}`,
    method: 'DELETE',
    data
  })
}
