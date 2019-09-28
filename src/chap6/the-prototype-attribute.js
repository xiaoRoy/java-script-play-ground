/**
 * 6.8.1 The prototype Attribute
 */
var point = {
    x: 1,
    y: 3.14
};

var anotherPoint = Object.create(point);
var isPrototype = point.isPrototypeOf(anotherPoint); // => true
console.log(isPrototype);
var isObjectPrototype = Object.prototype.isPrototypeOf(anotherPoint); // => true
console.log(isObjectPrototype);
console.log(Object.getPrototypeOf(anotherPoint));

/**
 * 6.8.2 The class Attribute
 */

 function classOf(object) {
    var result;
    if(object === null) {
        result = "Null";
    }  else if (object === undefined) {
        result = "Undefined";
    } else {
        result = Object.prototype.toString.call(object).slice(8, -1);
    }
    return result;
 }
 console.log(classOf(point));