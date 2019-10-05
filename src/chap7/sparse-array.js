var sparseArrayA = Array(4);
var nonSparseArray = [,,,,,];
var sparseArrayB = [];
sparseArrayB[44] = "end"; // => length is 45.
console.log(sparseArrayB.length);