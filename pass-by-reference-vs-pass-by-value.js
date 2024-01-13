/** Pass by Reference vs Pass by Value
 * 
 * What does Pass-by-Value mean?
 * 
 * means that when you use a variable as an argument to a function, the function
 * can't do anything that sets the original variable to a different value
 * 
 * No matter what happens what happens in the function, the variable will still
 * contain the same value that was passed to the function
 * 
 * This can lead you to believe that JS is pass-by-value since reassigning a
 * parameter variable within a function doesn't affect the variable outside the 
 * function.
 * 
 * ex:
 */

function changeName(name) {
  name = "bob";
  // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name);  // => logs 'jim'
}

anotherFunction();

/** Notice this code has 2 different name variables, one is in the scope of the
 * changeName, the other is in anotherFunction's scope, they have no direct 
 * relationship with each other
 * 
 * the question is: when we use name from anotherFunction to provide an argument 
 * to changeName, are we passing it by reference or buy value?  It looks like
 * we are passing it by value since reassigning the variable doesn't affect the 
 * variable inside another function/.
 */


// What does Pass-by-Reference Mean

// Its easy to conclude JS is pass-by-value based on the previous example, but
// it not that simple.  If JS were purely pass-by-value there wouldn't be any 
// function to change the original object, but that can easily be done in JS

function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['CHris', 'Kevin', 'Naveed']

// this ex implies that JS is pass-by-reference since the function affected the
// original object, but not all operations affect the original object
// let name some changes to the above program:

function capitalize2(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names2 = ["chris", "kevin", "naveed"];
capitalize2(names2);  // returns ['Chris', 'Kevin', 'Naveed']
console.log(names);   // ['chris', 'kevin', 'naveed']

// see the difference, w'ere back in pass-by-value world again, where functions
// don't affect the original object

/** What JS does
 * 
 * When you pass a primitive value to functions, you can treat JS like
 * pass-by-value, always.
 * 
 * No operation performed on a primitive value can permanently alter the value
 * 
 * When you pass primitive value to a function, you won't be able to affect the 
 * value of the argument passed to the function
 */

function cap(name) {
  name.toUpperCase();
}

let myName = "naveed";
cap(myName);
console.log(myName);  // 'naveed'

/** with objects pass-by-reference is clearly at play when you mutate the object
 * what happens when you don't perform any matative operations on the object?
 * JS has no way of knowing whether the function will mutate thee object. 
 * Objects are mutable, so JS must assume that the object might be mutated,
 * to allow this JS has not choice but to pass the object by reference; JS
 * passes all objects by reference.
 * 
 * in reality JS blend of pass-by-value and pass-by-reference that we sometimes
 * call pass-by-value of-the-reference or call-by sharing
 * 
 * all that matters is whether mutations can occur, mutations can never occur
 * with primitive values, but they can happen with most objects
 * 
 * Primitive values -> JS act like its pass-by-value
 * Object -> JS acts like pass-by-reference
 * 
 * Functions and methods that mutate their callers are called destructive
 * functions or methods
 * Array.prototype.push() is a destructive method
 */

function addNames(arr, name) {
  arr.push(name);
}

let names3 = ["bob", "kim"];
addNames = (names, "jim");
console.log();  // => ['bob', 'kim', 'jim']

// addNames permanently changed the original array

// Reassignment is not a destructive operation, as seen below

function addNames2(arr, name) {
  arr = arr.concat([name]);
}

let names4 = ["bob", "kim"];
addNames2(names, "jim");
console.log(names); // => ['bob', 'kim']

// notice how the code above doesn't change the names4 array

// concat() returns a new array and doesn't mutate the original array
// push() does mutate the original array

/** Rerturn Values
 * 
 * for most practical purposes values returned by functions as being
 * passed-by-value or pass-by-reference much as we can with arguments. consider
 */

function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);
console.log(numebr);      // 1
console.log(newNumber);   // 1

number = 3;
console.log(number);      // 3
console.log(newNumber);   // 1

// with the foo function we're passing the primitive value 1 into the function,
// as with all primitives, the value is passed by value, foo recieves a copy of
// the original value, then it returns the value of the argument it recieved
// the 2 variables are not linked

function bar(array) {
  return array;
}

let array = [1, 2, 3];
let newArray = bar(array);
console.log(array === newArray);  // true (they are same object)

array.push(4);
console.log(array);       // [1, 2, 3, 4]
console.log(newArray);    // [1, 2, 3, 4]

// in the bar function we're passing an array ( [1, 2, 3] ) into the function 
// as with other objects bar recieves a pointer (a reference) to the array by  
// calling the code.
// array and newArray points to the same array in memory

// Assignment

let number2 = 1;
let newNumber2 = number2; // is this pass by value? yes (independed variables)

// number2 and newNumber2 have the same values, but those values are independent
// if you increment 1 it will not afffect the other -> pass-by-value

let arr = [1, 2, 3];
let newArr = arr;        // is this pass by reference? yes (dependent variables)

// arr and newArr points to the exact same array if you use arr to modify the
// array, the reference newArr also changes -> pass-by-reference

// its incorrect to speak of assignment in terms of pass-by-value or 
// pass-by-reference. In JS those terms only apply when calling and returning
// from functions not assignments, this similarity can be a useful mentatl model
// when working with assignments

// ex 1: Assignment to Primitive types

let word = 'Hello';
let param = word;

param = 'Goodbye';

console.log(word);  // 'Hello'

// in terms of mental model this is simialr to 

let word2 = 'Hello';

function myFunc(param) {
  param = 'Goodbye';
}

myFunc(word);
console.log(word);  // 'Hello'

/** The main underlying concept is, the way inwhich variables, including 
 * function parameters, act as pointers.  The key difference between the 2 
 * snippets above is that in the second snippet param is accessible only with 
 * the scope of the functio.
 * 
 * We could do something like this with the first example:  */

let word3 = 'Hello';
let param3 = word;

param = 'Goodbye';
word = param;

console.log(word);  // 'Goodbye'

// That is not possible with the second example.  Assigning word2 to param, e.g.
// after the function is invoke, will give us a ReferenceError :

let word4 = 'Hello';

function myFunc2(param2) {
  param = 'Goodbye';
}

myFunc2(word);
// word = param2;  ReferenceError: param is not defined
console.log(word);

// simply assigning word to the return value of the function invocation will set
// it to undefined

let word5 = 'Hello';

function myFunc3(param) {
  param = 'Goodbye';
}

word = myFunc3(word);
console.log(word);

// in order to use tbe value of the param we have to explicitly return it 

let word6 = 'Hello';

function myFunc4(param) {
  param = 'Goodbye';
  return param;
}

myFunc4(word6);
word = myFunc4(word);
console.log(word);  // 'Goodbye'

// Example 2: Assignment to Reference Type 

let colors = ['red', 'green', 'blue'];
let newParam = colors;

newParam.push('yellow');

console.log(colors);  // ['red', 'green', 'blue', 'yellow']

// in terms of mental model this is similar to

let colors2 = ['red', 'green', 'blue'];

function newFunc(param) {
  param.push('yellow');
}
newFunc(colors);
console.log(colors);  // ['red', 'green', 'blue', 'yellow']

// Unlike the examples with primitives, when working with reference types both 
// colors and param point to the same object, so when we perform mutation on 
// that object by using param as a reference, we are going to see the results
// of that mutation if we subsequently reference the object using colors 

// the same rules apply around reassignment, if we reassign param to a different 
// object (or even a different primitive value) then we are not mutating the 
// original object 


// Exercises:

// Question 1
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.

function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord); // 'Hello'
console.log(myWord);  // 'Hello'

// Logs 'Hello', we decleare variable myWord initialized to the string 'Hello'
// pass by value.  'Hello' is a primitive and primitives are immutable

/** The function changeMyWord defines one parameter word, it logs the value
 * of that parameter to the console, and then reassigns word to return value of
 * word.toUpperCase() which in this case is -> 'HELLO'
 * 
 * the variable myWOrd is declared and initialized tot he String 'Hello'
 * we pass myWord as an argument to the changeMyWord function invocation
 * 
 * At this point both the myWord variable and word functuion parameter have as
 * their value the String 'Hello'
 * 
 * When changeMyWord function logs the value of word, 'Hello' is logged to the
 * console.  Because we are dealing with a primitive value, the myWord variable
 * and the word function parameter point to different places in memory
 * 
 * Passing in myWord as an argumentto the changeMyWord function invokation acts
 * like a pass-by-value, so nothing we do with the word parameter in the 
 * function such as calling toUpperCase() on it and re-assigning word will have
 * an effect on the value of myWord variable
 */


// Question 2
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.

function changeMyWord2(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord2 = 'Hello';
myWord2 = changeMyWord2(myWord2); // 'Hello'
console.log(myWord); // 'HELLO'

/** logs 'Hello' and 'HELLO'
 * myWordw declared and initialized the String 'Hello'
 * invoking/calling changeMyWord2 and passing myWord as a parameter set the 
 * value of the parameter word to the String 'Hello'
 * logs: the value of word -> 'Hello' reassign word to the value of calling
 * toUpperCase() on word and return that value 'HELLO'
 * 
 * pass-by-value */


// Question 3
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.

function changeMyWord3(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord3 = 'Hello';
let myOtherWord = changeMyWord3(myWord);  // 'Hello'
console.log(myWord);  // 'Hello'
console.log(myOtherWord); // 'HELLO'

/** Logs: 'Hello', 'Hello', 'HELLO'
 * pass-by-value
 * myWord3 declared and initialized to String 'Hello'
 * myOtherWord set to the return value of changeMyWord3 function and passing
 * myWord3 for the of argument word 'Hello'
 * and calling toUpperCase() on word and retuning the value of word
 * 
 * we assign the return value fo the function
 */

// Question 4
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.

function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords); // ['Hello', 'Goodbye']
console.log(words);     // ['Hi', 'Goodbye']

/** Logs:  ['Hello', 'Goodbye'] ['Hi', 'Goodbye'] 
 * myWords declared and initilized to Array ['Hello', 'Goodbye']
 * 
 * invoking/call changeMyWords function passing myWords as the parameter value
 * for words.
 * 
 * pass-by-reference myWords and words are dependent and points to the same
 * array in memory
 * 
 * words[0] = 'Hi' mutates the Array since it's pass-by-reference it mutates
 * both varibales
*/


// Question 5
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.


function changeMyWords2(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords2 = ['Hello', 'Goodbye'];
changeMyWords2(myWords2);   // ['Hello', 'Goodbye'] 
console.log(myWords2);      // ['Hello', 'Goodbye'] 

/** Logs: undefined, ['Hello', 'Goodbye']
 * 
 * myWords2 declared and initialized to Array ['Hello', 'Goodbye']
 * 
 * we invoke changeMyWords2 passing myWords2 as parameter,
 * pass-by-reference myWords2 words point the the same array in memore location
 * 
 * the function logs words ['Hello', 'Goodbye'] reassign the value of words 
 * to another array -> words point to
 * another array, so it doesn't have an effect on myWords2
 * 
 * only mutation would have an effect
 * 
 * changeMyWords2 function returns undefined because it doesn't have an explicit
 * return value
 */