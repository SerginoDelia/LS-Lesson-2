// Question 1
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

// replaces the first occurance
// advice.replace('important', 'urgent');

// replace all ocurrances
advice = advice.replaceAll('important', 'urgent');
console.log(advice);

// Question 2
// Write two distinct ways of reversing the array without mutating the original 
// array.Use reverse for the first solution, and sort for the second

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// reverse numbers without destruction
numbers = [1, 2, 3, 4, 5];

// slice method returns a shallow copy
console.log('Non destructive reverse: using reverse method');
let reverseNumbers = numbers.slice().reverse();
console.log(reverseNumbers);
console.log(numbers);

// sort method to reverse
numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers);

// using spread syntax to reverse without mutation
console.log('Non destructive reverse: using sort method');
let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedNumbers);
console.log(numbers);

// reverse numbers using forEah
console.log('Using forEach to reverse numbers array');

let newNumbers = [];
numbers.forEach(num => {
  newNumbers.unshift(num);
});

console.log(numbers);
console.log(newNumbers);

// Question 3
// Given a number and an array, determine whether the number is included in the array.

let numbers2 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95;

console.log(numbers2.includes(number1));  // false
console.log(numbers2.includes(number2));  // true

// Question 4
// Starting with the string: show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
famousWords = "Four score and " + famousWords;

console.log(famousWords);

famousWords = "seven years ago...";
famousWords = "Four score and ".concat("", famousWords)
console.log(famousWords)

// Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the 
// number at index 2, so that the array becomes[1, 2, 4, 5].

numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

// Question 6
// Suppose we build an array like this:
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Spread syntax and concat

console.log(flintstones);
flintstones = [].concat(...flintstones);
console.log(flintstones);

// Reduce and concat
flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

console.log("Printing Flintstones using reduce");
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flintstones);

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// forEach
let newFlintstones = [];

flintstones.forEach(name => {
  return newFlintstones = newFlintstones.concat(name);
});

console.log("Printing Flintstones forEach");
console.log(newFlintstones);
console.log(flintstones);

// other method
flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = flintstones.flat();
console.log(flintstones);

// Question 7
// Consider the following object:

let flinstonesObject = { fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 }

let flintstonesArray = Object.entries(flinstonesObject).filter(pair => pair[0] === "Barney").shift();

console.log(flintstonesArray);
console.log(flinstonesObject);

// Question 8
let numbers3 = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

console.log(Array.isArray(numbers3));
console.log(Array.isArray(table));

// Question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

// Question 10
let statement1 = "The Flintstones Rock";
let statement2 = "Easy come, easy go";

statement1 = statement1.split('').filter(letter => letter === 't').length;
console.log(statement1);

statement2 = statement2.split('').filter(letter => letter === 't').length;
console.log(statement2);

