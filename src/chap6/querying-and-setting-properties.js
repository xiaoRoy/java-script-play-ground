/**
 * 6.2.1 Objects As Associative Arrays
 */
'use strict'
var phone = {
    brand: "apple",
    model: "11"
}

phone.price = 32.4;
phone["model"] = "11 Max Pro"

function addStock(portfolio, stockName, shares) {
    portfolio[stockName] = shares;
}

function getStokePrice(stockName) {
    return 3.14;
}

function calculateTotalShare(portfolio) {
    var total = 0.0;
    for (stock in portfolio) {
        var shares = portfolio[stock];
        var price = getStokePrice(stock);
        total += (shares * price);
    }
    return total;
}

//  var what = inherit(new Date());

/**
 * 6.2.2 Inheritance
 */

function inherit(from) {
    if (from == null) {
        throw TypeError();
    }

    if (Object.create) {
        return Object.create(from);
    }

    var type = typeof from;
    if (type !== "object" && t !== "function") {
        throw TypeError();
    }

    function dummyConstructor() { };
    dummyConstructor.prototype = from
    return new dummyConstructor();
}

var first = {};
first.x = 0.1;

var second = inherit(first);
second.y = 0.2;

var third = inherit(second);
third.z = 0.3;

var what = third.toString();
console.log(what);

var result = third.z + third.y + third.x; // => 0.6
console.log(result);

var unitCircle = { r: 1 }
var anotherCircle = inherit(unitCircle);
anotherCircle.r = 6.42;
console.log(unitCircle.r); // => 1

/**
 * 6.2.3 Property Access Errors
 */
var book = { title: "Harry Potter" }
var subtile = book.subtile; // => undefined
// var length = subtile.length; // => TypeError: Cannot read property 'length' of undefineds

var length = undefined;
if(book) {
    if(book.subtile) {
        length = book.subtile.length;
    }
}

var anotherLength = book && book.subtile && book.subtile.length;

