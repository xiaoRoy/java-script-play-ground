"use strict";
let num = 0;
let max = 10;
let intervalId = null;

let increaseNumber = function () {
  num++;
  if (num == max && intervalId) {
    clearInterval(intervalId);
    alert("Done");
  } else {
    console.log(`current number is:${num}`);
  }
};

intervalId = setInterval(increaseNumber, 500);
