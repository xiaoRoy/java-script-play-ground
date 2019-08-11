var text = "text";
text.what = 3;
var what = text.what;
console.log(what) // => undefined

var pointA = {
    x:3.4,
    y:5.6
}

var pointB = {
    x:3.4,
    y:5.6
}

console.log(pointA == pointB) // => false
console.log(pointA === pointB) // => false

function areArrayEqual(oneArray, anotherArray) {
    if(oneArray.length != anotherArray.length) {
        return false;
    }
    for (var index = 0; index < oneArray.length; index ++) {
        if(oneArray[index] !== anotherArray[index]) {
            return false;
        }
    }
    return true;
}