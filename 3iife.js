(
    function()
    {
        function server(request, response) 
        {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello World! General programming!");
            response.end();
        }
        require("http").createServer(server).listen(8888); 
    }
)();

 
