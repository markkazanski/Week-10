var fs = require("fs");

var action = process.argv[2];
var amount = parseFloat( process.argv[3] );

switch(action){
    case "total":
        total();
        break;
    case "deposit":
        deposit(amount);
        break;
    case "":
        withdraw(amount);
        break;
    case "lotto":
        lotto();
        break;
    default:
        console.log("enter command");
        break;
}

function total(){
    fs.readFile("bank.txt", "utf8", function(error, data) {
        var lines = data.split("\r\n");
    });
}

fs.appendFile("bank.txt", data, function(err) {
        // If an error was experienced we say it.
        if (err) {
          console.log(err);
        }
    
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content Added!");
        }    
});