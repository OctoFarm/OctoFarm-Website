<template>
  <div>
    <v-parallax
      height="600"
      src="~@/assets/images/octofarm-splash.png"
      lazy-src="~@/assets/images/octofarm-splash.png"
      class="mb-5"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
          lg="12"
          md="12"
        >
          <h1
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="display-4 font-weight-thin mb-4 d-inline-flex"
          >
            Octo
          </h1>
          <h1
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="display-4 font-weight-bold mb-4 d-inline-flex"
          >
            Farm
          </h1>
          <h3
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="subheading font-weight-regular"
          >
            OctoFarm is a single pane of glass that combines multiple OctoPrint instances into a single interface.
          </h3>
          <h4
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="font-weight-light mt-3"
          >
            A free and open source makers farm management software originally created by James Mackay
          </h4>
          <v-btn
            class="mt-5"
            color="secondary"
            href="https://docs.octofarm.net/getting-started/"
          >
            Getting Started
          </v-btn><br>
          <v-btn
            class="mt-5"
            color="secondary"
            href="https://github.com/OctoFarm/OctoFarm/releases"
          >
            Latest Release: {{ octofarmLatestVersion }}
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col>
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col
              v-for="news in latestNews"
              :key="news.title"
              xs="12"
              sm="12"
              md="4"
              lg="3"
              xl="3"
            >
              <v-alert
                border="left"
                colored-border
                color="secondary"
                class="ma-2"
                elevation="2"
              >
                <v-row
                  align="center"
                  class="pl-2"
                >
                  <v-col class="grow text-truncate">
                    {{ news.title }}
                  </v-col>
                  <v-col class="shrink">
                    <v-btn
                      small
                      block
                      color="primary"
                      :to="rewriteBlogUrl(news.slug)"
                    >
                      More Info!
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row
                  align="center"
                  class="pl-2"
                >
                  <v-col>
                    <p
                      class="text-wrap"
                      v-line-clamp:20="2"
                    >
                      {{ news.excerpt }}
                    </p>
                  </v-col>
                </v-row>
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-container class="pa-0">
          <v-card class="mb-5 pa-10">
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                class="text-center"
                cols="12"
                lg="12"
                md="12"
              >
                <v-card-title class="d-inline-flex">
                  What is OctoFarm?
                </v-card-title>

                <v-card-text>
                  OctoFarm is a single pane of glass that combines multiple OctoPrint instances into a single interface.
                  It utilises the OctoPrint API and websocket systems to allow you to monitor and manage all of your 3d printer farm.
                  OctoFarm brings together a large feature set from OctoPrint and also many of it's own rolled on top that help makers running an
                  OctoPrint 3D printer farm to get full control from a single place. Check out the About page for more information on area's and features.
                </v-card-text>
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                v-for="v in what_octofarm"
                :key="v.title"
                cols="12"
                lg="4"
                md="6"
              >
                <v-card
                  class="text-center"
                  elevation="0"
                >
                  <v-icon
                    size="100"
                    color="secondary"
                  >
                    {{ v.icon }}
                  </v-icon><br>
                  <v-card-title class="d-inline-flex">
                    {{ v.title }}
                  </v-card-title>

                  <v-card-text>
                    {{ v.message }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container class="pa-0">
          <v-card class="mb-5">
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                class="text-center pa-10"
                cols="12"
                lg="12"
                md="12"
              >
                <v-card-title class="d-inline-flex">
                  The Future of OctoFarm
                </v-card-title>

                <v-card-text>
                  OctoFarm is being actively developed all the time and
                  new features are always on the horizon. <br>
                  Some of those plans are listed below and already in the works.
                  <br>
                  Some of these features below require a sponsorship goal to be reached before I will work on them. More information on the sponsorship page!
                </v-card-text>
              </v-col>
            </v-row>
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                v-for="v in soon_octofarm"
                :key="v.title"
                cols="12"
                lg="4"
                md="6"
              >
                <v-card
                  class="text-center"
                  elevation="0"
                >
                  <v-icon
                    size="100"
                    color="secondary"
                  >
                    {{ v.icon }}
                  </v-icon><br>
                  <v-card-title class="d-inline-flex">
                    {{ v.title }}
                  </v-card-title>

                  <v-card-text>
                    {{ v.message }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { rewriteBlogUrl } from "@/utils/helpers.utils";
import { getLatestBlogPostsList } from "@/utils/ghost-api.utils";

export default {
  async beforeMount() {
    this.latestNews = await this.getLatestBlogPostsList({ limit: 4, include: "authors" });
  },
  computed: {
    octofarmLatestVersion() {
      if (this.$store.state?.statistics?.githubInformation?.octoFarmVersion) {
        return this.$store.state.statistics.githubInformation.octoFarmVersion;
      }
      return "1.1.13-hotfix";
    },
  },
  methods: {
    getLatestBlogPostsList,
    rewriteBlogUrl,
  },
  data: () => ({
    tab: null,
    latestNews: [],
    what_octofarm: [
      {
        icon: "mdi-source-branch",
        title: "100% FREE AND OPEN SOURCE",
        message: "All source code is available to check out and you get the entire feature set for free! Data is stored locally and the only reason OctoFarm"
          + " needs to connect to the internet is updates and supplemental data. OctoFarm does not collect ANY data on it's users.",
      },
      {
        icon: "mdi-monitor-dashboard",
        title: "MANAGEMENT",
        message: "Administrator users can manage just about ever aspect of their OctoPrint installations from OctoFarm. It allows plugin and octoprint updating as well as installation, disabling and uninstalling of them on mass. Printers can also be edited, added and removed in the same manor.",
      },
      {
        icon: "mdi-eye-circle",
        title: "MONITORING",
        message: "Keep an eye your entire farm from a selection of views that can be disabled or enabled if you don't use them yourself. Octofarm also allows for bulk setting up of printers to bring them all online at once, then fire off multiple prints to them to get a big b"
          + "atch job started all in one go!",
      },
      {
        icon: "mdi-history",
        title: "HISTORY",
        message: "Keep a complete log of everything that goes on in your farm, from errors to completed and successful prints. OctoFarm also allows you to capture a finished print webcam image, printer thumbnails support through OctoPrint plugins and also timelapse capture.",
      },
      {
        icon: "mdi-file-document-multiple-outline",
        title: "FILE MANAGER",
        message: "Quickly switch and manage all your printers file lists across your farm. You can upload to multiple printers at once, and keep your files clean with various date based house keeping functionality.",
      },
      {
        icon: "mdi-movie-roll",
        title: "FILAMENT MANAGER",
        message: "Keep track of your spool inventory and assign to print jobs in a very flexible manor. Only care about filament type and not individual spools? OctoFarm allows for this and much more granular management of your spools",
      },
    ],
    soon_octofarm: [
      {
        icon: "mdi-file-document-multiple-outline",
        title: "FILE MANAGER",
        message: "Brand new file manager for all of your gcode needs. As well as pulling from all of your OctoPrint instances, as is currently available, OctoFarm will now store your files in a single location and manage pushing the files when required to your printer.",
      },
      {
        icon: "mdi-printer-3d-nozzle-outline",
        title: "MORE PRINTER INTERFACES",
        message: "Do you use DWC2, Klipper Moonraker API, mariner or Repitier? OctoFarm will eventually support all these and more whilst keeping integration throughout the rest of OctoFarms features.",
      },
      {
        icon: "mdi-warehouse",
        title: "STOCK MANAGER",
        message: "Filament Manager is getting retired... don't worry, you can port all your spools to the new one! Stock Manager will allow the management of Spools, Suppliers, Resin keeping track of all these across your farm. ",
      },
      {
        icon: "mdi-view-dashboard-outline",
        title: "MODULAR DEVELOPMENT",
        message: "With OctoFarm beginning it's time as a learning project for the developer it has a lot of bad practices and other's stopping the Open Source community easily jumping in and adding features. This will change with a full modular refactor of the backend. ",
      },
      {
        icon: "mdi-printer-3d",
        title: "PRINT SCHEDULER",
        message: "This is what OctoFarm was made to do, and what has been in the works for a while. Plan prints across your whole farm with a few clicks of a button. Got a massive order to get out and need all available printers on it? Done...",
      },
      {
        icon: "mdi-camera-iris",
        title: "RTSP STREAMING SUPPORT",
        message: "This will allow OctoFarm to take in RTSP streams and display them as your camera feed, you can completely bypass OctoPrint if you want or use both camera's on your printer.",
      },
    ],
  }),
};
</script>
