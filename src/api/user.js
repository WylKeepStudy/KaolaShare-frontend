import request from '@/utils/request'

/**
 * 获取用户信息 API
 * 通过请求头中的 token 获取当前用户的详细信息
 * @returns {Promise<any>}
 */
export function getUserInfo() {
  return request.get('/user/info')
}
