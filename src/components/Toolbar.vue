<template>
  <span>
    <v-app-bar
      dense
    >
      <v-app-bar-nav-icon
        align="center"
      >
        <v-img
          width="50"
          src="~@/assets/images/logo.png"
        />
      </v-app-bar-nav-icon>
      <v-tabs
        dense
        class="ml-2"
      >
        <v-tab
          class="hidden-sm-and-down"
          v-for="(nav, i) in navigation"
          :key="i"
          :to="nav.path"
        >{{ nav.name }}</v-tab>
      </v-tabs>
      <div class="text-center d-inline-flex">
        <v-btn
          icon
          color="primary"
          href="https://status.octofarm.net"
          target="_blank"
        >
          <v-icon>mdi-server</v-icon>
        </v-btn>
        <div class="text-center d-inline-flex">
          <v-btn
            icon
            color="primary"
            href="https://github.com/OctoFarm/OctoFarm"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            icon
            color="primary"
            href="https://www.youtube.com/c/OctoFarm"
            target="_blank"
          >
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </div>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
          right
        />
      </div></v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list dense>
        <v-list-item
          v-for="(nav, i) in navigation"
          :key="i"
          :to="nav.path"
        >
          <v-list-item-content>
            <v-list-item-title>{{ nav.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </span>
</template>

<script>

export default {
  name: "Toolbar",
  components: { },
  data: () => ({
    navigation: null,
    drawer: null,
    menu_reload_key: 0,
  }),
  beforeMount() {
    // Pull in navigation from routes and load into DOM
    this.navigation = this.$router.options.routes.filter((x) => x.name);
  },
};
</script>
