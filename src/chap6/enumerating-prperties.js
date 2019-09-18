/**
 * 6.5 Enumerating Properties
 */

var point = {
    x: 1.22,
    y: 2.24,
    z: 31.4
}

for (property in point) {
    //propety is a global property
    console.log(point[property]);
}

console.log(property);

function extend() {
    
}