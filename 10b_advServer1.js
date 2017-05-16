/*
    So now we know that request.url contains the file that the user want to get, so we can begin to process this GET request.
 */ 
        
    var url = require('url');   

    function serverHandler(request, response)
    {
        function handlePage(readStreamChunk)
        {
            console.log("handleMainPage");
            response.writeHead(200, {'Content-Type': 'text/html'});
	    console.log(readStreamChunk.toString());
            response.write(readStreamChunk.toString());
            response.end();
        }

        
        function pageNotFound(error)
        {
	    response.writeHead(404, {'Content-Type': 'text/html'});
            response.write("pageNotFound");
            response.end();	  
            console.log(error.stack);
    
        }
    
    
        // Actually we can:
        // var pathname = request.url
        // but let's just use the api
        var pathname = url.parse(request.url).pathname;
            console.log(pathname);
            console.log(request.url);

        if (pathname == '/') { pathname = "index.html";}
        console.log("client is requesting " + pathname)
     
          
        var mainPage = require("fs").createReadStream(pathname);
            mainPage.on('error', pageNotFound);
            mainPage.on("data", handlePage);
            mainPage.on('end'  , function() { console.log("reading finished"); });
               
    }

    require("http").createServer(serverHandler).listen(8889);
    
