/*
this is a file showing async file handler
    require("fs").readFile     is async, while 
    require("fs").readFileSync is  sync.

The concept of async is important because it facilitate understanding of concurrency.
*/

(
    function()
    {
        console.log("sync程序执行!");
        console.log(require("fs").readFileSync('input.txt').toString());
        console.log("sync程序执行结束!");
    }
)();

(
    function()
    {
        function async(exception, data)
        {
            if (exception) return console.error(exception);
            console.log(data.toString());
        }
        console.log("async程序执行!");
        require("fs").readFile('input.txt', async) ;
        console.log("async程序执行结束!");
    }
)();

 

 
