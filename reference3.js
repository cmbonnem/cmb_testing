/**
 * Created by cbonnema on 5/17/16.
 */
/**
 * revealing module pattern. combines data and methods.
 *
 */
function printableMessage(inMessage) {
 //   var message = 'Hello';

    function setMessage(newMessage) {
        if (!newMessage) throw new Error(' cannot set empty message');
        message = newMessage;
    }

    function getMessage() {
        return message; 
    }

    function printMessage() {
        console.log(message);
    }

    return {setMessage: setMessage, getMessage: getMessage, printMessage: printMessage};
} // Pattern in use
var awesome1 = printableMessage(); // declare printableMessage object
awesome1.printMessage('hii everybody'); // prints hello

var awesome2 = printableMessage(); // invoke the setMessage method, passing in text
awesome2.setMessage(' hi');

awesome2.printMessage(); // print the previous text message (hi)

var v1 = printableMessage().setMessage('different');
v1.printMessage();
