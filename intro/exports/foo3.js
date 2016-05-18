/**
 * short form of creating objects on module.exports
 */
exports.a = function () {
    console.log('a called');
};
exports.b = function() {
    console.log('b called');
};
console.log('module exports in foo3 are',module.exports);
//console.log(exports);