<template>
  <div class="test-container">
    <h2>文件列表页面</h2>
    <p>当前获取到的系部 ID 是：</p>
    <p class="department-id-display">{{ departmentId }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 获取当前路由对象
const route = useRoute();

// 使用 computed 属性来获取路由参数，确保响应式
const departmentId = computed(() => {
  return route.params.departmentId;
});
</script>

<style scoped>
.test-container {
  padding: 20px;
  text-align: center;
  border: 1px dashed #ccc;
  border-radius: 8px;
  background-color: #fafafa;
}
.department-id-display {
  font-size: 32px;
  font-weight: bold;
  color: #409eff;
  margin-top: 20px;
}
</style>