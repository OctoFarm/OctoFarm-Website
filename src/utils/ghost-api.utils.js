import GhostContentAPI from "@tryghost/content-api";

const ghostApi = new GhostContentAPI({
  url: "https://blog.octofarm.net",
  key: process.env.VUE_APP_GHOST_CONTENT_API_KEY,
  version: "v3",
});

export function getBlogPost(options) {
  return ghostApi.posts
    .read(options)
    .catch((err) => {
      console.error(err);
    });
}

export function getLatestBlogPostsList(options) {
  return ghostApi.posts
    .browse(options)
    .catch((err) => {
      console.error(err);
    });
}
export function getTagsList() {
  return ghostApi.tags
    .browse({ order: "slug ASC" })
    .catch((err) => {
      console.error(err);
    });
}
export function getPagesList(options) {
  return ghostApi.pages
    .browse(options)
    .catch((err) => {
      console.error(err);
    });
}
