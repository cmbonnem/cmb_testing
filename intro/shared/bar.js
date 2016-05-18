/**
 * Created by cbonnema on 10/5/15.
 */
var foo = require('./foo');
console.log('in another module:', foo.something); //456
console.log('in another module something else:', foo.somethingelse); //321