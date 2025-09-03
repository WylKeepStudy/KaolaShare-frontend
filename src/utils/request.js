import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

// 创建一个 Axios 实例
const service = axios.create({
  baseURL: '/api', // 所有请求都以 /api 开头，将由 Vite 代理到后端
  timeout: 5000 // 请求超时时间——5 秒
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token) {
      // 将 'Authorization' 改为 'token'
      config.headers['token'] = token 
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 如果响应类型是 'blob'，并且请求成功，则直接返回整个响应对象，不进行 JSON 格式的校验
    // 这是为了处理文件下载的情况
    if (response.request.responseType === 'blob' && response.status === 200) {
      return response;
    }

    // 对响应数据做些什么
    const res = response.data
    
    // 如果后端定义了特定的错误码，在这里处理
    // 假设你的后端成功状态码是 200，其他是错误
    if (res.code !== 200) {
      ElMessage.error(res.msg || 'Error')
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // 对响应错误做些什么
    console.error('响应错误:', error.response)
    if (error.response.status === 401) {
      // 401 Unauthorized，统一处理
      ElMessage.error('登录状态已过期，请重新登录。')
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      router.push({ name: 'login' })
    } else {
      ElMessage.error(error.response.data?.msg || '请求失败，请稍后重试。')
    }
    return Promise.reject(error)
  }
)

export default service

