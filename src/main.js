import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入路由

import ElementPlus from 'element-plus' // 导入 Element Plus
import 'element-plus/dist/index.css' // 导入 Element Plus 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 导入 Element Plus 图标

import '@/assets/base.css' // 导入基础样式

const app = createApp(App)

// 注册 Element Plus 组件库
app.use(ElementPlus)

// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router) // 注册路由

app.mount('#app')

