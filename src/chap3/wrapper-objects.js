var text = "text";
text.what = 3;
var what = text.what;
console.log(what) // => undefined

var pointA = {
    x:3.4,
    y:5.6
}

var pointB = {
    x:3.4,
    y:5.6
}

console.log(pointA == pointB) // => false
console.log(pointA === pointB) // => false

function areArrayEqual(oneArray, anotherArray) {
    if(oneArray.length != anotherArray.length) {
        return false;
    }
    for (var index = 0; index < oneArray.length; index ++) {
        if(oneArray[index] !== anotherArray[index]) {
            return false;
        }
    }
    return true;
}

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