'use strict';

let num = 0;
let max = 10;
const interval = 500;

let increaseNumber = function () {
    num ++;
    if (num < max) {
        console.log(`The current number is:${num}`);
        setTimeout(increaseNumber, interval)
    } else {
        alert('Done.');
    }
}

setTimeout(increaseNumber, interval);


