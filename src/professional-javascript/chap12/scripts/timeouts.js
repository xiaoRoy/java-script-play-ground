"use strict";

// setTimeout(() => {
//   console.log(this);
//   alert("Hello World");
// }, 100);

// function what() {
//     return this;
// }

// console.log(what());

// let sayHello = function () {
//   console.log(this);
//   alert("Hello World");
// };
// setTimeout(sayHello, 100);

// setTimeout(function(){
//     console.log(this);
// }, 100);

function takeAction(action) {
  action();
}

takeAction(function () {
  console.log("Anonymous Function");
  console.log(this);
});

takeAction(() => {
  console.log("Arrow Function");
  console.log(this);
});
