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