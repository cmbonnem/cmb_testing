/**
 * a closure is a function within a function. variables defined in the outer function are available
 * to the the inner function.
 */
function outerFunction(argument) { // outer function
    var variableInOuterFunction = argument;

    function innerFunction() { // inner function
        console.log(variableInOuterFunction); //access variable in outer scope
    }
//call the local function, or inner function to show it has access to arg
    innerFunction();
}
outerFunction('hello there closure'); // should log hello closure
