var sparseArray = [1,,,,5];

var pointA = {
    x:2.3,
    y:4.4
};
var pointB = {};
pointB.x = pointA.x;
pointB.y = pointA.y;

var rectangleA = {
    topLeft: {x:2, y:4},
    bottomRight: {x:4, y: 5}
}

var offset = 1;
var square = {
    "topLeft": {x: pointA.x, y: pointA.y},
    'bottomRight': {x: pointA.x + offset, y: pointA.y + offset}
}