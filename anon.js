/**
 * anonymous functions. First function names the function, second doesn't. work the same
 * javascript has first-class functions. Means that the function can be treated the same was as any other
 * variable in the language. You can assign functions to variables.
 */
var foo1 = function namedFunction(){
    console.log('foo1');
}
foo1();

var foo2 = function () {
    console.log('foo2');
}
foo2();