"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let result = confirm("Are you sure?");

  if (result) {
    console.log("OK");
  } else {
    console.log("Cancel");
  }
});
