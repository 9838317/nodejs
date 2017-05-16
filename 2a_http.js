    function server(request, response) 
    {
      　// uncomment following to see the content of the request from the client.
      　// console.log(request);
      
        // node automatically write a head.
        //response.writeHead(200, {"Content-Type": "text/plain"});
        
        // This is wrong. There is no send function.
        //response.send("Hello World! General programming!");
        response.write("Hello World! General programming!");
        response.end();
    }

var http = require("http");

// we can directly call http, so http.js is export with module.exports = http;
http.createServer(server).listen(8888); 
