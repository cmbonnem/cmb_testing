/**
 * Created by cbonnema on 5/18/16.
 * HTTP testing. start the server from command line, then test it with curl in another
 * command window: curl http://localhost:3000 -i
 * logs a message 'request starting', then "hello there" message is displayed on the client
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    console.log('request starting....');
    console.log(request.headers);
    // respond
    response.write('hello there client');
    response.end();
});
server.listen(3000);
console.log('server running at http://localhost:3000/');