import request from '@/utils/request'

/**
 * 用户注册 API
 * @param {object} data - 注册表单数据
 * @returns {Promise<any>}
 */
export function register(data) {
  return request.post('/user/register', data)
}

/**
 * 用户登录 API
 * @param {object} data - 登录表单数据
 * @returns {Promise<any>}
 */
export function login(data) {
  return request.post('/user/login', data)
}
