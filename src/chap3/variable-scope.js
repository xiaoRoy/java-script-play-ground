/**
 * 3.10 Variable Scope
 */

var scope = "global";

function checkScope() {
    var scope = "local";
    var testScope = "test";
    if(true) {
        var x = 5;
    }
    console.log(x);
    return scope;
}
console.log(checkScope());

another = "global";
function checkScopeAgain() {
    another = "local";
    more = "local"; // // This implicitly declares a new global variable.
    return [another, more];
}

var scopeOnceMore = "scope";
function checkScopeOnceMore() {
    var scope = "local";
    function nested() {
        var scope = "nested";
        return scope;
    }
    return nested();
}

var what = checkScopeOnceMore();
console.log(what); // => nested

function checkNumber(number) {
    if(number > 3) {
        var anotherNumber = number * number;
        for(var index = 0; index < number; index ++) {
            anotherNumber = anotherNumber + index;
        }
    }
    console.log(anotherNumber);
    console.log(index);
}
checkNumber(1); //both anotherNumber and index are undefined
checkNumber(4);

function showHoisting() {
    console.log(one); // => undefined
    var one = "1"
    console.log(one); // => "1"
}
function showHoistingAnatomy() {
    var one;
    console.log(one); // => undefined
    one = "1"
    console.log(one); // => "1"
}

var name = "mary";
function checkScopeAgainAndAgain() {
    console.log(name); // => undefined not mary
    var name = "local mary";
    console.log(name); // => local mary
}
checkScopeAgainAndAgain();