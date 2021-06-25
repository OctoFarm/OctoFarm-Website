<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container class="pa-0 mt-5">
          <v-card
            class="mb-5"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                lg="9"
                md="6"
                sm="12"
              >
                <v-img src="~@/assets/screenshots/dashboard.png" />
              </v-col>
              <v-col
                lg="3"
                md="6"
                sm="12"
                class="text-center"
              >
                <v-card-title class="d-inline-flex">
                  About OctoFarm
                </v-card-title>
                <v-card-text class="font-weight-thin">
                  OctoFarm was created to fill a need anyone using OctoPrint
                  with multiple printers will have run into...
                  How do I manage all this from one place!?
                  That's where OctoFarm steps in, due to it's server
                  based architecture it allows for constant monitoring
                  over your farm and a web interface to manage whenever you want.
                </v-card-text>
                <v-card-text class="font-weight-thin">
                  OctoFarm is being actively developed by James Mackay, founder
                  of NotExpectedYet. OctoFarms development is currently a passion project
                  and is worked on around his 9-5 job, GSD and Wife so if you've like to
                  give something back to James for his work the please check out the
                  Sponsorship page.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
        <v-container class="pa-0 mt-5">
          <v-card
            class="mb-5 text-center"
          >
            <v-tabs
              fixed-tabs
              v-model="tab"
              icons-and-text
              show-arrows
              centered
              origin="top center 0"
            >
              <v-tab
                v-for="area in about_octofarm"
                :key="area.tab"
              >
                {{ area.title }}
                <v-icon>{{ area.icon }}</v-icon>
              </v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="tab"
            >
              <v-tab-item
                v-for="area in about_octofarm"
                :key="area.tab"
              >
                <v-card flat>
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col
                      lg="3"
                      md="6"
                      sm="12"
                      class="text-center"
                    >
                      <v-card-title class="d-inline-flex">
                        {{ area.title }}
                      </v-card-title>
                      <v-card-text class="font-weight-thin">
                        {{ area.description_1 }}
                      </v-card-text>
                      <v-card-text class="font-weight-thin">
                        {{ area.description_2 }}
                      </v-card-text>
                    </v-col>
                    <v-col
                      lg="9"
                      md="6"
                      sm="12"
                    >
                      <v-img :src="get_img_url(area.image_url)" />
                    </v-col>
                  </v-row>
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col
                      v-for="feat in area.features"
                      :key="feat.title"
                      lg="4"
                      md="6"
                      sm="12"
                      class="text-center"
                    >
                      <v-img
                        :src="get_img_url(feat.img_url)"
                        class="ma-5"
                      />
                      <v-card-title class="d-inline-flex">
                        {{ feat.title }}
                      </v-card-title>
                      <v-card-text class="font-weight-thin">
                        {{ feat.description }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-container>
        <v-container class="pa-0 mt-5">
          <v-card
            class="mb-5"
          >
            <v-card-title class="mb-5 justify-center">
              OctoFarms History
            </v-card-title>
            <v-card-text>
              <v-timeline
                align-top
                dense
              >
                <v-timeline-item
                  v-for="(map, i) in history_map"
                  :key="i"
                  :color="map.color"
                  small
                >
                  <span
                    :class="`headline font-weight-bold primary--text`"
                    v-html="map.version"
                  /><br>

                  <span
                    :class="`headline font-weight-bold secondary--text`"
                    v-html="`Released: ${map.date}`"
                  />
                  <v-list
                    v-for="feat in map.features"
                    :key="feat.title"
                    class="text-left"
                  >
                    <span v-if="feat.title">
                      <v-list-item dense>
                        <v-list-item-content>
                          <v-list-item-title v-html="feat.title" />
                          <v-list-item-subtitle
                            class="font-weight-thin"
                            v-html="feat.description"
                          />
                        </v-list-item-content>

                      </v-list-item>
                      <v-divider />
                    </span>
                    <span v-else>
                      <v-list-item>
                        <v-list-item-content>
                          <div class="py-1">
                            <h2 :class="`font-weight-light mb-0 primary--text`">
                              {{ map.release }}
                            </h2>
                          </div>
                          <v-list-item-content class="font-weight-thin"> {{ feat.description }}</v-list-item-content>
                        </v-list-item-content>

                      </v-list-item>

                    </span>
                  </v-list>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    tab: null,
    about_octofarm: [
      {
        tab: "one",
        title: "Printer Manager",
        icon: "mdi-printer-3d",
        description_1: "An area designed to allow you full control over adding/removing/editing/managing printers on your farm.",
        description_2: "Take full control of your farm with the bulk actions, quickly bring online a batch of printers and get some prints started.",
        image_url: "printemanager",
        features: [
          {
            title: "Printer Administration",
            description: "Manage your farm right down to each individual printer. Quickly add/remove a new bank of printers with the Add / Import / Delete buttons. You can also bulk edit your printers for any network/settings changes.",
            img_url: "printermanager-admin",
          },
          {
            title: "Printer Management",
            description: "Each printer get's a host of options for further control and management. You can set maintenance alerts, view individual printer statistics, see printer logs and edit your OctoPrint settings",
            img_url: "printermanager-manage",
          },
          {
            title: "Bulk Actions",
            description: "Bring a whole section of your farm online and ready to print with the click of a button. Currently allows you to connect/disconnect (OctoPrint -> Printer) and also Re-Scan (refresh OctoFarm -> OctoPrint connection) your OctoPrint instances.",
            img_url: "printermanager-bulk",
          },
        ],
      },
      {
        tab: "two",
        title: "Dashboard",
        icon: "mdi-desktop-mac-dashboard",
        description_1: "A customisable overview of your entire farm with a wide selection of elements to choose from.",
        description_2: "Quickly see your farms current print statistics, printer states and even your farms environment history all on a single page. Great for a large screen display.",
        image_url: "dashboard",
        features: [
          {
            title: "Customise your view",
            description: "Customise your view",
            img_url: "dashboard-custom",
          },
          {
            title: "Disable/Enable Elements\n",
            description: "Choose which elements you feel are most important for your dashboard by disabling the ones you don't need.",
            img_url: "dashboard-settings",
          },
        ],
      },
      {
        tab: "three",
        title: "Monitoring",
        icon: "mdi-eye-circle",
        description_1: "Keep an eye on your entire farm at once whilst retaining controls over each individual printer.",
        description_2: "Choose between various views to better suit your individual farm needs. No camera's on your farm? No problem, OctoFarm reacts to your OctoPrint camera settings so you don't waste resources on what's not needed.",
        image_url: "views",
        features: [
          {
            title: "List View",
            description: "This view will display all your printers in an organised list, perfect for those camera-less farms.",
            img_url: "listview",
          },
          {
            title: "Camera View",
            description: "This view is a camera monitoring station for your printers. You can customise the camera rows and view many streams at once.",
            img_url: "cameraview",
          },
          {
            title: "Panel View",
            description: "This view is a kind of combination of the previous two views. It will show your camera if available and give you more refined controls over prints.",
            img_url: "panelview",
          },
          {
            title: "Current Operations View",
            description: "",
            img_url: "printemanager",
          },
        ],
      },
      {
        tab: "four",
        title: "History",
        icon: "mdi-history",
        description_1: "A running log of every successful/cancelled/failed print across your entire farm.",
        description_2: "Drill down into individual prints or see statistics of a group of them using the available filters. You can also log notes and if available history will capture your file image from the Prusa/SuperSlicer/Cura stl preview plugins.",
        image_url: "history",
        features: [
          {
            title: "Filters",
            description: "Drill down and see updated statistics with the available history filters. Find a specific file, prints that used a certain spool or even drill down by folder which can be used to keep a group of prints together.",
            img_url: "history-filter",
          },
          {
            title: "Statistics",
            description: "Get an idea of your most printed file, most used spool or even automatically calculate your prints cost per hour.",
            img_url: "history-stats",
          },
          {
            title: "History Card",
            description: "Open up the history card to drill down into more specific print meta data and also update some of the fields. Allows you to add notes to your print for future reference.",
            img_url: "history-card",
          },
        ],
      },
      {
        tab: "five",
        title: "File Manager",
        icon: "mdi-file-code-outline",
        description_1: "Quickly switch between your OctoPrint file lists on every printer on your farm.",
        description_2: "Full management capabilities as well as drag/drop upload triggers, Multiple file Uploads to multiple printers at once and more.",
        image_url: "filemanager",
        features: [
          {
            title: "Printer Switching",
            description: "Quickly change between all the printers file lists on your farm and manage the files on each of these instances.",
            img_url: "filemanager-switch",
          },
          {
            title: "File Actions",
            description: "Manage your files with the file actions Sync, Start, Select, Move, Download and Delete all all currently available for each file. You can also Upload, Upload and Print, Create folders on your OctoPrint instance.",
            img_url: "filemanager-actions",
          },
          {
            title: "Multi-Upload / Print",
            description: "Got a large set of files that you need on a few different printers? Fire off multiple files to multiple printers with a few clicks. Uploading a single file? You have the options to print after upload is complete.",
            img_url: "filemanager-multi",
          },
        ],
      },
      {
        tab: "six",
        title: "Filament Manager",
        icon: "mdi-movie-roll",
        description_1: "Keep a track of all your manufacturers and spools and assign them to printers so they are logged and tracked by OctoFarm.",
        description_2: "Enhance your spool tracking with Filament Manager Plugin support on OctoPrint. Enabling this and syncing your OctoFarm instance with it will bring a whole host of extra information like cost/weight.",
        image_url: "filamentmanager",
        features: [
          {
            title: "Profiles Information",
            description: "OctoFarm splits your spools by Profiles. Profiles include the constants that are the same across every roll. Manufacturer, Material, Density and Diameter.",
            img_url: "filamentmanager-manufac",
          },
          {
            title: "Spool Information",
            description: "Spools are your individual spool, you can be as pedantic with this as you like. Track each individual one or just track it by colour / material type. Weight is only available whilst using the Filament Manager Plugin.",
            img_url: "filamentmanager-spool",
          },
          {
            title: "Statistics",
            description: "Get an overview of your filament statistics. See how much of a specific type you've got with the available filters for your spools.",
            img_url: "filamentmanager-stat",
          },
        ],
      },
      {
        tab: "seven",
        title: "System",
        icon: "mdi-cog",
        description_1: "Editable options to further tweak your OctoFarm instance.",
        description_2: "Includes client/server settings, setup Alerts for specific triggers in your farm, Basic management of OctoFarms database, Download OctoFarms logs and view system information about your instance.",
        image_url: "system",
        features: [
          {
            title: "Alerts",
            description: "Setup alerts that fire off to custom system scripts from triggers on your farm. You can use Print Done, Failed, Paused, Cooled and Error as triggers at the moment.",
            img_url: "system-alerts",
          },
          {
            title: "Settings",
            description: "Customise OctoFarms server and client settings to your liking. OctoFarm should work out of the box for most setups, but the option is there if required.",
            img_url: "system-settings",
          },
          {
            title: "Logs",
            description: "View and download all of OctoFarms system logs. They are split by function so you can investigate a specific area with ease.",
            img_url: "system-logs",
          },
        ],
      },
    ],
    history_map: [
      {
        date: "24/04/2021",
        version: "Version 1.1.13",
        release: "Push-up Party",
        features: [
          {
            description: "Staging release for some tasty improvements coming down the line for the packaging/running and managing of OctoFarm. Various bug fixes and finally an Automated Updater!",
          },
          {
            title: "New OctoFarm .env file",
            description: "Allows easily change your OctoFarm variables for database and port and gets rid of the age old config/db.js file.",
          },
          {
            title: "OctoFarm Log Dump",
            description: "A .zip file generator in system that allows easily packaging your OctoFarm Logs and System Information into a digestible octofarm_dump.zip file.",
          },
          {
            title: "Server Update Check and Command",
            description: "A server load now triggers OctoFarm to check for the latest releases and there's some new buttons in System to allow a user to trigger a check"
              + " as well as the update itself.",
          },
        ],
      },
      {
        date: "4/03/2021",
        version: "Version 1.1.12",
        release: "Hot off the presses bug fixes",
        features: [
          {
            description: "A quick cleanup release for some bugs that had slowly become apparent from user reports.",
          },
          {
            title: "Added a button to system to Restart OctoFarm.",
            description: "Just a simple button that allows you to action the restart of your service.",
          },
          {
            title: "Updated the pre-start script to use npm ci",
            description: "This keeps octofarms dependencies hopefully more in check compared to the previous attempts.",
          },
          {
            title: "Server restart commands don't silently fail.",
            description: "Improvements around the function OctoFarm uses to restart itself.",
          },
        ],
      },
      {
        date: "27/02/2021",
        version: "Version 1.1.11",
        release: "Printer statistics that make you go OOOO",
        features: [
          {
            description: "This release again brought a lot more bug fixes to crazy stuff happening in the backend and also brought the addition of a "
              + "Printer Statistics modal on Printer Management. That showed some cool individual stats pulled from all over OctoFarm focused more on "
              + "single printers. That was a feature request from my Patreon users some many moons ago so certainly happy to get that finally in the application.",
          },
          {
            title: "New Printer Statistics Button",
            description: "Pulls up, Daily, Weekly and All time statistics for your printer. Take a deeper dive into it's usage, failures and much more.",
          },
          {
            title: "Database export button",
            description: "Added the ability to pull out your entire database into .json format.",
          },
          {
            title: "Added a check against the usage of the Global API Key.",
            description: "This one was more for the developers and user requests in people adding the Global API Key to OctoFarm."
              + " Now checks against it and hard fails a connection attempt.",
          },
        ],
      },
      {
        date: "06/02/2021",
        version: "Version 1.1.10",
        release: "I don't drink but I sure code like I do",
        features: [
          {
            description: "This release fixes issues with some of the graphs and a heck of a lot more in the UI interface."
              + " Some regression bugs that had appeared in File Manager and other areas. Also managed to mess up the development"
              + "release numbers so we gracefully (drunkenly) skipped to number 10.",
          },
          {
            title: "New button in Printer Manager for Gcode Scripts",
            description: "Added the ability to store commonly used gcode scripts and push them to as many printers as you desired.",
          },
          {
            title: "Printer Control Flip setting",
            description: "Added a new button that focused the Printer Control modal more on the files rather than the temperature settings it had before.",
          },
        ],
      },
      {
        date: "24/01/2021",
        version: "Version 1.1.8",
        release: "This is a story not a mere graph!",
        features: [
          {
            description: "After a small survey done with some willing users I decided to tackle something they'd pointed out, and of course, I'd forgotten. Filament Manager! It was still stuck with those awful content editable fields and had no graphs or anything pretty."
              + " Time that changed, and whilst I was at it, some more graphs!",
          },
          {
            title: "Reflow of the Filament Manager UI",
            description: "Completely redid the filament manager UI, removed a lot of legacy code.",
          },
          {
            title: "New Charts in Filament Manager",
            description: "Two new charts in filament manager. Firstly a bar chart showing total usage by day of stacked types, so PET, PLA etc... Secondly 30 day running counter showing incremental filament usage by type. ",
          },
          {
            title: "New Chart in History",
            description: "New bulk printer actions. Allowing you to send Pre-Heat, Control or Gcode commands to a array of printers.",
          },
        ],
      },
      {
        date: "6/01/2021",
        version: "Version 1.1.7",
        release: "I can control everything!",
        features: [
          {
            description: "So this version was the marking of something new to OctoFarm. A user sponsored feature from a patreon called Scott. My plans for these types of features we're further down the line but these we're cool and much needed in OctoFarm."
              + " We got more additions to the bulk control section bringing more power to your farm.",
          },
          {
            title: "New Bulk Commands",
            description: "New bulk printer actions. Allowing you to send Pre-Heat, Control or Gcode commands to a array of printers.",
          },
        ],
      },
      {
        date: "20/12/2020",
        version: "Version 1.1.6",
        release: "Give me some managing for Christmas!",
        features: [
          {
            description: "OctoFarm is finally starting to take shape so it was time to bring in some new features and a few more quality of life improvements to the interface. Most notably the bulk control's that we're brought in. What OctoFarm was designed to enable!",
          },
          {
            title: "Speed and CPU Improvements",
            description: "Amazing isn't it, you clean up code snafu's and the program runs faster! These hit the client and the server together and we're welcomed by mobile users.",
          },
          {
            title: "New bulk controls in printer manager",
            description: "Brand new bulk controls for your printers allowing you to send Connect, Disconnect, Turn on requests to a whole batch.",
          },
          {
            title: "New meta for history",
            description: "History can now take a completed snapshot of your print, and also capture the timelapse OctoPrint produces.",
          },
          {
            title: "Export option to influxDB",
            description: "The beginnings of what became the printer selection modal now. Started out life just as the multi-upload printer select screen.",
          },
        ],
      },
      {
        date: "20/09/2020",
        version: "Version 1.1.5.7",
        release: "Dashboard customising and usability improvements",
        features: [
          {
            description: "This version whilst continuing the bug fixing theme focused on getting a more robust dashboard with customisation abilities. I was also learning from my mistakes, and also my users and putting checks in place for issues that we're constantly cropping up.",
          },
          {
            title: "Dashboard customising",
            description: "Added the ability for resizing and moving the dashboard panels into a custom configuration.",
          },
          {
            title: "Improvements to printer manager",
            description: "Printer manager got a connection log and some UI improvements regarding layout.",
          },
          {
            title: "Unified printer selection modal",
            description: "The beginnings of what became the printer selection modal now. Started out life just as the multi-upload printer select screen.",
          },
        ],
      },
      {
        date: "16/08/2020",
        version: "Version 1.1.5.6",
        release: "Dual Nozzling and Slashing CPU Usage",
        features: [
          {
            description: "OctoFarm is starting to take more shape now and supporting a lot more of OctoPrints features like dual nozzles and chambers."
              + " The back end got a nice refactor brining in some decent CPU drops as well. There was also the fun with OctoPrint changing from using the global API Key which is still somewhat of a knowledge issue for the user today. ",
          },
          {
            title: "Multiple Nozzle Support",
            description: "Finally OctoFarm now supports multiple nozzles on your printers.",
          },
          {
            title: "Chamber Support",
            description: "With the above also came support for Chambers.",
          },
          {
            title: "Filament Manager Plugin Support",
            description: "A personal request of my own, OctoFarm now syncs up with the Filament Manager Plugin.",
          },
          {
            title: "Client Initial Re-factor",
            description: "Took a lot of the heavy lifting off the client which dropped it's CPU significantly.",
          },
        ],
      },
      {
        date: "4/06/2020",
        version: "Version 1.1.5",
        release: "Oh... dashboard and printer manager shouldn't be together.",
        features: [
          {
            description: "Beginning to get it's foundations in place, this release saw the split of the old dashboard and printer manager combination. It also started utilising the database backend more and loggin statistics and other cool stuff.",
          },
          {
            title: "New Dashboard",
            description: "Dashboard get's it's own page with metrics.",
          },
          {
            title: "New Printer Manager",
            description: "Printer Manager split onto it's own page with metrics.",
          },
          {
            title: "New Statistics on most pages",
            description: "File Manager, History, Filament Manager and the System page all got bolstered with historical and current metrics. Basic at the time they we're.",
          },
          {
            title: "Re-Design of filament manager",
            description: "Filament Manager was re-designed to incorporate supplier / spool, as well as cost and other metrics.",
          },
          {
            title: "History Overhaul",
            description: "History get a large overhaul to include the new filament manager stuff.",
          },
          {
            title: "OctoPrint settings configuration and PSU Control Support",
            description: "Started allowing more control over your OctoPrint instance, and also supported my first plugin which was PSU Control.",
          },
          {
            title: "Alerts system which fires custom scripts",
            description: "Generated an alerts system that allows for the user to setup their own script. Can fire off to a multi-tude of services but was limited to power users.",
          },
        ],
      },
      {
        date: "4/04/2020",
        version: "Version 1.1.4",
        release: "Out of beta!",
        features: [
          {
            description: "This was the first stable release version of OctoFarm. It's also where I started getting myself in a pickle about versions numbers hence the rather large skip from 1.0 - 1.1.x",
          },
          {
            title: "Code clean ups",
            description: "Code clean ups so that the majority of reported bugs could be squashed for release.",
          },
          {
            title: "Printer organising",
            description: "Allowing you to organise the printer database with drag and drop on the dashboard/printer manager as it was back then.",
          },
        ],
      },
      {
        date: "12/03/2020",
        version: "Version 1.0-beta",
        release: "The beginnings of a full stack application",
        features: [
          {
            description: "OctoFarm originally started life as a single page application and this version was the first released as a full stack application package. It allowed me to bring in some great features and served as the stepping stone to getting hooked on development.",
          },
          {
            title: "Printer Database",
            description: "Centralised printer database allowing the access of your application without the limitations of the local version previous.",
          },
          {
            title: "History",
            description: "History loggin began here, the initial version captured print jobs and information.",
          },
          {
            title: "Filament Manager",
            description: "Basic Filament Manager implementation which allowed the input of spools and augmenting of the history data to refine it more.",
          },
        ],
      },
    ],
  }),
  methods: {
    get_img_url(screenshot) {
      const images = require.context("../assets/screenshots", false, /\.png$/);
      return images(`./${screenshot}.png`);
    },
  },
};
</script>
