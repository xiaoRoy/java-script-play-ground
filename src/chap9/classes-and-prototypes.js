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

/**
 * 9.2 Classes and Constructors
 */
function RangeWithConstructor(from, to) {
    this.from = from;
    this.to = to;
}

RangeWithConstructor.prototype = {
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
    },
}

var rangeB = new RangeWithConstructor(1, 4);
console.log(rangeB);
var isInRangB = rangeB.includes(4);
console.log(isInRangB);
rangeB.foreach(function (index) {
    console.log(index);
});

/**
 * 9.2.1 Constructors and Class Identity
 */

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype = {
    constructor: Rectangle,
    width: 0,
    height: 0,
    area: function () {
        return this.width * this.height;
    }
}

function Square(width) {
    this.width = width
    this.height = width
}
Square.prototype = Rectangle.prototype

var square = new Square(4);
var area = square.area();
console.log(area);

var isRectangle = square instanceof Rectangle
console.log(isRectangle); // => true

/**
 * 9.2.2 The constructor Property
 */

var Book = function () { };
var prototypeOfBook = Book.prototype;
var constructorOf = prototypeOfBook.constructor;
var isEqual = (constructorOf === Book);
console.log(isEqual);
var bookA = new Book();
var hasConstructorProperty = (bookA.constructor === Book)
console.log(hasConstructorProperty); // => true

var rangeC = new RangeWithConstructor(1, 4);
console.log(Rectangle.prototype.constructor); // => function Rectangle(width, height) { … }

function Product(id, name) { }
console.log(Product.prototype.constructor); // => function Product(id, name) { … }

function Cup(id) {}
Cup.prototype = {}
console.log(Cup.prototype.constructor); // => function Object() { … }