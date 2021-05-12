const fetch = require("node-fetch");

let octofarm_pulls = "Failed to fetch";
let octofarm_stars = "Failed to fetch";

let interval = false;

function getDockerhub() {
  return {
    octofarm_pulls,
    octofarm_stars,
  };
}

async function fetchVersion() {
  let grab = await fetch(
    "https://hub.docker.com/v2/repositories/octofarm/octofarm",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (grab.status === 200) {
    grab = await grab.json();

    octofarm_pulls = grab.pull_count;
    octofarm_stars = grab.star_count;
  } else {
    console.log("Seems dockerhub is down...");
  }
}

async function init() {
  if (!interval) {
    fetchVersion();
    interval = setInterval(async () => {
      fetchVersion();
    }, 3600 * 1000);
  }
}

init();
exports.getDockerhub = getDockerhub;
