/*

    So, now we have all the blocks to build a web server. Remember that a webserver is to receive the request from a client, and then process the request and response appropriately.

    We might receive a GET request like following:
    
        GET / HTTP/1.0\r\n\r\n
    
        GET / HTTP/1.1\r\nHost: www.example.com\r\nConnection: close\r\n\r\n' 

    Thus, we need to parse the string. But here let's just serve the first page first. The idea is to treat the main page as a file and then give it to the client.
 */ 



    function serverHandler(request, response)
    {
 
        function handleMainPage(readStreamChunk)
        {
            console.log("handleMainPage");
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(readStreamChunk.toString());
            response.end();
        }


        var mainPage = require("fs").createReadStream("index.html");
            mainPage.on("data", handleMainPage);
            mainPage.on('end'  , function()   { console.log("reading finished"); });
            mainPage.on('error', function(err){ console.log(err.stack); } );
    }

    
    require("http").createServer(serverHandler).listen(8889);
    
    // Done, next we will parse the string.