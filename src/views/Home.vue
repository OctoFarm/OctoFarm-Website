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
            Web server and client combo for managing and monitoring multiple Octoprint instances.
          </h3>
          <h4
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="font-weight-light mt-3"
          >
            Originally created by James Mackay from NotExpectedYet
          </h4>
          <h4
            style="text-shadow: 1px 0 0 #331D5BFF, 0 -1px 0 #331D5BFF, 0 1px 0 #331D5BFF, -1px 0 0 #331D5BFF;"
            class="font-weight-light mt-3"
          >
            Co-Authored with the help of David Zwart
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
                  <v-col class="grow">
                    {{ news.title }}
                  </v-col>
                  <v-col class="shrink">
                    <v-btn
                      small
                      block
                      color="primary"
                      :href="rewriteBlogUrl(news.url)"
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
                    {{ news.excerpt }}
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
          <v-card class="mb-5">
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
                  OctoFarm is a web server and client combo for unifying multiple
                  instances of Octoprint.
                  You can manage and monitor as many instances as you want from
                  a single interface giving
                  you full control over your 3D printer farm.
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
                  Coming Soon to OctoFarm!
                </v-card-title>

                <v-card-text>
                  OctoFarm is being actively developed all the time and
                  new features are always on the horizon. Version 1.2
                  is currently in the works and will bring a whole host
                  of improvements to the platform.
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
import rewriteBlogUrl from "@/utils/url.utils";

export default {
  created() {
    this.getLatestBlogPosts();
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
    getLatestBlogPosts() {
      this.$store.state.ghostApi.posts
        .browse({ limit: 4, include: "authors" })
        .then((posts) => {
          posts.forEach((post) => {
            console.log(post);
            this.latestNews = posts;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    rewriteBlogUrl,
  },
  data: () => ({
    tab: null,
    latestNews: [],
    what_octofarm: [
      {
        icon: "mdi-source-branch",
        title: "100% FREE AND OPEN SOURCE",
        message: "All source code is available to check out and you get the entire feature set for free!",
      },
      {
        icon: "mdi-monitor-dashboard",
        title: "MANAGEMENT",
        message: "Manage and control every aspect of your OctoPrint run farm.",
      },
      {
        icon: "mdi-eye-circle",
        title: "MONITORING",
        message: "Keep an eye your entire farm from a selection of views.",
      },
      {
        icon: "mdi-history",
        title: "HISTORY",
        message: "Keep track of historical successful, failed or cancelled prints.",
      },
      {
        icon: "mdi-file-document-multiple-outline",
        title: "FILE MANAGER",
        message: "Quickly switch and manage all your printers file lists.",
      },
      {
        icon: "mdi-movie-roll",
        title: "FILAMENT MANAGER",
        message: "Keep track of your spool inventory and assign to print jobs.",
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
