import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "page" */"../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "page" */"../views/About.vue"),
  },
  {
    path: "/blog/",
    name: "Blog",
    component: () => import(/* webpackChunkName: "page" */"../views/Blog.vue"),
  },
  {
    path: "/blog/:post_id",
    component: () => import(/* webpackChunkName: "page" */ "../components/Blog/Post.vue"),
  },
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
    component: () => import(/* webpackChunkName: "page" */"../views/Sponsorship.vue"),
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
    component: () => import(/* webpackChunkName: "page" */"../views/TryItOut.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = `OctoFarm | ${to.name ? to.name : "Blog"}`;
  });
});

export default router;
