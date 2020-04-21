function Range(from, to) {
    this.from = function () { return from };
    this.to = function () { return to };
}

Range.prototype = {
    constructor: Range,

    includes: function (value) {
        return this.from() <= value && value <= this.to();
    },

    forEach: function (operation) {
        for (var element = Math.ceil(this.from(), max = this.to()); element < max; element++) {
            operation(element);
        }
    },

    toString: function () {
        return "(" + this.from() + "..." + this.to() + ")";
    }
};

var range = new Range(0, 44);
console.log(range.toString());
range.forEach(function (element) {
    if (element == 43) {
        console.log(43);
    }
});
var is4InRange = range.includes(4);
var is45InRagne = range.includes(45);
console.log(is4InRange);
console.log(is45InRagne);

function isArrayLike(object) {
    var length = object.length;
    return object &&
        typeof object === "object"
    isFinite(length) &&
        length > 0 &&
        length === Math.floor(length) &&
        length < Math.pow(2, 32)
}

function SetWithArray() {
    this.values = {};
    this.count = 0;
    var argumentsLength = arguments.length;
    if (argumentsLength == 1 && isArrayLike(arguments[0])) {
        this.add.apply(this, arguments[0]);
    } else if(argumentsLength > 0) {
        this.add.apply(this, arguments);
    }
}

SetWithArray.prototype.add = function() {
    // place holder method
}