/**
 * process.nextTick is a function that takes a callback. It puts a callback into the next cycle of the node.js event loop.
 * immediate call is processed first, then the callback is done
 */
process.nextTick(function() {
    console.log('next tick');
});
console.log('immediate');