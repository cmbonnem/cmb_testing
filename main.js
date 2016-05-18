/* console.log("Hello there!");
var foo = 123;
console.log(foo);
console.log(foo + 123);
console.log(foo * 2);
var foo = true;
console.log(foo);
var foo = [];
foo.push(1);
console.log(foo);
foo.unshift(2); //add to top of stack
console.log(foo);
console.log(foo[0]); */
//object literals. use the var blah{} to create an object
var foo = {}; //create an object called foo
console.log(foo); //logs {}
foo.bar = 123; //create a nested variable under foo called bar, set it to a value of 123
console.log(foo); // prints { bar:123 }

var foo = { // a different way create a nested variable
    bar: 123 //prints {bar:123}
};
console.log(foo);

var foo = { // nesting
    bar: 123,
    bas1: 'a text string',
    bas2: 123
};
console.log(foo);

var foo = {
        bar: 123,
        bas: [1, 2, 3]
};
console.log(foo);
var foo = {
    bar: 123,
    bas: [{
        qux: 1
        },
        {
            qux: 2
        },
        {
            qux: 3
        }]
};
console.log(foo.bar);
console.log(foo.bas[0].qux);
console.log(foo.bas[2].qux);
