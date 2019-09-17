/**
 * 6.4 Testing Properties
 */

var point = {
    x: 13.4,
    y: 2.14
}

var hasPropertyX = "x" in point; // => true
var hasPropertyZ = "z" in point; // => false
var hasToString = "toString" in point; // => true

var hasOwnPropertyX = point.hasOwnProperty("x"); // => true
var hasOwnPropertyY = point.hasOwnProperty("z"); // => false
var hasOwnToString = point.hasOwnProperty("toString"); // => false

var anohterPoint = Object.create(point);
anohterPoint.z = 7.12;
var propertyZIsEnumerable = anohterPoint.propertyIsEnumerable("z"); // => true
var propertyXIsEnumerable = anohterPoint.propertyIsEnumerable("x");  // => false
console.log(propertyXIsEnumerable);
 
console.log(Object.prototype.propertyIsEnumerable("toString")); // => false: not enumerable
