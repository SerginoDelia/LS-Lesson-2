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