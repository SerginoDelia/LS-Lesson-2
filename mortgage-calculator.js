// Mortgage Calculator
const readline = require('readline-sync');
const message = require('./mortgage-calculator-message.json');

// m = monthly payment
// p = loan amount
// j = monthly interest rate -> (j / 12 / 100)
// n = loan duration in months

// user prompt for styling purposes
const prompt = (message) => console.log(`==> ${message}`);

// Validate user input (number), check for empty string NaN
const invalidNumber = (input) => {
  return (input.trimStart() === "" || Number.isNaN(+input));
};

// convert APR to monthly interest rate
const getMonthlyInterestRate = (number) => number / 12 / 100;

// Input needed from the user:
const getInputFromUser = (question) => {
  prompt(question);
  let number = readline.question();

  // validate number, if invalid number ask user for number again
  while (invalidNumber(number)) {
    prompt(message.invalidNumber);
    number = readline.question();
  }
  return +number;
};

// formula to use:
// let m = p * (j / (1 - Math.pow((1 + j), (-n))));
const calculatePayments = (amount, interest, duration) => {
  if (interest === 0) {
    return amount / duration;
  } else {
    return amount * (interest / (1 - Math.pow((1 + interest), (-duration))));
  }
};

const calculateAgain = (question) => {
  prompt(question);
  if (readline.question().toLowerCase() === 'yes') {
    return true;
  } else {
    return false;
  }
}

let useCalculatorAgain = true;

while (useCalculatorAgain) {
  // The loan amount: loanAmount
  let loanAmount = getInputFromUser(message.loanAmount);
  console.log(typeof loanAmount);

  // The Annual Percentage Rate(APR):
  let interestRate = getInputFromUser(message.interestRate);

  // Use the numbers above to calculate 2 things:

  //  mothly interest rate monthlyInterestRate
  let monthlyInterestRate = getMonthlyInterestRate(interestRate);

  // loan duration in months: loanDurationInMonths
  let loanDurationInMonths = getInputFromUser(message.loanTerm);

  let monthlyPayment = calculatePayments(
    loanAmount, monthlyInterestRate, loanDurationInMonths
  );

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}\n\n`);

  useCalculatorAgain = calculateAgain(message.calculateAgain);
}
