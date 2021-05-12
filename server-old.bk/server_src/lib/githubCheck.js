const fetch = require("node-fetch");

let octoFarmVersion = "Failed to fetch";
let octoFarmReleaseNotes = "Failed to fetch";
let octoFarmReleaseDate = "Failed to fetch";
let octoFarmReleaseName = "Failed to fetch";

let interval = false;

function getRelease() {
  return {
    octoFarmReleaseName,
    octoFarmVersion,
    octoFarmReleaseNotes,
    octoFarmReleaseDate,
  };
}

async function fetchVersion() {
  let latestVersion = await fetch(
    "https://api.github.com/repos/NotExpectedYet/OctoFarm/releases/latest",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (latestVersion.status === 200) {
    latestVersion = await latestVersion.json();
    if (
      typeof latestVersion.tag_name !== "undefined" &&
      latestVersion.tag_name !== octoFarmVersion
    ) {
      octoFarmReleaseNotes = latestVersion.body;
      octoFarmVersion = latestVersion.tag_name;
      octoFarmReleaseDate = latestVersion.published_at;
      octoFarmReleaseName = latestVersion.name;
    }
  } else {
    console.log("Seems github is down...");
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
exports.getRelease = getRelease;
