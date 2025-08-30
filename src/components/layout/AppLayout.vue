<template>
  <div class="common-layout">
    <el-container class="app-container">
      <el-aside width="200px" class="aside">
        <div class="logo-area">
          <img src="/src/assets/images/logo.svg" alt="logo" class="logo-img" />
          <span class="logo-text">考拉快跑</span>
        </div>
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>关于本项目</span>
          </el-menu-item>
          <el-menu-item index="/file-list">
            <el-icon><Document /></el-icon>
            <span>文件列表</span>
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Document, InfoFilled, SwitchButton } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import api from '@/api'

const router = useRouter()
const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c264629c608c0ad1wrap.png'
const userInfo = ref({
  username: '',
  avatarUrl: ''
})

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  ElMessage.success('已退出登录')
  router.push({ name: 'login' })
}

onMounted(async () => {
  // 检查是否有 token，如果没有则不请求
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
      // 如果 token 无效或过期，后端会返回 401 错误，此时请求拦截器会处理，我们在这里只处理其他非成功状态
      console.error('获取用户信息失败:', res.msg)
      // ElMessage.error(res.msg || '获取用户信息失败');
    }
  } catch (error) {
    console.error('获取用户信息请求失败:', error)
    // ElMessage.error(error.msg || '获取用户信息失败');
  }
})
</script>

<style scoped>
.common-layout {
  height: 100vh;
}

.app-container {
  height: 100%;
}

.aside {
  background-color: #2b2b2b;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.logo-area {
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid #424242;
}

.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}

.el-menu-vertical-demo {
  background-color: #2b2b2b;
  border-right: none;
  flex-grow: 1;
}

.el-menu-vertical-demo .el-menu-item {
  color: #c0c4cc;
}

.el-menu-vertical-demo .el-menu-item.is-active {
  background-color: #409eff;
  color: #fff;
}

.el-menu-vertical-demo .el-menu-item:hover {
  background-color: #383838;
}

.user-info-area {
  padding: 20px;
  border-top: 1px solid #424242;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info-area .el-avatar {
  margin-right: 10px;
}

.username {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logout-icon {
  color: #c0c4cc;
  font-size: 20px;
  cursor: pointer;
}

.logout-icon:hover {
  color: #409eff;
}

.main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>
