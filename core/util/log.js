/**
 * util.log. like using printf in c
 */
var util = require('util');
util.log('sample message'); // prints out 2 Oct 16:23:53 - sample message

var name = 'nate';
var money = 3;
console.log(util.format('%s has %d dollars', name,money)); //nate has 3 dollars %s for strings, %d for numbers





