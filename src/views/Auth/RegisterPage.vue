<template>
  <div class="auth-page-wrapper">
    <div class="auth-card">
      <h2 class="auth-title">注册考拉快跑</h2>
      <el-form :model="registerForm" :rules="rules" ref="registerFormRef" class="auth-form">
        <el-form-item>
          <div class="avatar-upload-area" @click="openAvatarUpload">
            <el-avatar :size="80" :src="registerForm.avatarUrl || defaultAvatar" />
            <el-icon class="upload-icon"><Camera /></el-icon>
            <input type="file" ref="avatarInput" @change="handleAvatarChange" style="display: none;" accept="image/*" />
          </div>
          <p class="avatar-tip"></p>
        </el-form-item>

        <el-form-item prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入用户名" clearable>
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" type="password" placeholder="请输入密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请确认密码" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="handleRegister" class="auth-submit-btn">
            立即注册
          </el-button>
        </el-form-item>
      </el-form>
      <div class="auth-link-area">
        <router-link to="/login" class="auth-link">已有账号？立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElLoading } from 'element-plus'
import { User, Lock, Camera } from '@element-plus/icons-vue' // 导入图标
import request from '@/utils/request' // 导入我们封装的 request.js
import api from '@/api' // 导入API模块

const router = useRouter()
const registerFormRef = ref(null)
const avatarInput = ref(null) // 文件输入框的引用
const loading = ref(false)
const defaultAvatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c264629c608c0ad1wrap.png' // Element Plus默认头像

const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  avatarUrl: '' // 上传成功后存储头像URL
})

// 自定义密码确认校验规则
const validateConfirmPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerForm.password) {
    callback(new Error('两次输入的密码不一致！'))
  } else {
    callback()
  }
}

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度为2-20个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: validateConfirmPassword, trigger: 'blur' }
  ]
})

// 点击头像区域，打开文件选择框
const openAvatarUpload = () => {
  avatarInput.value.click()
}

// 处理头像文件选择
const handleAvatarChange = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const isJPGPNG = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPGPNG) {
    ElMessage.error('上传头像图片只能是 JPG/PNG 格式!')
    return false
  }
  if (!isLt2M) {
    ElMessage.error('上传头像图片大小不能超过 2MB!')
    return false
  }

  const formData = new FormData()
  formData.append('file', file)

  const loadingInstance = ElLoading.service({ fullscreen: true, text: '头像上传中...' });
  try {
    // 调用后端头像上传API
    const uploadRes = await request.post('/file/upload/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('头像上传成功:', uploadRes.data)
    if (uploadRes.code === 200) {
      registerForm.avatarUrl = uploadRes.data // 将返回的URL存储
      ElMessage.success('头像上传成功！')
    } else {
      ElMessage.error(uploadRes.msg || '头像上传失败！')
    }
  } catch (error) {
    console.error('头像上传失败:', error)
    ElMessage.error(error.msg || '头像上传失败，请重试！')
  } finally {
    loadingInstance.close();
  }
}


const handleRegister = () => {
  registerFormRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        const registerPayload = {
          username: registerForm.username,
          password: registerForm.password,
          avatarUrl: registerForm.avatarUrl || null
        }
        const registerRes = await api.auth.register(registerPayload) // 调用封装好的register方法
        console.log('注册成功响应:', registerRes)
        if (registerRes.code === 200) {
          ElMessage.success('注册成功！请前往登录页面。')
          router.push({ name: 'login' })
        } else {
          ElMessage.error(registerRes.msg || '注册失败！')
        }
      } catch (error) {
        console.error('注册失败:', error)
        ElMessage.error(error.msg || '注册失败，请检查信息！')
      } finally {
        loading.value = false
      }
    } else {
      ElMessage.warning('请填写完整的注册信息！')
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
  width: 400px;
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

.avatar-upload-area {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 15px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #dcdfe6;
}

.avatar-upload-area:hover {
  border-color: #409eff;
}

.avatar-upload-area .upload-icon {
  position: absolute;
  font-size: 24px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 8px;
  opacity: 0;
  transition: opacity 0.3s;
}

.avatar-upload-area:hover .upload-icon {
  opacity: 1;
}

.avatar-tip {
  font-size: 12px;
  color: #909399;
  margin-top: -10px;
  margin-bottom: 20px;
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
