// import { Set } from "./object-oriented.js"

// var setA = new Set(1, 4, 44);
// console.log(setA.toString())


/**
 * 9.7.1 Defining a Subclass
 */
function Animal() { }

function Cat() { }

Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype = new Animal(); // is it the same?
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

Function.prototype.extendedBy = function (constructor, methods, statics) {
    return defineSubClass(this, constructor, methods, statics);
}

var SmallCat = Cat.extendedBy(function (name) { this.name = name });
var smallCatA = new SmallCat("What");
console.log(smallCatA.name); // => What

function Set() {
    //placeholder  
}

Set.prototype.add = function () {
    // placeholder
}

Set.prototype.remove = function () {
    // placeholder
}

Set.prototype.size = function () {
    // placeholder
}

Set.prototype.forEach = function (operation, context) {
    //placeholder
}

Set.prototype.contains = function (element) {
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
    size: function () { return 1 },
    foreach: function (operation, context) {
        operation.call(context, this.onlyOne);
    },
    contains: function (element) {
        return element === this.onlyOne;
    }

}, SingletonSet.prototype);

/**
 * 9.7.2 Constructor and Method Chaining
 */
function NonNullSet() {
    Set.apply(this, arguments);
}

NonNullSet.prototype = Object.create(NonNullSet.prototype);
NonNullSet.prototype.constructor = NonNullSet;
NonNullSet.prototype.add = function () {
    for (var index = 0, length = arguments.length; index < length; index++) {
        var argument = arguments[index];
        if (argument == null) {
            throw new Error("Can't add null or undefined to NonNullSet.");
        }
    }
    return Set.prototype.add.apply(this, arguments);
}


function createSetSubClass(SuperClass, predication) {
    var SubClass = function () {
        //call parent constructor
        SuperClass.apply(this, arguments);
    }
    SubClass.prototype = Object.create(SuperClass.prototype)
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.add = function () {
        for (var index = 0, length = arguments.length; index < length; index++) {
            var element = arguments[index];
            if (!predication(element)) {
                throw Error("element " + element + " rejected by filter");
            }
        }
        SuperClass.prototype.add.apply(this, arguments);
    }
    return SubClass;
}

var StringSet = createSetSubClass(Set, function (element) { return typeof element === "string" });
var stringSetA = new StringSet();
stringSetA.add("a");
//stringSetA.add(1); => throw Error: element 1 rejected by filter 
var MySet = new createSetSubClass(Set, function(element){return typeof element !== "function"} );
new MySet().add(function(){});

var NonNullSetSecond = (function () {
    var superClass = Set
    return superClass.extendedBy(
        function () { superClass.apply(this, arguments); },// constructor
        {   //methods
            add: function () {
                console.log("add");
                for (var index = 0, length = arguments.length; index < length; index++) {
                    var element = arguments[index];
                    if (element == null) {
                        throw new Error("Can't add null or undefined");
                    }
                }
                return superClass.prototype.add.apply(this, arguments);
            }
        },
    )
}());
var setC = new NonNullSetSecond();
//Error: Can't add null or undefined
//setC.add(null); 


/**
 * 9.7.3 Composition Versus Subclassing
 */

var CompositionSet = Set.extendedBy(
    function (set, predication) {
        this.set = set;
        this.predication = predication;
    }, // param: constructor
    {
        add: function () {
            if (this.predication) {
                for (var index = 0, length = arguments.length; index < length; index++) {
                    var element = arguments[index];
                    if (!this.predication(element)) {
                        throw new Error("FilterdSet: element " + element + " rejected by filter.");
                    }
                }
                this.set.add.apply(this.set, arguments);
                return this;
            }
        },
        remove: function () {
            this.set.remove.apply(this.set, arguments);
            return this;
        },
        contains: function (element) {
            return this.set.contains(element);
        },
        size: function () {
            return this.set.size;
        },
        forEach: function (operation, context) {
            return this.set.forEach(operation, context);
        }
    }, // param: methods
)

var nonNullSetThird = new CompositionSet(new Set(), function (element) { return element != null; })