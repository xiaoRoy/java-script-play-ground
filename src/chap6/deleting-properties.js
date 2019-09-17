/**
 * 6.3 Deleting propterties
 */

var dog = {
    name: "Dog",
    age: "2",
    price: 44.0
}

delete dog.price; // Delete x, and return true.
delete dog.price; // Do nothing(price doesn't exist), and return true.
delete dog.toString(); // Do noting(toString is inherited property), and return true.
delete 44; // Nonsense, but evaluates to true.


delete Object.prototype; // => false in non-strict mode

var employee = {};
Object.defineProperty(employee, 'name', { configurable: false });
var result = delete employee.name;
console.log(result); // => false in non-strict mode

function testDeletingProperties() {
    'use strict'
    // delete Object.prototype;// TypeError in strict mode

    Object.defineProperty(employee, 'age', { configurable: false });
    delete employee.age; // TypeError in strict mode
}

function test() {
    'use strict'
   
    var phone = {model: undefined};

    console.log(phone.model);
}
test();
var one = "one";
var test =  true && true && one.length;
console.log(test);

// testDeletingProperties();

