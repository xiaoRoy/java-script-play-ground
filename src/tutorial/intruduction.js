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
