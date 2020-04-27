// import { Set } from "./object-oriented.js"

// var setA = new Set(1, 4, 44);
// console.log(setA.toString())

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

function defineSubClass(superClass, subClass, methods, statics) {
    subClass.prototype = inherit(superClass.prototype);
    subClass.prototype.constructor = subClass;
    if(methods) {
        copyProperties(methods, subClass.prototype);
    }

    if(statics) {
        copyProperties(statics, subClass);
    } 

    return subClass;
}

function copyProperties(from, to) {
    for(var propertyName in from) {
        to[propertyName] = from[propertyName];
    }
    return to;
}

Function.prototype.extendBy = function(constructor, methods, statics) {
    return defineSubClass(this, constructor, methods, statics);
}

var SmallCat = Cat.extendBy(function(name) {this.name = name});
var smallCatA = new SmallCat("What");
console.log(smallCatA.name);