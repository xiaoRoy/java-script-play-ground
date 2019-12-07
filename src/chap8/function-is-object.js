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
    object[method] = function() {
        console.log(new Date(), "Entering:" , method);
        console.log(this);// this here is the object parameter
        var result = original.apply(this, arguments);
        console.log(new Date(), "Exiting:" , method);
        return result;
    }
}

var target = {
    add: function(one, another) {
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
    if(binded) {
        return binded;
    } else {
        return function() {
            func.apply(object, arguments);
        }
    }
}

var sum = function(one, another) {
    return one + another;
}

var sumBinded = sum.bind(null, 2);
var resultC = sumBinded(3); // => 5
console.log(resultC);

function sumMore(one, another) {
    return this.first + one + another;
}

var sumMoreBinded = sumMore.bind({first: 34}, 4);
var resultD = sumMoreBinded(3);
console.log(resultD); // => 41