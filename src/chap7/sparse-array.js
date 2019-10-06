var sparseArrayA = Array(4);
var sparseArrayB = [,,,,];
var arrayC = [];
arrayC[44] = "end"; // => length is 45.
console.log(sparseArrayB.length);
console.log(2 in sparseArrayA) // => false
console.log(2 in sparseArrayB) // => false