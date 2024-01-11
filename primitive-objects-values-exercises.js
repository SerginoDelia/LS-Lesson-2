// Exercises

// Work through the following exercises to help solidify the concepts we've 
// covered in this assignment.

// Question 1
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWord = 'Hello';
myWord.concat(' there');

console.log(myWord);  // 'Hello there'

// logs 'Hello there', concat() returns a new value
// variable myWord assigned to a string, which is a primitive and immutable
// concat() returns a new string with the there appended to it.  This doesn't
// affect the original 

// Question 2
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWord2 = 'Hello';
myWord2.repeat(3);
console.log(myWord2); // 'Hello'
myWord2.replace('H', 'J');
console.log(myWord2); // 'Hello'
myWord2.toUpperCase();
console.log(myWord2); // 'Hello'

// variable myWord2 assigned to string 'Hello' that is a primitive and immutable
// each console.log returns 'Hello'
// reapeat() returns a new string 'HelloHelloHello'
// replace() returns a new string 'Jello'
// toUpperCase() returns a new string 'HELLO'

// Question 3
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWoprds);  // ['Hello', 'Goodbye']

// variabble myWords assined to an array object and objects are mutable
// push mutates the array by adding the element 'Goodbye' to the array

// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords2 = ['Hello'];
myWords2.concat(['Goodbye']);

console.log(myWords2);  // ['Hello']

// logs ['Hello', 'Goodbye']
//  myWords2 is an array object and mutable
// concat doesn't mutates myWords2 but returns a new array

// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords3 = ['Hello'];
myWords3[0].toUpperCase();

console.log(myWords3);  // ['Hello']

// logs ['Hello'] myWords3 is an object and mutable, but toUpperCase() returns
// a new string since the method is being called on myWords3[0] 'Hello' which is
// a primitive, it doesn't mutate the array

// Question 6
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let myWords4 = ['Hello'];
myWords4[0] = myWords4[0].toUpperCase();

console.log(myWords4);  // 'HELLO'

// Logs 'HELLO' we are mutating the array by changing the value at index 0, we
// are not mutating the original string, but setting the value at index 0 to a 
// new string returned by calling the array method toUpperCase on the string
// 'Hello"


