import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 添加代理配置
  server: {
    proxy: {
      '/api': {
        target: 'http://60.204.200.186:8080', // 你的后端服务地址
        changeOrigin: true, // 改变源，以欺骗服务器
        rewrite: (path) => path.replace(/^\/api/, '') // 将请求路径中的 /api 前缀去掉
      }
    }
  }
})

