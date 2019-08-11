/**
 * 3.8.2 Explict Conversions
 */

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

var numberFromString = Number("3");
var stringFromgBoolean = String(false);
var booleanFromArray = Boolean([]); // => true
var normalNumber = Object(3);
var emptyObject = Object(null); //=> empty object {} instead of type error exception
console.log(emptyObject);

var five = 5;
var stringOfFive = 5 + "" // Same as String(five)

var notRight = false;
var numberOfBoolean = +notRight; //Same as Number(notRight)
console.log(numberOfBoolean)

var hello = "hello";
var booleanOfHello = !hello; // Same as Boolean(hello)
console.log(booleanOfHello) // => false

/**
 * toString()
 */

 var seventeen = 17;
 binarySeventeen = seventeen.toString(2);
 octalSeventeen = "0" + seventeen.toString(8);
 hexSeventeen = "0x" + seventeen.toString(16);

 /**
  * String <==> Number conversion
  */

var oneNumber = 123456.789
oneNumber.toFixed(0); // => 123457
oneNumber.toExponential(1); // => 1.2e+5
oneNumber.toPrecision(7); // => 123456.8

var resultA = parseFloat("    3.14 meters"); // => 3.14
var resultB = parseFloat("$44.4"); // => NaN
var resultC = parseInt("3 apples") // => 3

/**
 *  3.8.3 Object to Primitive Conversions
 */

function iAmFalse() {
    if(!Boolean(false)) {
        console.log("iAmFalse")
    }
}
iAmFalse();

var pointC = {
    x: 3.2,
    y: 6.0
}
console.log(pointC.toString()); // => [object Object]
console.log(pointC.valueOf()); // => { x: 3.2, y: 6 }
var what = 3 + pointC;
console.log(what); // => 3[object Object]
var test = "3 apples" + 44;
console.log(test); // => 3 apples44

var stringPlusString = "23" + "22";
console.log(typeof stringPlusString); // => string
var stringMultipleString = "3" * "3.14 meters";
console.log(typeof stringMultipleString); // => numbe 

var stringPlusNumber = "3" + 122;
console.log(typeof stringPlusNumber); // => String
var stringMultipleNumber = "3" * 22;
console.log(typeof stringMultipleString); // => number

