import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/login", component: Login },
  { path: "/", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
