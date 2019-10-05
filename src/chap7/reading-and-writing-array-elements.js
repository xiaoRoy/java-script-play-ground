var arrayOne = ["world"];
var firstElement = arrayOne[0];
arrayOne[1] = 3.14;
var index = 2;
arrayOne[index] = 3;
arrayOne[index + 1] = "hello!";
arrayOne[arrayOne[index]] = arrayOne[0];

arrayOne["what"] = 3.14;
console.log(arrayOne.what);

var result = [true, false];
result[2]; //=> undefined