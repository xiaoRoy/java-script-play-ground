var messages = "hello world";
var fourth = messages[3];
console.log(fourth);
var fifth = messages.charAt(4);
console.log(fifth);

var result = Array.prototype.map.call(messages, function(element) {
    return element + 1;
});
console.log(result);
var isArray = Array.isArray(result);
console.log(isArray);