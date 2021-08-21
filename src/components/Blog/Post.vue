<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="1"
        lg="2"
      />
      <v-col
        sm="12"
        md="10"
        lg="8"
      >
        <v-card
          v-if="post"
          class="mx-auto"
        >
          <v-img
            position="center center"
            class="white--text align-end"
            height="400"
            :src="post.feature_image"
            :lazy-src="post.feature_image"
          />
          <v-card-text>
            <span class="text--primary text-h4">{{ post.title }}</span>
            <small> <span class="float-right">Reading Time: {{ post.reading_time }} minutes</span></small>
          </v-card-text>
          <v-card-text
            class="mt-2 pt-2 text--secondary"
            v-html="post.html"
          />
          <v-card-text class="mt-1 pt-0">
            <span class="text--primary"> Written by </span>{{ post.authors[0].name }} <span class="float-right">{{ prettyDate(post.published_at) }} </span>
          </v-card-text>
          <v-card-text class="mt-1 pt-0">
            <small><span class="text--secondary" /><v-icon small>mdi-tag</v-icon>{{ printTagList(post.tags) }}</small>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        sm="12"
        md="1"
        lg="2"
      />
    </v-row>
  </v-container>
</template>
<script>
import { prettyDate, printTagList } from "@/utils/helpers.utils";
import { getBlogPost } from "@/utils/ghost-api.utils";

export default {
  data: () => ({
    post: false,
  }),
  async beforeMount() {
    this.post = await this.getBlogPost({ slug: this.$route.params.post_id, include: "tags,authors" });
  },
  methods: {
    prettyDate,
    printTagList,
    getBlogPost,
  },
  computed: {

  },
};
</script>
<style>
/*Override the html from ghost*/
p {
  font-size: 1.2em;
}
li {
  font-size: 1.2em;
}
</style>
