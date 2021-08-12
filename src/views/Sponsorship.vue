<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="mt-5"
    >
      <v-col
        class="text-center"
        lg="12"
        md="12"
      >
        <v-card class="px-15">
          <v-card-title class="d-inline-flex">
            Become a Sponsor / Donate
          </v-card-title>

          <v-card-text class="px-15">
            This project is built by an English bloke in his spare time, around a 9-5 job, to boot.
            If OctoFarm has helped you out at all then I'd be grateful if you could donate towards
            the project. It keeps me going and heck, who doesn't dream of been able to work on their
            passion project daily.
          </v-card-text>
          <v-row>
            <v-col>
              <v-btn
                v-for="spon in methods_of_sponsor"
                :key="spon.title"
                class="ma-5"
                outlined
                rounded
                text
                :href="spon.url"
                target="_blank"
                :color="spon.btn_colour"
              >
                <v-icon>{{ spon.icon }}</v-icon>  {{ spon.title }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="12"
        md="6"
        lg="8"
      >
        <v-card>
          <v-row
            align="center"
            justify="center"
            class="mt-5"
          >
            <v-col
              class="text-center"
              lg="12"
              md="12"
            >
              <v-card-title class="d-inline-flex">
                How to Sponsor / Donate to OctoFarm
              </v-card-title>

              <v-card-text>
                There are few ways to donate towards the development of OctoFarm. Some have perks and benefits, others do not.
              </v-card-text>
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="pa-5"
              v-for="spon in methods_of_sponsor"
              :key="spon.title"
              sm="12"
              lg="6"
            >
              <v-card
                class="mx-auto"
                tile
                outlined
              >
                <v-toolbar
                  :class="spon.btn_colour"
                >
                  <v-app-bar-nav-icon> <v-icon>{{ spon.icon }}</v-icon> </v-app-bar-nav-icon>

                  <v-toolbar-title>{{ spon.title }}</v-toolbar-title>
                </v-toolbar>
                <v-list-item>
                  <v-list-item-content>{{ spon.text }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>{{ spon.text2 }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-btn
                      outlined
                      rounded
                      text
                      :href="spon.url"
                      target="_blank"
                      :color="spon.btn_colour"
                    >
                      {{ spon.btn_text }}
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        sm="12"
        md="6"
        lg="4"
      >
        <v-card>
          <v-row
            align="center"
            justify="center"
            class="mt-5"
          >
            <v-col
              class="text-center"
              lg="12"
              md="12"
            >
              <v-card-title class="d-inline-flex">
                Current Sponsors!
              </v-card-title>

              <v-card-text>
                Massive big thank you to everyone below! Everyone here is on my Tier 4+ Patron or a large donater outside of that.
                You guys help keep me motivated and not let OctoFarm fall by the wayside. Each of you get me a little closer to
                working on this full time as well so you have my warmest regards.
              </v-card-text>
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              v-for="spon in $store.state.statistics.patreons.websitePledges"
              :key="spon.name"
              sm="12"
              md="12"
              lg="6"
            >
              <v-card
                outlined
                class="ma-2 text-center"
              >
                <v-list-item two-line>
                  <v-avatar
                    class="profile"
                    color="grey"
                    size="50"
                  >
                    <v-img :src="spon.thumb" />
                  </v-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      {{ spon.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    methods_of_sponsor: [
      {
        title: "Paypal",
        text: "Paypal is available as a donation option if you'd like to give something back to the developer James. There are no benefits for you apart from making James very happy, not happy because of the money... but happy because he can spend it on steak!\n",
        text2: "All funding from this source will go towards James himself, he will more than likely be using it to buy steak and fuel his coding exploits that way. It is certainly most appreciated! A massive big thank you to everyone who donates.",
        btn_colour: "blue",
        icon: "mdi-credit-card",
        btn_text: "Dontate",
        url: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QGBJML3E7268L&source=url",
      },
      {
        title: "Buy me a Steak!",
        text: "Buy me a steak (coffee) is dual purpose, you can make longer term donations and also short one time donations if you don't have paypal / patreon. There are some kick backs offered too!",
        text2: "Lower level funding from this source will go towards James himself for steak! Higher levels are directly put back into the project as stated when signing up.",
        btn_colour: "orange",
        icon: "mdi-coffee",
        btn_text: "Buy me a coffee",
        url: "https://buymeacoffee.com/OctoFarm",
      },
      {
        title: "Patreon",
        text: "My Patreon page is mainly for making a long term set of donations to the project. £10+ you get access to the \"secret\" discord channel and your name inside the application as an official sponsor!\n",
        text2: "All funding from this source is put back directly into the project. Whether this be forwarding that donation on to Gina at Octoprint (Whom without this project wouldn't exist!) or other projects used in this project, or to pay for web services and printing equipment. \n"
        + "\n Each level of patreon now comes with free merchandise!",
        btn_colour: "red",
        icon: "mdi-patreon",
        btn_text: "Donate",
        url: "https://www.patreon.com/NotExpectedYet",
      },
      {
        title: "Full Time Sponsor",
        text: "As mentioned above I code this application around my full time job. If any persons or company would like to sponsor me to work on this full time then please contact me using the button below.\n",
        text2: "I have massive plans for the development future of this application and having a full time sponsor would allow me to push updates much more frequently and continue supporting the wonderful OctoPrint and now OctoFarm communities. ",
        btn_colour: "secondary",
        icon: "mdi-heart",
        btn_text: "Contact",
        url: "mailto:info@notexpectedyet.com",
      },
    ],
  }),
};
</script>
