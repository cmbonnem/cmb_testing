/**
 * shared state. Included module ./foo has code that sets the module.exports variable. It adds the variable "something" and defines
 * the initial value to "123"
 * then, we set "something" to 456 and include a different module (bar)
 * bar has code that prints out "in another module: 456"
 */

//var bas = require('./bar');
var foo = require('./foo');
console.log('initial something:', foo.something); //returns 123 from foo2.js
console.log('something else:', foo.somethingelse);
//now modify something
foo.something = 456;
foo.somethingelse = 999;
//now load bar:

var bas = require('./bar');
console.log(module.exports); //returns {}, an empty object