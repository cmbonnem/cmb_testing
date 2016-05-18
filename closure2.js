/**
 * an inner function can access the variables from the outer scope even after the outer
 * function has returned
 */
function outerFunction(argument) {
    var variableInOuterFunction = argument;
    return function () {
        console.log(variableInOuterFunction);
    }
}
var innerFunction = outerFunction('hello there closure');
innerFunction();