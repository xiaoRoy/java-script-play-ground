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
// nonNullSetThird.add(null); Error: FilterdSet: element null rejected by filter.


function abstractMehtod() {
    throw new Error("abstract method");
}

function AbstractSet() { new Error("Can't instantiate abstract class") }
AbstractSet.prototype.contains = abstractMehtod;

var NotSet = AbstractSet.extendedBy(
    function (set) { this.set = set }, // constructor
    {
        contains: function (element) {
            return !this.set.contains(element);
        },

        toString: function () {
            return "~" + this.set.toString();
        },

        equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set);
        }
    }// methods
);



var AbstractEnumerableSet = AbstractSet.extendedBy(
    function () { throw Error("Can't instantiate abract class") }, // constructor
    {
        size: abstractMehtod,
        foreach: abstractMehtod,
        isEmpty: function () { return this.size == 0; },
        toString: function () {
            var result = "{";
            var index = 0;
            this.foreach(function (element) {
                if (index++ > 0) result += ", ";
                result += element;
            });
            return result + "}";
        },
        toLocaleString: function () {
            var result = "{";
            var index = 0;
            this.foreach(function (element) {
                if (index++ > 0) result += ", ";
                if (element == null) {
                    result += element;
                } else {
                    result += element.toLocaleString();
                }
                return result + "}";
            })
        },

        toArray: function () {
            var result = [];
            this.foreach(function (element) {
                result.push(element);
            });
            return result;
        },

        equals: function (that) {
            if (!(that instanceof AbstractEnumerableSet)) return false;
            if (this.size() != that.size()) return false;
            try {
                this.foreach(function (element) {
                    if (!that.contains(element)) throw false
                })
            } catch (exception) {
                if (exception == false) return false;
                throw exception
            }
        }
    }// methods
);

var SingletonSetSecond = AbstractEnumerableSet.extendedBy(
    function (onlyOne) { this.onlyOne = onlyOne }, //constructor
    {
        contains: function (value) {
            return value === this.onlyOne;
        },

        size: function () {
            return 1;
        },

        foreach: function (operation, context) {
            operation.call(context, this.onlyOne);
        }
    }, //methods
);

var singletonSetA = new SingletonSetSecond("what");
console.log("====Singleton Set====");
console.log(singletonSetA.toString());
console.log(singletonSetA.contains("where"));
console.log("====End of Singleton Set====");

var notSetA = new NotSet(singletonSetA);
console.log("====Not Set====");
console.log(notSetA.contains({}));
console.log(notSetA.toString());
console.log("====End of Not Set====");

var AbstractWritableSet = AbstractEnumerableSet.extendedBy(
    function () { throw new Error("Can't instantiate abstract class") }, //constrctor

    {
        add: abstractMehtod,
        remove: abstractMehtod,
        union: function (another) {
            var self = this;
            another.foreach(function (element) {
                self.add(element);
            });
            return this;
        },

        intersection: function (another) {
            var self = this;
            another.foreach(function (element) {
                if (!self.contains(element)) {
                    self.remove(element);
                }
                return this;
            });
        },

        difference: function (another) {
            var self = this;
            another.foreach(function (element) {
                self.remove(element);
            });
            return this;
        }
    }, //methods
);

var ArraySet = AbstractWritableSet.extendedBy(
    function () {
        this.values = [];
        this.add.apply(this, arguments);
    }, //constructor

    {
        contains: function (element) {
            return this.values.indexOf(element) > -1;
        },

        size: function () {
            return this.values.length;
        },

        add: function () {
            for (var index = 0, length = arguments.length; index < length; index++) {
                var element = arguments[index];
                if (!this.contains(element)) {
                    this.values.push(element);
                }
            }
            return this;
        },

        remove: function () {
            for (var index = 0, length = arguments.length; index < length; index++) {
                var element = arguments[index];
                var indexInArray = this.values.indexOf(element);
                if(indexInArray != -1) {
                    this.values.splice(indexInArray, 1);
                }
            }
            return this;
        }
    }, //methods
);