<template>
  <v-row dense>
    <v-col
      xs="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
    >
      <v-card class="mb-5">
        <v-card-title>Latest Posts</v-card-title>
      </v-card>
    </v-col>
    <v-col
      v-for="post in posts"
      :key="post.title"
      md="12"
      lg="6"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
          >
            <v-card-text>
              <span class="text--primary text-h6">{{ post.title }}</span>
            </v-card-text>
            <v-img
              position="center center"
              class="white--text align-end"
              height="200px"
              :src="post.feature_image"
              :lazy-src="post.feature_image"
            />
            <v-card-text class="mt-1 pt-0">
              <span class="text--primary"> Written by </span>{{ post.authors[0].name }} <span class="float-right">{{ prettyDate(post.published_at) }} </span>
            </v-card-text>
            <v-card-text class="mt-2 pt-2 text--primary">
              {{ post.excerpt }}
            </v-card-text>

            <v-card-text class="mt-1 pt-0">
              <small><span class="text--secondary" /><v-icon small>mdi-tag</v-icon>{{ printTagList(post.tags) }} <span class="float-right">Reading Time: {{ post.reading_time }} minutes</span></small>
            </v-card-text>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="black"
              >
                <v-btn
                  color="secondary"
                  :to="rewriteBlogUrl(post.slug)"
                >
                  Read More...
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
import { rewriteBlogUrl, prettyDate, printTagList } from "@/utils/helpers.utils";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => ({
    hover: false,
  }),
  methods: {
    prettyDate,
    rewriteBlogUrl,
    printTagList,
  },
};
</script>
