/**
 * 9.6.1 Example: A Set Class
 */
function Set() {
    this.values = {}
    this.count = 0;
    this.add.apply(this, arguments);
}

Set.fromArray = function(array) {
    var set = new Set();
    // set.add(array);
    set.add.apply(set, array);
    return set;
}
// Before adding the add() in the prototype,
// It throws a TypeError: Cannot read property 'apply' of undefined
// new Set();

Set.prototype.add = function () {
    var argumentCount = arguments.length;
    for (var index = 0; index < argumentCount; index++) {
        var value = arguments[index];
        var valueAsString = Set._valueToString(value);

        if (!this.values.hasOwnProperty(valueAsString)) {
            this.values[valueAsString] = value;
            this.count++;
        }
    }
    return this;
}

Set.prototype.remove = function () {
    var argumentCount = arguments.length;
    for (var index = 0; index < argumentCount; index++) {
        var value = arguments[index];
        var valueAsString = Set._valueToString(value);
        if (this.values.hasOwnProperty(valueAsString)) {
            delete this.values[valueAsString];
            this.count--;
        }
    }
    return this;
}

Set.prototype.forEach = function (operation, context) {
    for (var value in this.values) {
        if (this.values.hasOwnProperty(value)) { // ignore inherited properties
            operation.call(context, this.values[value]);
        }
    }
}

Set.prototype.equals = function(that) {
    if (this === that) return true;
    
    if(!(that instanceof Set)) return false;

    if(this.count != that.count) return false;

    try {
        this.forEach(function(elementInThis) {
            if(!that.contains(elementInThis)) throw false
        })
    }catch(exception){
        if(exception === false) return false
        throw exception
    }
    return true;
}

Set._valueToString = function (value) {

    switch (value) {
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';
        default: return checkObject(value);

    }

    function checkObject(object) {
        switch (typeof object) {
            case 'number': return '#' + object;
            case 'string': return '"' + object;
            default: {
                return '@' + createObjectId(object);
            }

        }
    }

    function createObjectId(object) {
        var propertyName = "|**objectid**|";
        if (!object.hasOwnProperty(propertyName)) {
            object[propertyName] = Set._valueToString.next++;
        }
        return object[propertyName];
    }
};

Set._valueToString.next = 100;

Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._valueToString(value));
}



var set = new Set("a");
var hasAElement = set.contains("a");
set.add(3);
set.forEach(function (element) {
    console.log(this.name + "'s " + element);
}, { name: "Smith" });

set.remove(3);
console.log("hasAElement:" + hasAElement);
console.log("set count:" + set.count);

/**
 * 9.6.2 Example: Enumerated Types
 */
function enumration(namesToValues) {
    var Enumration = function () {
        throw "Can't Instantiate Enumartions";
    };

    Enumration.prototype = {
        constructor: Enumration,
        toString: function () { return this.name; },
        valueOf: function () { return this.value; },
        toJSON: function () { return this.name },
    }

    Enumration.values = [];

    for (var name in namesToValues) {
        var enumInstance = inherit(Enumration.prototype);
        enumInstance.name = name;
        enumInstance.value = namesToValues[name];
        Enumration[name] = enumInstance;
        Enumration.values.push(enumInstance);
    }
    Enumration.forEach = function (operation, context) {
        var count = this.values.length;
        for (var index = 0; index < count; index++) {
            operation.call(context, this.values[index]);
        }
    };
    return Enumration;
}

function inherit(from) {
    if (from == null) throw TypeError();

    if (Object.create) {
        return Object.create(from);
    }

    var type = typeof from;
    if (type !== 'object' && type !== 'function') {
        throw TypeError();
    }

    function Dummy() { };
    Dummy.prototype = from;
    return new Dummy();
}

var Coin = enumration({ Penny: 1, Nickel: 5, Dime: 10, Quarter: 25 });
var dime = Coin.Dime;
var isDimeInstanceOfCoin = dime instanceof Coin
console.log("isDimeInstanceOfCoin:" + isDimeInstanceOfCoin);
var isConstructorCoin = dime.constructor == Coin
console.log("isConstructorCoin:" + isDimeInstanceOfCoin);
var fortyCents = Coin.Quarter + Coin.Nickel * 3;
console.log("FortyCents:" + fortyCents);
var coinComparison = Coin.Nickel > Coin.Penny;
console.log("coinComparison:" + coinComparison);
console.log(String(Coin.Quarter) + ":" + Coin.Quarter);


function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

Card.Suit = enumration({ Clubs: 1, Diamonds: 2, Hearts: 3, Spadess: 4 });
Card.Rank = enumration({
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6, Seven: 7,
    Eight: 8, Nine: 9, Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
});
Card.prototype.toString = function() {
    return this.rank.toString() + " of " + this.suit.toString();
}

Card.prototype.compareTo = function(that) {
    var result = 0;
    if(this.rank < that.rank) {
        result = -1;
    } else if (this.rank > that.rank) {
        result = 1;
    }
    return result;
}

Card.orderByRank = function(one, anohter) {
    return one.compareTo(anohter);
}

Card.orderBySuit = function(one, anohter) {
    var result = 0;
    if(one.suit < anohter.suit) {
        result = -1;
    } else if(one.suit > anohter.suit) {
        result = 1;
    } else {
        result = Card.orderByRank(one, anohter);
    }
    return result;
}

function Deck() {
    this.cards = [];
    var cards = this.cards;
    Card.Suit.forEach(function(suit) {
        Card.Rank.forEach(function(rank) {
            cards.push(new Card(suit, rank));
        });
    });
}

Deck.prototype.shuffle = function() {
    var cards = this.cards;
    var length = cards.length;
    for(var index = length - 1; index > 0; index -- ) {
        var temp;
        var random = Math.floor(Math.random() * (index + 1));
        temp = cards[index];
        cards[index] = cards[random];
        cards[random] = temp;
    }
    return this;
}

Deck.prototype.deal = function(count) {
    var remainingCount = this.cards.length;
    if(count > remainingCount) {
        throw "Out of cards"
    }
    return this.cards.splice(remainingCount - count, count);
}

var deck = new Deck();
deck.shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);
hand.forEach(function(card) {
    console.log(card.toString());
});

function extand(to, from) {
    for(var propertyName in from) {
        to[propertyName] = from[propertyName];
    }
    return to;
}


/**
 * 9.6.3 Standard Conversion Methods
 */
extand(Set.prototype, {
    toString: function() {
        var result = "{";
        var index = 0;
        this.forEach(function(element) {
            result += ((index ++ > 0) ? ", " : "") + element;
        });
        return result + "}";
    },
    toLocaleString: function() {
        var result = "{";
        var index = 0;
        this.forEach(function(element){
            if(index ++ > 0) result += ", ";
            if(element == null) result += element;
            else result += element.toLocaleString();
        });
        return result + "}";
    },
    toArray: function() {
        var result = [];
        this.forEach(function(element) {
            result.push(element);
        })
        return result;
    }
}); 
Set.prototype.toJSON = Set.prototype.toArray;
var setB = new Set(["hello", "what"]); //=> count is 1 
console.log("setB:" + setB.toString());
console.log("setB.count:" + setB.count);
var setC = new Set("hi", null, "where");
console.log(setC.toLocaleString());

var setD = new Set("one", "three", "four");
console.log(setD.toJSON() + "");

var isEqualesBC = setB.equals(setC);
console.log(isEqualesBC);

var setE = new Set("one", "three", "four");
var isEqualsED = setE.equals(setD);
console.log(isEqualsED);

var isEqualsCE = setC.equals(setE);
console.log(isEqualsCE);