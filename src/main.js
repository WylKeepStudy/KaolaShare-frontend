import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入路由

import ElementPlus from 'element-plus' // 导入 Element Plus
import 'element-plus/dist/index.css' // 导入 Element Plus 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 导入 Element Plus 图标

import '@/assets/base.css' // 导入基础样式

// 导入 Font Awesome 核心库和组件
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 导入需要使用的具体图标（从已安装的图标集中选）
import { 
  faAtom,
  faCodeMerge,
  faWater,//水
  faTruck,//卡车
  faCoins, //钱
  faLanguage,//语言
  faRobot,//机器人
  faBook,//书
  faBalanceScaleLeft,//天秤
  faMicrophone,//麦克风
  faPencilRuler,//铅笔尺子
  faDesktop,    //电脑
  faShip,       //船
  faCalculator,        //计算器
  faMicrochip,  // 微芯片
  faServer,     // 服务器
  faCode,       // 代码
  faWifi,       // 无线网络
  faDatabase    // 数据库
} from '@fortawesome/free-solid-svg-icons'
// 将图标添加到库中
library.add(faWater,
  faAtom,
  faCodeMerge,
  faTruck,
  faCalculator,
  faCoins, 
  faLanguage,
  faRobot,
  faBook,
  faBalanceScaleLeft,
  faMicrophone,
  faPencilRuler,
  faDesktop,
  faShip,
  faMicrochip, 
  faServer, 
  faCode, 
  faWifi, 
  faDatabase
)

const app = createApp(App)

// 注册 Element Plus 组件库
app.use(ElementPlus)
// 全局注册 FontAwesomeIcon 组件
app.component('font-awesome-icon', FontAwesomeIcon)

// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router) // 注册路由

app.mount('#app')

