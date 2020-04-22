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

Complex.parse = function (input) {
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
    .parse("{4,4}")
    .add(new Complex(4, 4).negative())
    .equals(Complex.ZERO);
console.log("Complex ResultB:" + reusltA);

Complex.polar = function(radius, theta) {
    return new Complex(radius * Math.cos(theta), radius * Math.sin(theta));
}


/**
 * 9.4 Augmenting Classes
 */
Complex.prototype.conjugate = function () {
    return new Complex(this.real, -this.imaginary);
}

String.prototype.isNotEmpty = function () {
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
    switch (input.constructor) {
        case Number: return "Number:" + input;
        case String: return "String:" + input;
        case Date: return "Date:" + input;
        case Complex: return "Complex:" + input;
    }
}

var resultE = typeAndVaue(31);
console.log(resultE);