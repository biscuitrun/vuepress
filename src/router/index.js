import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/player",
    name: "player",
    component: () =>
      import(/* webpackChunkName: "player" */ "../views/player")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
