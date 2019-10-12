/**
 * 7.9.1 forEach()
 */

var numbers = [1, 2, 3, 4, 5];

var sum = 0;
numbers.forEach(function (elment) {
    sum += elment;
});
console.log(sum);

numbers.forEach(function (elment, index, array) {
    array[index] = elment + 1;
})

function forEachWithBreak(array, block, what) {
    try {
        array.forEach(block, what)
    } catch (exception) {
        if (exception == forEachWithBreak.break) {
            return;
        } else {
            throw exception;
        }
    }
}
forEachWithBreak.break = new Error("break");

var numbersB = [1, 2, 4, 10, 11, 24];
var sumB = 0;
forEachWithBreak(numbersB, function (element, index, array) {
    if (element > 10) {
        throw forEachWithBreak.break;
    } else {
        sumB += element;
    }
});
console.log(sumB);

/**
 * 7.9.2 map()
 */

var numbersC = [1, 2, , 4, 5];
var resultC = numbersC.map(function (element, index, array) {
    return element * element;
});
console.log(resultC);

/**
 * 7.9.3 filter()
 */

var numbersD = [1, 2, 3, 4, 5, 6,];

var evenNumbders = numbersD.filter(function (element, index, array) {
    return element % 2 == 0;
});
console.log(evenNumbders);

var sparseA = [, 1, 2, ,];
var dense = sparseA.filter(function (element) { return true });
console.log(dense); // => [1, 2]

var notSparse = sparseA.filter(function (element, index) {
    console.log("index:" + index + " value is " + element);
    return element !== undefined;
});
console.log(notSparse.length); //=> length is 2

var arrayA = [null, undefined, 1, false, "44"];
var filterReuslt = arrayA.filter(function (element, index) {
    console.log("index:" + index + " value is " + element);
    return element != null;
});
console.log(filterReuslt);
var filterReusltB = arrayA.filter(function (element, index) {
    console.log("index:" + index + " value is " + element);
    return element !== undefined && element !== null;
});
console.log(filterReusltB);
console.log("undefined !== null is " + (undefined !== null));
console.log("undefined != null is " + (undefined != null));

/**
 * 7.9.4 every() and some()
 */

var numbersE = [1, 2, 3, 4, 5, 6];
var everyResultA = numbersE.every(function (element, index, array) {
    return element < 10;
});
var someResultA = numbersE.some(function (element) {
    return element % 2 == 0;
});

var emptyArray = [];
var everyResultB = emptyArray.every(function (element) {
    return false;
});
console.log(everyResultB); // => true

var someResultB = emptyArray.some(function () {
    return true;
});
console.log(someResultB); // => false

/**
 * 7.9.5 reduce(), reduceRight()
 */

console.log("===================");
var numbersF = [1, 2, 3, 4, 5];
var sumC = numbersF.reduce(function (accumulated, element, index, array) {
    console.log("index:" + index);
    console.log("accumulated:" + accumulated);
    return accumulated + element;
}, 0);
console.log(sumC); // => 15

var product = numbersF.reduce(function (accumulated, element, index, array) {
    return accumulated * element;
}, 1);
console.log(product); // => 120