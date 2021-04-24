<template>
  <v-container>
    <v-card
      class="mb-5"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center pa-10"
          lg="12"
          md="12"
        >
          <v-card-title class="d-inline-flex">
            Current Sponsors!
          </v-card-title>

          <v-card-text>
            Massive big thank you to everyone below! Everyone here is on my Tier 4+ Patron or a large donator outside of that.
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
          class="ma-5"
          v-for="spon in sponsors"
          :key="spon.name"
          xl="2"
          lg="3"
          md="4"
        >
          <v-card
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  {{ spon.name }}
                </v-list-item-title>
              </v-list-item-content>
              <v-icon
                tile
                size="80"
                color="yellow"
              >
                mdi-trophy
              </v-icon>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                v-if="spon.url !== ''"
                :href="spon.url"
                target="_blank"
              >
                {{ spon.url_title }}
              </v-btn>
              <v-btn
                outlined
                rounded
                text
                v-else
                href="mailto:info@notexpectedyet.com"
              >
                Contact to add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      class="mb-5"
    >
      <v-row
        align="center"
        justify="center"
        class="ma-10"
      >
        <v-col
          class="text-center"
          lg="12"
          md="12"
        >
          <v-card-title class="d-inline-flex">
            Become a Sponsor / Donate
          </v-card-title>

          <v-card-text>
            This project is built by an English bloke in his spare time, around a 9-5 job, to boot.
            If OctoFarm has helped you out at all then I'd be grateful if you could donate towards
            the project. It keeps me going and heck, who doesn't dream of been able to work on their
            passion project daily.
          </v-card-text>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="ma-5"
          v-for="spon in methods_of_sponsor"
          :key="spon.title"
          xl="2"
          lg="3"
          md="4"
        >
          <v-card
            class="mx-auto"
            tile
            outlined
          >
            <v-toolbar
              class="secondary"
            >
              {{ spon.title }}
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    sponsors: [
      {
        name: "Derek",
        url_title: "3D Printed Debris",
        url: "https://www.3dprinteddebris.com/",
      },
      {
        name: "Insertion",
        url_title: "",
        url: "",
      },
      {
        name: "lactose",
        url_title: "",
        url: "",
      },
      {
        name: "Paul Helinski",
        url_title: "",
        url: "",
      },
      {
        name: "Nick Walke",
        url_title: "",
        url: "",
      },
      {
        name: "Alex Wiecke",
        url_title: "",
        url: "",
      },
      {
        name: "Michael Portsmore",
        url_title: "",
        url: "",
      },
      {
        name: "Josh Wright",
        url_title: "",
        url: "",
      },
      {
        name: "3DCT",
        url_title: "",
        url: "",
      },
    ],
    methods_of_sponsor: [
      {
        title: "Paypal",
        text: "Paypal is available as a donation option if you'd like to give something back to the developer James. There are no benefits for you apart from making James very happy, not happy because of the money... but happy because he can spend it on steak!\n",
        text2: "All funding from this source will go towards James himself, he will more than likely be using it to buy steak and fuel his coding exploits that way. It is certainly most appreciated! A massive big thank you to everyone who donates.",
        btn_colour: "blue",
        icon: "",
        btn_text: "Dontate",
        url: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QGBJML3E7268L&source=url",
      },
      {
        title: "Patreon",
        text: "My Patreon page is mainly for making a long term set of donations to the project. £10+ you get access to the \"secret\" discord channel, and also early door previews and code samples.\n",
        text2: "All funding from this source is put back directly into the project. Whether this be forwarding that donation on to Gina at Octoprint (Whom without this project wouldn't exist!) or other projects used in this project, or to pay for web services and printing equipment.",
        btn_colour: "red",
        icon: "",
        btn_text: "Donate",
        url: "https://www.patreon.com/NotExpectedYet",
      },
      {
        title: "Full Time Sponsor",
        text: "As mentioned above I code this application around my full time job. If any persons or company would like to sponsor me to work on this full time then please contact me using the button below.\n",
        text2: "I have massive plans for the development future of this application and having a full time sponsor would allow me to push updates much more frequently and continue supporting the wonderful OctoPrint and now OctoFarm communities.",
        btn_colour: "secondary",
        icon: "mailto:info@notexpectedyet.com",
        btn_text: "Contact",
        url: "",
      },
    ],
  }),
};
</script>
