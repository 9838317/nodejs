/*
this is a file showing async file handler
    require("fs").readFile     is async, while 
    require("fs").readFileSync is  sync.
    But notice that even the blocking IO won't affect node to serve k client.
*/
(
    function()
    {
      
        //There are some nuance points here.
        // 1. to write a 100m data to the client is faster than the ability of the client's screen to handle it. So there is a illusion of async 
        // 2. can make the I/O file bigger to see the blocking.
        function serverHandler(request, response)
        {
            console.log("start");
        response.write("sync start!");
        
        data = require("fs").readFileSync('txt').toString();
        console.log(data);
        response.write(data);
        
        response.write("sync ends!");
            response.end();
            console.log("end");
        }
      require("http").createServer(serverHandler).listen(8888);
    }
)();



 

 
