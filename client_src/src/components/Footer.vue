<template>
  <v-footer
    flat
    class="lighten-1 white--text text-center"
  >
    <v-row>
      <v-col>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            align="center"
            justify="center"
          >
            <v-img
              max-width="150"
              src="~@/assets/images/logo.png"
            />
          </v-col>
          <v-col>
            <v-card-text class="white--text">
              OctoFarm is the work of James Mackay, a maker, built around his 9-5 job
              as an IT Manager.
              His aim is to build a one stop place for all your farm 3D printer farm
              management needs.
              Come join the OctoFarm community!
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <h3 class="white--text pt-0">
          Community
        </h3>
        <v-btn
          :href="icon.link"
          target="_blank"
          v-for="(icon, i) in community"
          :key="i"
          class="ma-4 white--text secondary"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
          {{ icon.name }}
        </v-btn>
      </v-col>
      <v-col>
        <h3 class="white--text">
          Social Media
        </h3>
        <v-btn
          :href="icon.link"
          target="_blank"
          v-for="(icon, i) in social_media"
          :key="i"
          class="ma-4 white--text secondary"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
          {{ icon.name }}
        </v-btn>
      </v-col>
    </v-row>

    <v-card-text class="white--text">
      © {{ new Date().getFullYear() }} Copyright — <strong>NotExpectedYet</strong>
      - <strong>OctoFarm</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  components: { },
  data: () => ({
    social_media: [
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UClQWO3lxmQRreJVpjTrxELA",
        icon: "mdi-youtube",
      },
    ],
    community: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/groups/octofarm",
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
