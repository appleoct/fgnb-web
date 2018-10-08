import Cookies from 'js-cookie'

const TokenKey = 'token'
const UsernameKey = 'username'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,{ expires: 365})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUsername(username) {
  return Cookies.set(UsernameKey, username,{ expires: 365})
}

export function getUsername() {
  return Cookies.get(UsernameKey)
}
