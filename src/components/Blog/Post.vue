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
.kg-bookmark-card,
.kg-bookmark-card * {
  box-sizing: border-box;
}

.kg-bookmark-card,
.kg-bookmark-publisher {
  position: relative;
  width: 100%;
}

.kg-bookmark-card a.kg-bookmark-container,
.kg-bookmark-card a.kg-bookmark-container:hover {
  display: flex;
  text-decoration: none;
  border-radius: 3px;
  border: 1px solid rgb(124 139 154 / 25%);
  overflow: hidden;
  color: inherit;
}

.kg-bookmark-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  overflow: hidden;
}

.kg-bookmark-title {
  font-size: 1.5rem;
  line-height: 1.4em;
  font-weight: 600;
}

.kg-bookmark-description {
  display: -webkit-box;
  font-size: 1.4rem;
  line-height: 1.5em;
  margin-top: 3px;
  font-weight: 400;
  max-height: 44px;
  overflow-y: hidden;
  opacity: 0.7;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.kg-bookmark-metadata {
  display: flex;
  align-items: center;
  margin-top: 22px;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;
}

.kg-bookmark-metadata > *:not(img) {
  opacity: 0.7;
}

.kg-bookmark-icon {
  width: 20px;
  height: 20px;
  margin-right: 6px;
}

.kg-bookmark-author,
.kg-bookmark-publisher {
  display: inline;
}

.kg-bookmark-publisher {
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 240px;
  white-space: nowrap;
  display: block;
  line-height: 1.65em;
}

.kg-bookmark-metadata > span:nth-of-type(2) {
  font-weight: 400;
}

.kg-bookmark-metadata > span:nth-of-type(2):before {
  content: "•";
  margin: 0 6px;
}

.kg-bookmark-metadata > span:last-of-type {
  overflow: hidden;
  text-overflow: ellipsis;
}

.kg-bookmark-thumbnail {
  position: relative;
  flex-grow: 1;
  min-width: 33%;
}

.kg-bookmark-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 2px 2px 0;
}
blockquote {
  margin-right: 0;
  margin-left: 0;
  color: var(--dark-gray-color);
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
}

blockquote:not([class]) {
  padding-left: 2rem;
  border-left: 4px solid var(--mid-gray-color);
}

blockquote strong {
  font-weight: 800;
}

ul,
ol {
  padding-left: 35px;
}
iframe,
embed {
  display: block;
  overflow: hidden;
  width: 100%;
  border: 0;
}

figure {
  margin: 0;
}

figcaption {
  margin-top: 15px;
  color: var(--dark-gray-color);
  font-size: 14px;
  text-align: center;
}

pre {
  overflow-x: scroll;
  padding: 16px 22px;
  line-height: 1.5;
  white-space: pre;
  hyphens: none;
  background-color: var(--light-gray-color);
  border-radius: 5px;
  -webkit-overflow-scrolling: touch;
}

code {
  font-family: var(--font-mono);
  font-size: 14px;
}

:not(pre) > code {
  padding: 3px 4px;
  background-color: var(--light-gray-color);
  border-radius: 3px;
}

hr {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 5px;
  height: 5px;
  border: 0;
  background-color: var(--dark-gray-color);
  border-radius: 50%;
}

hr::before,
hr::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: var(--dark-gray-color);
  border-radius: 50%;
}

hr::before {
  right: 20px;
}

hr::after {
  left: 20px;
}
p {
  font-size: 1.2em !important;
}
li {
  font-size: 1.2em !important;
}
.kg-image {
  margin-right: auto;
  margin-left: auto;
  width:100%;
  height:100%;
}

.kg-embed-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.kg-card .kg-toggle-card .kg-toggle-heading-text {
  font-size: 1.8rem;
  font-weight: 700;
}

.has-serif-title .kg-toggle-card .kg-toggle-heading-text {
  font-family: var(--font-serif);
}

.kg-callout-card-accent a {
  text-decoration: underline;
}

blockquote.kg-blockquote-alt {
  font-style: normal;
  line-height: 1.5;
  color: var(--secondary-text-color);
}

.has-serif-title .kg-card.kg-header-card h2.kg-header-card-header {
  font-family: var(--font-serif);
}

.has-serif-body .kg-header-card h3.kg-header-card-subheader {
  font-family: var(--font-serif);
}

.kg-canvas {
  display: grid;
  grid-template-columns:
        [full-start]
        minmax(4vw, auto)
        [wide-start]
        minmax(auto, 105px)
        [main-start]
        min(750px, calc(100% - 8vw))
        [main-end]
        minmax(auto, 105px)
        [wide-end]
        minmax(4vw, auto)
        [full-end];
}

.kg-canvas > * {
  grid-column: main-start/main-end;
}

.kg-width-wide {
  grid-column: wide-start/wide-end;
}

.kg-width-full {
  grid-column: full-start/full-end;
}
</style>
