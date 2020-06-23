setTimeout(function () { console.log("Ready..."); }, 1000);
setTimeout(function () { console.log("Set..."); }, 2000);
setTimeout(function () { console.log("go!"); }, 3000);

let clock = setInterval(function () {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(function () { clearInterval(clock); }, 10000);