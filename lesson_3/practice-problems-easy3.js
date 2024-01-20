// Question 1
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// pop, shift, length, splice
numbers.splice(0, numbers.length);
console.log(numbers)

numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

// while arrray.length is > 0 Array.pop 
numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

// set array length to 0
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

// set array to []
numbers = [1, 2, 3, 4];
numbers = [];
console.log(numbers);

// Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]);  // 1, 2, 34, 5
// in JS the + operator first converts the arrays to strings and then concatenate
// the strings 

// Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye";
console.log(str1);  // hello there, in JS strings are immutable

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);  // [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]
// in JS since arr1 and arr2 are dependent because they reference/pointer to the array
// object location in memory.  slice method performs a shallow copy

function isColorValid(color) {
  return (color === "blue" || color === "green");
}
console.log(isColorValid('blue'));

const isColorValid2 = color => color === "blue" || color === "green";
console.log(isColorValid2("green"));

// includes method
const isColorValid3 = color => ["blue", "green"].includes(color);
console.log(isColorValid3("black"));

// Question 6
// Examine the following code carefully. Can you identify all of the variables, 
// primitive values, and objects that exist when this code executes ?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// variables:
// arr, newArr, num, newNum, double, double function scope num (parameter)
// Objects
// arr, newArr, function doublen -> 3 pointers, 2 different objects
// Primitives
// arr values: 1, 2, 3, value of num (1), value of newNum (1), 2 inside function
// body, invoking double passing newNum (1), double parameter (1), double
// return value 1 * 2 = 2





