function isArray(one) {
    return typeof one === "object" && 
    Object.prototype.toString.call(one) === "[object Array]";
}

var result = isArray([1]);
console.log(result);