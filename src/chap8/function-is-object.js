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