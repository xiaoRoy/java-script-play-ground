/**
 * 9.6.3 Standard Conversion Methods
 */
var point = {
    x: 0,
    y: 2.14,
    toString: function () {
        return "(" + this.x + ", " + this.y + ")";
    },
    toJSON: function() {
        return "{}"
    }
}
console.log(point); // Object {x: 0, y: 2.14, toString: }
console.log("point:" + point);

function Dollar(value) {
    this.value = value;
}
Dollar.prototype.valueOf = function() {
    return this.value;
}

var fiveDollars = new Dollar(5);
var oneDollar = new Dollar(1);
var total = fiveDollars + oneDollar;
console.log("total:" + total); // => 6
console.log(fiveDollars > oneDollar); // => true

// console.log(point.toJSON()); //TypeError: point.toJSON is not a function
var pointInJSON = JSON.stringify(point);
console.log(pointInJSON); // if you don't provide toJSON, its result is {"x":0,"y":2.14}