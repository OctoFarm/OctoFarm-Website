import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import Blog from "../views/Blog.vue";
import SponsMerch from "../views/SponsMerch.vue";
import Installation from "../views/Installation.vue";
// import Wiki from "../views/Wiki.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: Blog,
  // },
  {
    path: "/installation",
    name: "Installation",
    component: Installation,
  },
  // {
  //   path: "/wiki",
  //   name: "Wiki",
  //   component: Wiki,
  // },
  {
    path: "/sponsorship",
    name: "Sponsorship",
    component: SponsMerch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
