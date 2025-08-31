<template>
  <div class="common-layout">
    <el-container class="app-container">
      <el-aside width="280px" class="aside">
      <div class="logo-area">
        <img src="/src/assets/images/logo.svg" alt="logo" class="logo-img" />
        <span class="logo-text">考拉快跑</span>
      </div>
        <el-menu
          class="el-menu-vertical-demo"
          router
          :default-active="activeMenu"
          :active-text-color="activeTextColor"
        >
          <!-- 关于本项目 -->
          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>关于本项目</span>
          </el-menu-item>

          <!-- 硬编码的菜单结构 -->
          <!-- 法学院 -->
          <el-sub-menu index="law">
            <template #title>
              <el-icon><ScaleToOriginal /></el-icon>
              <span>法学院</span>
            </template>
            <el-menu-item index="/file-list/7">法律系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="ie">
            <template #title>
              <el-icon><Monitor /></el-icon>
              <span>信息工程学院</span>
            </template>
            <el-menu-item index="/file-list/16">计算机科学系</el-menu-item>
            <el-menu-item index="/file-list/17">电子工程系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="moe">
            <template #title>
              <el-icon><Ship /></el-icon>
              <span>海洋科学与工程学院</span>
            </template>
            <el-menu-item index="/file-list/18">海洋环境系</el-menu-item>
            <el-menu-item index="/file-list/19">安全科学与工程系</el-menu-item>
            <el-menu-item index="/file-list/20">港口航道与海岸工程系</el-menu-item>
            <el-menu-item index="/file-list/21">船舶与海洋工程系</el-menu-item>
            <el-menu-item index="/file-list/22">海洋材料系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="fl">
            <template #title>
              <el-icon><Reading /></el-icon>
              <span>外国语学院</span>
            </template>
            <el-menu-item index="/file-list/23">英语系</el-menu-item>
            <el-menu-item index="/file-list/24">翻译系</el-menu-item>
            <el-menu-item index="/file-list/25">商务英语系</el-menu-item>
            <el-menu-item index="/file-list/26">日语系</el-menu-item>
            <el-menu-item index="/file-list/27">法语系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="art">
            <template #title>
              <el-icon><Brush /></el-icon>
              <span>徐悲鸿艺术学院</span>
            </template>
            <el-menu-item index="/file-list/30">工业设计系</el-menu-item>
            <el-menu-item index="/file-list/31">视觉传达设计系</el-menu-item>
            <el-menu-item index="/file-list/32">绘画系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="marx">
            <template #title>
              <el-icon><Notebook /></el-icon>
              <span>马克思主义学院</span>
            </template>
            <el-menu-item index="/file-list/29">思政系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="sci">
            <template #title>
              <el-icon><Lightning /></el-icon>
              <span>理学院</span>
            </template>
            <el-menu-item index="/file-list/28">数学系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="merchant">
            <template #title>
              <el-icon><Suitcase /></el-icon>
              <span>商船学院</span>
            </template>
            <el-menu-item index="/file-list/1">航海技术系</el-menu-item>
            <el-menu-item index="/file-list/2">轮机工程系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="trans">
            <template #title>
              <el-icon><Van /></el-icon>
              <span>交通运输学院</span>
            </template>
            <el-menu-item index="/file-list/3">交通工程系</el-menu-item>
            <el-menu-item index="/file-list/4">交通运输系</el-menu-item>
            <el-menu-item index="/file-list/5">物流管理系</el-menu-item>
            <el-menu-item index="/file-list/6">国际航运系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="eco">
            <template #title>
              <el-icon><Coin /></el-icon>
              <span>经济管理学院</span>
            </template>
            <el-menu-item index="/file-list/8">物流经济与统计系</el-menu-item>
            <el-menu-item index="/file-list/9">国际贸易与金融系</el-menu-item>
            <el-menu-item index="/file-list/10">财务与会计学系</el-menu-item>
            <el-menu-item index="/file-list/11">工商与旅游管理系</el-menu-item>
            <el-menu-item index="/file-list/12">管理科学系</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="logi">
            <template #title>
              <el-icon><Cpu /></el-icon>
              <span>物流工程学院</span>
            </template>
            <el-menu-item index="/file-list/13">机械工程系</el-menu-item>
            <el-menu-item index="/file-list/14">工业工程系</el-menu-item>
            <el-menu-item index="/file-list/15">电气自动化系</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/file-list/33">
            <el-icon><More /></el-icon>
            <span>公共课</span>
          </el-menu-item>
        </el-menu>
        <div class="user-info-area">
          <el-avatar :size="50" :src="userInfo.avatarUrl || defaultAvatar" />
          <span class="username">{{ userInfo.username || '加载中...' }}</span>
          <el-icon @click="handleLogout" class="logout-icon"><SwitchButton /></el-icon>
        </div>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 导入需要的 Element Plus 图标
import {
  More,
  InfoFilled,
  SwitchButton,
  Monitor,
  ScaleToOriginal,
  Ship,
  Reading,
  Brush,
  Notebook,
  Lightning,
  Suitcase,
  Van,
  Coin,
  Cpu,
  School
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import api from '@/api'

const router = useRouter()
const route = useRoute()
const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c264629c608c0ad1wrap.png'
const userInfo = ref({
  username: '',
  avatarUrl: ''
})

const activeTextColor = '#409EFF'

// 计算属性，用于高亮显示当前选中的菜单项
const activeMenu = computed(() => {
  // 如果当前路由是 /file-list/:departmentName，则返回完整的路径以匹配菜单项的 index
  if (route.name === 'file-list' && route.params.departmentName) {
    return `/file-list/${route.params.departmentName}`;
  }
  return route.path;
});

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  ElMessage.success('已退出登录')
  router.push({ name: 'login' })
}

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    ElMessage.warning('请先登录！')
    router.push({ name: 'login' })
    return
  }
  try {
    const res = await api.user.getUserInfo()
    if (res.code === 200) {
      userInfo.value.username = res.data.username
      userInfo.value.avatarUrl = res.data.avatarUrl
    } else {
      console.error('获取用户信息失败:', res.msg)
    }
  } catch (error) {
    console.error('获取用户信息请求失败:', error)
  }
})
</script>




<style scoped>
/* 整个布局容器 */
.common-layout {
  height: 100vh;
}

.app-container {
  height: 100%;
}

/* 侧边栏 */
.aside {
  background-color: #2c3e50; /* 主背景色 */
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
}

/* Logo区域 */
.logo-area {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* 菜单栏 */
.el-menu-vertical-demo {
  background-color: transparent;
  border-right: none;
  flex-grow: 1;
}

/* 主菜单项和子菜单标题的公共样式 */
:deep(.el-menu-item),
:deep(.el-sub-menu__title) {
  height: 50px;
  line-height: 50px;
  color: #ecf0f1;
  padding-left: 20px !important;
  border-radius: 4px;
  margin: 0 10px;
}

/* 主菜单项的悬停样式 */
:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
}

/* 主菜单项的激活（选中）样式
:deep(.el-menu-item.is-active) {
  background-color: #409eff !important;
  color: #ffffff !important;
  border-radius: 4px;
} */

/* 菜单项内的图标样式 */
:deep(.el-menu-item .el-icon),
:deep(.el-sub-menu__title .el-icon) {
  color: #bdc3c7;
  font-size: 18px;
  margin-right: 10px;
}

/* 激活状态下图标和文字的颜色 */
:deep(.el-menu-item.is-active .el-icon),
:deep(.el-menu-item.is-active span) {
  color: #ffffff !important;
}

/* --- 子菜单项的样式 --- */
/* 为展开后的子菜单容器设置背景色 */
:deep(.el-menu--inline) {
  background-color: #263544;
}

/* 子菜单项的样式 */
:deep(.el-menu--inline .el-menu-item) {
  color: #ecf0f1;
  background-color: transparent !important;
  padding-left: 45px !important; /* 增加缩进 */
}

/* 子菜单项的悬停样式 */
:deep(.el-menu--inline .el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* 子菜单项的激活样式 */
:deep(.el-menu--inline .el-menu-item.is-active) {
  background-color: #409eff !important;
  color: #ffffff !important;
}

/* 用户信息区域 */
.user-info-area {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info-area .el-avatar {
  margin-right: 10px;
}

.username {
  color: #ecf0f1;
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logout-icon {
  color: #bdc3c7;
  font-size: 20px;
  cursor: pointer;
}

.logout-icon:hover {
  color: #409eff;
}

/* 主内容区域 */
.main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>