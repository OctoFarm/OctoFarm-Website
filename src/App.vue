<template>
  <v-app>
    <Toolbar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container
        fluid
        class="pa-0"
      >
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "octofarm.net",
  hashMode: false,
  trackLocalhost: false,
});

plausible.enableAutoPageviews();

export default Vue.extend({
  name: "App",
  components: { Toolbar, Footer },
  data: () => ({
    social_media: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/OctoFarm",
        icon: "mdi-facebook",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UClQWO3lxmQRreJVpjTrxELA",
        icon: "mdi-youtube",
      },
    ],
    community: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/OctoFarm",
        icon: "mdi-facebook",
      },
      {
        name: "Discord",
        link: "https://discord.gg/vjabMUn",
        icon: "mdi-discord",
      },
      {
        name: "Github Discussions",
        link: "https://github.com/NotExpectedYet/OctoFarm/discussions",
        icon: "mdi-github",
      },

    ],
  }),
});
</script>
<style>

main {
  background-color: #222;
  background-attachment: fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
</style>
