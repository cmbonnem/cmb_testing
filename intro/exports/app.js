/**
 * exports and aliases. each of the 3 modules are exporting more than 1 variable from a module. Each of the 3
 * inported modules do the same thing, just coded differently
 * uses module.exports.
 *
 */
var foo1 = require('./foo1');
//console.log('foo1 exports returned',module.exports);
foo1.a();
foo1.b();

var foo2 = require('./foo2');
foo2.a();
foo2.b();

var foo3 = require('./foo3');
foo3.a();
foo3.b();

//console.log(module.exports);
//console.log(exports);
console.log(__filename);
console.log(__dirname);