/**
 * 5.5.2 do/while
 */
function showArray(array) {
    var length = array.length;
    if (length === 0) {
        console.log("Empyt Array");
    } else {
        var index = 0;
        do {
            console.log(array[index]);
        } while (++index < length);
    }
}

/**
 * 5.5.4 for/in
 */

function showNumberArray(numberArray) {
    for (var number in numberArray) {
        console.log(number);
    }
}

function showPointInfo() {
    var point = {
        x: 31.44,
        y: 44
    }
    for (var coordinate in point) {
        console.log(point[coordinate]);
    }
}

showPointInfo();

function copyObjetctPropertyIntoArray() {
    var firstPoint = {
        x: 1.23,
        y: 44.0,
        z: 6.14
    }

    var properties = [];
    var index = 0;
    for (properties[index++] in firstPoint) /* empyt */;

    for(var index in properties) {
        console.log(properties[index]);
    }
}

copyObjetctPropertyIntoArray();