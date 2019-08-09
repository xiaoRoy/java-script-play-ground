var aInfinite = 1 / 0;
console.log(aInfinite);

var theNaN = 0 / 0;
console.log(theNaN);
var notEquals = theNaN == theNaN; //=> false
console.log(notEquals);
console.log(isNaN(theNaN));

var zero = 0;
var negativeZero = 0;
var zeroEquals = (zero === negativeZero); // true: zero and negative zero are equal
var infiniteNotEqual = (1 / zero) === (1 / negativeZero);// false: infinity and -infinity are not equal

var now = new Date()
console.log(now)