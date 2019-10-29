/**
 * 8.2.1 Function Invocation
 */

var isInStrictMode = (function () { return !this }())
console.log(isInStrictMode);

/**
 * 8.2.2 Method Invocation
 */

var calculator = {
    one: 3,
    anohter: 4,
    add: function () {
        this.result = this.one + this.anohter;
    }
}
calculator.add();
console.log(calculator.result)
calculator["add"]()
calculator[2]()
