/**
 * 9.5.3 The Constructor Name
 */

var allType = {
    aNumber: 123,
    aString: "a",
    aBoolean: true,
    aFunction: function () { },
    aArray: [1, "a"],
    aDate: new Date(),
    aRegex: /^\{([^,]+),([^}]+)\}$/,
    aObject: { x: 3, y: 4 },
    aUndefined: undefined,
    aNull: null
};

function typeofShowcase() {
    for (property in allType) {
        if (!allType.hasOwnProperty(property)) continue;
        var type = property.substring(1, property.length);
        showTypeof(type, allType[property]);
    }
}
function showTypeof(type, value) {
    console.log(type + ":" + value + " is typeof " + typeof value);
}

typeofShowcase();


function showClassOf(object) {
    console.log(object + " is class of:" + classOf(object));
}

function classOfShowcase() {
    for (property in allType) {
        if (!allType.hasOwnProperty(property)) continue;
        showClassOf(allType[property]);
    }
}
classOfShowcase();

function classOf(object) {
    return Object.prototype.toString.call(object).slice(8, -1)
}

Function.prototype.getName = function () {
    // console.log("Name:" + this.name);
    // if ("name" in this) return this.name;
    console.log("getName:" + this.toString());
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}

function type(object) {
    var type, clazz, name;
    if (object === null) {
        return "null";
    }

    if (object !== object) {
        return "nan";
    }

    var resultTypeOf = typeof object;
    if (resultTypeOf !== "object") {
        return resultTypeOf;
    }

    var resultClassOf = classOf(object);
    if (resultClassOf !== "Object") {
        return resultClassOf;
    }
    var objectConstructor = object.constructor;
    console.log("objectConstructor:" + objectConstructor);
    if (objectConstructor && typeof objectConstructor === "function") {
        var constructorName = objectConstructor.getName();
        if (constructorName) return constructorName;
    }
    return "ObjectAA";
}

function Apple() {

}
// Apple.prototype = {
//     constructor: {}
// };


var point = { x: 1, y: 2 };
console.log("--------")
console.log(type(point));
console.log(type(new Date()));
console.log(type(new Apple()));
