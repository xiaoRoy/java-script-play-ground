// import { Set } from "./object-oriented.js"

// var setA = new Set(1, 4, 44);
// console.log(setA.toString())

function Animal() { }

function Cat() { }

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
    if (typeOfFrom !== "object" && typeOfFrom !== "function") throw TypeError();
    function Dummy() { };
    Dummy.prototype = from;
    return new Dummy();
}

function defineSubClass(superClass, subClass, methods, statics) {
    subClass.prototype = inherit(superClass.prototype);
    subClass.prototype.constructor = subClass;
    if (methods) {
        copyProperties(methods, subClass.prototype);
    }

    if (statics) {
        copyProperties(statics, subClass);
    }

    return subClass;
}

function copyProperties(from, to) {
    for (var propertyName in from) {
        to[propertyName] = from[propertyName];
    }
    return to;
}

Function.prototype.extendBy = function (constructor, methods, statics) {
    return defineSubClass(this, constructor, methods, statics);
}

var SmallCat = Cat.extendBy(function (name) { this.name = name });
var smallCatA = new SmallCat("What");
console.log(smallCatA.name);

function Set() {
    //placeholder 
}

function SingletonSet(onlyOne) {
    this.onlyOne = onlyOne;
}

SingletonSet.prototype = Object.create(Set.prototype);
SingletonSet.prototype.constructor = SingletonSet;
copyProperties({
    add: function () { throw "Read Only Set" },
    remove: function () { throw "Read Only Set" },
    size: function() {return 1},
    foreach: function(operation, context) {
        operation.call(context, this.onlyOne);
    },
    contains: function(element) {
        return element === this.onlyOne;
    }

}, SingletonSet.prototype);