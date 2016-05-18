/**
 * Created by cbonnema on 10/5/15.
 */
var foo = require('./foo'); // require imports the module(function) called foo()

foo(); //call the function "foo" from the file foo2.js. prints out a text string to the log

var myChoiceOfLocalName = require('./foo');
myChoiceOfLocalName();

var myChoiceOfLocalName = foo;
myChoiceOfLocalName();