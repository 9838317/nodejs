/*
    in order to use module, the first approach would be to use the "exports" keyword in the lib file.
  
    This way is actually put all the functions and variables  as the attributes of "exports", that is:
    
    exports.funA = funA;
    exports.funB = funB;
    exports.a    = a;
    exports.b    = b;
    
    then when we try to require("lib.js"), then what we get in the current file is:
    
    require("lib.js").funA
    require("lib.js").funB
    require("lib.js").a
    require("lib.js").b

    with this method, require('./helper') == exports.
    so we can have multiple attributes of require('./helper').
    
*/

require('./helper').hello();