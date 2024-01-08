// example of pseudocode for a function that determines which number in a collection has the greatest value

/**
 * Given a collection of numbers.
 *
 * Iterate through the collection one by one.
 *    - save the first value as the starting value.
 *    - for each iteration, compare the saved value with the current value.
 *    - if the current number is greater
 *        - reassign the saved value as the current value
 *    - otherwise, if the current value is smaller or equal
 *        - move to the next value in the collection
 *
 * After iterting through the collection, return the saved value
 */

// This is one approach we can use to solve the problem.
// We don't start writing code from the beginning,but instead we try to front load the problem into our brain first

// We you first approach any problem it's important to try to understand it well.  To do that you must spend some time to load the problem into your brain
// only then you can start to dissect it, understand it, and come up with an execution path to solve it

/** Two Layers to solving any problem
 * 1. The logical problem domain layer
 * 2. The syntactical programming layer
 */

// Using pseudocode lets us focus on the logical problem domain layer without dragging us down the programming language layer

/** Problems with pseudocode
 * We can't verify its logic
 * To verify its logic we must translate pseudocode into programming code
 */

/** Formal Pseudocode
 *
 * Keywords to assist:
 *
 * Keyword                        Meaning
 *
 * START                          start the program
 * SET                            set a variable that we can use for later
 * GET                            retrieve input from the user
 * PRINT                          display output to user
 * READ                           retrieve a value from a variable
 * IF/ELSE IF/ELSE                show conditional branches in logic
 * WHILE                          show looping logic
 * END                            end of the program
 */

// Example to translating for to pseudocode

/**
 * START
 *
 * #  Given a collection of integers called "numbers"
 *
 * SET iterator = 1
 * SET savedNumber = value within numbers collection at space 1
 *
 * WHILE iterator <= length of numbers
 *    SET currentNumber = value within numbers collection at space "iteration"
 *    IF currentNumber > savedNumber
 *      savedNumber = currentNumber
 *    Else
 *      do nothing
 *
 *    iterator = iterator + 1
 *
 * PRINT savedNumber
 *
 * END
 */

// PRINT show the final return value
// the advantage of this step is to give more structure to our pseudocode and to let us think at a more detailed level, and not worry about syntax
// now we test the logic

// Translating Pseudocode to Program Code

function findGreatest(numbers) {
  if (numbers === undefined) return;
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}

// Remember pseudocode is a guess at the solution

/** For more sophisticated problems, we need to take a piecemeal approach when writing pseudocode to JS
 * once we verify the logic is correct, we can move to the next piece of the problem
 * step by step, we slowly load the problem into our brain, verifying the logic each step of the way
 * 
 * a function that returns the sum of two numbers:
 * 
 * 
 * START
 * 
 *    given 2 numbers called number1 and number2
 * SET result to the product of adding number1 and number2
 * 
 * PRINT result
 * 
 * END
 * 
 * ***************************************************************************************
 * 
 * Create a function that add 2 numbers called num1 and num2
 * return the result of the 2 numbers added together
 */

/**
 * a function that takes an array of strings, and returns a string that is all those strings concatenated together
 * 
 * START
 * 
 * given an array of strings called stringsArray
 * 
 * SET arrayToStrings
 * 
 * WHILE the iterator < stringsArray length
 *  arrayToString = arrayToStrings + the value within array collection space at iteration
 * 
 * RETURN arrayToStrings
 * 
 * END
 * 
 * ***************************************************************************************
 * 
 * create a function that takes an arrays of strings
 * 
 * return all the strings join together
 */


/** a method that takes an array of integers, and returns a new array with every other element from the original array, 
 * starting with the first element. For instance: 
 * 
 * START
 * 
 *  given an array of integers called numbers, add every other element
 * 
 * SET newNumbers = an empty array
 * 
 * WHILE  iterator < numbers length
 *  IF iterator divided by 2 with a remainder of zero 
 *    newNumbers push array collection space at iteration
 *    
 * PRINT newNumbers
 * 
 * END
 * 
 * ***************************************************************************************
 * 
 * casual
 * 
 * function everyOther takes an array
 * set newArray to empty array
 * 
 * iterate through the function
 * if the iteraton number % = 0
 * push the array iteration index value to newArray
 * 
 * return array
 * */


/** a function that determines the index of the 3rd occurrence of a given character in a string. 
 * For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). 
 * If the given character does not occur at least 3 times, return null. 
 * 
 * START
 * 
 *    given a string of letters called string
 * 
 * SET stringToArray = string split to an array of the letters
 * SET count = 0
 * SET charater = x
 * 
 * WHILE iterator < stringToArray length && count < 3
 *  IF the value within the stringToArray collection space at iteration = x
 *    SET count = count + 1
 *    
 *    IF count === 3
 *      SET count = stringToArray[iteration]
 * 
 * IF count < 3
 *    SET count = null
 * 
 * PRINT count
 * 
 * END 
 * 
 * ***************************************************************************************
 * 
 * casual
 * 
 * We have a string of letters and a matching character called string and character
 * set a counter
 * 
 * turn the string to array called stringToArray
 * 
 * iterate through the array stringToArray
 * every time the character match the stringToArray index value at iteration
 * add 1 to counter
 * if counter === 3
 * counter = the index of the 3rd character
 * 
 * if counter is less than 3 
 * counter = null
 * return count
 * 
 * */


/** a function that takes two arrays of numbers and returns the result of merging the arrays. 
 * The elements of the first array should become the elements at the even indexes of the returned array, 
 * while the elements of the second array should become the elements at the odd indexes. For instance:
 * 
 * START
 * 
 *  given 2 arrays of numbers with the same number of elements called numbers1 and numbers2
 * 
 * SET newNumbers = []
 * 
 * WHILE iterator < numbers1 length
 *    SET newNumbers push numbers1 space at iteration
 *    SET newNumbers push numbers2 space at iteration
 * 
 * PRINT newNumbers
 * 
 * END
 * 
 * ***************************************************************************************
 * 
 * casual
 * 
 * we have a functon that takes 2 array of numbers (numbers1 and numbers2)
 * merge the two arrays
 * set an empty array called newNumbers
 * numbers1 stored at even indexes 
 * numbers2 stored at odd indexes
 * 
 * iterarte through both arrays
 * push the numbers1 value of index at iteration to newNumbers
 * push the numbers2 value of index at iteration to newNumbers
 * 
 * return newNumbers
 */