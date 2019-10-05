'use strict'
var numbers = [1, 2, 3, 4, 5];
numbers.length = 3; // => [1, 2, 3]
numbers.length = 0; // delete all elements. []
numbers.length = 5; // length is 5, but no elements.

var unchangeableArray = [1, 2, 3];
Object.defineProperty(unchangeableArray, "length", {writable: false});
unchangeableArray[3] = 4;
console.log(unchangeableArray.length); //=> length is changed from 3 to 4.
unchangeableArray.length = 0; //=> TypeError in strict mode.