/**
 * variable scope testing. if an if statement the variable scope is changed. returns 456
 */
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);