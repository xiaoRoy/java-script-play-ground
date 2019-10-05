var pointToString = { x: 31, y: 44 }.toString(); 
console.log(pointToString); //=>[object Object]

var date = new Date();
var dateJson = date.toJSON();
console.log(dateJson);