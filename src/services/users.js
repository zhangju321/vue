import { post } from '../utils/request'

/**
 * 登录
 * @param {*} data
 */
export function login(data) {
  return post('/api/v1/auth/login', data)
}
/**
 * 注册
 * @param {*} data
 */
export function reg(data) {
  return post('/api/v1/auth/reg', data)
}
