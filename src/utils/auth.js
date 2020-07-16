export function setToken(val) {
  localStorage.setItem('token', val)
}

export function removeToken(val) {
  localStorage.removeItem('token', val)
}

export function getToken() {
  return localStorage.getItem('token')
}

export function isLogined() {
  if (localStorage.getItem('token')) {
    return true
  }
  return false
}
