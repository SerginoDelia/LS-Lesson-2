const readline = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function invalidNumber(number) {
//   return number.trimStart() === '' || Number.isNaN(Number(number));
// }

// prompt('Welcome to Calculator');

// prompt("What's the first number?");
// let number1 = readline.question();

// while (invalidNumber(number1)) {
//   prompt("Hmm... that doesn't look like a valid number.");
//   number1 = readline.question();
// }

// prompt("What's the second number?");
// let number2 = readline.question();

// while (invalidNumber(number2)) {
//   prompt("Hmm... that doesn't look like a valid number.");
//   number2 = readline.question();
// }

// prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
// let operation = readline.question();

// while (!['1', '2', '3', '4'].includes(operation)) {
//   prompt('Must choose 1, 2, 3, or 4');
//   operation = readline.question();
// }

// let output;

// switch (operation) {
//   case '1':
//     output = Number(number1) + Number(number2);
//     break;
//   case '2':
//     output = Number(number1) - Number(number2);
//     break;
//   case '3':
//     output = Number(number1) * Number(number2);
//     break;
//   case '4':
//     output = Number(number1) / Number(number2);
//     break;
// }

// console.log(`The result is ${output}`);


// Refactor Calculator

let prompt = (message) => console.log(`=> ${message}`);

// get number from user
let getNumber = (question) => {
  prompt(question);
  let number = readline.question();
  while (invalidNumber(number)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number = readline.question();
  }
  return Number(number);
}

let invalidNumber = (number) => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// as what operation user would like to do
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let operators = [add, subtract, multiply, divide];

// operation
let getOperation = (question) => {
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt('Must choose 1, 2, 3, or 4');
    operator = readline.question();
  }
  return operators[Number(operator - 1)];
}

let useCalculator = 'yes';

while (useCalculator.toLowerCase() === 'yes') {
  prompt("Welcome to Calculator!");
  // Get numbers from user
  let number1 = getNumber("What is the first number?");
  let number2 = getNumber("What is the second number?");

  // Get orperation from user
  let operation = getOperation();

  // Perform Operation
  let calculate = (num1, num2, howToCalculate) => howToCalculate(num1, num2);

  // return result
  console.log(calculate(number1, number2, operation));

  // ask user if user would like to calculate again
  prompt(`Would you like to use the calculator again?\n
          Type: (Yes) to continue.(No) to exit`);

  useCalculator = readline.question();
}

