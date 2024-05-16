window.addEventListener("DOMContentLoaded", () => {
//   let myExternalWindow = window.open("https://www.baidu.com", "baidu", "resizable");
  let myExternalWindow = window.open("https://www.baidu.com", "new");
  if (myExternalWindow) {
    myExternalWindow.resizeTo(800, 600);
  } else {
    console.log("Window is nil.");
  }
  console.log("end of resizing.....");
});
