var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function nested() {
        return scope;
    }
    return nested();
}
var resultA = checkScope(); // => local scope
console.log(resultA);

var scopeB = "global scope";
function checkScopeB() {
    var scopeB = "local scope";
    function nested() {
        return scopeB;
    }
    return nested;
}

var resultB = checkScopeB()(); // => local scope
console.log(resultB);

var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
}());

var resultB = uniqueInteger;
console.log(resultB()); // => 0
console.log(resultB()); // => 1


var resultC = uniqueInteger(); // => 0
var resultD = uniqueInteger(); // => 0

function counter() {
    var count = 0;
    return {
        count: function () { return count++; },
        reset: function () { count = 0; }
    }
}

var counterA = counter();
var counterB = counter();
console.log(counterA.count());
console.log(counterB.count());

counterA.reset();
counterB.count();
console.log(counterA.count());
console.log(counterB.count());

function anotherCounter(number) {
    return {
        get count() { return number++; },
        set count(value) {
            if (value > number) {
                number = value;
            } else {
                throw new Error("Count can only be set to a larger value.");
            }
        }
    }
}

function addPrivateProperty(object, name, prediccate) {
    var value;
    object["get" + name] = function () { return value; };
    object["set" + name] = function (newValue) {
        if(prediccate && !prediccate(newValue)) {
            throw new Error("set" + name + ": invalid value " + newValue);
        } else  {
            value = newValue;
        }
    }
}

var initialObject = {};
addPrivateProperty(initialObject, "Name", function(added) {return typeof added == "string";});
initialObject.setName("Frank");
console.log(initialObject.getName())

function constantFunciton(input) {
    return function() {return input;};
} 

var functions = [];
for(var index = 0; index < 10; index ++) {
    functions[index] = constantFunciton(index);
}
var constatnFunctionResult = functions[4]();
console.log(constatnFunctionResult);