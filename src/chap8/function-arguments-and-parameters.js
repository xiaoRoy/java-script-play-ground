/**
 * 8.3.1 Optional Parameters
 */

function getPropertyNames(object, result) {
    // if(result === undefined) {
    //     result = [];
    // }
    result = result || [];
    for(var property in object) {
        result.push(property);
    } 
    return result;
}

var reusltA = getPropertyNames(this);
console.log(reusltA);

var reusltB = getPropertyNames({x:3, y:4.4}, ["begin"])
console.log(reusltB);