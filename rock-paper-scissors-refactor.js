// Rules:
// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.

/** Bonus Feature Rules
 * 1. Lizard Spock This game is a variation on the Rock Paper Scissors game that
 * adds two more options - Lizard and Spock:
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
let playerWinsCount = 0;
let computerWinsCount = 0;
let rockWins = ['scissors', 'lizard'];
let paperWins = ['rock', 'spock'];
let scissorsWins = ['paper', 'lizard'];
let lizardWins = ['paper', 'spock'];
let spockWins = ['rock', 'scissors'];

const SHORT_CHOICES = VALID_CHOICES.map(letter => {
  return (letter === 'spock') ? 'sp' : letter[0];
});

const WINNING_COMBOS = {
  rock: rockWins,
  r: rockWins,
  paper: paperWins,
  p: paperWins,
  scissors: scissorsWins,
  s: scissorsWins,
  lizard: lizardWins,
  l: lizardWins,
  spock: spockWins,
  sp: spockWins,
};

function prompt(message) {
  console.log(`==> ${message}`);
}

function displayChoices(choices, shortChoices) {
  let shortAndLongChoices = [];

  for (let index = 0; index < choices.length; index += 1) {
    shortAndLongChoices.push(`(${shortChoices[index]})${choices[index]}`);
  }
  return shortAndLongChoices.join(', ');
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    playerWinsCount = incrementCounter(playerWinsCount);
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins');
    computerWinsCount = incrementCounter(computerWinsCount);
  }
}

// validates user choices for short and long inputs
function validateChoice(userChoice) {
  if (VALID_CHOICES.includes(userChoice)) {
    return true;
  } else if (SHORT_CHOICES.includes(userChoice)) {
    return true;
  }
  return userChoice;
}

function incrementCounter(count) {
  count += 1;
  return count;
}

function displayGrandWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    prompt("You're the grand winner!!!");
    return true;
  } else if (computerScore === 3) {
    prompt("computer is the grand winner!!!");
    return true;
  } else {
    return false;
  }
}

while (!displayGrandWinner(playerWinsCount, computerWinsCount)) {
  prompt(`Player Score: ${playerWinsCount}`);
  prompt(`Computer Score: ${computerWinsCount}`);
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