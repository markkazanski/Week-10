var operand1 = process.argv[3];
var operator = process.argv[2];
var operand2 = process.argv[4];

//console.log(operator);

switch(operator) {
    case "add":
        add(operand1, operand2);
        break;
    case "subtract":
        subtract(operand1, operand2);
        break;
    case "multiply":
        mult(operand1, operand2);
        break;
    case "divide":
        div(operand1, operand2);
        break;
    case "exp":
        exp(operand1, operand2);
        break;
    case "algebra":
        algebra(operand1);
        break;
    default:
        console.log("missing operator");
}

function add(a, b){
    console.log(a + b);
}

function subtract(a, b){
    console.log(a - b);
}

function mult(a, b){
    console.log(a * b);
}

function div(a, b){
    console.log(a / b);
}

function exp(a, b){
    console.log(Math.pow(a,b));
}

function algebra(equation){ //4x+2=10
    var equationString = String(equation);
   /* var result = parseFloat(equationString.split("=")[1]);
    var leftSide = equationString.split("=")[0];
    var coeff = parseFloat(leftSide.split("x")[0]);
    var c = parseFloat(leftSide.split("x+")[1]);*/

    var result = parseFloat( equationString.slice(equationString.indexOf("=")+1, equationString.length));
    console.log("result: " + result);
    var coeff = parseFloat( equationString.slice(0, equationString.indexOf("x")));
    console.log("coeff: " + coeff);
    var c = parseFloat( equationString.slice(equationString.indexOf("x")+2, equationString.indexOf("=")));
    console.log("c: " + c);

    var op = equationString[equationString.indexOf("x")+1];

    console.log("op: ", op);

   

    var x;
    

    switch(op) {
        case "+":
            x = (result - c) / coeff;
            break;
        case "-":
            x = (result + c) / coeff;
            console.log("minus - X: " + x);
            break;
        case "*":
            x = result / (coeff * c);
            break;
        case "/":
            x = (result * c) / coeff;
            break;
        default:
            console.log("Your algebra sucks");
    }
   
    console.log(coeff + "x" + op + c + "=" + result);
    console.log("x = " + x);
}
