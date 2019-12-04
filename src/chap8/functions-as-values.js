function square(number) {
    return number * number;
}

var squareB = square;
squareB(4); // => 16

var hasSquare = {
    squareC: function (number) {
        return number * number;
    }
}
hasSquare.squareC(3); // => 9

var arrayA = [function (number) { return number * number }, 10];
arrayA[0](arrayA[1]); // => 100

function add(one, another) {
    return one + another;
}

function subtract(one, another) {
    return one - another;
}

function multiply(one, another) {
    return one * another;
}

// function divide(one, another) {
//     return one / another;
// }

function calculate(operator, operandA, operandB) {
    return operator(operandA, operandB);
}

var operators = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: function (one, another) {
        return one / another;
    },
    pow: Math.pow
}

var resultA = operators.add(1, 1);
console.log(resultA);

function doCalculation(operation, one, another) {
    if (typeof operators[operation] === "function") {
        return operators[operation](one, another)
    }
    else throw new Error("Unknown operation");
}

var message = doCalculation("add", "hello", doCalculation("add", " ", "world"));
console.log(message);
var resultB = doCalculation("pow", 4, 4);
console.log(resultB);

/**
 * 8.4.1 Defining Your Own Function Properties
 */

simplyAdd.count = 0;
function simplyAdd(one, another) {
    simplyAdd.count++;
    return one + another;
}
var resultC = simplyAdd(1, 1);
console.log(resultC);
console.log(simplyAdd.count);

function factorial(number) {
    var result = NaN;
    if (number > 0 && number == Math.round(number) && isFinite(number)) {
        if (!(number in factorial)) {
            factorial[number] = factorial(number - 1) * number;
        }
        result = factorial[number];
    }
    return result;
}
factorial[1] = 1;
var factorialResult = factorial(3);
console.log(factorialResult);

(function () {
    // Module code goes here.
}());
