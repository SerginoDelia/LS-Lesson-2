// Rules:
// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.

// Our version of the game lets the user play against the computer. The game flow should go like this:

// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.


// require the readline-sync library so we can get user input.
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// function prompt(message) {
//   console.log(`==> ${message}`);
// }

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer Wins');
  } else {
    prompt("It's a tie");
  }
}

function prompt(message) {
  console.log(`==> ${message}`);
}

while (true) {
  // Ask the user to choose rock, paper, or scissors
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  // validate choice, if invalid display error and ask for input
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // Get random number between 0 - 2 for computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // Display choices to the user
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)');
  let answer = readline.question().toLocaleLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLocaleLowerCase();
  }

  if (answer[0] !== 'y') break;
}

/** Things to consider
 * 
 * 1. Notice how the displayWinner function calls the prompt function. What 
 * happens if you move the displayWinner function definition above the prompt 
 * function definition? Does it still work? 
 * yes it still work, 
 * because the when when invoke/call the function it's not linear JS looks for 
 * the code above the function invocation/call
 * 
 * 2. How would you use the displayWinner function differently if it returned a 
 * string, as opposed to outputting the string directly?
 * prompt(displayWinner(choice, computerChoice))
 * 
 * 3. We used the Math object to generate a random number and round down a 
 * floating point number. Skim through the documentation for the Math object and 
 * see what other methods from the object you may find useful. Specifically, 
 * read the pages for Math.round and Math.ceil. How would you rewrite the random 
 * index expression if you were to use one of these two methods instead of 
 * Math.floor?
 * 
 * Math.ceil(Math.random() * VALID_CHOICES.length - 1)
 */



