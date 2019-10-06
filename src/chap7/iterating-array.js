var oneArray = [1, "two", true, null];

for (var index = 0, length = oneArray.length; index < length; index ++) {
    console.log(oneArray[index]);
}
console.log(index); // Notice that the index has global scope

var anotherArray = [44, "four", false, null, "end",]
for(var index = 0, length = anotherArray.length; index < length; index ++) {
    /* if(anotherArray[index] === null || anotherArray[index] === undefined) {
        continue;
    } */

    if(anotherArray[index] == undefined) {
        continue;
    }
    console.log(anotherArray[index]);
}

var sparseArray = Array(4);
for (var index = 0, length = sparseArray.length; index < length; index ++) {
    if(sparseArray[index] === undefined) {
        continue
    }
    console.log(sparseArray[index]);
}

var arrayB = [1, 2,,"four", null]
console.log("Length of arrayB:" + arrayB.length)
for(var index = 0, length = arrayB.length; index < length; index ++) {
    if(!(index in arrayB)) {
        console.log("Not in property:" + index)
        continue;
    }
    console.log(arrayB[index]);
}