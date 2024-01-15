/** Coding Tips 2
 * 
 * Using blank lines to organize code
 * 
 * we as programmers need to learn to organize chunks of code to make it easier 
 * to to read, just like writer use paragraphs to organize sentences
 * 
 * Making your code readable is essential, not only for others but for your
 * future self
 * 
 * Ex.
 */

// Bad

// const readline = require('readline-sync');
// console.log('Enter your name');
// let name = readline.question();
// while (name.trim() === '') {
//   console.log("That's an invalid name. Try again:");
//   name = readline.question();
// }
// console.log(`Welcome ${name}!`);
// console.log("What would you like to do?");

// better 

const readline = require('readline-sync');

console.log('Enter your name');
let name = readline.question();

while (name.trim() === '') {
  console.log("That's an invalid name. Try again:");
  name = readline.question();
}

console.log(`Welcome ${name}!`);
console.log("What would you like to do?");

/** Visually, you can quickliy see where the name variable is declared.  you can
 * see this small snippet of code is divided into 4 parts
 * 
 * constant and variable declaration and initialization
 * initial user input
 * input validation
 * using the variable
 */

/** Naming functions appropriately
 * 
 * functions that output values preface theme with
 * display or print
 * example: function named printTotal
 * 
 * if you find yourself looking at a function's implementation every time you 
 * use it, it's a sign that the function need to be improved
 * 
 * all goes back to 2 bits of advice
 * 
 * 1. a function should do one thing
 * 2. a function should be named appropriately
 * 
 * if you treat a function as a "black box" then it is a well designed function.
 * 
 * you should be able to use a function named total and understand that it 
 * returns a value
 * 
 * likewise, you should be able to use a function named printTotal and realize
 * that it refturns undefined without lookking at either implementation
 * 
 * DOn't mix up concerns, Don't write functions that does more than one of these
 * things:
 * 
 * mutate a value
 * output something
 * return a meaningful value
 * 
 * Make sure your function does one of those things
 */

/** Don't mutate the caller during iteration
 * 
 * suppose you have an array of strings and we want to iterate over that array
 * and print out each element.  We could do something like this:
 */

let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
});

// Thats very typical code, Now suppose we want to remove each element as we're
// iterarting

let words2 = ['scooby', 'do', 'on', 'channel', 'two'];

words2.forEach(word => {
  console.log(word);  // logs: scooby, on, two )(in that order)
  words2.shift();
});

/** The Array.prototype.shift method removes the first element of an array
 * since we're iterating and csllingshift in each iteration, we expect all 
 * element to be removed by the end of the iteration, but let's log the words2
 * array after the iteration to see what happens:
 */

console.log(words2);  // logs ['channel', 'two']

/** This is very strange, should every element be deleted?
 * we were expecting an empty array but the final value is ['channel', 'two']
 * let's walk through the code to understand what's happening
 * 
 * in the first iteration, word points to the first element of words2 namely 
 * 'scooby' that gets logged to the console and it is then removed
 * 
 * at this point words2 contatin ['do', 'on', 'cahnnel', 'two']
 * 
 * in the second iteration, word now points to the second element of words2,
 * which is no 'on'. at this point, we log 'on', but when we call words2.shift()
 * its the first element ( 'do' ) that gets removed
 * 
 * At this point words2 contains ['on', 'channel', 'two']
 * 
 * in the third iteration, word now points to the 3rd element, which is now 
 * 'two'.  at this point, we log 'two', but when we call words.shift(), its the
 * first element ( 'on' ) that gets removed
 * 
 * At this point words2 contains ['channel', 'two']
 * 
 * JS now attempts to do a fourth iteration, however since words2 now only 
 * contains two elements, iteration ends.
 * 
 * The lesson is:
 * 
 * Don't mutate a collection while iterating through it.  The behavior may not
 * be what you expect.
 */

// Note, you can mutate the individual elements within that collection, just not
// the collection itself

let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [7, 'channel'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
});

console.log(pairs); // logs [['scooby'], ['do'], ['on'], ['channel'], ['two']];


/** Variable Shadowing
 * 
 * Variable shadowing occurs when you choose a local variable in an inner scope 
 * that shares the same name as a variable in an outer scope.  It is very easy 
 * to make this mistake; it essentially prevents you from accessing the outer 
 * scope variable from an innner scope
 */

// Example:  suppose we have an array of names, and we want to append a last
// name to each of them.  We could do something like this:

let name2 = 'johnson';

['kim', 'joe', 'sam'].forEach(name => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${name} ${name}`);
});

// The problem is that we've shadowed the outer scoped name variable, within the
// forEach callback function, the name variable represents the elements in the 
// array- "kim", "joe", "sam"

// note that the following is not variable shadowing

let name3 = 'johnson';

['kim', 'joe', 'sam'].forEach(fname => {
  name3 = fname;
});

/** Te code above is accessing the name variable from the outer scope and
 * reassigning it..  After the forEach method runs the name will be set to 'sam'
 * 
 * be careful about choosing appropriate variable names when working with 
 * callback functions.  it you pick a name that is identical to an outer scoped 
 * variabl, variable shadowing will prevent you from using the outer scoped
 * variable
 * 
 * anorther reason to run ESLint on your code, it'll catch this error for you
 */

/** Don't use assignment in a conditional
 * 
 * We recommend that you never use assignment in a conditional, it's not clear
 * whether you meant to use == or === or if you indeed meant to do the assignemt
 */

// bad
let someVariable;

if (someVariable = getAValueFromSomewhere()) {
  console.log(someVariable);
}

// good

let someVariable2 = getAValueFromSomewhere();

if (someVariable) {
  console.log(someVariable);
}

// The first if statement works, but its very confusing, and others reading your
// code won't be 100% confident whether it's a bug or intentional.
// Avoid this practice

// but you will encounter some code like this in the wild.  Some experinced 
// programmers will do it all the time, especially programmers that have been
// around for a long time.
// for Example, here's a while loop that iterates through a collection:

let numbers = [1, 2, 3, 4, 5];
let num;

while (num = numbers.shift()) {
  console.log(num);
}

console.log(numbers); // []

/** Array.prototype.shift removes and returns the first element in the array
 * when there is nothing left to remove, shift returns undefined.  this loop
 * takes advantage of the fact to serve as the loop termination condition
 * 
 * while it works, this code is hard to read, and future programmers including
 * yourself cant be 100% confident that this was intentional did you mean
 * num == numbers.shift() ? is this a bug or is it itentional
 * 
 * As a convntion, if you must do this, wrap the assignment in parenthesis.
 * This will signify to future programmers that you know what you are doing
 * and this was done on purpose
 */

let numbers2 = [1, 2, 3, 4, 5];
let num2;

while ((num2 = numbers.shift())) {
  console.log(num);
}

console.log(numbers2);

// We still recommend that you don't do this

/** Use underscore for unsued callback parameters
 * 
 * suppose you have an array of names and you want to print out a string for
 * every name in the array, but don't care about the actual names.  In this
 * situation use an underscore to signify that we don't care about this 
 * paricular callback parameter
 */

let names3 = ['kim', 'joe', 'sam'];
names3.forEach(_ => {
  console.log('Got a name!');
});

// another example is when you need the second parameter, but don't need the 
// first one.  you can use _ to indiocate that thefirst parameter is not being
// used by the callback: 

let names4 = ['kim', 'joe', 'sam'];
names4.forEach((_, index) => {
  console.log(`${index + 1}: Got a name!`);
});

// logs
// => 1: Got a name!
// => 2: Got a name!
// => 3: Got a name!

/** Gain Experience Through Struggling
 * 
 * there are 2 things beginners feel at this stage:
 * 
 * 1. that they must know the "best" or "right" way to do something, so they
 * feel they must learn "best practice"
 * 
 * 2. that they waste too much time debugging and not doing things correctly the
 * first time
 * 
 * to the first point: its less impacful to learn "best practices" without first
 * learning why they are best practices.
 * 
 * 2nd point, you must learn to be ok with struggling through the "bad" or 
 * sub-optimal practice first.  That's not wasting time, thats getting 
 * experience.  Becoming a good developer means experiencing and solving a lot
 * of weird issues
 * 
 * don't memorize "best prcatices" spend enough time rpogramming where you 
 * understand the context for those practices.  you'll be able to lean on your
 * experience rather than try to retrieve a bullet list from something that you
 * read months ago or years ago
 * 
 * don't fear violating the rules or making mistakes, but keep an eye out for
 * improvements, coding is like writing - there are syntactical rules, but there
 * are also creative ways of expression
 * 
 * spend time programming
 * learn to debug problems
 * struggle with them
 * search for the right terms
 * play around with the code
 * 
 * and you'll be able to transfor into a pro developer.  That's what pro 
 * developers do every day.
 */

