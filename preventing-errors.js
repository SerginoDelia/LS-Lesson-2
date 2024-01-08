// Preventing Errors

// The best way to handle erros is to prevent them from happening by paying 
// attention to where they can occur.  ex:

function lowerInitial(word) {
  return word[0].toLowerCase();
}

lowerInitial("Joe");    // "j"
lowerInitial("Karen");  // "k"

// This implementation works with simple words:

// What happens when you pass it an empty string?

lowerInitial("");   // TypeError: cannot read property 'toLowercase' of undefined

/** Errors usually occurs where assumptions are made
 * above we assume the string will contain 1 or more characters.
 * the code violates the assumption by passing an empty string
 * 
 * Errors like this halts the execution of the program entirely.  It's easy to 
 * think of ways we can get an empty string in this function
 * ex: the value comes from a form element on a webpage, the user might not have
 * entered any data, or the data may come from a database that contains missing
 * data
 */

// Guard Clause

// One way to avoid this type of error is to use a guard clause
// A guard clause guarantees data meets certain preconditions before it get used
// in lowerInitial we check whether word contains any characters before we 
// try to use it

function lowerInitial2(word) {
  if (word.length === 0) {      // If word contains an empty string,
    return "-";                 // return a dash instead of proceeding.
  }

  return word[0].toLowerCase(); // word is guaranteed to have at least 
}                               // 1 character, so word[0] never evaluates
// as undefined.

/** When To Use Guard Clause
 * 
 * Guard clauses are best used when a fungtion cn't trust it's arguments are valid
 * Invalid arguments can have incorrect types, structures, values, or properties
 * usually a program should be able to trust itself to do the right thing;
 * you should be able to trust that it always call its method with valid values
 * 
 * ex.  if you can trust that your program always calls lowerInitial with a
 * non-empty String, you dont need a guard clause
 * 
 * Detecting Edge Cases
 * 
 * most error prevention work stems from examining the assumptions inherent in your code
 * think about where your program can violate your assumptions.
 * 
 * We call these situations edge cases because they often involve voilations on the 
 * extreme end of the range of possible values.
 * 
 * in lowerInitial, the shortest possible String ( '' ) is a edge case
 * 
 * To identify the edge cases that can break  break your program
 * start by considering the code inputs, for a functuon usually the arguments
 * 
 * Each data type has its own set of values that can cause an undesireable behavior
 * 
 * example consider areguments that should be numberic, Will the code work if 
 * the arument is negative or zero
 * 
 * what if you're expecting a whole number instead recieve a float
 * this is how Number object can violate expectations and cause unintentional 
 * behavior and bugs
 * 
 * In lowerInital, empty strings can be a problem if your function if your function
 * doesn't expect one.
 * 
 * think about how particular combinations of values can create unxecpected constions.
 */

/** Planning Your Code
 * 
 * Plan ahead, write out the common use cases of a new function, and check how your
 * function handles them.
 * 
 * lets say we are writing a function that inserts a new element into an Array 
 * in its proper alphabetically sorted position:
 */

let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(coutries, 'Brazil');

console.log(countries.join(', '));    // Logs "Australia, Brazil, Cuba, Senegal"

alphaInsert([], 'Brazil');            // Inserting in an Emptyb Array
alphaInsert(['Brazil'], 'Australia'); // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');      // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');    // Duplicate entry

/** We have 4 major cases above, more complex functions can have more,
 * it may get a bit too much to handle.  Instead focus on the "Happy Path"
 * -- the most basic use cases.  Then revisit the complete list and verify that
 * your implementation works well in each case.  If a case fails address it and
 * check the use case again
 */