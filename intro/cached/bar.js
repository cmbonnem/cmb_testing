/**
 * modules get cached after the first time included. first call is around 9 ms, second is 0 as
 * it picks up the second one from the node.js cache
 */
var t1 = new Date().getTime();
var foo1 = require('../base/foo');

console.log(new Date().getTime() - t1);

var t2 = new Date().getTime();
//var foo2 = require('../base/foo');
var foo2 = require('../base/foo');

console.log(new Date().getTime() - t2);