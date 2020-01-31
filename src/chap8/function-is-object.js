/**
 * 8.7.1 The length Property
 */
function check(args) {
    var actual = args.length;
    var expected = args.callee.length
    if (actual != expected) {
        throw Error("Expected " + expected + " arguemnts; got " + actual);
    }
}

function add(one, another) {
    check(arguments)
    return one + another;
}

/**
 * 8.7.3 The call() and apply() Methods
 */
function showInfo(info) {
    "use strict";
    console.log(this);
    console.log(info);
}

var one = {
    "x": 31.4,
    y: 22
}

showInfo.call(one, "what info");// in the function showInfo, 'this' means object one
showInfo("what info");// in the function showInfo, 'this' is undefined in strict mode

var anohter = {
    "x": 31.4,
    y: 22
}

anohter.showInfo = showInfo;
anohter.showInfo("what info");

var maximum = Math.max.apply(Math, [1, 3, 2, 22, 11, 44]);
console.log(maximum);
var maximumA = Math.max(1, 3, 2, 23, 11, 34);
console.log(maximumA);

function trace(object, method) {
    var original = object[method]
    object[method] = function () {
        console.log(new Date(), "Entering:", method);
        console.log(this);// this here is the object parameter
        var result = original.apply(this, arguments);
        console.log(new Date(), "Exiting:", method);
        return result;
    }
}

var target = {
    add: function (one, another) {
        return one + anohter;
    }
}

trace(target, "add")
target.add(1, 22);

/**
 * 8.7.4 The bind() Method
 */

function what(one) {
    return this.x + one
}

var objectA = {
    x: 1
}

var whatB = what.bind(objectA);
var resultB = whatB(2);
console.log(resultB); // => 3
console.log(objectA);

function anohterBind(func, object) {
    var binded = func.bind(object);
    if (binded) {
        return binded;
    } else {
        return function () {
            func.apply(object, arguments);
        }
    }
}

var sum = function (one, another) {
    return one + another;
}

var sumBinded = sum.bind(null, 2);
var resultC = sumBinded(3); // => 5
console.log(resultC);

function sumMore(one, another) {
    return this.first + one + another;
}

var sumMoreBinded = sumMore.bind({ first: 34 }, 4);
var resultD = sumMoreBinded(3);
console.log(resultD); // => 41

var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetx = module.getX
console.log(unboundGetx()); // => unedfiend
var boundGetX = module.getX.bind(module);
console.log(boundGetX()); // => 42

if (!Function.prototype.bind) {
    Function.prototype.bind = function (object, /*, args */) {
        var self = this;
        var boundArgs = arguments;

        return function () {
            var args = [];
            var index;
            for (index = 1; index < boundArgs.length; index++) {
                args.push(boundArgs[index]);
            }
            for (index = 0; index < arguments.length; index++) {
                args.push(arguments[index]);
            }
            return self.apply(object, args);
        }
    }
}

var rectangle = {
    width: 3,
    height: 4
}

rectangle.calculateArae = function () {
    return this.width * this.height;
}

console.log(rectangle.calculateArae()); // => 12

/**
 * 8.7.5 The toString() Method
 */
var what = function() {
    return "what";
}

console.log(what.toString());

console.log(Math.max.toString());

/**
 * 8.7.6 The Function() Constructor
 */

var multiply = new Function("one", "another", "return one * another");
var resultE = multiply(4, 5);
console.log(resultE);

function showClassAttribute(object) {
    var result = Object.prototype.toString.call(object);
    console.log(result);
}


var pointA = {
    x:3,
    y:4,
    getX: function() {
       return this.x; 
    }
}
showClassAttribute(pointA.getX); // => [object Function]
/**
 * 8.8.1 Processing Arrays with Functions
 */
var data = [1,1,3,5,5];
var doSum = function(accumulator, element) {
    return accumulator + element;
}
var sum = data.reduce(doSum);
var doSquare = function(one) {
    return one * one;
}

var mean = sum / data.length;
console.log("mean:" + mean);
var deviations = data.map(function(element){ return element - mean });
console.log("deviations:" + deviations);
var standardDeviation = Math.sqrt(deviations.map(doSquare).reduce(doSum) / (data.length - 1));
console.log(standardDeviation);

var map = Array.prototype.map ? function(array, transform, object) { return array.map(transform, object)}
            : function(array, transform) {
                var result = [];
                for(var index = 0, length = array.length; index < length; index ++) {
                    if(index in array) {
                        result[index] = transform.call(object || null, array[index], index, array)
                    }
                }
                return result;
            }


function invokeReduce(array, aggregate, initial) {
    if(arguments.length > 2) {
        return array.reduce(aggregate, initial);
    } else {
        return array.reduce(aggregate);
    }
}

function makeAReduce(array, aggregate, initial) {
    var index = 0;
    var length = array.length;
    var accumulator;
    if(arguments.length > 2) {
        accumulator = initial;
    } else {
        if(length == 0) throw TypeError();
        while(index < length) {
            if(index in array) {
                accumulator = a[index ++];
                break;
            } else {
                index ++
            }
        }
    }
    while(index < length) {
        if(index in array) {
            accumulator = aggregate.call(undefined, accumulator, array[index], index, array);
        }
        index ++
    }
    return accumulator;
}
var reduce = Array.prototype.reduce ? invokeReduce : makeAReduce

var anotherData = [1, 1, 3, 5, 5];
var anohterMean = reduce(anotherData, doSum) / anotherData.length;
var anotherDeviations = map(anotherData, function(element) { return element - anohterMean});
var anotherStandardDeviation = 
    Math.sqrt(reduce(map(anotherDeviations, doSquare), doSum) / (anotherData.length - 1));
console.log(anotherStandardDeviation);

/**
 * 8.8.2 Higher-Order Functions
 */

 function not(operation) {
    return function() {
        var result = operation.apply(this, arguments);
        return !result;
    }
 }

 var isEven = function(number) {
    return number % 2 == 0;
 }

 var isOdd = not(isEven);

var isAllOddNumber = [3, 5, 1, 21].every(isOdd);
console.log(isAllOddNumber);

function mapper(operation) {
    return function(array) {
        return array.map(operation);
    }
}

function doIncrement(number) {
    return number + 1;
}

var incrementer = mapper(doIncrement);
var resultF = incrementer([2, 3, 5]);
console.log(resultF);

function compose(firstOp, secondOp) {
    return function() {
        return firstOp.call(this, secondOp.apply(this, arguments));
    }
}

var squareOfSum = compose(doSquare, doSum);
var resultG = squareOfSum(2, 3);
console.log(resultG);

function array(array, start) {
    return Array.prototype.slice.call(array, start || 0);
}

function partialLeft(func, /*, ... */) {
    var args = arguments;
    return function() {
        var finalArgs = array(args, 1);
        finalArgs = finalArgs.concat(array(arguments));
        return func.apply(this, finalArgs);
    }
}

function partialRight(func, /*, ... */) {
    var args = arguments;
    return function() {
        var finalArgs = array(arguments);
        finalArgs = finalArgs.concat(array(args, 1));
        return func.apply(this, finalArgs);
    }
}

var testSquare = partialRight(Math.pow, 2);
var testReuslt = testSquare(4);
console.log("testResult:" + testReuslt);

function partial(func, /*, ...*/) {
    var args = arguments;
    return function() {
        var finalArgs = array(args, 1);
        var index = 0, anohterIndex = 0;
        for(; index < finalArgs.length; index ++) {
            if(finalArgs[index] === undefined) {
                finalArgs[index] = arguments[anohterIndex ++]
            }
        }
        finalArgs = finalArgs.concat(array(arguments, anohterIndex));
        return func.apply(this, finalArgs);
    }
}

var calulateOne = function(first, second, third) {
    return first * (second - third);
}

var resultLeft = partialLeft(calulateOne, 2)(3, 4); // => -2
console.log(resultLeft);
var resultRight = partialRight(calulateOne, 2)(3, 4); // => 6
console.log(resultRight);
var resultM = partial(calulateOne, undefined,  2)(3, 4); // => -6
console.log(resultM);

var increment = partialLeft(doSum, 1);
var cuberRoot = partialRight(Math.pow, 1 / 3);
var resultR = cuberRoot(27);
console.log(resultR);


String.prototype.first = partial(String.prototype.charAt, 0);
console.log("apple".first());

var getLastString = function(text) {
    return text.slice(-1);
}
var lastInString = partial(getLastString);
var resultLast = lastInString("Books");
console.log(resultLast);

var anotherNot = partialLeft(compose, function(input){return !input});
var anotherIsEven = anotherNot(isOdd);
var isNumber = anotherNot(isNaN);
var reusltN = isNumber(22);
console.log(reusltN);

var dataB = [1, 1, 3, 5, 5];
var sumB = function(one, another) {
    return one + another;
}
var productB = function(one, another) {
    return one * another;
}

var negativeB = partial(productB, -1);
var squareB = partialRight(Math.pow, 2);
var sqrtB = partial(Math.pow, undefined, 0.5);
var reciprocalB = partial(Math.pow, undefined, -1);

var meanB = productB(reduce(dataB, sumB), reciprocalB(dataB.length));
var whatB = compose(squareB, partial(sumB, negativeB(meanB)));
var whereB = reduce(map(dataB, whatB), sumB)
var standardDeviationB = sqrtB(productB(whereB, reciprocalB(sumB(dataB.length, -1))))
console.log(standardDeviationB); //  =>2 

/**
 * 8.8.4 Memoization
 */

 function memoize(func) {
    var cahce = {};
    return function() {
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        if(key in cahce) {
            return cahce[key];
        } else {
            return cahce[key] = func.apply(this, arguments);
        }
    }
 }

 function calculateGreatestCommonDivisor(one, anohter) {
    var temp;
    if(one < anohter) {
        temp = anohter;
        anohter = one;
        one = temp;
    }
    while(anohter != 0) {
        temp = anohter;
        anohter = one % anohter;
        one = temp;
    }
    return one;
 }

 var calculateGreatestCommonDivisorWithCache = memoize(calculateGreatestCommonDivisor);
 var resultZ = calculateGreatestCommonDivisorWithCache(85, 187);
 console.log(resultZ);

 var factorail = memoize(function(number){
     return (number <= 1) ? 1 : number * factorail(number - 1);
 });

 var resultY = factorail(5);
 console.log(resultY);