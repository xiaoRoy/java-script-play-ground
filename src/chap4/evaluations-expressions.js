
var first = "global";
var second = "global";
var globalEval = eval;

function changeLocalContext() {
    var first = "local";
    eval("first += ' changed,';");
    return first;
}

function changeGlobalContext() {
    var second = "local";
    globalEval("second += ' changed,';");
    return second;
}

console.log(changeLocalContext(), first); // => local changed, global
console.log(changeGlobalContext(), second); //local, global changed
