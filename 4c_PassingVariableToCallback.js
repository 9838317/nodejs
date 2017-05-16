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
        // We can just put the async function inside the handler so as to get the variables.
            function async(exception, data)
            {   
                console.log(response);
                if (exception) 
                { return console.error(exception); }
                console.log(data.toString());
                response.write(data.toString());
        
                // If we want to push the data to the customer, remember that the file descriptor can be closed only after the data variable is totally fetched, so the closing line should be put in the end of the callback function.
                response.end();
            }         
             
            console.log("start");
            response.write("async start!");
        
            require("fs").readFile('input.txt', async);
        
            response.write("async ends!");
            console.log("end");
        }

      require("http").createServer(serverHandler).listen(8888);
    }
)();


 

 
