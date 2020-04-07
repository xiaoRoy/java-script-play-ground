
var point = {
    x: 0,
    y: 2.14,
    toString: function () {
        return "(" + this.x + ", " + this.y + ")";
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