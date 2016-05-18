/**
 * long hand form of exporting 2 functions. adds two functions to module.exports
 */
 var a = function () {
    console.log('a called');
};
var b = function () {
    console.log('b called');
};

module.exports = {
    a: a,
    b: b
};
//console.log(module.exports);
//console.log(exports);
console.log('module exports in foo1 are',module.exports);
//console.log(exports);