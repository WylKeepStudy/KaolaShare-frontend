<template>
  <div class="auth-page-wrapper">
    <div class="auth-card">
      <h2 class="auth-title">登录考拉快跑</h2>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="auth-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable>
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="handleLogin" class="auth-submit-btn">
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <div class="auth-link-area">
        <router-link to="/register" class="auth-link">没有账号？立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus' // 导入ElementPlus消息组件
import { User, Lock } from '@element-plus/icons-vue' // 导入图标
import api from '@/api' // 导入API模块

const router = useRouter()
const loginFormRef = ref(null) // 表单实例引用
const loading = ref(false) // 登录按钮加载状态

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度为2-20个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ]
})

const handleLogin = () => {
  loginFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        const loginRes = await api.auth.login(loginForm) // 调用封装好的login方法
        console.log('登录成功响应:', loginRes)
        if (loginRes.code === 200) {
          ElMessage.success('登录成功！')
          localStorage.setItem('token', loginRes.data.token) // 存储 JWT token
          localStorage.setItem('username', loginRes.data.username) // 存储用户名
          router.push({ name: 'about' }) // 登录成功后跳转到首页
        } else {
          ElMessage.error(loginRes.msg || '登录失败！')
        }
      } catch (error) {
        console.error('登录失败:', error)
        ElMessage.error(error.msg || '登录失败，请检查用户名或密码！')
      } finally {
        loading.value = false
      }
    } else {
      return false
    }
  })
}
</script>

<style scoped>
.auth-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(@/assets/images/login-bg.jpg); 
  background-size: cover;
  background-position: center;
}

.auth-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 400px; /* 调整卡片宽度 */
  text-align: center;
}

.auth-title {
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
}

.auth-form .el-form-item {
  margin-bottom: 25px;
}

.auth-submit-btn {
  width: 100%;
  height: 45px;
  font-size: 16px;
  letter-spacing: 2px;
}

.auth-link-area {
  margin-top: 20px;
  font-size: 14px;
}

.auth-link {
  color: #409eff;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}
</style>
