import request from '@/utils/request';

/**
 * 获取文件列表 API
 * @param {object} params - 请求参数
 * @param {number} params.pageNum - 当前页码
 * @param {number} params.pageSize - 每页数量
 * @param {number} params.departmentId - 系部 ID
 * @param {string} [params.keyword] - 搜索关键词
 * @returns {Promise<any>}
 */
export function getFileList(params) {
  return request.get('/file/list', { params });
}

/**
 * 上传文件 API
 * @param {FormData} data - 上传的文件数据
 * @returns {Promise<any>}
 */
export function uploadFile(data) {
  return request.post('/file/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

/**
 * 下载文件 API
 * @param {number} fileId - 文件 ID
 * @returns {Promise<any>}
 */
export function downloadFile(fileId) {
  return request.get(`/file/download/${fileId}`, {
    responseType: 'blob',
  });
}
