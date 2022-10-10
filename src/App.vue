<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container
        fluid
        class="pa-0"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
  }),
  created() {

  },
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
