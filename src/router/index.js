import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import Blog from "../views/Blog.vue";
import SponsMerch from "../views/SponsMerch.vue";
import TryItOut from "../views/TryItOut.vue";
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
    path: "/documentation",
    name: "Documentation",
    beforeEnter() {
      window.location.href = "https://docs.octofarm.net";
    },
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
  {
    path: "/try",
    name: "Try It!",
    component: TryItOut,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = `OctoFarm | ${to.name}`;
  });
});

export default router;
