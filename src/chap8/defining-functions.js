function pirntProperties(target) {
    for (var property in target) {
        console.log(property + ":" + target[property]);
    }
}

function calculateDistance(pointA, pointB) {
    var dx = pointA.x - pointB.x;
    console.log("dx:" + dx);
    var dy = pointA.y - pointB.y;
    console.log("dy:" + dy);
    return Math.sqrt(dx * dx + dy * dy);
}

var pointA = {
    x: 3.14,
    y: 44
}

var distance = calculateDistance(pointA, {
    x: 2.12,
    y: 14
});
console.log(distance);

function factorial(number) {
    if(number <= 1) return 1
    return number * factorial(number -1); 
}

var square = function(number) {return number * number}

var tenSquare = (function(number){return number * number})(10);
console.log(tenSquare);

/**
 * 8.1.1 Nested Functions
 */

 function hypotenuse(one, another) {
    function square(number) {
        return number * number;
    }
    return Math.sqrt(square(one) + square(another));
 }