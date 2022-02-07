<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="10"
      >
        <Feed :posts="posts" />
      </v-col>
      <v-col
        sm="12"
        md="2"
      >
        <Nav :tag-list="tagList" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Pagination
          :pages.sync="pages.length"
          :page-number.sync="pageNumber"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pagination from "@/components/Blog/Pagination.vue";
import Feed from "@/components/Blog/Feed.vue";
import Nav from "@/components/Blog/Nav.vue";

import { getLatestBlogPostsList, getPagesList, getTagsList } from "@/utils/ghost-api.utils";

export default {
  components: { Pagination, Feed, Nav },
  async beforeMount() {
    // this.pages = await this.getPagesList({});
    this.posts = await this.getLatestBlogPostsList({ page: this.pageNumber, include: "tags,authors" });
    this.tagList = await this.getTagsList();
  },
  data: () => ({
    tab: null,
    posts: [],
    pages: ["1"],
    pageNumber: 1,
    tagList: [],
  }),
  methods: {
    getLatestBlogPostsList,
    getPagesList,
    getTagsList,
  },
};
</script>
<style>
.kg-image {
  margin-right: auto;
  margin-left: auto;
}

.kg-embed-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.kg-card.kg-toggle-card .kg-toggle-heading-text {
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
