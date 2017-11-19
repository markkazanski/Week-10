var input = parseInt( process.argv[2] );
var sum=0;

for(var i=6; i<input; i+=6){
    sum += 6;

    console.log(sum);
}

console.log("Sum: " + sum);