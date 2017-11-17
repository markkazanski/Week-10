var bands = require("./bands.js");

//console.log(bands.classic);

for(var key in bands){
    console.log(`A ${key} band is ${bands[key]}`);
    
    for(var x in bands[key]){
        if(typeof bands[key] === "object")
            console.log("nested: " + x + " " + bands[key][x]) ;
    }
}