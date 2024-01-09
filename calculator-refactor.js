/******************** Refactor Calculator ************************/
const readline = require('readline-sync');
const message = require('./calculator_messages.json');

let prompt = (message) => console.log(`=> ${message}`);

// function to get get number from user
let getNumber = (question) => {
  prompt(question);
  let number = readline.question();
  while (invalidNumber(number)) {
    prompt(message.invalidNumber);
    number = readline.question();
  }
  return Number(number);
}

// Validate Number
let invalidNumber = (number) => {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// operations: add, subtract, multiply and divide
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let operators = [add, subtract, multiply, divide];

// as what operation user would like to do
let getOperation = () => {
  prompt(message.selectOperator);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt(message.invalidOperator);
    operator = readline.question();
  }
  return operators[Number(operator - 1)];
}

let useCalculator = 'yes';

while (useCalculator.toLowerCase() === 'yes') {
  prompt(message.welcome);
  // Get 2 numbers from user
  // let number1 = getNumber(message.firstNumber);
  // let number2 = getNumber(message.secondNumber);
  let [number1, number2] = [getNumber(message.firstNumber), getNumber(message.secondNumber)];

  // Get orperation from user
  let operation = getOperation();

  // Perform Operation
  let calculate = (num1, num2, howToCalculate) => howToCalculate(num1, num2);

  // display result
  console.log(calculate(number1, number2, operation));

  // ask user if user would like to calculate again
  prompt(message.calculateAgain);
  useCalculator = readline.question();
}