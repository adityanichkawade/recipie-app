import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import View from "../components/View.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/recipie/:id", component: View },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
