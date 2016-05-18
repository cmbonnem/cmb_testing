/**
 * Created by cbonnema on 5/17/16.
 */
var foo = {bas: 123};
var bar = {bas: foo.bas}; //copy the reference
bar.bas = 456; //change the copy

console.log(foo.bas);
console.log(bar.bas);