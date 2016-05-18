/**
 * Created by cbonnema on 5/17/16.
 */
//the immediate call is processed first, then the console.log. The nextTick call is executed in the next run
// of the event loop
process.nextTick(function (){
    console.log('next tick');
});

console.log('immediate');