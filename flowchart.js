

/**
 * Informal pseudocode
 * 
 * While the user wants to keep going
 * - ask the user for a collection of numbers
 * - iterate through the collection one by one
 *    - save the first value as the starting value
 *    - for each iteration, compare the saved value with the current value
 *    - if svaed value is greather or equal to the current number
 *       - move to the next value in the collection
 *    - otherwise, if the current value is greater than the saved value
 *        - reassign the saved value as the current value
 * 
 *    - after iterating through the collection, save the largest value into the list
 *    - ask the user if they want to add another collection
 * 
 * return the saved list of numbers
 */

/**
 * Formal pseudocode
 * 
 * START
 * 
 * SET largestNumbers = []
 * SET keepGoing = true
 * 
 * WHILE keepGoing === true
 *  GET "enter a collection"
 *  SET collection
 *  SET largestNumber = SUBPROCESS "extract the largest one from that collection"
 *  largestNumbest.push(largestNumber)
 *  GET "enter another collection?"
 *  IF "yes"
 *    keepGoing = true
 *  ELSE
 *    keepGoing = false
 * 
 * PRINT largeNumbers
 * 
 * END
 */

/** Notices the SUBPROCESS key show that some other thing will extract number from a collection
 * we could have included the entire formal pseudocole from the previous assignment, but that would make it long
 * Our confidence in a large block of code can't be very high
 * 
 *  check flowchart2 image
 */

/**
 * num = findLargest(collection) is a sub process
 * 
 * we can move logic to sub-process, we use a declarative type of syntax, rather than imperative.  We can say "findLargest", rather than outlineing the steps
 * of how the logic should be.
 * 
 * From high level writing declarative code fragments our program into logical subsections, which let us focus on 1 section at a time
 * 
 * ex.  If we wanted to add a validation feature of our app we could have a sub-process that returns true or false given an input
 * 
 * we can call it validateInput and represent it as a square in the flow chart, without having to layout step by step imperative logic that's required to validate the user's input
 * 
 * we can trust the sub-process will do its job from a high level -- it only returns true or false and represent it as a square in the flow chart
 * 
 * When we're ready to work on that logic validateInput sub-process, we can focus on the responsibilities of this sub-process and ignore the rest of the program
 * 
 * as you use pseudocode and flowcharts to help you dissect the logic of a problem, you always need to think about how detailed the chart should and words chould be,
 * and what you can extract to sub-process.  A programmer must always think about that when designing the solution to a problem, you won't get it right the first time
 */

/** Start at a high level using declarative syntax
 * ex.  working on a calculator, start with something like this
 * 
 * - Get the first number
 *    - Make sure it's valid, otherwise, ask for another
 * - Get the second number
 *    - Make sure it's valid, otherwise ask for another number
 * - Get the operator
 *    - Make sure it's valid, otherwise, ask again
 * 
 * - Perform the operation on the two numbers
 * - Display result
 * - Ask the user wants to do another calculation
 */


/** in the above we're not outline exactly how to validate inputs, No specifics or imperative style pseudocode yet,
 * once we have the high-level steps, it's time to drill down a level into imperative pseudocode and outline specifics
 * 
 * This will take some practice
 * 
 * In the long-term you may not need pseudocode or flow charts, but on interviews coding assignments, i am expected to layout the logic before I begin coding
 * Pseudocode is the most straightforward way to do that.
 */