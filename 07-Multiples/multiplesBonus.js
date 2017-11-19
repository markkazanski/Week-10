var input1 = parseInt( process.argv[2] );
var input2 = parseInt( process.argv[3] );
var sum=0;

for(var i=input2; i<=input1; i+=input2){
    sum += i;

    console.log(sum);
}

console.log("Sum: " + sum);