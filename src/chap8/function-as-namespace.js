(function() {

}());

/**
 * 8.5 Functions As Namespaces
 */

 // extend is the namespace
 var extend = (function () {
    var prototypeProperties = ["toString", "valueOf", "constructor",
    "isPropertyOf", "propertyIsEnumerable", "toLocalString"];

    for (var testProperty in { toString: null }) {
        return function extend(object) {
            for(var index = 1; index < arguments.length; index ++) {
                var source = arguments[index];
                for(var property in source) {
                    object[property] = source[property];
                }
            }
            return object;
        }
    }
    return function extendFixed(object) {
        for(var index = 1; index < arguments.length; index ++) {
            var source = arguments[index];
            for(var property in source) {
                object[property] = source[property];
            }
            for(var indexJ = 0; indexJ < prototypeProperties.length; indexJ ++) {
                var anotherProperty = prototypeProperties[indexJ];
                if(source.hasOwnProperty(anotherProperty)) {
                    object[anotherProperty] = source[anotherProperty];
                }
            }
        }
        return object;
    };
}());
