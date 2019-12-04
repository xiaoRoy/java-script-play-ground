function check(args) {
    var actual = args.length;
    var expected = args.callee.length
    if(actual != expected) {
        throw Error("Expected " + expected + " arguemnts; got " + actual);
    }
}

function add(one, another) {
    check(arguments)
    return one + another;
}
add();