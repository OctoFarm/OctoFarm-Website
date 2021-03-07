// Page active tracking
let isActive = {
  home: "",
  about: "",
  blog: "",
  sponsorship: "",
  merchandise: "",
  download: "",
  wiki: "",
  installation: "",
};

function setActivePage(page) {
  for (var property in isActive) {
    if (isActive.hasOwnProperty(property)) {
      if (property === page) {
        isActive[property] = "active";
      } else {
        isActive[property] = "";
      }
    }
  }
}

function returnPages() {
  return isActive;
}

exports.returnPages = returnPages;
exports.setActivePage = setActivePage;
