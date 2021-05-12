const express = require("express");

const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

let { getRelease } = require("../lib/githubCheck.js");
let { getDockerhub } = require("../lib/dockerhubCheck.js");
const { setActivePage, returnPages } = require("../lib/pageTracking.js");

// Home Page
router.get("/", (req, res) => {
  octoFarmVersion = getRelease();
  setActivePage("home");
  let isActive = returnPages();
  res.render("home", {
    page: "Home",
    octoFarmVersion,
    isActive,
  });
});

// About Page
router.get("/about", (req, res) => {
  setActivePage("about");
  let isActive = returnPages();
  res.render("about", {
    page: "About",
    isActive,
  });
});

// Sponsor Page
router.get("/sponsor", (req, res) => {
  setActivePage("sponsorship");
  let isActive = returnPages();
  res.render("sponsorship", {
    page: "Sponsorship",
    isActive,
  });
});

// Blog Page
router.get("/blog", (req, res) => {
  setActivePage("blog");
  let isActive = returnPages();
  res.render("blog", {
    page: "Blog",
    isActive,
  });
});

// Download Page
router.get("/download", (req, res) => {
  setActivePage("download");
  let isActive = returnPages();
  let releaseNotes = getRelease();
  let dockerHub = getDockerhub();
  res.render("download", {
    page: "Download",
    isActive,
    releaseNotes,
    dockerHub,
  });
});

// Merchandise Page
router.get("/wiki", (req, res) => {
  setActivePage("wiki");
  let isActive = returnPages();
  res.render("wiki", {
    page: "Wiki",
    isActive,
  });
});

// Installation Page
router.get("/installation", (req, res) => {
  setActivePage("installation");
  let isActive = returnPages();
  res.render("installation", {
    page: "Installation",
    isActive,
  });
});

module.exports = router;
