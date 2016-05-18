/**
 * Created by cbonnema on 10/16/15.
 */
/**
 call a soap service using node. uses a call back method
 */
/**
 call a soap service using node. uses a call back method
 */
var http = require('http');
// host name and relative path to weather service in a json object

var options = {
    host: 'w1.weather.gov',
    path: '/xml/current_obs/KSFO.xml',
    headers: {
        'User-agent': 'weatherRequest/1.0'
    }
};
exports.current = function() {

//call back functions for two network events:

    var callback = function(response) {
        var buffer = '';
        var result = '';
// data event handler
        response.on('data', function(chunk) {
            buffer += chunk;
        });
//end event handler
        response.on('end', function() {
//	console.log(buffer);
// regular expression to see if temp exists in the XML instance	 . IF it exists
//  parse through it and display the temp_f field

            var matches = buffer.match(/\<temp_f\>.+\<\/temp_f\>/g);
            if ( null != matches || matches.length > 0 ) {
                var result = matches[0].replace(/\<temp_f\>/, "").replace(/\<\/temp_f\>/, "");
            }
// print out the results
            console.log(result);
        });
    };
//make the web service request
    var request = http.request(options, callback);
//an error handler
    request.on('error', function(e) {
        console.log(e.message);
    });
    request.end();
};
