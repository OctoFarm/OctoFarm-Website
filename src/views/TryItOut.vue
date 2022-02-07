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
                class="text-center"
              >
                <v-card-title class="d-inline-flex">
                  Try out OctoFarm!
                </v-card-title>
                <v-card-text>
                  There is an online version available of OctoFarm for anyone to try out.
                  Just visit the address below and login with the details provided.
                </v-card-text>
                <v-card-text>
                  The account below will log you in with OctoFarms user permissions. You may use every page apart from some parts of "Printers" and "System".
                  You can start and stop prints, upload files and do pretty much everything you would normally be allowed to do on an OctoFarm install.
                  All data will be reset to default values on a daily timer.
                </v-card-text>
                <v-card-text>
                  <h4>Currently down due to server issues, will work to get it back up ASAP!</h4>
                </v-card-text>
                <v-card-text>
                  <v-btn
                    color="primary"
                    href="https://testing.octofarm.net"
                    target="_blank"
                    disabled
                    @click="testingEvent()"
                  >
                    OctoFarm Test Instance
                  </v-btn>
                </v-card-text>
                <v-card-text>
                  <b>Username: </b><p>Test</p>
                  <b>Password: </b><p>test_user_123</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card
            class="mb-5"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                sm="12"
              >
                <v-img src="~@/assets/screenshots/dashboard.png" />
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Plausible from "plausible-tracker";

const { trackEvent } = Plausible();

export default {
  name: "TryItOut",
  data: () => ({

  }),
  methods: {
    testingEvent() {
      trackEvent("Testing_Access");
    },
  },
};
</script>
