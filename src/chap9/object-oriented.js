function Set() {
    this.values = {}
    this.count = 0;
    this.add.apply(this, arguments);
}
// Before adding the add() in the prototype,
// It throws a ypeError: Cannot read property 'apply' of undefined
// new Set();

Set.prototype.add = function () {
    var argumentCount = arguments.length;
    for (var index = 0; index < argumentCount; index++) {
        var value = arguments[index];
        var valueAsString = Set._valueToString(value);
        
        if(!this.values.hasOwnProperty(valueAsString)) {
            this.values[valueAsString] = value;
            this.count ++;
        }
    }
    return this;
}

Set._valueToString = function (value) {

    switch (value) {
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default: return checkObject(value);

    }

    function checkObject(object) {
        switch(typeof object) {
            case 'number': return '#'+ object;
            case 'string': return '"'+ object;
            default: {
                return '@' +createObjectId(object);
            }

        }
    }   

    function createObjectId(object) {
        var propertyName = "|**objectid**|";
        if(!object.hasOwnProperty(propertyName)) {
            object[propertyName] = Set._valueToString.next ++;
        } 
        return object[propertyName];
    }
};

Set._valueToString.next = 100;

Set.prototype.cotains = function(value) {
    return this.values.hasOwnProperty(Set._valueToString(value));
}

var set = new Set("a");
var hasAElement = set.cotains("a");
console.log("hasAElement:" + hasAElement);

function Point(x, y) {
    this.x = x;
    this.y = y;
}

var point = new Point(4, 3);
console.log(point.x);