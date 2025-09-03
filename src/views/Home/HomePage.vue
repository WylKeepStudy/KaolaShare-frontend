<template>
  <div class="page-content-wrapper">
    <div>
      <p class="home-page-title">文件列表</p>
      <el-input
        v-model="input1"
        style="width: 256px"
        size="large"
        placeholder="搜索一下试试？"
        :suffix-icon="Search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </el-input>

      <div class="block"></div>
      <el-button type="primary" class="uoload-button">
        我要做贡献！<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
      <el-button type="primary" class="download-buttton">
        下载<el-icon class="el-icon--right"><Download /></el-icon>
      </el-button>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="70" label="序号" align="center" />
        <!-- 第 1 列：fileName -->
        <el-table-column label="文件名" width="400" align="center">
          <template #default="scope">{{ scope.row.flieName }}</template>
        </el-table-column>

        <!-- 第 2 列：Name -->
        <el-table-column
          property="name"
          label="贡献用户"
          width="200"
          align="center"
        />

        <!-- 第 3 列：format -->
        <el-table-column property="format" label="格式" align="center" />

        <!-- 第 4 列：选择框 -->
        <el-table-column type="selection" width="55" />
      </el-table>
    </div>

    <div class="pagination-block">
      <div class="demonstration"></div>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<!-- <script setup>
// HomePage.vue 仅展示文件列表内容，不包含布局

</script> -->
<script setup>
import { ref } from "vue";
const tableData = ref([
  {
    flieName: "计算机",
    name: "张三",
    format: "pdf",
  },
  { flieName: "计算机网络", name: "李四", format: "pdf" },
  { flieName: "数据结构", name: "李四", format: "pdf" },
]);
</script>
<style scoped>
.page-content-wrapper {
  padding: 20px;
  /* text-align: center; */
}
.home-page-title {
  font-family: Roboto;
  font-size: 30px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;

  text-align: left;
}
.uoload-button {
  /* 自动布局子元素 */
  position: absolute;
  right: 100px;
  top: 55px;
  width: 200px;
  height: 36px;
  opacity: 1;

  font-family: Alimama ShuHeiTi;
  font-size: 22px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0em;

  /* 中性色板/Text/colorTextLightSolid */
  color: #ffffff;

  z-index: 1;
}
.download-buttton {
  /* 自动布局子元素 */
  position: absolute;
  right: 0px;
  top: 55px;
  width: 81px;
  height: 36px;
  opacity: 1;

  font-family: Alimama ShuHeiTi;
  font-size: 22px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0em;

  /* 中性色板/Text/colorTextLightSolid */
  color: #ffffff;

  z-index: 1;
}
.block {
  height: 22px;
}
.pagination-block {
  margin-top: 20px;

  display: flex;
  justify-content: center;
}
</style>
