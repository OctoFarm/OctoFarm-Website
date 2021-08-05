<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container class="pa-0 mt-5">
          <v-card
            class="mb-5"
          >
            <v-alert
              class="ma-5"
              border="right"
              colored-border
              type="error"
              elevation="2"
            >
              This is currently disabled whilst the server undergoes some changes. Hopefully will be back soon enough.
            </v-alert>
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
                <v-card-text class="font-weight-thin">
                  There is an online version available of OctoFarm for anyone to try out.
                  Just visit the address below and login with the details provided.
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
                  Current Caveats
                </v-card-title>
                <v-card-text class="font-weight-thin">
                  All of the interfaces will load, but they currently load with 0 user permissions. This results in an empty "Printers" page, and also reduced settings amount.
                  You sadly won't see any pictures displayed from the Thumbnail Plugin I setup as there is no routing setup to the OctoPrint instances. You can certainly get a
                  feel for OctoFarms interface though so I still feel it's worth having a check out before you install. <br> We will hopefully be improving this testing instance
                  going forward.
                </v-card-text>
                <v-card-text class="font-weight-thin">
                  <v-btn
                    color="primary"
                    href="https://testing.octofarm.net"
                    target="_blank"
                    disabled
                  >
                    OctoFarm Test Instance
                  </v-btn><br>
                  <b>Username: </b><p>Test</p>
                  <b>Password: </b><p>test_user_123</p>
                </v-card-text>
              </v-col>
            </v-row>
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

  }),
  methods: {
  },
};
</script>
