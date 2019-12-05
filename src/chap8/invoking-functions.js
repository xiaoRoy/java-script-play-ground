/**
 * 8.2.1 Function Invocation
 */

var isInStrictMode = (function () { return !this }())
console.log(isInStrictMode);

/**
 * 8.2.2 Method Invocation
 */

var calculator = {
    one: 3,
    anohter: 4,
    add: function () {
        this.result = this.one + this.anohter;
    }
}
calculator.add();
console.log(calculator.result)
calculator["add"]()

var what = {};
what[0] = 1;
console.log(what[0]);

var rect = {
    width: 3,
    height: 4,
    setSize: function(width, height) {
        this.width = width;
        this.height = height;
    }
}


var nested = {
    run: function() {
        var self = this;
        console.log(this === nested);
        runInside();
        function runInside() {
            console.log(this === nested);
            console.log(self === nested);
        }
    }
}
nested.run();

function Rect(width, height) {
    this.width = width;
    this.height = height;
}

class RectAnohter {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

var rectB = new Rect(4.1, 4.2);
console.log(rectB.width);

var what = Rect(1, 3);
console.log(what); // => undefined