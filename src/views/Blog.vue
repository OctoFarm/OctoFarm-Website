<template>
  <v-container>
    <v-row>
      <v-col lg="4">
        SIDEBAR
      </v-col>
      <v-col lg="8">
        CONTENT
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    tab: null,
    newPosts: [],
  }),
  created() {
    this.getPost();
    this.getPages();
  },
  methods: {
    getPost() {
      this.$store.state.ghostApi.posts
        .browse({ page: 2, include: "tags,authors" })
        .then((posts) => {
          posts.forEach((post) => {
            console.log(post);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
