//var r0 =  require("./0a_required.js");    // since 0a_required.js does not use module, so r0 is export, and r0.a is export.a
//console.log(r0);
//console.log(r0.a);
//console.log(a);





var r0 =  require("./0b_required.js");      // since 0b_required.js use module, so we can directly call r0 or call a.
console.log(r0);
console.log(r0.a);
console.log(a);

