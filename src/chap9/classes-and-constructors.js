/**
 * 9.2 Classes and Constructors
 */
function RangeWithConstructor(from, to) {
    this.from = from;
    this.to = to;
}

RangeWithConstructor.prototype = {
    constructor: RangeWithConstructor,
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

    equals: function(that) {
        if (that == null) return false;
        if (that.constructor != RangeWithConstructor) return false
        return this.from == that.from && this.to == that.to;
    },
    compareTo: function(that) {
        return this.from - that.from;
    }
}

var rangeB = new RangeWithConstructor(1, 4);
console.log(rangeB);
var isInRangB = rangeB.includes(4);
console.log(isInRangB);
rangeB.foreach(function (index) {
    console.log(index);
});

/**
 * 9.6.4 Comparison Methods
 */

 var rangeD = new RangeWithConstructor(0, 4);
 var rangeE = new RangeWithConstructor(3, 4);
 var ranges = [rangeB, rangeD, rangeE];
 ranges.sort();
 var firstRange = ranges[0];
 console.log(firstRange);

/**
 * 9.2.1 Constructors and Class Identity
 */

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.name = "Rectangle";

Rectangle.prototype = {
    // constructor: Rectangle,
    // width: 0,
    // height: 0,
    // name: "",
    area: function () {
        return this.width * this.height;
    }
}

var rectangleB = new Rectangle(4, 5);
console.log("RectangleB:" + Rectangle.name);

function Square(width) {
    this.width = width
    this.height = width
}
Square.prototype = Rectangle.prototype

var square = new Square(4);
var area = square.area();
console.log(area);
console.log(square.name);

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

function Cup(id) { }
Cup.prototype = {}
console.log(Cup.prototype.constructor); // => function Object() { … }