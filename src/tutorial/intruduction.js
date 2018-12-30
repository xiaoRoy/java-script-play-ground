/**
 * A re-introduction to JavaScript (JS tutorial)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
 */

//Number
Math.sin(3.5)
var circumference = 2 * Math.PI * 3
var count =  + '42' // 42
var countA = + '010' //10
var countB = + '0x10' // 16
var notANumber = parseInt('hello', 10)
var stillNotANumber = notANumber + 5
var aInfinity = 1 / 0
var aNegativeInfinity = -1 / 0  

//String
'hello'.length //5
'hello'.toUpperCase() //'Hello'

Boolean('') //false
Boolean(234) // true

//Variables
for(let index = 0; index < 5; index ++){
    //do something
}

// operators

'3' + 4 + 5 // '345'
3 + 4 + '5' // '75'

123 == '123' //true
1 == true //true

123 === '123' //false
1 === true //false

var numbers = [1, 2, 3, 4, 5]
for(let value of numbers){
    number ++
}

var myCat = {
    "color" : "yellow",
    "name"  : "meat ball"
}

for(let property in myCat){
    print(property)
}

//Object
var objectA = new Object()
var objectB = {}

var product = {
    name: "X watch",
    brand: "not a brand",
    details: {
        color: "siver",
        size: "L"
    }
}

product.brand 
product.details.size
product['details']['size']

function Person(name, age){
    this.name = name
    this.age = age
}

var who = new Person('Jack', 12)

//object
var animals = new Array()
animals[0] = 'cat'
animals[1] = 'fish'
animals[2] = 'dog'

var animalsB = ['cat', 'fish', 'dog']
animalsB[100] = 'fox'
animalsB.length //101

for(var index; index < animalsB.length; index ++){
    //do something
}

//ES2015
for(const aninmal of animalsB){
     //do something
}

//ECMAScritpt5 
animalsB.forEach(function(current, index, array){
    //do something
})

//Function 

function add(one, another) {
    var result = one + another
    return result
}

add()//result:NaN

add(2, 3, 5)//result:5

function sum() {
    var sum = 0
    for(var index = 0, length = arguments.length; index < length; index ++){
        sum += arguments[index]
    }
    return sum 
}

sum(2, 3, 4, 5) //result:14

function avg() {
    var sum = 0
    for(var index = 0, length = arguments.length; index < length; index ++){
        sum += arguments[index]
    }
    return sum / arguments.length
}

function avgB(...args) {
    var sum = 0
    for(let value of args) {
        sum += value 
    }
    return sum / args.length
}
var annoymousAvg = function(...numbers) {
    var sum = 0
    for(let value of numbers) {
        sum += value
    }
    return sum / numbers.length
}

//custom Object
function PersonA(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },
        fullNameReversed: function() {
            return this.lastName + ',' + this.firstName 
        }
    }
} 


function PersonB(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    fullName = function() {
        return this.firstName + ' ' + this.lastName
    }

    fullNameReversed = function() {
        return this.lastName + ',' + this.firstName 
    }
}

function PersonC(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

PersonC.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName
}

PersonC.prototype.fullNameReversed = function() {
    return this.lastName + ',' + this.firstName 
}

avg.apply(null, [1, 2, 3])

function trivialNew(constructor, ...args) {
    var aObject = {}
    constructor.apply(aObject, args)
    return aObject
}

var bill = trivialNew(PersonC, 'Will', 'Bill')
//is therefore almost equivalent to
var sameBill = new PersonC('will', 'bill')

function parentFunc() {
    var one = 1

    function nestedFunc(){
        var four = 4
        return one + four
    }
    return nestedFunc()
}

function makeAdder(one) {
    return function(another) {
        return one + another
    }
}

var adderA = makeAdder(5)
adderA(6) //11

var adderB = makeAdder(20)
adderB(7) //27