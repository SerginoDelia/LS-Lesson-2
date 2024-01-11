// Variable Scope Exercises

// Question 1
// What will the following code log to the console and why ?
// Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num); // => 10

// variable num variable declared and initialized to 5, when myFunc is invoked/call
// num is reassigned to 10

// Question 2
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num2 = 5;

function myFunc2() {
  console.log(num2);
  num2 = 10;
}

myFunc2();
console.log(num2); // => 10

// variable num2 declare and initialied to 5, when we invoke myFunc2 it logs 5 and 
// num is reassigned to 10 console.log(num) => 10

// Question 3
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num3 = 5;

function myFunc3() {
  let num3 = 10;
}

myFunc3();
console.log(num3);  // => 5

// this logs 5
// variable num3 declare and initialized to 5, when we call myFunc3 we declare,
// another variable with inner scope called num3 and initialized to 10, num3 in
// the inner myFunc3 scope is shadowing the global num3

// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num4 = 5;

function myFunc4() {
  console.log(num4);
  let num4 = 10;
}

myFunc4();
console.log(num4);

// ReferenceError, the let declaration on line 62 creates a new num4 variable
// within the scope of the body of the myFunc4 function.  console.log on line 61 
// is attempting to log that num variable, not the global num4

// ReferenceError: Cannot access 'num' before initialization

// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num5 = 5;

function myFunc5(num5) {
  num5 = 10;
}

myFunc5();
console.log(num5); // => 5

// logs 5
// variable num5 is declared and initialized to 5
// invoking/calling myFunc5 creates a new variable num5 because of the parameter

// Question 6
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num6 = 1;

while (num6 < 3) {
  num6 += 1;
}

console.log(num6);  // 3

// variable num6 is declared and intialized to 6, the while loop add 1 to num6
// until num6 is not less than 3 and returns the last number which is 3

// Question 7
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let num7 = 1;

while (num7 < 3) {
  let num7 = 5;
  num7 += 1;
}

console.log(num); // => infinite loop

// variable num7 declare and initialized to 1 is the condition for ending 
// the while loop on line 113 another variable num7 declared and initialized
// it is the inner scope num7 that gets incremented every by one, which causes
// an infinite loop because the value for global num7 is 1 and doesn't get 
// incremented

