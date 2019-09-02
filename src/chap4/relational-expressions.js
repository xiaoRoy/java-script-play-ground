/**
 * 4.9.1 Equality and Inequality Operators
 */

 var nullAndUndefined = (null == undefined); // => true
 var stringAndNumber = ("44" == 44); // => true
 console.log(stringAndNumber);
 var falseAndZero = (false == 0); // => true
 var trueAndOne = (true == 1); // => true
 var flaseAndStringZero = (false == "0"); // => true
 var trueAndStringOne = (true == "1"); // => true

 /**
  * 4.9.2 Comparison Operators
  */

  var first = 1 + 2; //Addition
  var second = "1" + "2"; // => "12"
  var third = "1" + 2; //Concatenation. => "12"

  var one = 11 < 3;
  var two = "11" < "3"; //String comparison. => true;
  var three = "11" < 3; //Numeric comparison.  => fasle;
  var four = "eleven" < 3; //Numeric comparison. "one" converted to NaN. => false

  /**
   * 4.9.3 The in Operator
   */
var point = {
    x: 3.14,
    y: 44.0
}
var hasXPorperty = "x" in point; // => true;
var hasToString = "toString" in point; // => true;

var numbers = [0, 1, 2];
var hasZero = "0" in numbers; // => true
console.log(hasZero);
var hasFive = 5 in numbers; // => false
console.log(hasFive);

/**
 * 4.9.4 The instanceof Operator
 */

var now = new Date();
now instanceof Date; // => true
now instanceof Object; // => true

var numberArray = [1, 2, 3];
numberArray instanceof Array; // => true
numberArray instanceof Object; // => true

var isOneObject = 1 instanceof Object; // => false
console.log(isOneObject);

// new Date() instanceof 3 => throws TyepError