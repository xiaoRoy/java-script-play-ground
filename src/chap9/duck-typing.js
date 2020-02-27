/**
 * 
 */

function TriAthlete() {

}

TriAthlete.prototype.run = function() {
    console.log("I could run.");
}
TriAthlete.prototype.swim = function() {
    console.log("I could swim.");
}
TriAthlete.prototype.bike = function() {
    console.log("I could bike.");
}

function joinTriathlon(who) {
    if(who.run && who.swim && who.bike) {
        console.log("Allow to join the Triathlon.");
    } else {
        console.log("Not allow to join the Triathlon.");
    }
}

joinTriathlon(new TriAthlete());

joinTriathlon({
    run: function(){},
    swim: function(){},
    bike: function(){}
})

joinTriathlon({
    run: function() {}
});

function quack(object, /*...*/) {
    var argumentCount = arguments.length;
    for(var index = 1; index < argumentCount; index ++) {
        var argumment = arguments[i];
    }
}

var what = {
    0:4,
    "1":3
}
console.log(what[1]);