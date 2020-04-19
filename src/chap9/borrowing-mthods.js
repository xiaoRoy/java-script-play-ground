/**
  * 9.6.3 borrowing methods
  */
 var generic = {
    toString: function() {
        var reuslt = "["
        if(this.constructor && this.constructor.name) {
            reuslt += this.constructor.name + ": ";
        }
        var count = 0;
        for (var propertyName in this) {
            if(!this.hasOwnProperty(propertyName)) continue;
            var value = this[propertyName];
            if (typeof value === "function") continue;
            if (count++) reuslt += ", ";
            reuslt += propertyName + '=' + value;
        }
        return reuslt + ']';
    },

    equals: function(that) {
        if (that == null) return false;
        if (this.constructor != this.constructor) return false;
        for(var propertyName in this) {
            if(propertyName === "**objectid**") continue;
            if(!this.hasOwnProperty(propertyName)) continue;
            if (this[propertyName] !== that[propertyName]) return false;
        }
        return true
    }
}

function Product(id, name) {
    this.id = id;
    this.name = name;
}

Product.prototype.equals = generic.equals;
Product.prototype.toString = generic.toString;

var productA = new Product("123", "Apple Phone");
console.log(productA.toString());
var productB = new Product("124", "Google Phone");
var isEquqlsAB = productA.equals(productB);
console.log(isEquqlsAB);
var productC = new Product("123", "Apple Phone");
var isEqualsAC = productA.equals(productC);
console.log(isEqualsAC);