import Vue from "vue";
import lineClamp from "vue-line-clamp";
// Plugins
import VueClipboard from "vue-clipboard2";

// Vue
import VueExpandableImage from "vue-expandable-image";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Plugin declaration
Vue.use(VueClipboard);

Vue.use(VueExpandableImage);

Vue.use(lineClamp, {
  textOverflow: "-",
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
