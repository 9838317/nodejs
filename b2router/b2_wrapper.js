/*
    
   look at the following code, it is the simplest http server.

            function serverHandler(request, response)
            {
            	response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("Hello World");
                response.end();
            }
        
        var httpModule =  require("http");

        httpModule.createServer(serverHandler).listen(8888);
*/


/*
    we can wrap it inside a function, then it will behave like a function but not a return, see following:

    function startServer()
    {
            function serverHandler(request, response)
            {
            	response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("Hello startServer");
                response.end();
            }
        
        var httpModule =  require("http");

        httpModule.createServer(serverHandler).listen(8888);    
    }
    startServer();
*/

/*
    One benefit of doing this, is when we try to put the above code as a module, remember that we can do:
    
        module.exports = functionName
 
    for the single function file to be a importable module. So we can put:
      
        module.exports =  startServer;
    
    and then when we take this file as a lib, it can be required by other files now.
 
 */

serverWrapper = function (PORT)
{
	function serverHandler(request, response)
	{
	    console.log("server is starting at port: " + PORT)
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write("Hello startServer at port " + PORT);
	    response.end();
	}
    
    var httpModule =  require("http");

    httpModule.createServer(serverHandler).listen(PORT);    
}
  

//serverWrapper is to automatically start the server.
module.exports = serverWrapper;
