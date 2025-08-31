<template>
  <div class="common-layout">
    <el-container class="app-container">
      <el-aside width="300px" class="aside">
        <div class="logo-area">
          <img src="/src/assets/images/logo.svg" alt="logo" class="logo-img" />
          <span class="logo-text">考拉快跑</span>
        </div>
        <el-menu class="el-menu-vertical-demo" router>
           <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="1" >
            <template #title>
              <font-awesome-icon icon="balance-scale-left"  style="margin-right: 10px;margin-left: 3px;" />
              <span>法学院</span>
            </template>
              <el-menu-item index="/file-list">海商法</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <font-awesome-icon icon="desktop"  style="margin-right: 10px;margin-left: 3px;" />
              <span>信息工程学院</span>
            </template>
              <el-menu-item index="/file-list">计算机科学与技术</el-menu-item>
              <el-menu-item index="/file-list">网络工程</el-menu-item>
               <el-menu-item index="/file-list">人工智能</el-menu-item>
                <el-menu-item index="/file-list">电子信息工程</el-menu-item>
                 <el-menu-item index="/file-list">通信工程</el-menu-item>
                  <el-menu-item index="/file-list">计算机与金融</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
          <font-awesome-icon icon="water"  style="margin-right: 15px;" />
              <span>海洋科学与工程学院</span>
            </template>
              <el-menu-item index="/file-list">环境工程</el-menu-item>
              <el-menu-item index="/file-list">安全工程</el-menu-item>
              <el-menu-item index="/file-list">港口航道与海岸工程</el-menu-item>
              <el-menu-item index="/file-list">船舶与海洋工程</el-menu-item>
              <el-menu-item index="/file-list">材料科学与工程</el-menu-item>
            </el-sub-menu>
             <el-sub-menu index="4">
            <template #title>
             <font-awesome-icon icon="language"  style="margin-right: 15px;margin-left: 3px;" />
              <span>外国语学院</span>
            </template>
              <el-menu-item index="/file-list">英语(航运)</el-menu-item>
              <el-menu-item index="/file-list">翻译</el-menu-item>
              <el-menu-item index="/file-list">商务英语</el-menu-item>
              <el-menu-item index="/file-list">日语</el-menu-item>
              <el-menu-item index="/file-list">法语</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
            <template #title>
               <font-awesome-icon icon="pencil-ruler"  style="margin-right: 15px;margin-left: 3px;" />
              <span>徐悲鸿艺术学院</span>
            </template>
              <el-menu-item index="/file-list">工业设计</el-menu-item>
              <el-menu-item index="/file-list">视觉传达设计</el-menu-item>
              <el-menu-item index="/file-list">绘画</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
            <template #title>
             <font-awesome-icon icon="book"  style="margin-right: 15px;margin-left: 3px;" />
              <span>马克思主义学院</span>
            </template>
              <el-menu-item index="/file-list">思想政治教育</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="7">
            <template #title>
               <font-awesome-icon icon="atom"  style="margin-right: 15px;margin-left: 3px;" />
              <span>理学院</span>
            </template>
              <el-menu-item index="/file-list">信息与计算科学</el-menu-item>
              <el-menu-item index="/file-list">数学与应用数学</el-menu-item>
            </el-sub-menu>
             <el-sub-menu index="8">
            <template #title>
               <font-awesome-icon icon="ship"  style="margin-right: 15px;margin-left: 3px;" />
              <span>商船学院</span>
            </template>
              <el-menu-item index="/file-list">航海技术</el-menu-item>
              <el-menu-item index="/file-list">轮机工程</el-menu-item>
              <el-menu-item index="/file-list">船舶电子电气工程</el-menu-item>
              <el-menu-item index="/file-list">能源与动力工程</el-menu-item>
            </el-sub-menu>
             <el-sub-menu index="9">
            <template #title>
               <font-awesome-icon icon="truck"  style="margin-right: 15px;margin-left: 3px;" />
              <span>交通运输学院</span>
            </template>
              <el-menu-item index="/file-list">交通工程</el-menu-item>
              <el-menu-item index="/file-list">交通运输</el-menu-item>
              <el-menu-item index="/file-list">物流管理</el-menu-item>
              <el-menu-item index="/file-list">交通管理(国航)</el-menu-item>
            </el-sub-menu>
             
            <el-sub-menu index="10">
            <template #title>
               <font-awesome-icon icon="coins"  style="margin-right: 15px;margin-left: 3px;" />
              <span>经济管理学院</span>
            </template>
              <el-menu-item index="/file-list">经济学(海运与物流经济)</el-menu-item>
              <el-menu-item index="/file-list">金融学(海运金融)</el-menu-item>
              <el-menu-item index="/file-list">国际经济与贸易</el-menu-item>
              <el-menu-item index="/file-list">会计学</el-menu-item>
              <el-menu-item index="/file-list">财务管理</el-menu-item>
              <el-menu-item index="/file-list">工商管理</el-menu-item>
              <el-menu-item index="/file-list">供应链管理</el-menu-item>
              <el-menu-item index="/file-list">管理科学</el-menu-item>
              <el-menu-item index="/file-list">大数据管理与应用</el-menu-item>

            </el-sub-menu>
            <el-sub-menu index="11">
            <template #title>
               <font-awesome-icon icon="robot"  style="margin-right: 15px;margin-left: 3px;" />
              <span>物流工程学院</span>
            </template>
              <el-menu-item index="/file-list">机械设计制造及其自动化</el-menu-item>
              <el-menu-item index="/file-list">机械电子工程(物流装备控制与安全)</el-menu-item>
              <el-menu-item index="/file-list">工业工程</el-menu-item>
              <el-menu-item index="/file-list">物流工程</el-menu-item>
              <el-menu-item index="/file-list">电气工程及其自动化</el-menu-item>
               <el-menu-item index="/file-list">自动化</el-menu-item>
                <el-menu-item index=indexall>测控技术与仪器</el-menu-item>
            </el-sub-menu>
           
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
import { Document, InfoFilled, Reading, SwitchButton } from '@element-plus/icons-vue'
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

const indexall = "/file-list";
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

.el-menu-vertical-demo .el-menu-item 
{
  color: #ccc0c0;
}
.el-sub-menu .el-sub-menu__title span {
  color: #c0c4cc; 
}
.el-sub-menu .el-sub-menu__title .el-icon{
   color: #c0c4cc; 
}
.el-sub-menu .el-sub-menu__title svg[data-icon] {
  color: #c0c4cc;
}

.el-menu-vertical-demo .el-menu-item.is-active
{
  background-color: #409eff;
  color: #fff;
}

.el-menu-vertical-demo .el-menu-item:hover {
  background-color: #383838;
}
.el-sub-menu .el-sub-menu__title :hover {
  color: #383838; 
}


.el-menu-vertical-demo .el-sub-menu .el-menu-item {
  background-color: #252525 !important; 
  min-width: auto;
}

.el-menu-vertical-demo .el-sub-menu .el-menu-item:hover {
  background-color: #2e2e2e !important; 
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
