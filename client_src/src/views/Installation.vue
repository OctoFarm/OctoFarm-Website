<template>
  <v-container class="pa-0 mt-5">
    <v-card
      class="mb-5"
    >
      <v-tabs
        dense
        fixed-tabs
        icons-and-text
        show-arrows
        centered
        origin="top center 0"
      >
        <v-tab>
          OctoFarm Requirements
          <v-icon>
            mdi-infinity
          </v-icon>
        </v-tab>
        <v-tab>
          Controlling OctoFarm
          <v-icon>
            mdi-gamepad-variant
          </v-icon>
        </v-tab>
        <v-tab>
          Updating OctoFarm
          <v-icon>
            mdi-cellphone-arrow-down
          </v-icon>
        </v-tab>
        <v-tab>
          OctoPrint Setup
          <v-icon>
            mdi-printer-3d-nozzle
          </v-icon>
        </v-tab>
        <v-tab>
          Remote Access
          <v-icon>
            mdi-web
          </v-icon>
        </v-tab>
        <v-tab>
          F.A.Q
          <v-icon>
            mdi-comment-question-outline
          </v-icon>
        </v-tab>
        <!--            OctoFarm Hardware-->
        <v-tab-item>
          <v-card
            flat
            class="text-center"
          >
            <v-row>
              <v-col
                lg="4"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card-title
                  class="d-inline-flex"
                >
                  OctoFarm Setup
                </v-card-title>
                <v-card-text class="font-weight-regular">
                  Due to OctoFarms code base it's very system agnostic. However the database requires a 64-bit system.
                  <br>OctoFarm requires mainly an always on device to function to it's full capabilities.
                  <br><b>NOTE:</b> OctoFarm does not require internet access! but some features may / may not work without it.
                </v-card-text>
                <v-card-text class="font-weight-regular">
                  Application Requirements
                </v-card-text>
                <v-card-text>
                  <v-timeline>
                    <v-timeline-item>NodeJS - v14.16.1 (I only support the LTS versions, currently V14)</v-timeline-item>
                    <v-timeline-item class="text-right">
                      MongoDB - v3.6+
                    </v-timeline-item>
                    <v-timeline-item>OctoPrint - v1.3.9+</v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-col>
              <v-col
                lg="8"
                md="6"
                sm="12"
                xs="12"
              >
                <v-card-title
                  class="d-inline-flex"
                >
                  Hardware and Software
                </v-card-title>
                <v-card-text>
                  You will need an always on piece of physical hardware to setup this configuration but everything you need for OctoFarm is all installed on a single device.
                  You can install any of the OctoFarm docker packages or use one of the installation instructions below to setup the production method.
                </v-card-text>
                <v-card-title>
                  Hardware
                </v-card-title>
                <v-card-text>
                  OctoFarm can be used on (but not limited to) the following devices:
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon
                        color="primary"
                      >
                        mdi-raspberry-pi
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Single Board Computer ie. > Raspberry Pi 3b+
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon
                        color="primary"
                      >
                        mdi-desktop-tower
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Desktop PC / Server
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>
                <v-card-title>
                  Operating System Recommendations
                </v-card-title>
                <v-card-text>
                  OctoFarm itself can be installed on (but not limited to) the following systems:
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon
                        color="primary"
                      >
                        mdi-ubuntu
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Ubuntu / Other Linux Variant
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon
                        color="primary"
                      >
                        mdi-microsoft-windows
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Microsoft Windows 10 / Server
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <!--            Contolling OctoFarm-->
        <v-tab-item>
          <v-card
            flat
            class="text-center"
          >
            <v-card-title class="d-inline-flex">
              OctoFarm CLI Commands
            </v-card-title>
            <v-card-text>
              You can use various commands to control OctoFarm from your systems command line (cli).
              Below are a list of accepted commands and what they do.
              These commands we're created for convenience and currently require the installation and setup of pm2.
              You can find more information in the Instructions below.
            </v-card-text>
            <v-card-title class="d-inline-flex">
              Command Lists (All must be run from the OctoFarm installation directory)
            </v-card-title>
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <code>{{ npm_start }}</code>
                    <p class="text-wrap pt-2">
                      This command is used to start the OctoFarm service.
                    </p>
                    <code>{{ npm_restart }}</code>
                    <p class="text-wrap pt-2">
                      This command is used to restart the OctoFarm service.
                    </p>
                    <code>{{ npm_stop }}</code>
                    <p class="text-wrap pt-2">
                      This command is used to stop the OctoFarm service.
                    </p>
                    <code>{{ npm_stop_delete }}</code>
                    <p class="text-wrap pt-2">
                      This command is used to stop and delete the OctoFarm service.
                    </p>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--            Updating OctoFarm-->
        <v-tab-item>
          <v-card
            flat
            class="text-center"
          >
            <v-card-title class="d-inline-flex">
              How to Update your OctoFarm Install
            </v-card-title>
            <v-card-text>
              Since v1.1.13 there are two methods to successfully updating your OctoFarms instance. One is from the command line interface,
              and the other is a new feature within OctoFarms web interface.
            </v-card-text>
            <v-card-title class="d-inline-flex">
              CLI Update (Pre v1.1.13)
            </v-card-title>
            <v-card-text>
              Make sure your currently in the OctoFarm installation directory before running any of the following commands. No support
              will be giving in rectifying this issue.
              <v-list-item>
                <v-list-item-content>
                  <v-row>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <p class="pb-1">
                        1. Stop the OctoFarm service
                      </p>
                      <code>{{ npm_stop_delete }}</code>
                    </v-col>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <v-btn
                        icon
                        color="primary"
                        v-clipboard:copy="npm_stop_delete"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                      >
                        <v-icon>mdi-content-copy</v-icon>
                        Copy
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-list-item-content />
                  <v-row>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <p class="pb-1">
                        2. Git pull the latest repository.
                      </p>
                      <code>{{ git_pull }}</code>
                    </v-col>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <v-btn
                        icon
                        color="primary"
                        v-clipboard:copy="git_pull"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                      >
                        <v-icon>mdi-content-copy</v-icon>
                        Copy
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-list-item-content />
                  <v-row>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <p class="pb-1">
                        2.1. If you have issues with git complaining about local file changes then use this command below.
                      </p>
                      <code>{{ git_pull_reset }}</code>
                    </v-col>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <v-btn
                        icon
                        color="primary"
                        v-clipboard:copy="git_pull_reset"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                      >
                        <v-icon>mdi-content-copy</v-icon>
                        Copy
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-list-item-content />
                  <v-row>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <p class="pb-1">
                        3. Run the start-up script for OctoFarm.
                      </p>
                      <code>{{ npm_start }}</code>
                    </v-col>
                    <v-col
                      md="6"
                      sm="12"
                    >
                      <v-btn
                        icon
                        color="primary"
                        v-clipboard:copy="npm_start"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError"
                      >
                        <v-icon>mdi-content-copy</v-icon>
                        Copy
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-title class="d-inline-flex">
              Web Interface Update (Post v1.1.13)<br>
              For Docker please see below.
            </v-card-title>
            <v-card-text>
              Since 1.1.13 we brought in a few buttons to make this easier for the user. This can now be done from the web interface.
              <v-list-item>
                <v-list-item-content>
                  <p class="pb-2">
                    1. Navigate to the "System" page within OctoFarms web interface.
                  </p>
                  <p class="pb-2">
                    2. Scroll down and click on the "Server" Button on the side bar.
                  </p>
                  <p class="pb-2">
                    3. If the "Update OctoFarm" button is greyed out, then click "Check for Updates
                  </p>
                  <p class="pb-2">
                    4. If there's an update available you will get a success message and the "Update OctoFarm" button will become available
                  </p>
                  <p class="pb-2">
                    5. Click "Update OctoFarm" and profit!
                  </p>
                  <p class="pb-2">
                    <b>Notes: </b>There may be some additional dialogs you will have to either confirm or cancel after the update check has run.
                    These are checks in place to make sure OctoFarm doesn't do anything you don't want with your system. <i>Firstly</i> it will check if any local changes
                    are detected. If there are it will ask if you'd like to overwrite those and procede. This will mostly be a package.json unless you've been tinkering.
                    <i>Secondly</i> OctoFarm will make sure there are no missing packages, to continue the update you will have to OK this warning if it appears.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-title class="d-inline-flex">
              Updating Docker
            </v-card-title>
            <v-card-text>
              Currently the auto update feature is disabled in docker. We are looking to improve this going forward but for now you can follow the steps below to update your container
              <v-list-item>
                <v-list-item-content>
                  <v-col
                    md="6"
                    sm="12"
                  >
                    <p class="pb-1">
                      Inside the folder where your docker-compose.yml file resides, run the following command.
                    </p>
                    <code>{{ docker_update }}</code>
                  </v-col>
                  <v-col
                    md="6"
                    sm="12"
                  >
                    <v-btn
                      icon
                      color="primary"
                      v-clipboard:copy="docker_update"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"
                    >
                      <v-icon>mdi-content-copy</v-icon>
                      Copy
                    </v-btn>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-title class="d-inline-flex">
              Updating Docker On UnRaid
            </v-card-title>
            <v-card-text>
              UnRaid's docker management system will periodically check for updates to the image. You should see a "Apply Update", in your version column next to the OctoFarm container,
              notice on the docker management screen when it's found one. If you don't see the notice you can use the "Check for updates" button at the bottom of the screen and it will
              search for all the latest versions of your container.
              <v-list-item />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--            OctoPrint Setup-->
        <v-tab-item>
          <v-card
            flat
            class="text-center"
          >
            <v-card-title class="d-inline-flex">
              How to setup your OctoPrints
            </v-card-title>
            <v-card-text>
              OctoPrint will require a few preparations before OctoFarm can establish a connection.
              Follow the 3 steps below to setup your OctoPrint instances.
              <br>
              For more information into why this is so, please check this ticket on OctoFarm's
              github page: <a
                href="https://github.com/OctoFarm/OctoFarm/issues/302"
                target="_blank"
                class="text-decoration-none"
              >OctoPrint API keys and CORS - tips for new users</a>
            </v-card-text>
            <v-card-text>
              <v-row
                justify="center"
              >
                <v-col
                  lg="3"
                  md="6"
                  sm="12"
                  xs="12"
                  class="text-center"
                >
                  <v-card-title class="d-inline-flex">
                    1. Settings Preparations
                  </v-card-title>
                  <v-card-text class="d-inline-flex">
                    Due to OctoFarm residing on a different host to your OctoPrint instance you will need to enable CORS to stop the system failing any attempts to communicate with the API.
                  </v-card-text>
                </v-col>
                <v-col
                  lg="9"
                  md="6"
                  sm="12"
                  xs="12"
                >
                  <v-img
                    class="d-inline-flex"
                    width="75%"
                    src="~@/assets/octoprintSetup/userCORSOctoPrint.png"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text>
              <v-row

                justify="center"
              >
                <v-col
                  cols="3"
                  lg="3"
                  md="6"
                  sm="12"
                  class="text-center"
                >
                  <v-card-title class="d-inline-flex">
                    2. User Preparations
                  </v-card-title>
                  <v-card-text>
                    OctoFarm uses websockets to communicate in real time with the OctoPrint instance and to enable this we need to use the OctoPrint user account. OctoFarm (to attempt to save time adding printers), will make a guess and grab the first Admin user it finds.<br>
                    If you have more than a single user on your OctoPrint instance then you need to make sure to generate the API key from the User OctoFarm uses to connect. It should be the first admin user in the screenshot provided.
                    <b>NOTE:</b> It is a hard requirement that OctoFarm connects with Admin permissions. This is to enable the user to update OctoPrint system settings from OctoFarm itself, if your user is not an Admin on OctoPrint, it may fail to connect / produce unintended consequences.
                  </v-card-text>
                </v-col>
                <v-col
                  cols="9"
                  lg="9"
                  md="6"
                  sm="12"
                >
                  <v-img
                    width="75%"
                    class="d-inline-flex"
                    src="~@/assets/octoprintSetup/userSetupOctoPrint.png"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text>
              <v-row
                justify="center"
              >
                <v-col
                  cols="3"
                  lg="3"
                  md="6"
                  sm="12"
                  class="text-center"
                >
                  <v-card-title class="d-inline-flex">
                    3. API Preparations
                  </v-card-title>
                  <v-card-text>
                    Since OctoPrint Version 1.4.2 the websocket connection will no longer work with the global API key. (OctoPrint seems to be moving away from this key all together).
                    It is required now to either generate a Application key or OctoFarm or use a generated key that's specific to the User account. OctoFarm works with either so go with the one that most fits your setup.
                    <br><b>NOTE:</b> Make a note of the generated key and your OctoPrint's IP / Host name as you will require this to input into OctoFarm.
                  </v-card-text>
                </v-col>
                <v-col
                  cols="9"
                  lg="9"
                  md="6"
                  sm="12"
                >
                  <small class="ma-10">Both of these keys below can be created in the "User Settings" menu on OctoPrint.</small>
                  <v-img
                    width="25%"
                    class="ma-5 d-inline-flex"
                    src="~@/assets/octoprintSetup/userSettingsOctoPrint.png"
                  />

                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        Application API Key Generation
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        Application keys are the recommended way of allowing access as instructed by OctoPrint. An application key allows you to keep track of which Applications you have allowed access to your instance.
                        <v-img
                          width="75%"
                          class="ma-5 d-inline-flex"
                          src="~@/assets/octoprintSetup/userApplicationKeyOctoPrint.png"
                        />
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                      <v-expansion-panel-header>
                        User API Key Generation
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        User keys are specifically tied to your user account and whilst they work I personally recommend using an Application key as it's much simpler to manage.
                        <v-img
                          width="75%"
                          class="ma-5 d-inline-flex"
                          src="~@/assets/octoprintSetup/userAPIKEYOctoPrint.png"
                        />
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--            Remote Access -->
        <v-tab-item>
          <v-card
            flat
            class="text-center"
          >
            <v-card-title class="d-inline-flex">
              Current Remote Access Methods
            </v-card-title>
            <v-card-text>
              Due to some legacy code from when OctoFarm was a single page html file it is currently
              impossible to host your OctoFarm instance on the internet without also hosting your OctoPrint
              instances with it. <br>That is not recommended at all as it would leave your OctoPrint instance on the
              internet. <br>There is the same caveat for your web camera's as well, as they would require been
              directly accessible via the internet due to no internal routing happening with these requests.
              <br>Currently until this changes (set for 2.X release) then the best method of accessing OctoFarm
              remotely is with a VPN. There are various methods to setup a VPN detailed below, my personal favourite
              is WireGuard for it's simplicity.
              <br><b>NOTE: </b>If you choose to host OctoFarm itself behind a reverse proxy, or with an open
              port then you do so at your own risk. I do not recommend this setup as it's not been verified to be
              secure and you'll also loose the ability to send commands to your OctoPrint instances due to legacy
              code within the client.
              <br><b>NOTE: </b>It's not recommended to put the VPN server on the same host as OctoFarm if your
              running a Pi4 or similar system.
            </v-card-text>
            <v-card-title class="d-inline-flex">
              Software
            </v-card-title>
            <v-card-text>
              Below are just a few recommendations of the many available VPN solutions.
              <v-list-item>
                <v-list-item-icon>
                  <v-icon
                    color="primary"
                  >
                    mdi-vpn
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    OpenVPN
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon
                    color="primary"
                  >
                    mdi-vpn
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    WireGuard
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon
                    color="primary"
                  >
                    mdi-vpn
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    PiVPN
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <!--            FAQ-->
        <v-tab-item>
          <v-card flat>
            <v-row>
              <v-col
                v-for="q in frequent_questions"
                :key="q.question"
                class="pa-5"
                col="12"
                lg="6"
                xl="4"
                md="6"
              >
                <v-card
                  class="mx-auto"
                  outlined
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">
                        <v-icon>mdi-progress-question</v-icon>
                        {{ q.question }}
                      </div>
                      <p>
                        <span v-html="q.answer" />
                      </p>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-card
      class="mb-5"
    >
      <v-tabs
        fixed-tabs
        show-arrows
        icons-and-text
        dense
        centered
        origin="top center 0"
      >
        <v-tab
          v-for="inst in installation_instructions"
          :key="inst.system"
          class="text-"
          @click="current_step = 1"
        >
          {{ inst.system }}
          <v-icon>
            {{ inst.icon }}
          </v-icon>
        </v-tab>
        <v-tab-item
          v-for="inst in installation_instructions"
          :key="inst.system"
        >
          <v-stepper
            v-model="current_step"
            vertical
          >
            <h3
              class="pa-6"
              v-html="inst.title"
            />
            <span
              v-for="steps in inst.steps"
              :key="inst.title + steps.index"
              small
            >
              <v-stepper-step
                editable
                :complete="current_step > steps.index"
                :step="steps.index"
              >
                {{ steps.title }}
                <small>{{ inst.input }}</small>
              </v-stepper-step>
              <v-stepper-content :step="steps.index">
                <span
                  v-for="subSteps in steps.subSteps"
                  :key="subSteps.code"
                >
                  <v-card
                    class="mb-12"
                  >

                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>    <v-checkbox
                                                 class="d-inline-flex"
                                               />
                          {{ subSteps.index }}. {{ subSteps.title }}</v-list-item-title>
                        <v-list-item-title>
                          <v-list-item-subtitle class="text-wrap">     <v-row
                            v-for="input in subSteps.input"
                            :key="input.code"
                          >
                            <v-col cols="10">
                              <p v-if="input.pre_text">{{ input.pre_text }}</p>
                              <code
                                v-if="input.code"
                                class="text-wrap"
                              >{{ input.code }}</code>
                              <pre
                                v-if="input.pre"
                                class="text-wrap"
                                v-html="input.pre"
                              />
                              <a
                                :href="'//' + input.url"
                                target="_blank"
                              >
                                {{ input.url }}
                              </a>
                              <p
                                class="pt-3"
                                v-if="input.response"
                              >{{ input.response }}</p>
                            </v-col>

                            <v-col cols="2">
                              <v-btn
                                icon
                                v-if="input.code"
                                v-clipboard:copy="input.code"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                              >
                                <v-icon>mdi-content-copy</v-icon>
                                Copy
                              </v-btn>
                            </v-col>
                          </v-row></v-list-item-subtitle>

                        </v-list-item-title></v-list-item-content>
                    </v-list-item>

                  </v-card>
                </span>
                <v-btn
                  color="primary"
                  @click="current_step = current_step + 1"
                  elevation="2"
                  outlined
                >
                  {{ steps.length }}
                  Continue
                </v-btn>
                <v-btn
                  text
                  elevation="2"
                  outlined
                  class="ml-2"
                  @click="current_step = current_step - 1"
                  v-if="current_step !== 1"
                >
                  Back
                </v-btn>
              </v-stepper-content>
            </span>
          </v-stepper>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :colour="snackbar_colour"
    >
      <code>{{ snackbar_message }}</code> has been copied to your clipboard
      <template v-slot:action="{ attrs }">
        <v-btn
          color="success"
          text
          v-bind="attrs"
          @click="snackbar = false"
          :timeout="snackbar_timeout"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
<!--  -->
<!--    <v-card-->
<!--      class="mb-5"-->
<!--    >-->
<!--      <v-row>-->
<!--        &lt;!&ndash; OctoFarm Setup&ndash;&gt;-->
<!--        <v-col-->
<!--          lg="4"-->
<!--          md="6"-->
<!--          sm="12"-->
<!--          xs="12"-->
<!--          class="text-center"-->
<!--        >-->
<!--          <v-card-title-->
<!--            class="d-inline-flex"-->
<!--          >-->
<!--            OctoFarm Setup-->
<!--          </v-card-title>-->
<!--          <v-card-text class="font-weight-regular">-->
<!--            Due to OctoFarms code base it's very system agnostic. There are however some limitations to what systems it's database layer uses, i.e. needs to be 64-bit.-->
<!--            <br>Check the "OctoFarm Hardware" section for examples.-->
<!--            <br>Your setup is not limited to these options however I will mention that OctoFarm is a server application at it's core. It requires mainly an always on device to function to it's full capabilities.-->
<!--            <br><b>NOTE:</b> OctoFarm does not require internet access! but some features may / may not work without it.-->
<!--          </v-card-text>-->
<!--          <v-card-text class="font-weight-regular">-->
<!--            Application Requirements-->
<!--          </v-card-text>-->
<!--          <v-card-text >-->
<!--            <v-timeline>-->
<!--              <v-timeline-item>NodeJS - v14.16.1 (I only support the LTS versions, currently V14)</v-timeline-item>-->
<!--              <v-timeline-item class="text-right">-->
<!--                MongoDB - v3.6+-->
<!--              </v-timeline-item>-->
<!--              <v-timeline-item>OctoPrint - v1.3.9+</v-timeline-item>-->
<!--            </v-timeline>-->
<!--          </v-card-text>-->
<!--        </v-col>-->
<!--        <v-col-->
<!--          lg="8"-->
<!--          md="6"-->
<!--          sm="12"-->
<!--          xs="12"-->
<!--        />-->
<!--      </v-row>-->
<!--    </v-card>-->
<!--    <v-card-->
<!--      class="mb-5"-->
<!--    >-->
<!--      <v-row-->
<!--        justify="center"-->
<!--      >-->
<!--        &lt;!&ndash; installations&ndash;&gt;-->
<!--        <v-col>-->
<!--          <v-toolbar-->
<!--            flat-->
<!--          >-->
<!--            <v-toolbar-title>Installation Instruction</v-toolbar-title>-->
<!--          </v-toolbar>-->
</template>

<script>
export default {
  methods: {
    onCopy(e) {
      this.snackbar_message = `${e.text}`;
      this.snackbar = true;
      this.snackbar_colour = "success";
    },
    onError() {
      this.snackbar_message = "failed to copy clipboard!";
      this.snackbar = true;
      this.snackbar_colour = "error";
    },
  },
  data: () => ({
    current_step: 1,
    npm_start: "npm run start",
    npm_restart: "npm run restart",
    npm_stop: "npm run stop",
    npm_stop_delete: "npm run stop:delete",
    git_pull: "git pull",
    git_pull_reset: "git reset --hard",
    docker_update: "docker-compose up -d --no-deps --build",
    snackbar: false,
    snackbar_message: null,
    snackbar_colour: "success",
    snackbar_timeout: 1000,
    tab: null,
    installation_instructions: [
      {
        system: "Linux (Ubuntu)",
        title: "Follow the steps below to install OctoFarm on Ubuntu.",
        icon: "mdi-ubuntu",
        steps: [{
          index: "1",
          title: "Install MongoDB",
          subSteps: [
            {
              index: "1.1",
              title: "Add MongoDB Repository Key",
              input: [
                {
                  pre_text: "",
                  code: "wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -",
                  response: "",
                },
              ],
            },
            {
              index: "1.2",
              title: "Add MongoDB Repository (Choose Correct Version)",
              input: [
                {
                  pre_text: "20.04: ",
                  code: "echo \"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list",
                  response: "",
                },
                {
                  pre_text: "18.08: ",
                  code: "echo \"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list",
                  response: "",
                },
                {
                  pre_text: "16.04: ",
                  code: "echo \"deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list",
                  response: "",
                },
              ],
            },
            {
              index: "1.3",
              title: "Update APT and Install MonogDB with package manager",
              input: [
                {
                  pre_text: "",
                  code: "sudo apt-get update && sudo apt-get install -y mongodb-org",
                  response: "",
                },
              ],
            },
            {
              index: "1.4",
              title: "Enable and start mongod service, then make sure it's running...",
              input: [
                {
                  pre_text: "",
                  code: "sudo systemctl enable mongod",
                  response: "Enable the MongoDB Service",
                },
                {
                  pre_text: "",
                  code: "sudo systemctl start mongod",
                  response: "Start the MongoDB Service",
                },
                {
                  pre_text: "",
                  code: "sudo systemctl status mongod",
                  response: "Check the status of the MongoDB Service, should report active.",
                },
              ],
            },
          ],
        },
        {
          index: "2",
          title: "Install NodeJS LTS v14",
          subSteps: [
            {
              index: "2.1",
              title: "Add nodeJS version 14 Repository and install with dependencies (one liner)",
              input: [
                {
                  pre_text: "",
                  code: "curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt update && sudo apt -y install nodejs gcc g++ make",
                  response: "",
                },
              ],
            },
            {
              index: "2.2",
              title: "Check and make sure the nodejs version is at least v14",
              input: [
                {
                  pre_text: "",
                  code: "node --version",
                  response: "Output: v14.16.1",
                },
              ],
            },
          ],
        },
        {
          index: "3",
          title: "Install Git + pm2 then Download OctoFarm",
          subSteps: [
            {
              index: "3.1",
              title: "Install Git",
              input: [
                {
                  pre_text: "",
                  code: "sudo apt install git",
                  response: "",
                },
              ],
            },
            {
              index: "3.2",
              title: "Install pm2",
              input: [
                {
                  pre_text: "",
                  code: "sudo npm install pm2 -g",
                  response: "",
                },
              ],
            },
            {
              index: "3.3",
              title: "Clone the OctoFarm repository from master (latest stable version)",
              input: [
                {
                  pre_text: "",
                  code: "git clone --depth 1 --branch 1.1.13-hotfix https://github.com/OctoFarm/OctoFarm.git",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "4",
          title: "Setup OctoFarm and start the service",
          subSteps: [
            {
              index: "4.1",
              title: "Change into the newly created OctoFarm folder",
              input: [
                {
                  pre_text: "",
                  code: "cd ~/OctoFarm",
                  response: "",
                },
              ],
            },
            {
              index: "4.2",
              title: "Install OctoFarms dependencies and start the service... This could take a few moments.",
              input: [
                {
                  pre_text: "",
                  code: "npm start",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "5",
          title: "Profit! OctoFarm should now be running and available to access.",
          subSteps: [
            {
              index: "5.1",
              title: "Access and test your web service.",
              input: [
                {
                  pre_text: "Double check with your favourite web browser and continue to point 6: ",
                  code: "http://{your systems ip address}:4000",
                  response: "",
                },
              ],
            },
          ],
        },
        ],
      },
      {
        system: "Linux (Debian)",
        title: "Follow the steps below to install OctoFarm on Debian",
        icon: "mdi-debian",
        steps: [{
          index: "1",
          title: "Install MongoDB",
          subSteps: [
            {
              index: "1.1",
              title: "Add MongoDB Repository Key",
              input: [
                {
                  pre_text: "",
                  code: "wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -",
                  response: "",
                },
              ],
            },
            {
              index: "1.2",
              title: "Add MongoDB Repository (Choose Correct Version)",
              input: [
                {
                  pre_text: "Debian 10: ",
                  code: "echo \"deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list",
                  response: "",
                },
                {
                  pre_text: "Debian 9: ",
                  code: "echo \"deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.4 main\" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list",
                  response: "",
                },
              ],
            },
            {
              index: "1.3",
              title: "Update APT and Install MonogDB with package manager",
              input: [
                {
                  pre_text: "",
                  code: "sudo apt-get update && sudo apt-get install -y mongodb-org",
                  response: "",
                },
              ],
            },
            {
              index: "1.4",
              title: "Enable and start mongod service, then make sure it's running...",
              input: [
                {
                  pre_text: "",
                  code: "sudo systemctl enable mongod",
                  response: "",
                },
                {
                  pre_text: "",
                  code: "sudo systemctl start mongod",
                  response: "",
                },
                {
                  pre_text: "",
                  code: "sudo systemctl status mongod",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "2",
          title: "Install NodeJS LTS v14",
          subSteps: [
            {
              index: "2.1",
              title: "Add nodeJS version 14 Repository and install with dependencies (one liner)",
              input: [
                {
                  pre_text: "",
                  code: "curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt update && sudo apt -y install nodejs gcc g++ make",
                  response: "",
                },
              ],
            },
            {
              index: "2.2",
              title: "Check and make sure the nodejs version is at least v14",
              input: [
                {
                  pre_text: "",
                  code: "node --version",
                  response: "Output: v14.16.1",
                },
              ],
            },
          ],
        },

        {
          index: "3",
          title: "Install Git + pm2 then Download OctoFarm",
          subSteps: [
            {
              index: "3.1",
              title: "Install Git",
              input: [
                {
                  pre_text: "",
                  code: "sudo apt install git",
                  response: "",
                },
              ],
            },
            {
              index: "3.2",
              title: "Install pm2",
              input: [
                {
                  pre_text: "",
                  code: "sudo npm install pm2 -g",
                  response: "",
                },
              ],
            },
            {
              index: "3.3",
              title: "Clone the OctoFarm repository from master (latest stable version)",
              input: [
                {
                  pre_text: "",
                  code: "git clone --depth 1 --branch 1.1.13-hotfix https://github.com/OctoFarm/OctoFarm.git",
                  response: "",
                },
              ],
            },
          ],
        },

        {
          index: "4",
          title: "Setup OctoFarm and start the service",
          subSteps: [
            {
              index: "4.1",
              title: "Change into the newly created OctoFarm folder",
              input: [
                {
                  pre_text: "",
                  code: "cd ~/OctoFarm",
                  response: "",
                },
              ],
            },
            {
              index: "4.2",
              title: "Install OctoFarms dependencies and start the service... This could take a few moments.",
              input: [
                {
                  pre_text: "",
                  code: "npm start",
                  response: "",
                },
              ],
            },
          ],
        },

        {
          index: "5",
          title: "Profit! OctoFarm should now be running and available to access.",
          subSteps: [
            {
              index: "5.1",
              title: "Double check with your favourite web browser and continue to point 6: ",
              input: [
                {
                  pre_text: "",
                  code: "http://{your systems ip address}:4000",
                  response: "",
                },
              ],
            },
          ],
        },
        ],
      },
      {
        system: "Windows",
        title: "Follow the steps below to install OctoFarm on Ubuntu.",
        icon: "mdi-microsoft-windows",
        steps: [{
          index: "1",
          title: "Setup MongoDB",
          subSteps: [
            {
              index: "1.1",
              title: "Download MongoDB",
              input: [
                {
                  pre_text: "Download",
                  url: "fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.3-signed.msi",
                  response: "",
                },
              ],
            },
            {
              index: "1.2",
              title: "Run the installer",
              input: [
                {
                  pre_text: "Double click the downloaded 'mongodb-windows-x86_64-4.4.3-signed.msi installer', wherever your downloaded it to.",
                  url: "",
                  response: "",
                },
              ],
            },
          ],
        }, {
          index: "2",
          title: "Setup NodeJS",
          subSteps: [
            {
              index: "1.1",
              title: "Download NodeJS",
              input: [
                {
                  pre_text: "Download",
                  url: "nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi",
                  response: "",
                },
              ],
            },
            {
              index: "1.2",
              title: "Run the installer",
              input: [
                {
                  pre_text: "Double click the downloaded 'node-v14.16.1-x64.msi installer', wherever your downloaded it to.",
                  url: "",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "3",
          title: "Setup Git",
          subSteps: [
            {
              index: "1.1",
              title: "Download Git",
              input: [
                {
                  pre_text: "Download",
                  url: "github.com/git-for-windows/git/releases/download/v2.30.1.windows.1/Git-2.30.1-64-bit.exe",
                  response: "",
                },
              ],
            },
            {
              index: "1.1",
              title: "Run the installer",
              input: [
                {
                  pre_text: "Double click the downloaded 'Git-2.30.1-64-bit.exe', wherever your downloaded it to.",
                  url: "",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "4",
          title: "Install pm2",
          subSteps: [
            {
              index: "4.1",
              title: "Install pm2",
              input: [
                {
                  pre_text: "",
                  code: "npm install pm2 -g",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "5",
          title: "Setup OctoFarm",
          subSteps: [
            {
              index: "5.1",
              title: "Find a location to install OctoFarm too. Generally 'C:/'",
              input: [
                {
                  pre_text: "",
                  code: "Open up a second command prompt WITHOUT Administrator rights this time in the directory you'd like to install OctoFarm too."
                    + "If your in Windows Explorer at your desired location, just type 'cmd' into the navigation bar at the top, and press 'enter'"
                    + "This will open command prompt in that location",
                  response: "",
                },
              ],
            },
            {
              index: "5.2",
              title: "Download the OctoFarm repository",
              input: [
                {
                  pre_text: "",
                  code: "git clone --depth 1 --branch 1.1.13-hotfix https://github.com/OctoFarm/OctoFarm.git",
                  response: "",
                },
              ],
            },
            {
              index: "5.3",
              title: "Install OctoFarms system dependencies and start the service.",
              input: [
                {
                  pre_text: "",
                  code: "npm start",
                  response: "",
                },
              ],
            },
          ],
        },
        {
          index: "6",
          title: "Profit! OctoFarm should now be running and available to access.",
          subSteps: [
            {
              index: "6.1",
              title: "Double check with your favourite web browser",
              input: [
                {
                  pre_text: "",
                  code: "http://{your systems ip address}:4000",
                  response: "",
                },
              ],
            },
          ],
        },
        ],
      },
      {
        system: "RaspberryPi",
        title: "OctoFarm comes wrapped in a nice pre-built image for the RaspberryPi running on Ubuntu 64-bit. Similar to OctoPrint's OctoPi, "
          + "FarmPi comes with all you need to get up and running with OctoFarm. You have the option to use FarmPi, or manually install OctoFarm itself. "
          + "Both instructions are below. <br> FarmPi was created by <a href='https://github.com/mkevenaar'/>Maurice Kevenaar</a> and all credit for it's creation"
          + " goes to him. You can find the FarmPi github repo here: <a href='https://github.com/mkevenaar/FarmPi'> FarmPi </a>. <br>"
          + " <h2> Supported Printer Count </h2>"
          + "This is a guess, these figures are due to change as feedback is received on the image."
          + ""
          + " <table>"
          + "  <tr>"
          + "    <th style='border: 1px solid white;' class='pa-1'> RaspberryPi </th>\n"
          + "    <th style='border: 1px solid white;'  class='pa-1'> # of Printers </th>\n"
          + "  </tr>"
          + "  <tr>"
          + "    <td style='border: 1px solid white;'  class='pa-1'>3A+</td>\n"
          + "    <td style='border: 1px solid white;'  class='pa-1'>5</td>\n"
          + "  </tr>"
          + "  <tr>"
          + "    <td style='border: 1px solid white;'  class='pa-1'>3B / 3B+</td>\n"
          + "    <td style='border: 1px solid white;'  class='pa-1'>10</td>\n"
          + "  </tr>"
          + "  <tr>"
          + "    <td style='border: 1px solid white;'  class='pa-1'>4B - 2GB</td>\n"
          + "    <td style='border: 1px solid white;'  class='pa-1'>20</td>\n"
          + "  </tr>"
          + "  <tr>"
          + "    <td style='border: 1px solid white;'  class='pa-1'>4B - 4GB</td>\n"
          + "    <td style='border: 1px solid white;'  class='pa-1'>40</td>\n"
          + "  </tr>"
          + "  <tr>"
          + "    <td style='border: 1px solid white;'  class='pa-1'>4B - 8GB</td>\n"
          + "    <td style='border: 1px solid white;'  class='pa-1'>80</td>\n"
          + "  </tr>"
          + "</table> ",
        icon: "mdi-raspberry-pi",
        steps: [{
          index: "1",
          title: "FarmPi pre-built image installation.",
          subSteps: [
            {
              index: "1.1",
              title: "Download the FarmPi image from github or the official FarmPi mirror. Always make sure you're getting the latest version.",
              input: [
                {
                  pre_text: "Maurice Kevenaar's GitHub Release page.",
                  url: "https://github.com/mkevenaar/FarmPi/releases/latest",
                  response: "",
                },
                {
                  pre_text: "FarmPi's Official Mirror",
                  url: "https://farmpi.octofarm.net/",
                  response: "",
                },
              ],
            },
            {
              index: "1.2",
              title: "Flash the image onto your microSD Card.",
              input: [
                {
                  pre_text: "Linux Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu",
                  response: "",
                },
                {
                  pre_text: "Windows Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows",
                  response: "",
                },
                {
                  pre_text: "OSX Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos",
                  response: "",
                },
              ],
            },
            {
              index: "1.3",
              title: "Boot FarmPi after flashing the SD Card.",
              input: [],
            },
            {
              index: "4",
              title: "If your network PC supports bonjour you can find your instance at http://farmpi.local or the ip address that your router gave the device.",
              input: [],
            },
            {
              index: "5",
              title: "More configuration options can be found on Mkevenaar's github but you will be able to start adding printers to your FarmPi instance on it's web interface.",
              input: [],
            },
          ],
        }, {
          index: "2",
          title: "Manual Installation on Raspberry Pi with Ubuntu 64-bit.",
          subSteps: [
            {
              index: "2.1",
              title: "Ubuntu Download for Raspberry Pi",
              input: [
                {
                  pre_text: "Download Ubuntu 64-bit 20.04 for your Raspberry Pi Hardware.",
                  code: "https://ubuntu.com/download/raspberry-pi",
                  response: "Make sure it's Ubuntu Server 20.04.1 LTS",
                },
              ],
            },
            {
              index: "2.2",
              title: "Flash the image onto your microSD Card.",
              input: [
                {
                  pre_text: "Linux Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-ubuntu",
                  response: "",
                },
                {
                  pre_text: "Windows Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-windows",
                  response: "",
                },
                {
                  pre_text: "OSX Machine",
                  url: "https://ubuntu.com/tutorials/create-an-ubuntu-image-for-a-raspberry-pi-on-macos",
                  response: "",
                },
              ],
            },
            {
              index: "2.3",
              title: "Boot the ubuntu server after inserting the SD card.",
              input: [],
            },
            {
              index: "4",
              title: "Login to the Pi command line",
              input: [],
            },
            {
              index: "5",
              title: "Continue on with the Linux (Ubuntu) setup.",
              input: [],
            },
          ],
        }],
      },
      {
        system: "Docker",
        title: "Below are some different docker-compose configuration examples you can use. This does not detail how to setup/user docker itself, it assumes you know that. "
          + "More information can be found in our <a href='https://github.com/OctoFarm/OctoFarm/blob/development/docs/USING_DOCKER.md' target='_blank'> Using Docker</a> documentation."
          + " Our images are all hosted on DockerHub and more information about the current tags and what-not can be found here: <a href='https://hub.docker.com/r/octofarm/octofarm/' target='_blank'>OctoFarm DockerHub</a>",
        icon: "mdi-docker",
        steps: [{
          index: "1",
          title: "docker-compose.yml examples",
          subSteps: [
            {
              index: "1.1",
              title: "Main OctoFarm Image",
              input: [
                {
                  pre_text: "The main image was the first image created for OctoFarm. It includes just the OctoFarm service and requires a separate mongodb instance for the database."
                    + "It's based from the ubuntu 64-bit image and comes with everything you need to run OctoFarm except the database portion. Users are free to setup that however they wish"
                    + "be it an remote instance or internal locally hosted.",
                  pre: "services:<br>"
                    + "&nbsp;&nbsp;octofarm:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;container_name: octofarm <br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;image: octofarm/octofarm:latest<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;restart: always<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;mem_limit: 400m # Feel free to adjust! 400 MB is quite high and a safety limit.<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;ports:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- 4000:4000 # port of SYSTEM : port of CONTAINER<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;environment:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- MONGO=mongodb://MONGO_ROOTUSER_HERE:MONGO_PASSWORD_HERE@mongodb:27017/octofarm?authSource=admin<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;volumes:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;# Volumes as local relative folders (validate with 'docker-compose config')<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/logs:/app/logs<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/scripts:/app/scripts<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/image:/app/images<br>",
                },
              ],
            },
            {
              index: "1.2",
              title: "Alpine OctoFarm Image",
              input: [
                {
                  pre_text: "Alpine is a recent new addition to the OctoFarm containers. It was added by a user named torresmvl and is a seriously slimmed down version of the main image."
                    + "It also supports amd64, armhf, aarch64, i386 architectures so should run on most things. It comes with everything needed to run OctoFarm except for the database portion. "
                   + " Users are free to setup that however they wish be it an remote instance or internal locally hosted.",
                  pre: "services:<br>"
                    + "&nbsp;&nbsp;octofarm:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;container_name: octofarm <br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;image: octofarm/octofarm:alpine-latest<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;restart: always<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;mem_limit: 400m # Feel free to adjust! 400 MB is quite high and a safety limit.<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;ports:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- 4000:4000 # port of SYSTEM : port of CONTAINER<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;environment:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- MONGO=mongodb://MONGO_ROOTUSER_HERE:MONGO_PASSWORD_HERE@mongodb:27017/octofarm?authSource=admin<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;volumes:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;# Volumes as local relative folders (validate with 'docker-compose config')<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/logs:/app/logs<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/scripts:/app/scripts<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/image:/app/images<br>",
                },
              ],
            },
            {
              index: "1.3",
              title: "Monolithic OctoFarm Image",
              input: [
                {
                  pre_text: "Monolithic is an all in one OctoFarm image. It was added by a user named Mearman is an all in one image based off the original OctoFarm image."
                    + "It includes the OctoFarm service and the MongoDB image so is a great one to use for people who just want an all in one container without messing with a"
                    + " database setup.",
                  pre: "services:<br>"
                    + "&nbsp;&nbsp;octofarm:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;container_name: octofarm <br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;image: octofarm/octofarm:monolithic-latest<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;restart: always<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;mem_limit: 400m # Feel free to adjust! 400 MB is quite high and a safety limit.<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;ports:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- 4000:4000 # port of SYSTEM : port of CONTAINER<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;volumes:<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;# Volumes as local relative folders (validate with 'docker-compose config')<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/logs:/app/logs<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/scripts:/app/scripts<br>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/image:/app/images<br>"
                     + "&nbsp;&nbsp;&nbsp;&nbsp;- ./OctoFarm/data:/data/db<br>",
                },
              ],
            },
          ],
        }],
      },
      {
        system: "OctoFarm Service",
        title: "Follow the steps below to enable OctoFarms Service",
        icon: "mdi-run",
        steps: [
          {
            index: "1",
            title: "Setup the OctoFarm service, required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)",
            subSteps: [
              {
                index: "1.1",
                title: "Generate a pm2 startup script.",
                input: [
                  {
                    pre_text: "",
                    code: "pm2 startup",
                    response: "Example: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi",
                  },
                ],
              },
              {
                index: "1.2",
                title: "Save the running services",
                input: [
                  {
                    pre_text: "",
                    code: "pm2 save",
                    response: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    frequent_questions: [
      {
        question: "I've installed but I can't access the web interface?",
        answer: "This is usually down to MongoDB instance not starting or been incorrectly installed. Make sure it's running and restart OctoFarm.",
      },
      {
        question: "OctoFarm won't connect to my printer?",
        answer: "There's a few things to check here. Make sure you've followed the OctoPrint setup above and restarted it after enabling CORS. "
          + "If you have multiple OctoPrint users then you need to double check you've provided the correct key+user combination. "
          + "Look in the Printer Settings to see which user OctoFarm is connecting with. It's hard coded so you'll have to provide the key for that user. For more information: "
          + "<a href='https://github.com/OctoFarm/OctoFarm/issues/302' target='_blank' class='text-decoration-none'>Click Here</a>",
      },
      {
        question: "Commands fail to send to OctoPrint but status updates?",
        answer: "This is usually a routing issue. Make sure the client your accessing OctoFarm from can connect to the OctoPrint instances as the commands are currently sent client side.",
      },
    ],
  }),
};
</script>
