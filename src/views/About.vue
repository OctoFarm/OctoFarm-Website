<template>
  <v-container>
    <v-row>
      <v-col>
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
                <v-card
                  class="ma-10"
                  flat
                >
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col
                      lg="3"
                      md="6"
                      cols="12"
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
                      cols="12"
                    >
                      <v-card
                        elevation="24"
                        class="mx-auto"
                      >
                        <v-carousel
                          :continuous="true"
                          :show-arrows="area.image_url.length > 1"
                          hide-delimiter-background
                          delimiter-icon="mdi-minus"
                        >
                          <v-carousel-item
                            v-for="(url, i) in area.image_url"
                            :key="i"
                          >
                            <expandable-image
                              v-if="url.length !== 0"
                              height="100%"
                              :aspect-ratio="16/9"
                              :src="get_img_url(url)"
                              class="ma-5"
                            />
                          </v-carousel-item>
                        </v-carousel>
                      </v-card>
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
                      cols="12"
                      class="text-center"
                    >
                      <expandable-image
                        v-if="feat.img_url.length !== 0"
                        :aspect-ratio="16/9"
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
                          <v-list-item-title
                            class="text-wrap"
                            v-html="feat.title"
                          />
                          <v-list-item-subtitle
                            class="text-wrap font-weight-thin"
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
        tab: "zero",
        title: "About",
        icon: "mdi-information",
        description_1: "OctoFarm was created to fill a need anyone using OctoPrint with multiple printers will have run into... "
          + "How do I manage all this from one place!?\n That's where OctoFarm steps in, due to it's server based architecture it "
          + "allows for constant monitoring over your farm and a web interface to manage whenever you want.",
        description_2: "OctoFarm was originally created by James Mackay, a complete a passion project, and is worked on around his "
          + "9-5 job, GSD and Wife so if you've like to give something back to James for his work the please check out the sponsorship page.",
        image_url: ["Dashboard", "PrinterManager", "SystemView"],
        features: [
          {
            title: "Active Developement",
            description: "OctoFarm is currently under active development and will hopefully be for a while. Whilst I'm a one man band and can't get to every "
              + "feature request or lofty enterprise system people want I will endeavour to keep the development rolling whenever I get spare time to work on the project."
             + " OctoFarm has become my baby, and my gift back to the makers community that I've enjoyed been a part of for over 6 years now and whilst I'm still constantly"
            + " learning about development and coding in general, I will always endevour to improve and continue my work on OctoFarm.",
            img_url: "ActiveDevelopment",
          },
          {
            title: "I Listen",
            description: "I listen to peoples requests, just some of them may take more time than I'm able to commit at the moment. Regardless, if I think a feature is worth the"
              + " effort I will lay the ground work as I work on other features. The absolute best way to discuss your wants is by opening a github discussion, I'm happy to flesh"
            + " out your feature request further and tell you what work needs doing before it can be a reality. I DO NOT give timescales... Take a look at the history on there for"
            + " better idea, you can filter by 'Implemented' to see what's been done from community requests.",
            img_url: "Listen",
          },
          {
            title: "Your Data... Your System... Your Control",
            description: "I'm not a big fan of the current world of tracking our every move by certain 'thou shalt not be named' companies, and I will never add that into OctoFarm!"
            + " Any internet call OctoFarm makes is to collect supplemental data, either from octofarm.net, or octoprint.org for plugins and updates. Non of those calls are relied on by the "
            + " system, it will run fine with no internet connection. There is action tracking built into OctoFarm but all of that is kept locally and only available to system administrators.",
            img_url: "YourData",
          },
        ],
      },
      {
        tab: "one",
        title: "Printer Manager",
        icon: "mdi-printer-3d",
        description_1: "Take full control of your OctoPrint farm with various single and bulk printer management functions. You can add/edit/remove/disable"
        + "/update and even change relevant settings of your OctoPrint instances.",
        description_2: "Get a deeper look over your OctoPrint based farm with various logs, alerts and other management functionalities giving you a full current and historical overview of what is happening.",
        image_url: ["PrinterManager", "PrinterManagerLogs", "PrinterManagerBulkManage", "PrinterManagerOctoPrintManage", "PrinterManagerPrinterManage"],
        features: [
          {
            title: "Connection Overview",
            description: "The connection overview will give administrators a quick window into how their network is handling all of those pesky websocket connections and api calls. "
              + "It keeps track of the speed of responses, and connection retries/error counts.",
            img_url: "PrinterManagerConnectionOverview",
          },
          {
            title: "Farm Overview",
            description: "The farm overview is for administrators to get a quick window into the current state of printers and OP instances on their farms. It will display current versions, OctoPi/OctoPrint states if available and a success/activity rate for each printer.",
            img_url: "PrinterManagerFarmOverView",
          },
          {
            title: "Health Checks",
            description: "The health checks sections are there to make sure your OctoPrint and OctoFarm configurations are in-sync. It will attempt to point out errors in configurations and even detect some connection issues and then alert you on the main screen.",
            img_url: "PrinterManagerHealthChecks",
          },
        ],
      },
      {
        tab: "two",
        title: "Dashboard",
        icon: "mdi-desktop-mac-dashboard",
        description_1: "A customisable overview of your entire farm with a wide selection of panels to choose from. Best displayed on the big screen to gain deep insights into how your farm is currently progressing",
        description_2: "Quickly see your farms current print statistics, printer states, job status and even farm temperatures at a glance.",
        image_url: ["DashboardMore", "Dashboard"],
        features: [
          {
            title: "Customise your view",
            description: "Customise your view by dragging and dropping any element wherever you want or resizing it to better fill up space.",
            img_url: "DashboardMovePanel",
          },
          {
            title: "Disable/Enable Elements\n",
            description: "Choose which elements you feel are most important for your dashboard by disabling the ones you don't need. These settings are per user too so each user can have their own settings.",
            img_url: "DashboardSettings",
          },
        ],
      },
      {
        tab: "three",
        title: "Monitoring",
        icon: "mdi-eye-circle",
        description_1: "Monitor and Control your entire farm from a single interface with a selection of sorting/filtering and bulk control actions.",
        description_2: "Choose between various views to better suit your individual farm needs. Each view can be enabled and disabled in system settings so you can keep what suits your farm the best.",
        image_url: ["MonitoringJobInfoModal", "MonitoringFilesModal", "MonitoringControlModal", "MonitoringTerminalModal"],
        features: [
          {
            title: "List View",
            description: "A tabled view of your printers, great for those farms without cameras and more printers on the screen. Full control and information available.",
            img_url: "MonitoringListView",
          },
          {
            title: "Camera View",
            description: "Your personal NVR style view with configurable columns with camera's as the main focus. Full control and limited information available.",
            img_url: "MonitoringCameraView",
          },
          {
            title: "Panel View",
            description: "A card style view where it combines the camera's and more information on print state. Full control and information available.",
            img_url: "MonitoringPanelView",
          },
          {
            title: "Group View",
            description: "Organises printers by their OctoFarm group with configurable columns for each group. Grouped control and limited information available.",
            img_url: "MonitoringGroupView",
          },
          {
            title: "Super List View",
            description: "A super view of sorts, combines the camera/panel and list views all into one single view. Full control and information available.",
            img_url: "MonitoringSuperList",
          },
          {
            title: "Current Operations View",
            description: "Current print status view for what's happening now. Very limited control and information available.",
            img_url: "MonitoringCurrentOperations",
          },
        ],
      },
      {
        tab: "four",
        title: "History",
        icon: "mdi-history",
        description_1: "A detailed running log of every successful/cancelled/failed print across your entire farm. Captures various stats about the print job, times, filament usage and more!",
        description_2: "Drill down into individual prints or see statistics of a group of them using the available filters. You can also log notes and if available history will capture your file image from the Prusa/SuperSlicer/Cura stl preview plugins.",
        image_url: ["HistoryView", "HistoryViewCostAndUsage", "HistoryViewGraphs", "HistoryViewPrinterStats"],
        features: [
          {
            title: "Filters",
            description: "Drill down and see updated statistics with the available history filters. Find a specific file, prints that used a certain spool or even drill down by folder which can be used to keep a group of prints together.",
            img_url: "HistoryFilters",
          },
          {
            title: "Statistics",
            description: "Deep usage statistics across your farm spanning back as long as you want... Monthly success rates, usages, print times and more!",
            img_url: "HistoryViewGraphs",
          },
          {
            title: "History Card",
            description: "Open up the history card to drill down into more specific print meta data and also update some of the fields. Allows you to add notes to your print for future reference.",
            img_url: "HistoryCard",
          },
        ],
      },
      {
        tab: "five",
        title: "File Manager",
        icon: "mdi-file-code-outline",
        description_1: "Quickly switch and manage every file list on your farm. Pulls all the current files and folders from each online OctoPrint instance.",
        description_2: "Full management capabilities Upload, Move, Delete and even start the print. There are also various house keeping functionality to keep your systems clean of old files.",
        image_url: ["FileManager", "FileManagerStats"],
        features: [
          {
            title: "Upload Queue",
            description: "View a list and progress of each file currently uploading and where it's going.",
            img_url: "FileManagerFileQueue",
          },
          {
            title: "Gcode Scripts",
            description: "Create a custom set of Gcode scripts that you can fire to an instance or multiple on various screens of OctoFarm",
            img_url: "FileManagerGcodeScript",
          },
          {
            title: "Multi-Upload / Print",
            description: "Bulk upload a large amount of files, to existing or new folders on OctoPrint to as many printers as you want.",
            img_url: "FileManagerMultiUpload",
          },
        ],
      },
      {
        tab: "six",
        title: "Filament Manager",
        icon: "mdi-movie-roll",
        description_1: "Keep a track of all your manufacturers and spools and assign them to printers so they are logged and tracked by OctoFarm. Only care about types of filament? That's fine, you can setup this with whatever granular level you like!",
        description_2: "Track costs and weight with history better by using length and density calculations, assign spools to printers and manage all of your inventory with graphs and overview screens.",
        image_url: ["FilamentManager"],
        features: [
          {
            title: "Profiles Information",
            description: "OctoFarm splits your filament by Profiles and Spools. Profiles include the constants that are the same across every roll. Manufacturer, Material, Density and Diameter.",
            img_url: "FilamentManagerProfiles",
          },
          {
            title: "Spool Information",
            description: "Spools are your individual spool, you can be as pedantic with this as you like. Track each individual one or just track it by colour / material type.",
            img_url: "FilamentManagerSpools",
          },
          {
            title: "Materials List",
            description: "Pre-defined material lists with included densities that can be selected when setting up your profiles. Custom pre-heat temperatures coming soon!",
            img_url: "FilamentManagerMaterialsList",
          },
        ],
      },
      {
        tab: "seven",
        title: "System",
        icon: "mdi-cog",
        description_1: "Manage just about ever part of your OctoFarm system from one place. See server statistics, version information and check out the latest supporters!",
        description_2: "Includes client/server settings, setup Alerts for specific triggers in your farm, Basic management of OctoFarms database, Download OctoFarms logs and view system information about your instance.",
        image_url: ["SystemInformation", "SystemAbout", "SystemClient", "SystemDatabase", "SystemReleaseNotes"],
        features: [
          {
            title: "Alerts",
            description: "Setup alerts that fire off to custom system scripts from triggers on your farm. You can use Print Done, Failed, Paused, Cooled and Error as triggers at the moment.",
            img_url: "SystemAlerts",
          },
          {
            title: "Tasks",
            description: "See and keep and eye on all of OctoFarms internal tasks executed by it's task manager.",
            img_url: "SystemTasks",
          },
          {
            title: "User Manager",
            description: "Manage your users that are allowed to access OctoFarm. Create them, reset passwords and allow permission changes. (Current permissions are only User/Administrator, more coming soon!)",
            img_url: "SystemClientSettings",
          },
        ],
      },
    ],
    history_map: [
      {
        date: "21/05/2022",
        version: "Version 1.2.0",
        release: "Strong and Stable",
        features: [
          {
            description: "This version has taken just over a year and you can find out more about that in blog posts I've made... It's aimed at a payback to anyone"
              + " who has supported the project during this time and I've tried to clean up ALOT of code goofs and learnings from when I first started with JavaScipt."
              + "This has meant overall a more stable system, more quality of life features and improvements to old long standing features.",
          },
          {
            title: "Upgraded and refined printer manager",
            description: "Refined a lot of process like OctoPrint/plugin updates, gave the screen a refreshed layout, can now disable printers when not in use and OctoFarm now captures logs for all printer actions.",
          },
          {
            title: "Multi-Uploads and new Multi-Print",
            description: "Multi-Uploads finally has folder support so you can upload to, or create folders when bulk uploading to printers. There's also a new Multi-Print option on the views that allows for quickly uploading/firing off multiple prints to many printers at once."
              + " . It also kind of supports multiple files to mulitple printers.",
          },
          {
            title: "History pagination and deeper statistics",
            description: "History finally has true server side pagination so loading should be much faster and OctoFarm now generates monthly statistics so you can get a better overview over your farms history.",
          },
          {
            title: "Improved performance and stability",
            description: "This is the big one, and the main reason it's taken so long. ALOT of the code has been refactored and this has created a great base for the server improvements to continue in the future.",
          },
        ],
      },
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
