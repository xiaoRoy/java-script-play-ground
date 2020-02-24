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


/**
 * 9.3 Java-Style Classes in JavaScript
 */
function extend(one, another) {
    for (property in another) {
        console.log("propertyName:" + property)
        one[property] = another[property];
    }
    return one;
}


function defineSimpleClass(constructor, methods, statics) {
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}

var SimpleRange = defineSimpleClass(
    function (from, to) { this.from = from, this.to = to },
    {
        includes: function (input) { return input >= this.from && this.to <= input; },
        toString: function () { return this.from + "..." + this.to; }
    },
    { upto: function (to) { return new SimpleRange(0, to); } }
);

function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) throw new TypeError();
    this.real = real;
    this.imaginary = imaginary;
}

Complex.prototype.add = function (another) {
    return new Complex(this.real + another.real, this.imaginary + another.imaginary);
}

Complex.prototype.negative = function () {
    return new Complex(-this.real, -this.imaginary);
}

Complex.prototype.toString = function () {
    return "{" + this.real + "," + this.imaginary + "}";
}

Complex.prototype.equals = function (another) {
    return another != null &&
        this.constructor === Complex &&
        this.real === another.real && this.imaginary === another.real;
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
Complex._format = /^\{([^,]+),([^}]+)\}$/;

Complex.pares = function (input) {
    try {
        var result = Complex._format.exec(input);
        console.log(result);
        return new Complex(parseFloat(result[1]), parseFloat(result[2]));
    } catch (exception) {
        throw new TypeError("Can't parse '" + input + "' as a complex number");
    }
}

var complexA = new Complex(2, 3);
var complexB = new Complex(complexA.real, complexA.imaginary);
console.log(complexA.add(complexB).toString());

var reusltA = Complex
    .pares("{4,4}")
    .add(new Complex(4, 4).negative())
    .equals(Complex.ZERO);
console.log("Complex ResultB:" + reusltA);


/**
 * 9.4 Augmenting Classes
 */
Complex.prototype.conjugate = function() {
    return new Complex(this.real, -this.imaginary);
}

String.prototype.isNotEmpty = function() {
    return this.trim().length > 0;
}

var resultC = "".isNotEmpty();
console.log(resultC);

/**
 * 9.5.1 The instanceof operator
 */
var complexD = new Complex(4, 4);
var resultD = Complex.prototype.isPrototypeOf(complexD);
console.log(resultD);

/**
 * 9.5.2 The constructor property
 */

 function typeAndVaue(input) {
    if (input == null) return "";
    switch(input.constructor) {
        case Number: return "Number:" + input;
        case String: return "String:" + input;
        case Date: return "Date:" + input;
        case Complex: return "Complex:" + input;
    }
 }

 var resultE = typeAndVaue(31);
 console.log(resultE);

 /**
  * 9.5.3 The Constructor Name
  */


function typeofShowcase() {
    showTypeof("Number", 123);
    showTypeof("String", "a");
    showTypeof("Boolean", true);
    showTypeof("Function", function(){});
    showTypeof("Array", [1, "a"]);
    showTypeof("Date", new Date());
    showTypeof("Regex", /^\{([^,]+),([^}]+)\}$/);
    showTypeof("Object", {x: 1, y:2});
    showTypeof("undefined", undefined);
    showTypeof("null", null);
}
typeofShowcase();

function showTypeof(type, value) {
    console.log(type + ":" + value + " is typeof " + typeof value);
}

function classOf() {

}