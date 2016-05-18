/**
 * shortened way of doing an export, still using module.exports
 */
module.exports.a = function () {
    console.log('a called')
};

module.exports.b = function () {
    console.log('b called');
};
console.log('module exports in foo2 are',module.exports);
//console.log(exports);