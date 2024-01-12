/** Varaibles as Pointer Exercises */

// Question 1
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);        // 'Hello'
console.log(myOtherWord);   // 'Hello'

// we declare variable myWord and initialized it to the string 'Hello'
// we declare varbiable myOtherWrod and assigned it the value of myWord
// both variables are independent of each other


// Question 2
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWord2 = 'Hello';
let myOtherWord2 = myWord;
myWord2 = 'Goodbye';

console.log(myWord2);       // 'Goodbye'
console.log(myOtherWord2);  // 'Hello'

// We initialized myWord2 to 'Hello'
// We assign myOtherWord2 to myWord2
// We reassign myWord2 to the string 'Goodbye'
// We are changing what is stored at the memory address myWord2 points to


// Question 3
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords = ['Hello', 'Goodby'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);       // ['Hi', 'Goodbye']
console.log(myOtherWords);  // ['Hi', 'Goodbye']

// varibale myWords is initialized to an array
// we assign myOtherWords to myWords both variables atre dependent and are
// pointers to the value in memory, changing the first element in myWrods affect
// the value for myOtherWords: mutating the array

// 1. myWords is initialized to an array, which is a reference type

// with reference types, the value stored in memory athat the variables points
// to is a reference to another location in memory

// both have as their value the memory address where the array is stored

// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords2 = ['Hello', 'Goodbye'];
let myOtherWords2 = myWords2;
myWords = ['Hi', 'Bye'];

console.log(myWords2);        // ['Hello', 'Goodbye']
console.log(myOtherWords2);   // ['Hi', 'Bye']

// We're dealing with reference type
// variable myWords2 is initialized as a pointer to the array location in memory
// both variables have their value to the memory address where the array is
// stored.
// we assign myOtherWords2 to myWords2
// we assign myWords2 to another array -> point myWords2 to another array
// we're assigning another array not mutating the array object

// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords3 = ['Hello', 'Goodbye'];
let myWord3 = myWords3[0];
myWords3[0] = 'Hi';

console.log(myWords3);   // ['Hi', 'Goodbye']
console.log(myWord3);    // 'Hello'

// myWords3 is a reference type, it points the an array location in memory
// we assign myWord3 the string element 'Hello'; myWord3 is a primitive
// we mutate the array assigned to myWords3 by changing the first element to
// 'Hi'

// Question 6
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords4 = ['Hello', 'Goodbye'];
let myWord4 = 'Hi';
myWords4[0] = myWord4;
myWord4 = 'Hello';

console.log(myWords4);    // ['Hi', 'Goodbye'];
consoile.log(myword4);    // 'Hello';

// we declare the variable myWords4 and intialized it to an array containing 
// 2 elements -> reference
// we declare myWrod4 and initialize it to the string 'Hi' -> Primitive
// We reassign myWords4 element at index 0 to the myWord4 string 'Hi'
// mutating the array
// We reassign myWord to the string 'Hello'