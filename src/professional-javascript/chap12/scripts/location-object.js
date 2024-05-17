"use strict";

window.addEventListener("DOMContentLoaded", () => {
  //   learnLocation();
  learnReplace();
});

const baidu = "https://www.baidu.com";

function learnLocation() {
  location.assign(baidu);
}

function learnReplace() {
  setTimeout(() => window.location.replace(baidu), 2000);
}
