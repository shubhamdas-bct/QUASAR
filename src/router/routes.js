const routes = [
  {
    path: "/login",
    component: () => import("src/login/Login.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/indexpage", component: () => import("src/pages/Dashboard.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/error/ErrorNotFound.vue"),
  },
];

export default routes;
