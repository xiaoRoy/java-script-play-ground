import { Set } from "./object-oriented.js"

var setA = new Set(1, 4, 44);
console.log(setA.toString())

function Animal() {}

function Cat() {}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat
var catA = new Cat();
var isCatAnimal = catA instanceof Animal
console.log(isCatAnimal);

function inherit(from) {
    if (from == null) throw TypeError();
    if (Object.create) {
        return Object.create(from);
    }
    var typeOfFrom = typeof from
    if (typeOfFrom !== "object" && typeOfFrom !=="function") throw TypeError(); 
    function Dummy() {};
    Dummy.prototype = from;
    return new Dummy();
}

function defineSubClass(superClass, constructor, methods, statics) {
    constructor.prototype = inherit(superClass.prototype);
    constructor.prototype.constructor = constructor;
}

function copyPropertiest(from, to) {
    for(var propertyName in from) {
        to[propertyName] = from[propertyName];
    }
    return to;
}