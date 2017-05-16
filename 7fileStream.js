/*
 
    The Buffer() class can be treated totally like an array in C. Consider the syntax:
    
    #define length 128
    char arrayChar[length];
    for (int i = 0; i < length; i++)
    { arrayChar[i] = 'i'; }

    instanceOfBuffer = new Buffer(5);
    instanceOfBuffer[0] = 97;
    instanceOfBuffer[1] = 99;
    console.log(instanceOfBuffer.toString());


    Array is usually for operation to a file. So here we also begin to discuss the file manipulation in Node.js
    In order to read or write a file(file stream), the "fs" module is required.

    var fs = require("fs");


readFile - It will read the file completely into memory before making it available to the User.

createReadStream - It will read the file in chunks of the size which is specified before hand.

The problem with readFile is that it will not scale if there are many requests at a time (large data) since it will try to load all of them at that particular time. Instead of that createReadStream can come handy in this situation, which pipe the file contents directly to the HTTP response object. So the user dont have to wait till all the data of the file loaded into memory, he will start receiving the data faster as createReadStream sent out in chunks as it is being read.


*/ 

    // use the fs module, we can create a file stream. It has a default 64kb buffer.
    var fs = require("fs");
    var instanceOfReadStrm = fs.createReadStream("txt");
    instanceOfReadStrm.on
    (
        "data", 
        function(block)
        {
            console.log(block.slice(0,3).toString());
        }
    )
    instanceOfReadStrm.on
    (
        'end',
        function()
        {
            console.log("reading finished");
        }
    );
    instanceOfReadStrm.on
    (
        'error', 
        function(err)
        {
            console.log(err.stack);
        }
    );


// writing is also easy
var fs = require("fs");
var stringToWrite = 'Simply Easy Learning';

var instanceOfWritestrm = fs.createWriteStream('output.txt');

instanceOfWritestrm.write(stringToWrite,'UTF8');

instanceOfWritestrm.end();

instanceOfWritestrm.on('finish', function() {
    console.log("Write completed.");
});

instanceOfWritestrm.on('error', function(e){
   console.log(e.stack);
});

console.log("Program Ended");

//Another interesing thing is that we can pipe.

var instanceOfReadStrm = fs.createReadStream("txt");
var instanceOfWritestrm = fs.createWriteStream('output.txt');

// from input to output
instanceOfReadStrm.pipe(instanceOfWritestrm);


zlib = require('zlib');
fs.createReadStream('txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('txt.txt.gz'));
