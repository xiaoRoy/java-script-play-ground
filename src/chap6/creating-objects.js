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
 * 6.1.1 Creating Objects with new
 */
var object = new Object();
var array = new Array();
var date = new Date();
var regex = new RegExp("js");