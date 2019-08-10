var first = 10 + "object"; // => "10 objects"
var second = "4" * "5"; // => 20
var third = 1 - "x"; // => NaN
var again = third + " object"; // => "NaN object"

var booleanFirst = false + 1;
console.log(booleanFirst)
var numberFirst = 1 + false;
console.log(numberFirst)

//undifined will convert to false where a boolean value is excpected. but..
var result = (undefined == false)// => false