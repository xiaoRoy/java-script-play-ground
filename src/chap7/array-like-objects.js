"use strict"
var objectOne = {};
var count = 0;
while (count < 10) {
    objectOne[count] = count * count;
    count++;
}
objectOne.legnth = count;

var total = 0;
for (var index = 0; index < objectOne.legnth; index++) {
    total += objectOne[index];
}
console.log(total);

var arrayLikeObject = { "0": "a", 1: "b", "2": "c", length: 3 };
var notArrayLikeObject = { "0": "a", 1: "b", "2": "c" }

var resultA = Array.prototype.join.call(arrayLikeObject);
console.log(resultA);
var resultB = Array.prototype.join.call(notArrayLikeObject);
console.log(resultB);

var resultC = Array.prototype.map.call(arrayLikeObject, function(element, index, array) {
    return element.toUpperCase();
});
console.log(resultC);
var resultD = Array.prototype.map.call(notArrayLikeObject, function(element) {
    console.log("element:" + element);// not get invoked
    return element.toUpperCase();
});
