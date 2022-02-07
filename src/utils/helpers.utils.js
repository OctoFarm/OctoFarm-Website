export function rewriteBlogUrl(slug) {
  return `/blog/${slug}`;
}

export function printTagList(tags) {
  let tagList = "";
  tags.forEach((tag, index) => {
    if (index === tags.length - 1) {
      tagList += `${tag.name}`;
    } else {
      tagList += `${tag.name}, `;
    }
  });
  return tagList;
}

export function prettyDate(date) {
  return new Date(date)
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ")
    .replace(/( \d+)$/, ",$1");
}
