// Rules:
// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.

/** Bonus Feature Rules
 * 1. Lizard Spock This game is a variation on the Rock Paper Scissors game that 
 * adds two more options - Lizard and Spock:
 * 
 * Lizard, Spock
 * scissors cut paper
 * scissors dicapitates lizards
 * paper covers rock
 * paper disproves spock
 * rock crushes lizard
 * rock crushes scissors
 * lizard poisons spock
 * lizards eats paper
 * spock smashes scissors
 * spock vaporizes rock
 * 
 * Shortened Input: Update the program so the user can type "r" for rock, 
 * "p" for papaer, "s" for scissors, "l" for lizard, "sp" for spock
 * */

// Our version of the game lets the user play against the computer. The game 
// flow should go like this:

// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.


// require the readline-sync library so we can get user input.
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const SHORT_CHOICES = VALID_CHOICES.map(letter => {
  return (letter === 'spock') ? 'sp' : letter[0];
});

function prompt(message) {
  console.log(`==> ${message}`);
}

function displayChoices(choices, shortChoices) {
  let shortAndLongChoices = [];

  for (let i = 0; i < choices.length; i += 1) {
    shortAndLongChoices.push(`(${shortChoices[i]})${choices[i]}`)
  }
  return shortAndLongChoices.join(', ');
}

function displayWinner(choice, computerChoice) {

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (((choice === 'rock' || choice === 'r') &&
    computerChoice === ('scissors' || 'lizard')) ||
    ((choice === 'paper' || choice === 'p') &&
      computerChoice === ('rock' || 'spock')) ||
    ((choice === 'scissors' || choice === 's') &&
      computerChoice === ('paper' || 'lizard')) ||
    ((choice === 'lizard' || choice === 'l') &&
      computerChoice === ('paper' || 'spock')) ||
    ((choice === 'spock' || choice === 'sp') &&
      computerChoice === ('scissors' || 'rock'))) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins');
  }
}

function prompt(message) {
  console.log(`==> ${message}`);
}

function validateChoice(userChoice) {
  if (VALID_CHOICES.includes(userChoice)) {
    return true;
  } else if (SHORT_CHOICES.includes(userChoice)) {
    return true;
  }
}

while (true) {
  prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock');
  // Ask the user to choose rock, paper, or scissors
  prompt(displayChoices(VALID_CHOICES, SHORT_CHOICES));
  let choice = readline.question();

  // validate choice, if invalid display error and ask for input
  while (!validateChoice(choice)) {
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
 * Math.round(Math.random() * VALID_CHOICES.length - 1)
 *
 * 4. We used a while loop with an always-true condition and a break statement
 * to decide whether to replay the game. Can you rewrite the loop so that we
 * don't need to use the break statement to stop the loop?
 *
 * declare and initialize global variable playAgain to true
 * let playAgain = true
 *
 * while (playAgain)
 * if user answer is "n" set playAgain = false
 */