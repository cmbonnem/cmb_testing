/**
 * fun with prototypes
 */
function foo() {};
foo.prototype.bar = 123;

//create object using new

//foo.prototype will be copied to bas.__proto__
var bas = new foo();

//verify that the prototype has been copied
console.log(bas.__proto__ === foo.prototype); //returns true
console.log(bas.bar); // 123