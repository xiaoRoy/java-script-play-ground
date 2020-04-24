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