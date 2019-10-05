var words = ["zero"];
words.push("one");
words.push("two");
words.push("three", "four");

var numbers = [1, 2, 3, 4, 5];
delete numbers[1];
2 in numbers // => false
numbers.length // => length is sitll 5.