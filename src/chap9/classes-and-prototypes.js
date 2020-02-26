function inherit(from) {
    if (from == null) {
        throw TypeError();
    }

    if (Object.create) {
        return Object.create(from);
    }

    var type = typeof from;
    if (type !== "object" && type !== "function") {
        throw TypeError();
    }

    function dummyConstructor() { };
    dummyConstructor.prototype = from
    return new dummyConstructor();
}

/**
 * 9.1 Classes and Prototypes
 */
function range(from, to) {
    var result = inherit(range.methods);
    result.from = from;
    result.to = to;
    return result;
}
range.methods = {
    includes: function (input) {
        return this.from <= input && input <= this.to;
    },

    foreach: function (operation) {
        for (var index = Math.ceil(this.from); index <= this.to; index++) {
            operation(index);
        }
    },

    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }

}

var rangeA = range(1, 4);
console.log(rangeA);

var isInRangA = rangeA.includes(4);
console.log(isInRangA);

rangeA.foreach(function (index) {
    console.log(index);
});
