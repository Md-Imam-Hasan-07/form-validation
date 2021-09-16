import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store/index";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import SecurePage from "../views/UserList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SecurePage",
    component: SecurePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(to, from, next) {
      if (!store.state.isLoggedIn) {
        next();
      } else {
        next({ name: "SecurePage" });
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (!store.state.isLoggedIn) {
        next();
      } else {
        next({ name: "SecurePage" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-red-500",
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.isLoggedIn) {
    next();
  } else {
    next({ name: "Login" });
  }
});

export default router;
