var point = {
    x: 12.4,
    y: 23.44,

    get r() {
        return Math.sqrt(this.x * this.x + this.y + this.y);
    }
}

var xAttributes = Object.getOwnPropertyDescriptor(point, "x");
console.log(xAttributes);

var rAttributes = Object.getOwnPropertyDescriptor(point, "r");
console.log(rAttributes);

var anotherPoint = {};
Object.defineProperty(anotherPoint, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});

anotherPoint.x; // => 1
Object.keys(anotherPoint); // => [] Because x is not enumerable.

Object.defineProperty(anotherPoint, "x", { writable: false });
anotherPoint.x = 2; // Fails silently or throws TypeError in strict mode
console.log(anotherPoint.x); // still => 1 

Object.defineProperty(anotherPoint, "x", { value: 2 });
console.log(anotherPoint.x); // => 2

Object.defineProperty(anotherPoint, "x", { get: function () { return 0; } })

var book = Object.defineProperties({}, {
    title: { value: "Harry Potter", writable: true, enumerable: true, configurable: true },
    price: { value: 44.1, writable: true, enumerable: true, configurable: true },
    description: { get: function () { return this.title + this.price }, enumerable: true, configurable: true }
});

console.log(book.description);

Object.defineProperty(Object.prototype, "extend", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(one) {
        var propertyNames = Object.getOwnPropertyNames(one);
        for(var index = 0; index < propertyNames.length; index ++) {
            var propertName = propertyNames[index]
            if(propertName in this) {
                continue;
            }
            var propertyDescriptor = Object.getOwnPropertyDescriptor(one, propertName);
            Object.defineProperty(this, propertName);
        }
    }
})