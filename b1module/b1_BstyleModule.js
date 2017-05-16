/*

This is another way of importing the external file into current file, using 

        module.exports = DEFINITION;

    notice that the previos way, exports is an object have multiple fields, but now it is just a DEFINITION, so 
    
    the difference between module.export  = function and exports.object is that, after introducing:

    module.export become a global functions, while 

    exports       become an object

    in the new environment.

    so, if exports is an object, then we can 

        require('./helperall').func();

    while module.export we can only
        
        require('./helperall');
        func();



*/

require('./helperall');
hello();
