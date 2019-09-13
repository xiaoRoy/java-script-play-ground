/**
 * 6.1.1 Object Literals
 */
var empty = {};
var point = { x: 0, y: 0 };
var anotherPoint = { x: 3.14 + point.x, y: 4.44 + point.y };
var book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    "for": "all audience",
    author: {
        firstName: "Jane",
        lastName: "Li"
    }
}

/**
 * 6.1.2 Creating Objects with new
 */
var object = new Object();
var array = new Array();
var date = new Date();
var regex = new RegExp("js");

/**
 * 6.1.4 Object.create()
 */

 var user = Object.create({
    firstName: "Peter",
    lastName: "Parker"
});

var objectWithNullPrototype = Object.create(null);

var firstEmpty = {};
var secondEmpyt = new Object();
var thridEmpty = Object.create(Object.prototype);

function inherit(from) {
    if(from == null) {
        throw TypeError();
    }

    if(Object.create) {
        return Object.create(from);
    }

    var type = typeof from;
    if(type !== "object" && t !== "function") {
        throw TypeError();
    }

    function dummyConstructor() {};
    dummyConstructor.prototype = from
    return new dummyConstructor();
} 