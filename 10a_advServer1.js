/*
    Before start. let's see what the request is from the client.
 */ 
        


    function serverHandler(request, response)
    {
            response.write("asd");
            console.log(request);
	    console.log(request["url"]);
	    
	    // It is just an JavaScript Object, let's iterate it.
	    for (var i in request)
	    {
	        console.log(i);
	    }
	    
	    // This is the file that is requested by client.
	    console.log(request.url);
	    response.end()
    }

    
    require("http").createServer(serverHandler).listen(8888);
    
