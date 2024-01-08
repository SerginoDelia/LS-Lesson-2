// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation on the two numbers
// display the result of the operation
const readline = require('readline-sync');

console.log("Welcome to the Calculator");

console.log("What is the first number?");
let number1 = Number(readline.question());

console.log("What is the second number?");
let number2 = Number(readline.question());

console.log("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
if (operation === "1") {
  output = number1 + number2;
} else if (operation === "2") {
  output = number1 - number2;
} else if (operation === "3") {
  output = number1 * number2;
} else if (operation === "4") {
  output = number1 / number2;
}

console.log(`The result is ${output}`);

// Refactor Calculator
