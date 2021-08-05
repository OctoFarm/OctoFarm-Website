import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Sponsorship from "../views/Sponsorship.vue";
import TryItOut from "../views/TryItOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(Home),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(About),
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
      window.open(
        "https://docs.octofarm.net",
        "_blank",
      );
    },
  },
  {
    path: "/sponsorship",
    name: "Sponsorship",
    component: () => import(Sponsorship),
  },
  {
    path: "/merchandise",
    name: "Merchandise",
    beforeEnter() {
      window.open(
        "https://shop.spreadshirt.co.uk/octofarm-merchandise/all",
        "_blank",
      );
    },
  },
  {
    path: "/try",
    name: "Try It!",
    component: () => import(TryItOut),
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
