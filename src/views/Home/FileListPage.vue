<template>
  <div class="file-list-page">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>文件列表</span>
          <div class="actions">
            <el-input
              v-model="keyword"
              placeholder="搜索文件名"
              clearable
              @keyup.enter="handleSearch"
              class="search-input"
            />
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-upload
              class="upload-demo"
              action=""
              :show-file-list="false"
              :auto-upload="false"
              :on-change="handleFileChange"
              :before-upload="beforeFileUpload"
            >
              <template #trigger>
                <el-button type="primary" class="upload-button">文件上传</el-button>
              </template>
            </el-upload>
          </div>
        </div>
      </template>

      <el-table
        v-loading="loading"
        :data="fileList"
        style="width: 100%"
        class="file-table"
        :empty-text="emptyText"
      >
        <el-table-column prop="fileName" label="文件名" min-width="150" />
        <el-table-column prop="contributorName" label="上传者" width="180" />
        <el-table-column prop="fileType" label="文件类型" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleDownload(scope.row)">
              下载
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination
          background
          layout="sizes, prev, pager, next"
          :total="total"
          :page-sizes="pageSizes"
          v-model:current-page="pageNum"
          v-model:page-size="pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, ElNotification } from 'element-plus';
import api from '@/api';

const route = useRoute();

const fileList = ref([]);
const loading = ref(false);
const emptyText = ref('暂无数据');
const departmentId = ref(null);
const keyword = ref('');

// 分页相关变量
const pageNum = ref(1);
const pageSize = ref(10); // 使用 ref
const total = ref(0);
const pageSizes = [10, 20, 50, 100]; // 定义每页数量选项

// 获取文件列表数据
const fetchFileList = async () => {
  if (!departmentId.value) {
    emptyText.value = '请选择一个系部';
    fileList.value = [];
    return;
  }
  
  loading.value = true;
  emptyText.value = '加载中...';

  try {
    const res = await api.file.getFileList({
      pageNum: pageNum.value,
      pageSize: pageSize.value, // 使用 ref.value
      departmentId: departmentId.value,
      keyword: keyword.value,
    });

    if (res.code === 200) {
      fileList.value = res.data.records;
      total.value = res.data.total;
      emptyText.value = '暂无数据';
    } else {
      ElMessage.error(res.msg || '获取文件列表失败');
      fileList.value = [];
      emptyText.value = '加载失败';
    }
  } catch (error) {
    console.error('获取文件列表请求失败:', error);
    fileList.value = [];
    emptyText.value = '网络错误';
  } finally {
    loading.value = false;
  }
};

// 处理搜索
const handleSearch = () => {
  pageNum.value = 1; // 搜索时重置页码为1
  fetchFileList();
};

// 处理页码变化
const handleCurrentChange = (newVal) => {
  pageNum.value = newVal;
  fetchFileList();
};

// 处理每页数量变化
const handleSizeChange = (newVal) => {
  pageSize.value = newVal;
  pageNum.value = 1; // 改变每页数量时重置页码为1
  fetchFileList();
};

// 处理文件下载
const handleDownload = async (row) => {
  try {
    const response = await api.file.downloadFile(row.id);

    const contentDisposition = response.headers['content-disposition'];
    const fileName = contentDisposition ? decodeURIComponent(contentDisposition.split('filename=')[1].replace(/"/g, '')) : row.fileName;

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
    ElMessage.success('下载成功');
  } catch (error) {
    console.error('文件下载失败:', error);
    ElMessage.error('下载失败，请稍后重试');
  }
};

// 处理文件选择
const handleFileChange = (file) => {
  if (!departmentId.value) {
    ElMessage.warning('请先选择一个系部再上传文件');
    return;
  }
  
  if (file.size > 20 * 1024 * 1024) {
    ElMessage.error('文件大小不能超过 20MB!');
    return;
  }
  
  uploadFile(file.raw);
};

// 在文件上传前进行校验
const beforeFileUpload = () => {
  if (!departmentId.value) {
    ElMessage.warning('请先选择一个系部再上传文件');
    return false;
  }
  return true;
};

// 上传文件
const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title', file.name);
  formData.append('departmentId', departmentId.value);
  
  try {
    const res = await api.file.uploadFile(formData);
    
    if (res.code === 200) {
      ElNotification({
        title: '成功',
        message: '文件上传成功',
        type: 'success',
      });
      fetchFileList();
    } else {
      ElMessage.error(res.msg || '文件上传失败');
    }
  } catch (error) {
    console.error('文件上传请求失败:', error);
  }
};

// 监听路由参数变化
watch(
  () => route.params.departmentId,
  (newId) => {
    if (newId) {
      // 确保参数为数字类型
      const parsedId = parseInt(newId, 10);
      if (!isNaN(parsedId)) {
        departmentId.value = parsedId;
        pageNum.value = 1;
        fetchFileList();
      }
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* 样式部分保持不变 */
.file-list-page {
  padding: 20px;
}

.box-card {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  width: 200px;
}

.upload-demo {
  display: inline-block;
}

.file-table {
  margin-top: 20px;
}

.el-button {
  font-weight: bold;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>