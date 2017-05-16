 // Express framework can be seen as django of Python. It facilitate the usage of Node.js.
 // Following we are going to compare the original node and the express framework.

 /*
     node                                                   express
 ---------------------                             ---------------------------
    http.createServer(serverHandler).listen()          app = require("express")();
    serverHandler(request, response)                   app.get(route, handler);
    {                                                  app.listen(port, anotherHandler)
    	/bla/bla/bla                                   // It separate the server side and the client side.
    }

 */

'use strict';
module.exports = require('./lib/express');

var app = require("express")();

function handleWrapper (req, res) 
{
   res.send('Hello World');
}

app.get('/', handleWrapper);

var server = app.listen(8081, function () 
{
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
