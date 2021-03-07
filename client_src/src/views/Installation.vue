<template>
  <v-container class="pa-0 mt-5">
    <v-card
      class="mb-5"
    >
      <v-row>
        <!-- OctoFarm Setup-->
        <v-col
          lg="4"
          md="6"
          sm="12"
          xs="12"
          class="text-center"
        >
          <v-card-title
            class="d-inline-flex"
          >
            OctoFarm Setup
          </v-card-title>
          <v-card-text class="font-weight-regular">
            Due to OctoFarms code base it's very system agnostic. There are however some limitations to what systems it's database layer uses, i.e. needs to be 64-bit.
            <br>Check the configurations options on this page for examples.
            <br>Your setup is not limited to these options however I will mention that OctoFarm is a server application at it's core. It requires mainly an always on device to function to it's full capabilities.
            <br><b>NOTE:</b> OctoFarm does not require internet access! but some features may / may not work without it.
          </v-card-text>
          <v-card-text class="font-weight-regular">
            Application Requirements
          </v-card-text>
          <v-card-text class="font-weight-thin">
            <v-timeline>
              <v-timeline-item>NodeJS - v12.18.4 (I only support the LTS versions, currently V12)</v-timeline-item>
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
          <v-tabs
            fixed-tabs
            show-arrows
          >
            <v-tab>
              <v-icon left>
                mdi-infinity
              </v-icon>
              OctoFarm Server
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-printer-3d-nozzle
              </v-icon>
              OctoPrint Setup
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-web
              </v-icon>
              Remote Access
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-comment-question-outline
              </v-icon>
              F.A.Q
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  You will need an always on piece of physical hardware to setup this configuration but everything you need for OctoFarm is all installed on a single device.
                  You can install any of the OctoFarm docker packages or use one of the installation instructions below to setup the production method.
                </v-card-text>
                <v-card-title class="font-weight-thin">
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
                <v-card-title class="font-weight-thin">
                  Operating System Recommendations
                </v-card-title>
                <v-card-text>
                  OctoFarm can be installed on (but not limited to) the following systems (must be 64-bit):
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
                        Desktop PC / Server
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon
                        color="primary"
                      >
                        mdi-apple
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Apple
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
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
                <v-card-title class="font-weight-thin">
                  1. Settings Preparations
                </v-card-title>
                <v-card-text>
                  <v-row
                    justify="center"
                  >
                    <v-col
                      cols="3"
                      lg="3"
                      md="6"
                      sm="12"
                      xs="12"
                      class="text-center"
                    >
                      Due to OctoFarm residing on a different host to your OctoPrint instance you will need to enable CORS to stop the system failing any attempts to communicate with the API.
                    </v-col>
                    <v-col
                      cols="9"
                      lg="9"
                      md="6"
                      sm="12"
                      xs="12"
                    >
                      <v-img
                        width="75%"
                        src="~@/assets/octoprintSetup/userCORSOctoPrint.png"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-title
                  class="font-weight-thin"
                >
                  2. User Preparations
                </v-card-title>
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
                      OctoFarm uses websockets to communicate in real time with the OctoPrint instance and to enable this we need to use the OctoPrint user account. OctoFarm (to attempt to save time adding printers), will make a guess and grab the first Admin user it finds.<br>
                      If you have more than a single user on your OctoPrint instance then you need to make sure to generate the API key from the User OctoFarm uses to connect. It should be the first admin user in the screenshot provided.
                      <b>NOTE:</b> It is a hard requirement that OctoFarm connects with Admin permissions. This is to enable the user to update OctoPrint system settings from OctoFarm itself, if your user is not an Admin on OctoPrint, it may fail to connect / produce unintended consequences.
                    </v-col>
                    <v-col
                      cols="9"
                      lg="9"
                      md="6"
                      sm="12"
                    >
                      <v-img
                        width="75%"
                        src="~@/assets/octoprintSetup/userSetupOctoPrint.png"
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-title class="font-weight-thin">
                  3. API Preparations
                </v-card-title>
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
                      Since OctoPrint Version 1.4.2 the websocket connection will no longer work with the global API key. (OctoPrint seems to be moving away from this key all together).
                      It is required now to either generate a Application key or OctoFarm or use a generated key that's specific to the User account. OctoFarm works with either so go with the one that most fits your setup.
                      <br><b>NOTE:</b> Make a note of the generated key and your OctoPrint's IP / Host name as you will require this to input into OctoFarm.
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
                              class="ma-5"
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
                              class="ma-5"
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
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  Due to some legacy code from when OctoFarm was a single page html file it is currently
                  impossible to host your OctoFarm instance on the internet without also hosting your OctoPrint
                  instances with it. <br>That is not recommended at all as it would leave your OctoPrint instance on the
                  internet. <br>There is the same caveat for your web camera's as well, as they would require been
                  directly accessible via the internet due to no internal routing happening with these requests.
                  <br>Currently until this changes (set for 2.X release) then the best method of accessing OctoFarm
                  remotely is with a VPN. There are various methods to setup a VPN detailed below, my personal favourite
                  is WireShark for it's simplicity.
                  <br><code><b>NOTE: </b>If you choose to host OctoFarm itself behind a reverse proxy, or with an open
                    port then you do so at your own risk. I do not recommend this setup as it's not been verified to be
                    secure and you'll also loose the ability to send commands to your OctoPrint instances.</code>
                </v-card-text>
                <v-card-title class="font-weight-thin">
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
                        WireShark
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
            <v-tab-item>
              <v-card flat>
                <v-row>
                  <v-col
                    v-for="q in frequent_questions"
                    :key="q.question"
                    class="pa-5"
                    col="12"
                    lg="6"
                    xl="3"
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
                          <p class="font-weight-thin">
                            {{ q.answer }}
                          </p>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="mb-5"
    >
      <v-row

        justify="center"
      >
        <!--        Medium-Up installations-->
        <v-col>
          <v-toolbar
            flat
            dark
          >
            <v-toolbar-title>Installation Instruction</v-toolbar-title>
          </v-toolbar>
          <v-tabs
            vertical
            dense
          >
            <v-tab
              v-for="inst in installation_instructions"
              :key="inst.icon"
              class="text-left"
            >
              <v-icon left>
                {{ inst.icon }}
              </v-icon>
              {{ inst.system }}
            </v-tab>
            <v-tab-item
              v-for="inst in installation_instructions"
              :key="inst.icon"
            >
              <v-card flat>
                <v-card-text>
                  <v-card-title>
                    {{ inst.title }}
                  </v-card-title>
                  <v-timeline dense>
                    <v-timeline-item
                      v-for="steps in inst.steps"
                      :key="inst.title + steps.index"
                      small
                    >
                      <div>
                        <v-checkbox
                          class="d-inline-flex"
                        /><h2 class="font-weight-light primary--text d-inline-flex">
                          {{ steps.index }}. {{ steps.title }}
                        </h2>
                        <div v-if="steps.input.length > 0">
                          <v-row
                            v-for="input in steps.input"
                            :key="input.code"
                          >
                            <v-col>
                              {{ input.pre_text }}
                              <code v-if="input.code">{{ input.code }}</code>
                              <v-btn
                                v-if="input.url"
                                :href="input.url"
                                target="_blank"
                              >
                                {{ input.pre_text }}
                              </v-btn>
                              <br>
                              <small>{{ input.response }}</small>
                            </v-col>
                            <v-col>
                              <v-btn
                                v-if="input.code"
                                v-clipboard:copy="input.code"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                              >
                                Copy
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
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
          input: [],
        }, {
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
        {
          index: "2",
          title: "Install NodeJS LTS v12",
          input: [
          ],
        },
        {
          index: "2.1",
          title: "Add nodeJS version 12 Repository and install with dependencies (one liner)",
          input: [
            {
              pre_text: "",
              code: "curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - sudo apt -y install nodejs gcc g++ make",
              response: "",
            },
          ],
        },
        {
          index: "2.2",
          title: "Check and make sure the nodejs version is at least v12 but less then v13",
          input: [
            {
              pre_text: "",
              code: "node --version",
              response: "Output: v12.18.3",
            },
          ],
        },
        {
          index: "3",
          title: "Install Git + pm2 then Download OctoFarm",
          input: [
          ],
        },
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
              code: "git clone https://github.com/NotExpectedYet/OctoFarm.git ~/OctoFarm",
              response: "",
            },
          ],
        },
        {
          index: "4",
          title: "Setup OctoFarm and start the service",
          input: [
          ],
        },
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
        {
          index: "5",
          title: "Profit! OctoFarm should now be running and available to access.",
          input: [
            {
              pre_text: "Double check with your favourite web browser and continue to point 6: ",
              code: "http://{your systems ip address}:4000",
              response: "",
            },
          ],
        },
        {
          index: "6",
          title: "Setup the OctoFarm service, required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)",
          input: [
            {
              pre_text: "",
              code: "pm2 startup",
              response: "Example: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi",
            },
            {
              pre_text: "",
              code: "pm2 save",
              response: "",
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
          input: [],
        }, {
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
        {
          index: "2",
          title: "Install NodeJS LTS v12",
          input: [
          ],
        },
        {
          index: "2.1",
          title: "Add nodeJS version 12 Repository and install with dependencies (one liner)",
          input: [
            {
              pre_text: "",
              code: "curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - sudo apt -y install nodejs gcc g++ make",
              response: "",
            },
          ],
        },
        {
          index: "2.2",
          title: "Check and make sure the nodejs version is at least v12 but less then v13",
          input: [
            {
              pre_text: "",
              code: "node --version",
              response: "Output: v12.18.3",
            },
          ],
        },
        {
          index: "3",
          title: "Install Git + pm2 then Download OctoFarm",
          input: [
          ],
        },
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
              code: "git clone https://github.com/NotExpectedYet/OctoFarm.git ~/OctoFarm",
              response: "",
            },
          ],
        },
        {
          index: "4",
          title: "Setup OctoFarm and start the service",
          input: [
          ],
        },
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
        {
          index: "5",
          title: "Profit! OctoFarm should now be running and available to access.",
          input: [
            {
              pre_text: "Double check with your favourite web browser and continue to point 6: ",
              code: "http://{your systems ip address}:4000",
              response: "",
            },
          ],
        },
        {
          index: "6",
          title: "Setup the OctoFarm service, required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)",
          input: [
            {
              pre_text: "",
              code: "pm2 startup",
              response: "Example: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi",
            },
            {
              pre_text: "",
              code: "pm2 save",
              response: "",
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
          title: "Download and install MongoDB",
          input: [
            {
              pre_text: "Download MongoDB",
              url: "https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.3-signed.msia",
              response: "",
            },
          ],
        }, {
          index: "2",
          title: "Download and install NodeJS",
          input: [
            {
              pre_text: "Download NodeJS",
              url: "https://nodejs.org/dist/latest-v12.x/node-v12.20.1-x64.msi",
              response: "",
            },

          ],
        },
        {
          index: "3",
          title: "Download and install Git",
          input: [
            {
              pre_text: "Download Git",
              url: "https://github.com/git-for-windows/git/releases/download/v2.30.1.windows.1/Git-2.30.1-64-bit.exe",
              response: "",
            },
          ],
        },
        {
          index: "4",
          title: "Install pm2",
          input: [
            {
              pre_text: "Open up a command prompt instance with Administrator rights and run:",
              code: "npm install pm2 -g",
              response: "",
            },
          ],
        },
        {
          index: "5",
          title: "Clone the OctoFarm repository from master (latest stable version)",
          input: [
            {
              pre_text: "Open up a second command prompt WITHOUT Administrator rights this time in the directory you'd like to install OctoFarm too.",
              code: "git clone https://github.com/NotExpectedYet/OctoFarm.git ~/OctoFarm",
              response: "",
            },
          ],
        },
        {
          index: "6",
          title: "Setup OctoFarm and start the service",
          input: [
          ],
        },
        {
          index: "6.1",
          title: "Change into the newly created OctoFarm folder",
          input: [
            {
              pre_text: "",
              code: "cd OctoFarm",
              response: "",
            },
          ],
        },
        {
          index: "6.2",
          title: "Install OctoFarms dependencies and start the service... This could take a few moments.",
          input: [
            {
              pre_text: "",
              code: "npm start",
              response: "",
            },
          ],
        },
        {
          index: "7",
          title: "Profit! OctoFarm should now be running and available to access.",
          input: [
            {
              pre_text: "Double check with your favourite web browser and continue to point 6: ",
              code: "http://{your systems ip address}:4000",
              response: "",
            },
          ],
        },
        {
          index: "8",
          title: "Setup the OctoFarm service, required to start on system boot and also use internal system functions. (must be whilst OctoFarm is running)",
          input: [
            {
              pre_text: "",
              code: "pm2 startup",
              response: "Example: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi",
            },
            {
              pre_text: "",
              code: "pm2 save",
              response: "",
            },
          ],
        },
        ],
      },
      {
        system: "RaspberryPi",
        title: "Due to MongoDB requiring a 64-bit arch the only way currently to install OctoFarm would be to use the Ubuntu 64-bit image for the Pi. Follow the steps below to  setup on a Raspberry Pi 3/4",
        icon: "mdi-raspberry-pi",
        steps: [{
          index: "1",
          title: "Download Ubuntu 64-bit",
          input: [{
            pre_text: "Ubuntu Download for Raspberry Pi",
            url: "https://ubuntu.com/download/raspberry-pi",
            response: "Make sure it's Ubuntu Server 20.04.1 LTS",
          }],
        }, {
          index: "2",
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
          index: "3",
          title: "Boot the ubuntu server after inserting the SD card.",
          input: [
          ],
        },
        {
          index: "4",
          title: "Login to the Pi command line",
          input: [
          ],
        },
        {
          index: "5",
          title: "Continue on with the Linux (Ubuntu) setup.",
          input: [

          ],
        },

        ],
      },
      {
        system: "Updating",
        title: "Follow the steps below to upgrade your OctoFarm install to the latest version.",
        icon: "mdi-update",
        steps: [
          {
            index: "1",
            title: "Whilst in the installation directory of OctoFarm run the commands below",
            input: [
              {
                pre_text: "",
                code: "npm run update",
                response: "Pull the latest information from the repository.",
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
          + "Look in the Printer Settings to see which user OctoFarm is connecting with. It's hard coded so you'll have to provide the key for that user.",
      },
      {
        question: "Commands fail to send to OctoPrint but status updates?",
        answer: "This is usually a routing issue. Make sure the client your accessing OctoFarm from can connect to the OctoPrint instances as the commands are currently sent client side.",
      },
    ],
  }),
};
</script>
