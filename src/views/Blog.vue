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
