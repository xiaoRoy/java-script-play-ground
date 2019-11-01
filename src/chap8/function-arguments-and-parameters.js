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