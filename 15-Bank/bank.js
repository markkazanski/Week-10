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
    case "withdraw":
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
        var sum = 0;
        
        for(var i=0; i < lines.length; i++){
            var actions = lines[i].split(" ");
            
            if(actions[0] === "deposit"){
                sum += parseFloat(actions[1]);
                console.log("deposit: " + actions[0] + " " + actions[1]);
            }
            else if( actions[0] === "withdraw" ){
                sum -= parseFloat(actions[1]);
                console.log("withdraw: " + actions[0] + " " + actions[1]);
            }
        }

        console.log("total: " + sum);

    });
}

function deposit( money ){
    var data = "deposit " + money + "\r\n";
    console.log(money);
    console.log(data);

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
}

function withdraw( money ){
    var data = "withdraw " + money + "\r\n";
    console.log(money);
    console.log(data);

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
}

function lotto(){
    var cost = 1;
    withdraw(cost);

    var lottoDraw = Math.floor(Math.random() * 5) + 1;
    var lottoWinner = 3;  

    if(lottoDraw === lottoWinner){
        deposit(100);
        console.log("You win 100");
        total();
    }else{
        console.log("No win.")
        total();
    }
}

/*
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
*/