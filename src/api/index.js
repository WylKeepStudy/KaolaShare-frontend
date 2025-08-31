import * as auth from './auth'
import * as user from './user'

//为了方便在其他地方调用 API，我们创建一个 src/api/index.js，将所有模块统一导出
//这样，我们只需在需要的地方导入 api 即可
export default {
  auth,
  user
}

