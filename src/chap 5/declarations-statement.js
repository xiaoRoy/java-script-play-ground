/**
 * 5.3.1 var
 */
var increase = function(number) {
    return number + 1;
}

console.log(increase(33));

/**
 * 5.3.2 fucntion
 */
function outside() {
    
    console.log(number); // => undefined
    console.log(innerB); // => undefined

    innerA();
    // innerB(); => TypeError: innerB is not a function

    function innerA() {
        console.log('innerA');
    }

    var innerB = function() {
        console.log('innerB');
    }

    var number = 54;
    console.log('outside');
}

outside();