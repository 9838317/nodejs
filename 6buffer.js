/*
 * 
 * 
 * 
 * 
 * Pure javascript, while great with unicode-encoded strings, does not handle straight binary data very well. This is fine on the browser, where most data is in the form of strings. However, node.js servers have to also deal with TCP streams and reading and writing to the filesystem, both which make it necessary to deal with purely binary streams of data.

   One way to handle this problem is to just use strings anyway, which is exactly what Node.js did at first. However, this approach is extremely problematic to work with; It's slow, makes you work with an API designed for strings and not binary data, and has a tendency to break in strange and mysterious ways.

    In this case, Buffer class is offered for the simplicity.
    
    you can try initialize a Buffer instance and then log to see what's inside it.

    so, in order to read  , we use instance.toString
        in order wo write , we use instance.write
        in order to json  , we use instance.toJSON()
        in order to concat, we use Buffer.concat (  <[list]>  )

*/

var buf = new Buffer(30);                                      console.log(buf);
    buf = new Buffer([10, 20, 30, 40, 50]);                    console.log(buf);
    buf = new Buffer("www.rsdoob.com", "utf-8");               console.log(buf);
    buf.write("com");                                          console.log(buf);    
                                                               console.log(buf[0]);  console.log(buf[0].toString());
    buf = new Buffer("a");                                     console.log(buf.toString()); 
    

//notice that ascii code for A is #65 while a is #97                                                          
var concat1 = new Buffer([65, 67, 69, 71, 97]);                console.log(concat1.toString());
var concat2 = new Buffer([65, 67, 69, 71, 97]);

//Buffer.concat takes in a list to finish all the concatenation
var concated= Buffer.concat(  [concat1, concat2] );            console.log(concated.toString());
