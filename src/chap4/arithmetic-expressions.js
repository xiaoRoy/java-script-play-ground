/**
 * 4.8.1 The + Operator
 */

 var first = 1 + 2; // => 3
 var second = "1" + "2"; // => "12"
 var thrid = "1" + 2; // => "12"
 var fourth = 1 + {title : "what"};
 console.log(fourth); // => 1[object Object]
 var fifth = true + true; // => 2
 var sixth = 2 + null; // => 2
 var seventh = 2 + NaN; // => NaN 
 var eighth = 2 + undefined; // => NaN
 
 /**
  * 4.8.2 Unary Arithmetic Operators
  */

  var stringToNaN = +"hello";// => NanN
  console.log(stringToNaN);

  var one = "1";
  ++one; // => number 2
  console.log(one);
  var anotherOne = "1";
  anotherOne = anotherOne + 1; // => string 11
  console.log(anotherOne); 