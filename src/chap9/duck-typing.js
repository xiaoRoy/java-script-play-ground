/**
 * 9.5.4 Duck-Typing
 */

function TriAthlete() {

}

TriAthlete.prototype.run = function () {
    console.log("I could run.");
}
TriAthlete.prototype.swim = function () {
    console.log("I could swim.");
}
TriAthlete.prototype.bike = function () {
    console.log("I could bike.");
}

function joinTriathlon(who) {
    if (who.run && who.swim && who.bike) {
        console.log("Allow to join the Triathlon.");
    } else {
        console.log("Not allow to join the Triathlon.");
    }
}

joinTriathlon(new TriAthlete());

joinTriathlon({
    run: function () { },
    swim: function () { },
    bike: function () { }
})

joinTriathlon({
    run: function () { }
});

function quack(object, /*...*/) {
    var argumentCount = arguments.length;
    for (var index = 1; index < argumentCount; index++) {
        var argument = arguments[index];
        switch (typeof argument) {
            case 'string':
                if (typeof object[argument] !== "function") {
                    return false;
                }
                continue;
            case 'function':
                argument = argument.prototype;
            //fall through to next case
            case 'object':
                for (var what in argument) {
                    // if(typeof argument[what] !== 'function') continue;
                    // if(typeof object[what] !== 'function') return false;  
                    if (typeof argument[what] === 'function' && typeof object[what] !== 'function') {
                        return false
                    }
                }
        }
    }
    return true;
}

var bird = {
    fly: function () {

    },

    eat: function () {

    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.name = function() {};

var quackResult = quack(bird, "fly", { eat: function(){ } }, Point);
console.log("quackResult:" + quackResult);


var what = {
    0: 4,
    "1": 3
}
console.log(what[1]);