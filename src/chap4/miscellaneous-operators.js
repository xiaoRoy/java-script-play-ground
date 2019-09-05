/**
 * 4.13.1 The Conditional Operator (?:)
 */

var userName;
var greeting = "Hello " + (userName ? userName : "there") + "!";
console.log(greeting);

/**
 * 4.13.2 The typeof Operator
 */

var first = typeof undefined; // => '"undefined"
var second = typeof null; // => "object"
var third = typeof true; // => "boolean"
var fourth = typeof 44.14; // => "number"
var fifth = typeof NaN; // => "number"
var sixth = typeof "what"; // => "string"
var doubleTheValue = function (value) {
    return value * 2;
}
console.log(doubleTheValue(3));
var seventh = typeof doubleTheValue; // => "function"
var point = { x: 3.14, y: 2.11 }
var eighth = typeof point; // => "object"

/**
 * 4.13.3 The delete Operator
 */

var book = {
    title: "Jane",
    author: "no one",
    price: 44.1
};
delete book.price
"price" in book; // => false

var numbers = [1, 44, 56];
var isDeleted = delete numbers[2]; // => true
console.log(isDeleted);
numbers.length; // => 2