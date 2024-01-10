/** Formal Pseudocode
 * 
 * We use keywords to assist with their meaning
 * 
 * Keywords             Meaning
 * START                start of the program
 * SET                  set a variable that we can use for later
 * GET                  retrieve input from user
 * PRINT                display output to the user
 * READ                 retrieve a value from a variable
 * IF/ELSE IF/ELSE      show conditional branches in logic
 * WHILE                show looping logic
 * END                  end of the program
 */

// We can use the above keywords to act as pseudo-programming language, but one that's still written in English, which lets us
// be more relaxed about the precision of the syntax.  Here's a stab at translating to formal pseudocode:

/**
 * START
 * # Given a collection of integers called "numbers"
 * 
 * SET iterator = 1
 * SET savedNumber = value within numbers collection at space 1
 * 
 * WHILE iterator <= length of numbers
 *  SET currentNumber = value within numbers collection at space "iterator"
 *  IF currentNumber > savedNumber
 *    savedNumber = currentNumber
 *  ELSE
 *    do nothing
 * 
 *  iterator = iterator + 1
 * 
 * PRINT savedNumber
 * 
 * END
 */

// Translating Pseudocode to Program Code

function findGreatest(numbers) {
  let savedNumber = numbers[0];
  if (numbers === undefined) return;

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}

// For more complex problems we need to break it down to smaller pieces, then translate pseudocode to JS code
// Once the logic is correct, we move to the next piece of the problem.  Step-by-step we load the problem into
// our brain and verify the logic each step of the way

// SET a function that PRINT 2 numbers

// SET a function that takes a collection of strings, and combine the strings collection together

// Set a function that takes a collection of integers, print a new collection with every other numbers from the 
// original collection starting with the first number in the collection

function everyOther(numbers) {
  let newArray = [];

  numbers.forEach(num => {
    if (num % 2 === 1) {
      newArray.push(num);
    }
  });
  return newArray
}

console.log(everyOther([1, 4, 7, 2, 5])); // => [1,7,5]

/** START
 * 
 *  given a string
 *  
 *  SET testCharacter to x
 *  IF testCharacter occur at least 3 times
 *    PRINT 6
 *  ELSE
 *    PRINT null
 * 
 */

/** create a function that takes in a string of a testCharacter
 * if the testCharacter occurs at least 3 times return 6
 * else return null
 */

/** START
 *  given 2 collections of numbers
 *  SET the first collection to the even indexes
 *  SET the second collection to the odd indexes
 *  
 * PRINT a newArray of the 2 collections of numbers merged
*/

console.log("Printing merge function:")

function merge(numbers1, numbers2) {
  let totalLength = numbers1.length + numbers2.length;
  let newNumbers = [];

  for (let i = 0; i < numbers1.length; i++) {
    newNumbers.push(numbers1[i], numbers2[i]);
  }
  return newNumbers;
}

console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]

// A larger Problem
// Let's suppose that we need to ask the user to enter N collections of numbers and that we want to find and 
// display the largest number from each collection.How would we approach coming up with a solution here ?

// high level pseudocode

/**
 * while the user wants to keep going
 *  - ask the user for a collection of numbers
 *  - extract the largest one from that collection and save it
 *  - ask the user if they want to input another collection
 *
 * return a list of numbers
 */

// If we were tackling the largest problem first

/**
 * While the user wants to keep going
 * - ask the user for a collection of numbers
 * - iterate through the collection one by one
 *   - save the first value as the starting value
 *   - for each iteration, compare the saved value with the current value.
 *   - if saved value is greater than or equal to the current number
 *      - move to the next value in the collection
 *   - otherwise, if the current value is greater than the saved value
 *      - reassign the saved value as the current value
 *
 * - after iterating through the collection, save the largest value into the list
 * - ask th user if they want to input another collection
 *
 * return the saved list of numbers
 */

// Let's translate the shortened pseudocode into formal pseudocode

/**
 * START
 *
 * SET largestNumbers = []
 * SET keepGoing = true
 *
 * WHILE keepGoing === true
 *  GET "enter a collection"
 *  SET collection
 *  SET largestNumber = SUBPROCESS "extract the largest one fromthe that collection"
 *  largestNumbers.push(largestNumber)
 *  GET "enter another collection?"
 *  IF "yes"
 *    keepGoing = true
 *  ELSE
 *    keepGoing = false
 *
 * PRINT largestNumbers
 *
 * END
 */

// Start with high level, using declarative syntax, for example if you're working on a calculator, you can start with something like this

/**
 * - Get the first number
 *  - Make sure it's valid, otherwise, ask for another number
 * - Get the second number
 *  - Make sure it's valid, otherwise ask for another
 * - Get the operator
 *  - Make sure it's valid, otherwise, ask again
 * 
 * - Perform the operation on the two numbers
 * - Display result
 * - Ask whether the user wants to do another calculation
 */


