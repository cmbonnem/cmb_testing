/**
 * Higher order functions. Functions that take functions as arguments are called higher-order functions
 * call a built in function, setTimeout, and then pass in a function as it's argument
 */
function foo () {
    console.log('timeout');
}
setTimeout(foo,2000);