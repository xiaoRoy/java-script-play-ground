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
    if (object === null) {
        result = "Null";
    } else if (object === undefined) {
        result = "Undefined";
    } else {
        result = Object.prototype.toString.call(object).slice(8, -1);
    }
    return result;
}
console.log(classOf(point));

/**
 * 6.8.3 The extensible Attribute
 */

// Create a sealed object with a frozen prototype and a nonenumerable property

var book = {
    title: "Harry Potter"
}
Object.freeze(book);
var second = Object.create(book, { auhtor: { value: "JK", writable: true } });
Object.seal(second); 
