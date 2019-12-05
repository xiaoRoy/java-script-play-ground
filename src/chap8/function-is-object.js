function check(args) {
    var actual = args.length;
    var expected = args.callee.length
    if (actual != expected) {
        throw Error("Expected " + expected + " arguemnts; got " + actual);
    }
}

function add(one, another) {
    check(arguments)
    return one + another;
}

function showInfo(info) {
    "use strict";
    console.log(this);
    console.log(info);
}

var one = {
    "x": 31.4,
    y: 22
}

showInfo.call(one, "what info");// in the function showInfo, this is object one
showInfo("what info");// in the function showInfo, this is undefined in strict mode