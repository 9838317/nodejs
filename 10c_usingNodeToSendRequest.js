/*
    Until Now we've been seeing using Node.js to be a server, but it can also be used to be a client sending request. 

    For this aim, the request function from http module is needed(): 

        require("http").request() 

    See the following example.
 */ 
        
    var http = require("http");

var options = 
{
   host: 'localhost',
   port: '8889',
   path: '/'  
};

// Callback function is used to deal with response
var callBackHandler = function(response)
{
   // Continuously update stream with data
   
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var reqeust = http.request(options, callBackHandler);
reqeust.end();


