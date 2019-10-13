/**
 * 6.5 Enumerating Properties
 */


function enumeratePoint() {
    var point = {
        x: 1.22,
        y: 2.24,
        z: 31.4
    }

    for (propertyInPoint in point) {
        //propertyInPoint is a global property
        console.log(point[propertyInPoint]);
    }
}

enumeratePoint();
console.log(propertyInPoint);

function extend(one, anohter) {
    for (var property in anohter) {
        one[property] = anohter[property];
    }
    return one;
}

var first = { x: 1, y: 2 };
var second = { y: 3, z: 4 };
var result = extend(first, second);
console.log(result);

function merge(one, anohter) {
    for (var property in anohter) {
        if (one.hasOwnPropert(property)) {
            continue;
        }
        one[property] = anohter[property];
    }
    return one;
}

function restrict(one, anohter) {
    for (var property in one) {
        if (!(property in anohter)) {
            delete one[property];
        }
    }
    return one;
}

function substract(one, another) {
    for (var property in another) {
        delete one[property];
    }
    return one;
}

function union(one, another) {
    return extend(extend({}, one), another);
}

var thrid = { x: 1, y: 2 };
var fourth = { y: 3, z: 4 };
var resultB = union(thrid, fourth);
console.log(resultB);

function intersection(one, another) {
    return restrict(restrict({}, one), another);
}

function keys(one) {
    if (typeof one !== "object") {
        throw TypeError();
    }
    var result = [];
    for (var property in one) {
        if (one.hasOwnPropert(property)) {
            result.push(property);
        }
    }
    return result;
}