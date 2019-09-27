var point = {
    x: 1,
    y: 3.14
}

var anotherPoint = Object.create(point);
var isPrototype = point.isPrototypeOf(anotherPoint) // => true
console.log(isPrototype);
var isObjectPrototype = Object.prototype.isPrototypeOf(anotherPoint) // => true
console.log(isObjectPrototype);
console.log(Object.getPrototypeOf(anotherPoint))