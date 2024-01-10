/** Coding Tips
 * 
 * Naming things
 * 
 * many people try to save on characters by using very short variable or 
 * function, there's no need to save on characters.  
 * 
 * Choose descriptive names ex:
 */

let p = getUserInput();

/** What is p ?  it's easy to see where collecting some user input here, but
 * what does p contain, next time we use p we may no longer remember what it
 * contains.
 * 
 * Variable names should describe the content of the variable, it adds another
 * mental check if the name doesn't reflect the info it contains
 * 
 * We can name it yesOrNo but another problem arises if we allow a "maybe"
 * response from the user. 
 * 
 * Try to capture the intent of the variable.
 * 
 * ex. if we're trying to capture a response that determines whether the user
 * wants to to play a game again, a better name would be playAgain.
 * it's both descriptive and future proof
 * 
 * Naming Conventions
 * 
 * Idiomatic names
 * 
 * Category
 * Non-constant variables and object properties:
 * 
 * Name:                            Notes:
 * employee
 * number
 * fizzBuzz
 * speedOfLight
 * destinationURL                    URL is an acronym
 * m00n
 * 
 * Constructor functions and classes:
 * Cat
 * BoxTurtle
 * FlightlessBird
 * 
 * Other functions:
 * parseURL                           UR is an acronym
 * goFaster
 * 
 * Configuration and magic constants
 * ABSOLUT_PATH
 * TODAY
 * 
 * Other const names:
 * employeeOfMonth                    Local style
 * HairyCat                           Local Style
 * ABSOLUT_PATH                       Local Style
 * 
 * Valid but Non-Idiomatic Names
 * 
 * Category
 * Universally non-idiomatic
 * 
 * Name:                              Notes
 * $number                            Begins with $
 * fizz_buzz                          snake_case not allowed
 * fizzBUZZ                           BUZZ is not an acronym
 * _hello                             Begins with _
 * goodbye_                           Ends with _
 * milesperhour                       Undifferentiated words
 * MILESPERHOUR                       Undifferentiated words
 * 
 * Non-constant variables and local properties
 * 
 * Employee                           Begins with a capital letter
 * fizzBUZZ                           BUZZ is not an acronym
 * FIZZ_BUZZ                          SCREAMING_SNAKE_CASE
 * 
 * Constructor functions and classes
 * 
 * cat                                Begins with lowercase letter
 * makeTurtle                         Begins with lowercase letter
 * FIZZ_BUZZ                          SCREAMING_SNAKE_CASE
 * 
 * Other functions
 * 
 * ParseURL                           Begins with capital letter
 * FIZZ_BUZZ                          SCREAMING_SNAKE_CASE
 * 
 * Configuration and magic constants
 * 
 * absolutPath                        Not SCREAMING_SNAKE_CASE
 * Today                              Not SCREAMING_SNAKE_CASE
 * 
 * Non-idiomatic names are not invalid.
 * they are commonly used by external libraries to provide names that are easy 
 * to type and unlikely to conflict with names in other libraries
 * 
 * 
 * 
 * Invalid Names:   
 * Name:            Notes
 * 42ndStreet       Begins with a number
 * fizz-buzz        Hyphen/dash not allowed
 * fizz.bizz        Looks like a property reference
 * 
 * 
 * Avoid Magic Numbers
 * 
 * magic number is a number (or other simple value) that appears in your program
 * without any information that describe what that number represents.
 * 
 * there's no way to tell by just looking at the code why you are using that
 * particular number.  It becomes more confusing when that same number is used
 * in different contexts
 * 
 * The way to avoid using magic numbers is to use constants
 */

const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
    hand.push(dealCard());
  }

  return hand;
}

/** Typically magic number constants are sert at the top level of a program as
 * shown above, though you can declare them inside a function
 * 
 * Another consideration when declaring constants is whether the meaning of the 
 * number is clear
 * 
 * For instance, you may need to know the Unicode code points (sometimes
 * errornously referred to as the ASCII character-code values) for the character
 * a and z.
 * 
 * you could define those constants like this:
 */

const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;

// This code works, but its not clear what 97 and 127 mean in the context of 
// your program.  Instead use more explicit code by calculatiing the values
// directly from other characters:

const FIRST_CHARACTER_CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();

// 'a'.charCodeAt() returns the Unicode point of the character a,
// and 'z' does the same thing.

/** Formatting
 * 
 * When indenting code, use 2 spaces, never use tab characters
 * 
 * When using curly braces, if block has multiples lines, the opening brace is
 * on the same line as the initial statement and the ending brace on its own
 * line. 
 * 
 * single line statements may be condensed to one line, but watch the length
 * long lines are difficult to read, the longer the line the more difficult it
 * is to scan the code quickly
 */

if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}

// Semicolons should always terminate each statement or expression that is not
// a brace delimited block 

let someValue = firstValue + secondValue + thirdValue;

// With no semicolon to seperate them, JS sometimes sees the next statement or 
// expression as part of the previous line, which can lead to undesireable 
// behavior

function foo() {
  // some code here
  return
  42
}

/** The code above returns undefined from foo, but the presence of the indented
 * 42 suggests that we wanted to return 42.  JS decided to assume that return is
 * what we wanted, not 42
 * 
 * if , for , and while statements always use spaces between the keywords and
 * following opening parenthesis, and between the closing parenthesis and 
 * opening brace.  this prevents concfusion between statements and function 
 * calls.  Also place space characters before and after operators and the equals
 * symbol.
 */

// Bad
// let counter=0;
// while(counter<15){
// counter+=1;
// }

// Good
let counter = 0;
while (counter < 15) {
  counter += 1;
}

// use one let, var, or const per variable.  It avoids thinking about whether to
// swap out a ; for a ,

// Bad
// let firstName = 'Shane',
// lastName = 'Riley',
// dogs = ['Josie', 'Libby'];

// Good
let firstName = 'Shane';
let lastName = 'Riley';
let dogs = ['Josie', 'Libby'];

// Mutating Constants

// many developers speak of const declarations as declaring a constant: a value
// that can never be changed 

const FOO = 4;
FOO = 5;  // TypeError: Assignment to a constant variable.

// Const merely declares a variable that can't be reassigned, once initialized,
// the variable can't be assigned to a new value, but that odesn't mean it can't
// be mutated

const CARDS = [1, 2, 3];

CARDS.push(4);
console.log(CARDS); // [1, 2, 3, 4]

CARDS[1] = 'changed';
console.log(CARDS); // [1, 'changed', 3, 4]

CARDS.shift();
console.log(CARDS); // ['changed', 3, 4]

CARDS = [5, 6, 7]   // TypeError: Assignement to constant variable.

// we added a new element to the array object given by CARDS, replace an element
// wiht a new value and remove an element from the array.
// reassignment of const variables are not allowed

// Mutating a value assigned to a const variable is misleading and should be 
// avoided

// you can use Object.freeze so that the value cannot be changed in any way 
// it is good practice with objects that must never be modified

const CARDS = Object.freeze([1, 2, 3]);
CARDS.push(4);  // TypeError: Cannot add property 3, obkect is not extensible

/** Function Guidelines
 * 
 * Make sure the function does one thing, and have limited responsibility
 * functions should be short (10 lines of less)
 * if more than 15 lines, consider splitting into 2 or more functions
 * 
 * A function have side effects if it does the following:
 * 
 * 1. It reassigns any non-local variable, Reassignin a variable in the outer 
 * scope would be a side effect
 * 
 * 2. It mutates the value of any object referenced by a non-local variable,
 * mutatuing an array or object argument, is a side effect
 * 
 * 3. It reads from or writes to a file, network connection, browser, or the
 * system hardware.  Side effects like this include writing to the console.log
 * and reading input from the terminal
 * 
 * 4. It raises an exception without handling it
 * 
 * 5. It calls another function that has side effects
 */

// The following functions has side effects

// side effects: logs output to the console
// returns undefined

function displayTotal(num1, num2) {
  console.log(num1 + num2);
}

// side effect: mutates the passed-in array
// returns: updated array

function append(targetArr, valueToAppend) {
  targetArr.push(valueToAppend);
  return targetArr;
}

// Exmaple of function with no side effect;

// side effect: none
// returns: a new number

function computeTotal(num1, num2) {
  return num1 + num2;
}

/** Most functions should return a useful value or they should have a side
 * effect, but not both, the example above append returns a useful value and a 
 * side effect.
 * 
 * if the function returns a value and a side effect, you may have trouble
 * remembering one of them or forget about the side effect
 * 
 * a useful value means that the function returns a value that has meaning to
 * to the calling code
 * 
 * The exception to this rule about mixing side effect and useful value:
 * reading something from a database, you'll certainly have a return value,
 * reading some input from the users keyboard, you'll probably need to display a
 * prompt, read the input from the terminal, the a return value, accessing a
 * database and reading and writing from the terminal are side effects, but you
 * may still need a return value
 * 
 * Function names should reflect whether side effects may occur
 * 
 * ex. you use a name like displayTotal as the name of the function that displays
 * a total to the console.  the term display implies that you're going to do
 * some output -- a side effect-- rather than attempting to just calculate and
 * return the total
 * 
 * ex. you probably name the function that computes the total something like
 * computeTotal it implies that you're going to return the value of a 
 * computation
 * 
 * Functions should be at the same level of abstraction
 * 
 * usually functions take some input and return an output.  We should be able to
 * copy and paste the function into the REPL and test it
 * 
 * when working with a function, you should mentally extract the function from
 * the program and work with it in isolation
 * 
 * you should be able to feed it inputs and expect it to produce some outputs
 * 
 * when you have a function like that, you can use it without thinking about the
 * implementation
 * 
 * For example, Which one of the 4 functions below stands out?
 * 
 * deal()
 * hit()
 * stay()
 * iterateThroughCards()
 * 
 * the last one iterateThroughCards, its not the same level of abstaction as the
 * other cards.  The other functions are in the language of the game.  verbs 
 * that are used only for this game, they all specify what they do
 * but leave implementing details to the function.
 * 
 * You shouldn't care about the implimentation details when you use the function
 * 
 * the last function is a programmer concern - iterating through cards.  It's
 * "how" you perform the task
 * 
 * 
 * 
 * Function Names Should Reflect What They Do
 * 
 * function names should reflect whether side effects may occur:
 */

function updateTotal(total, cards) {
  // some code here
}

/** when we see a function called updateTotal, we assume that it mutates
 * something, maybe one of the arguments or something else in the program
 * we wouldn't expect a return value to have any significance, it might be a
 * problem if it does
 * 
 * the less you have to remember, the less other people have to remember when
 * they look at your code, the better
 * 
 * use naming conventions to signify which type of functions mutates vs which 
 * functions returns values
 * 
 * The more you have to think about a function, the harder it is to use it
 * if it has side effects and returns a value, it makes debugging and using
 * the function more difficult
 * 
 * Avoid functions that prints things to the console and return a useful value
 * 
 * ex. getAndDisplayTotal function might display a total and also return it
 * 2 actions you may not want to go together
 * 
 * exceptions to the "don't print and return" guideline: requests some input 
 * from the user and then returns that input.  logically that's a signle
 * operation: "get input from the user", an example of this is the
 * question function from readline-sync
 * 
 * The goal should be to build small functions that are like LEGO blocks:
 * the should be stand-alone pieces of functionality that you can use to piece
 * together larger structures.  You don't wan't these to be mentally taxing to
 * use.  Interesting structures comprise of hjundreds or thousands of individual
 * LEGO pieces
 * 
 * Some functions are convoluted since the logic is complex, its a sign that you
 * don't quite understand the problem well enough to break it down into well-
 * compartmentalized pieces
 * 
 * your understanding should grow as you dig deeper into the code, refactor the
 * code to reflect that clarity
 * 
 * 
 * Displaying Output
 * 
 * some functions only display information.  ex:
 */

function welcome() {
  console.log('welcome');
}

/** That's fine but it's not clear whether a function named welcome returns a 
 * string or outputs a string.
 * 
 * one way to resolve this is to help yourself remember and prefix functions 
 * that outputs values with something like print, say or display
 * it is vital that you output only values in these functions
 * 
 * Don't mutate arguments or return values
 * 
 * Functions are like black boxes, it takes some stuff (input) and returns some
 * value (output) to you
 * 
 * they should be self contained,
 * you should know what they do without looking at the implementation
 * 
 * code must not only work correctly, but must be easy to read
 * by others as well as your future self
 */

/** Miscellaneous Tips
 * 
 * use 2 spaces not tabs
 * verify indentations after pushing to github
 * some (JS style guides recommend 4 spaces, but 2 spaces for Launch School)
 * 
 * Name functions from the perspective of using them later
 * ex. If you have an array of cards and you write a function to find the ace,
 * your function should be called findAce and you can use it like this
 * let ace = findAce(cards);
 * 
 * you shouldn't name it findAceFromCards, because you will think of invoking it
 * like this findAceFromCards(cards) when the reader sees a function like that,
 * they think what else you can find ace from other than cards
 */

// Know when to use a regualr while loop vs a generic while true loop:

while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n');
  let answer = readline.question();
}

// When running this code JS will throw an excpetion of 
// "ReferenceError: answer is not defined".  To correct it, you must declare
// and initilaized answer before the while statement like this:

let answer = '';
while (answer.toLowerCase() !== 'n') {
  console.log('Continue? (y/n');
  answer = readline.question();
}

// That works, but another implementation would be to use a generic loop with
// a break statement:

while (true) {
  console.log('Continue? (y/n)');
  let answer = readline.question();
  if (answer.toLowerCase() === 'n') break;
}

/** All the code is contained in the loop and slighly easier to reason about,
 * we can even do without the answer varaible and use the user input
 * in the if  condition directly, but using answer is fine --remember clarity
 * over terseness.
 */