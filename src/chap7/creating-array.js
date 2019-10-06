var emptyArray = [];
var primes = [1, 3, 5, 7, 44];
var misc = [1.1, true, "hello",];
var base = 1024;
var table = [base, base + 1, base + 2, base + 3, base + 4];
var what = [[1, { x: 1, y: 3 }], [2, {x: 3, y: 4}]];
var count = [1,,3]; //=> length is 3
console.log(count.length);

var undefindeds = [,,];//Array elements for which values are omitted do not exist, but appear to be undefined if you query them

var anotherEmptyArray = Array();
var arrayA = Array(10); // => length is 10
console.log(arrayA.length);

var arrayB = Array("Hello", "World", 1, 2, 3, 4);