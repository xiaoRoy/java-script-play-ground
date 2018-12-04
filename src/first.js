//variable is a symbolic name for a value.
var x;
x = 0;
x = 1;
x = 0.01;
x = "Hello Wolrd";
x = 'Java Script';
x = true;
x = false;
x = null;
x= undefined;

// JavaScript's most important data type is the object.
// An object is a collection of name/value pairs, or a string to value map.
var book = {
    topic: "JavaScript",
    author: "NoOne"
}

book.author
book[topic]
book.pages = 234
book.conent = {}

// JavaScript also supports arrays (numerically indexed lists) of values
var primes = [2, 3, 5, 7]
primes[0]
primes.length
var emptyArray = []

// Arrays and objects can hold other arrays and objects:
var points = [
    {x:0, y:0},
    {x:1, y:1}
]

//operators
var count = 0;
count++;
count--;
count +=2;
count *=3;
count //variable names are expressions, too.

function plusOne(number){
    return number + 1;
}

var square = function(number){
    return number * number;
};

square(plusOne(1))

var rectangle = {
    width: 0,
    height: 0,
}

//The "this" keyword refers to the object
rectangle.isSquare = function(){
    return this.width == this.height;
}

function abs(number){
    var result = number;
    if(number < 0){
        result = -number;
    } 
    return result;
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.r = function() {
    return Math.sqrt(
        this.x * this.x +
        this.y + this.y
        );
};