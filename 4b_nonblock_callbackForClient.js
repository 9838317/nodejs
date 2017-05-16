/*
this is a file showing async file handler
    require("fs").readFile     is async, while 
    require("fs").readFileSync is  sync.

The concept of async is important because it facilitate understanding of concurrency.
*/

(
    function()
    {
        function serverHandler(request, response)
        {
            console.log("start");
            response.write("async start!");
        
            require("fs").readFile('txt', async);
        
            response.write("async ends!");
            response.end();
            console.log("end");
        }
        
        // In this callback function, the variable data won't be log until it is fetched.
        // This shows an instance of non-blocking of I/O. But what we can do if we want to write the variable to the client?
        // We need to address the response variable inside the async function.
        function async(exception, data)
        {
            if (exception) return console.error(exception);
            console.log(data.toString());
        }        
      require("http").createServer(serverHandler).listen(8888);
    }
)();


 

 
