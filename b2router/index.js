var server = require("./server");
var router = require("./router");


/*
 * 
 
    The logic here is that: router.route(arg) will return a path, so we can directly passing the path to http.createServer(), then we can use server.start("/"), server.start("/main") to get different route.
    But notice that the (request, response) is implicitly passed to the serverHandler, and we can just use:
    
        url.parse url to get the route. 
        
    The encapsulation here is not a good idea.

*/
server.start(router.route('firstPath'));
