/**
 * use a function to save variable scope. ief2 sample changes variable scope.
 * if you put the () at the end of the function it will execute immediately
 */
var foo = 123;
if (true) {
    (function () { // create a new scope. also this is an anonymous
        var foo = 456;
    }) (); // the () at the end of the function makes it execute immediately
}
console.log(foo); // returns 123