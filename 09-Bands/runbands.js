var bands = require("./bands.js");

var input = process.argv[2];
//console.log(bands.classic);

if(input === undefined){
    for(var key in bands)
        console.log(`A ${key} band is ${bands[key]}`);
}else{
   console.log(`A ${input} band is ${bands[input]}. `);
}
/*    for(var x in bands[key]){
        if(typeof bands[key] === "object")
            console.log("nested: " + x + " " + bands[key][x]) ;
    }
*/