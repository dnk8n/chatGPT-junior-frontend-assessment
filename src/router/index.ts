import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Coffee from "../components/Coffee.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:coffee",
    name: "Coffee",
    component: Coffee,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;