/**
 * Shared state. Modules are cached and every module that require's a js module get the same
 * mutable object if we return an object foo from a module foo.js
 */
module.exports = {
    something: 123,
    somethingelse : 321
};