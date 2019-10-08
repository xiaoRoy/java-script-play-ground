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
numbers.sort(function (one, another) {
    return one - another;
})
console.log(numbers);

var animal = ["ant", "But", 'cat', 'Dog'];
console.log(animal.sort());
console.log(animal.sort(function (one, another) {
    var first = one.toLowerCase();
    var second = another.toLowerCase();
    var result = 0
    if (first < second) {
        result = -1;
    } else if (first > second) {
        result = 1
    }
    return result;
}))

/**
 * 7.8.4 concat()
 */
var numbersB = [1, 2, 3];
numbersB.concat(4, 5); // => [1, 2, 3, 4, 5]
numbersB.concat([4, 5]); // => [1, 2, 3, 4, 5]
numbersB.concat([4, 5], [7, 8]); // => [1, 2, 3, 4, 5, 7,8]
numbersB.concat([4, 5], [7, 8, [9, 10]]) //=> [1, 2, 3, 4, 5, 7,8, [9, 10]]
console.log(numbersB); // => still [1, 2, 3]

/**
 * 7.8.5 slice()
 */
var numbersC = [1, 2, 3, 4, 5];
numbersC.slice(0, 3); //=> [1, 2, 3]
numbersC.slice(3); //=> [4, 5]
numbersC.slice(1, -1); // => [2, 3, 4]
numbersC.slice(-3, -2); // =>[3];
console.log(numbersC); // => still [ 1, 2, 3, 4, 5 ]

/**
 * 7.8.6 splice()
 */

var numbersD = [1, 2, 3, 4, 5, 6, 7, 8];
numbersD.splice(4); //=> numbersD is [1, 2, 3, 4] returns [5, 6, 7, 8]
numbersD.splice(1, 2); // => numbresD is [1, 4] returns [2, 3]
numbersD.splice(1, 1); // => numbersD is [1] returns [4]

var numbersE = [1, 2, 3, 4, 5];
numbersE.splice(2, 0, 'a', 'b'); //=> numbersE is 
console.log(numbersE); //=> [ 1, 2, 'a', 'b', 3, 4, 5 ] returns []
numbersE.splice(4, 2, 'c', 'd');
console.log(numbersE); //=> [ 1, 2, 'a', 'b', 'c', 'd', 5 ] returns [3, 4]

var numbersF = [1, 2, 3];
numbersF.splice(3, 0, ['a', 'b', 'c']); // => [1, 2, 3, ['a', 'b', 'c']]
console.log(numbersF);

/**
 * 7.8.7 push() and pop()
 */

 var stack = [];
 stack.push(1, 2); //=> stack [1, 2]
 stack.pop(); // => stack [1]
 stack.push(3); // => stack [1, 3]
 stack.push(['a', 'b']) // => stack [1, 3, ['a', 'b']]
 console.log(stack);