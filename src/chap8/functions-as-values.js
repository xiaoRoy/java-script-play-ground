function square(number) {
    return number * number;
}

var squareB = square;
squareB(4); // => 16

var hasSquare = {
    squareC: function(number) {
        return number * number;
    }
}
hasSquare.squareC(3); // => 9

var arrayA = [function(number) {return number * number}, 10];
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
    subtract: subtract
}

var resultA = operators.add(1, 1);
console.log(resultA);