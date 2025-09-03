import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Auth/LoginPage.vue"),
      meta: { title: "登录 - 考拉快跑" },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Auth/RegisterPage.vue"),
      meta: { title: "注册 - 考拉快跑" },
    },

    {
      path: "/",
      name: "main-layout",
      component: () => import("@/components/layout/AppLayout.vue"), // 主应用布局组件
      meta: { requiresAuth: true },
      children: [
        {
          path: "", // 默认子路由
          name: "home",
          redirect: "/about",
          meta: { title: "主页 - 考拉快跑" },
        },
        {
          path: "about",
          name: "about",
          component: () => import("@/views/Home/AboutPage.vue"),
          meta: { title: "关于 - 考拉快跑" },
        },
        {
          path: "file-list",
          name: "file-list",
          component: () => import("@/views/Home/HomePage.vue"),
          meta: { title: "文件列表 - 考拉快跑" },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundPage.vue"),
      meta: { title: "404 - 页面未找到" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "考拉快跑 - 资料共享计划";
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
