/**
 * 7.8.1 join()
 */
var numbers = [1, 2, 3, 4, 5];
var joinResultA = numbers.join();
console.log(joinResultA); // => 1,2,3,4,5
var joinResultB = numbers.join("-");
console.log(joinResultB); // => 1-2-3-4-5
var joinResultC = Array(10).join("*");
console.log(joinResultC); // => *********, 9 of them.

var splitResult = "1-2-3-4-5".split("-");
console.log(splitResult); // => string array [ '1', '2', '3', '4', '5' ]

/**
 * 7.8.2 reverse()
 */
var words = ["apple", "bear", "four"];
words.reverse();
console.log(words); //=> [ 'four', 'bear', 'apple' ]

/**
 * 7.8.3 sort()
 */
var fruits = ["cherry", "pear", "peach", "apple"]
var sortFruitsResult = fruits.sort().toString();
console.log(sortFruitsResult); // => apple,cherry,peach,pear

var numbers = [33, 4, 1111, 222];
numbers.sort();
console.log(numbers); //[ 1111, 222, 33, 4 ]
numbers.sort(function(one, another) {
    return one - another;
})
console.log(numbers);

var animal = ["ant", "But", 'cat', 'Dog'];
console.log(animal.sort());
console.log(animal.sort(function(one, another){
    var first = one.toLowerCase();
    var second = another.toLowerCase();
    var result = 0
    if(first < second) {
        result = -1;
    } else if(first > second) {
        result = 1
    } 
    return result;
}))
