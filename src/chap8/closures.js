var scope = "global scope";
function checkScope() {
    var scope  = "local scope";
    function nested() {
        return scope;
    }
    return nested();
}
var resultA = checkScope(); // => local scope
console.log(resultA);

var scopeB = "global scope";
function checkScopeB() {
    var scopeB = "local scope";
    function nested() {
        return scopeB;
    }
    return nested;
}

var resultB = checkScopeB()(); // => local scope
console.log(resultB);