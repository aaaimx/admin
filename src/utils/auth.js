import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
const TokenKey = 'Access-Token'
const RefreshKey = 'Refresh-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function getRefresh () {
  return Cookies.get(RefreshKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function setRefreshToken (token) {
  return Cookies.set(RefreshKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function decodeToken (token) {
  return jwtDecode(token)
}
