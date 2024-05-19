"ust strict";

window.addEventListener("popstate", (event) => {
  let state = event.state;
  if (state) {
    console.log(state);
  } else {
    console.log("state is null.");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  let state = {
    id: "123",
    page: "page#1",
  };
  history.pushState(state, "new title", "/test1");
  history.pushState(state, "new title", "/test2");
//   history.back();
  console.log("Loaded!!");
});


//example#2 
// window.addEventListener("popstate", (event) => {
//   console.log(
//     `location: ${document.location}, state: ${JSON.stringify(event.state)}`
//   );
// });

// setTimeout(() => {
//     history.pushState({ page: 1 }, "title 1", "?page=1");
// },1000);

// history.pushState({ page: 2 }, "title 2", "?page=2");
// history.replaceState({ page: 3 }, "title 3", "?page=3");
// history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
// history.back(); // alerts "location: http://example.com/example.html, state: null"
// history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}


//example3 

// document.querySelector("button").addEventListener("click", function () {
//   document.getElementById("p").textContent++;
//   history.pushState({}, "", "/" + document.getElementById("p").textContent);
// });

// addEventListener("popstate", function (e) {
//   document.getElementById("p").textContent--;
//   e.preventDefault();
// });
