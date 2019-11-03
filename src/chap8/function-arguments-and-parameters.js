/**
 * 8.3.1 Optional Parameters
 */

function getPropertyNames(object, result) {
    // if(result === undefined) {
    //     result = [];
    // }
    result = result || [];
    for (var property in object) {
        result.push(property);
    }
    return result;
}

var reusltA = getPropertyNames(this);
console.log(reusltA);

var reusltB = getPropertyNames({ x: 3, y: 4.4 }, ["begin"])
console.log(reusltB);

/**
 * 8.3.2 Variable-Length Argument Lists: The Arguments Object
 */

function doWhat(first, second, third) {
    if (arguments.length != 3) {
        throw new Error("Excepts 3 arguments, but invoke with " +
            arguments.length + " arguments");
    }
}

// doWhat(1);

function maximum() {
    var max = Number.NEGATIVE_INFINITY
    var length = arguments.length
    for (var index = 0; index < length; index++) {
        var current = arguments[index];
        if (current > max) {
            max = current;
        }
    }
    return max;
}

var maxResult = maximum(1, 3, 1, 4);
console.log(maxResult);


function same(onlyOne) {
    console.log(onlyOne);
    arguments[0] = "changed"
    console.log(onlyOne);
}

same("first");

function factorial(number) {
    var result;
    if (number <= 1) {
        result = 1;
    } else {
        result = number * arguments.callee(number - 1);
    }
    return result;
}

var reusltFactorial = factorial(5);
console.log(reusltFactorial);


/**
 * 8.3.3 Using Object Properties As Arguments
 */
function arrayCopy(from, fromStartIndex, to, toStartIndex, length) {

    for (var toIndex = to.length - 1 + length; toIndex >= toStartIndex; toIndex--) {
        to[toIndex] = to[toIndex - length]
    }

    for (var offset = 0; offset < length; offset++) {
        to[toStartIndex + offset] = from[fromStartIndex + offset]
    }
    return to;
}

function easyCopy(all) {
    return arrayCopy(
        all.from,
        all.fromStartIndex || 0,
        all.to,
        all.toStartIndex || 0,
        all.length
    )
}

var arrayCopied = easyCopy({
    from: [4, 4, 4],
    fromStartIndex: 0,
    to:[1, 2, 3, 9],
    toStartIndex: 0,
    length: 2
})

console.log(arrayCopied);

/**
 * 8.3.4 Argument Types
 */
function sumArray(array) {
    if(Array.isArray(array)) {
        var result = 0;
        for(var index = 0; index < array.length; index ++) {
            var current = array[index];
            if(current == null) continue;
            if(isFinite(current)) {
                result += current;
            } 
            else throw new Error("sumArray(): elements must be finite numbers");
        }
        return result;
    } 
    else throw new Error("sumArray(): argument must be an array");
}

var sumArrayResult = sumArray([1, 2, 3]);
console.log(sumArrayResult);

function flexiableSum(array) {
    'use strict'
    var total = 0;
    var length = arguments.length;
    for(var index = 0; index < length; index ++) {
        var current = arguments[index];
        var temp;
        if(current == null) continue;
        if(Array.isArray(current)) {
            temp = flexiableSum.apply(this, current);
        } else if(typeof current === "function") {
            temp = Number(current())
        } else {
            temp = Number(current)
        }
        if(isNaN(temp)) {
            throw new Error("flexiabeSum(): can't convert " + current + " to number");
        }
        total += temp;
    }
    return total;
}
var sumResultA = flexiableSum(function() {
    return 5;
});

console.log(sumResultA);