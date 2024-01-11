/** Variables, Functions and Blocks
 * 
 * Understanding how varibales work together with functions and blocks is a 
 * key part of reading and writing JS code
 * 
 * Example 1
 */

let myVar = 1;

function muyFunc() {
  myVar = 2;
}

muyFunc();
console.log(myVar); // 2

// Example 2
let myVar2 = [1];

function myFunc2() {
  myVar = [2];
}

myFunc2();
console.log(myVar2); // [2]

// Example 3
let myVar3 = [1];

function myFunc3() {
  myVar[0] = 2;
}

myFunc3();
console.log(myVar3);  // [2]

// Example 4 
let myVar4 = 1;

function myFunc4(myVar4) {
  myVar4 = 2;
}

myFunc4();
console.log(myVar4);  // 1

// Example 5
let myVar5 = [1];

function myFunc5(myVar5) {
  myVar5 = [2];
}

myFunc2();
console.log(myVar5);  // [1]

// Example 6
let myVar6 = [1];

function myFunc6(myVar6) {
  myVar6[0] = 2;
}

myFunc6();  // TypeError: Cannot set properties of undefined (setting '0)
console.log(myVar6);

// Example 7
let myVar7 = 1;
function myFunc7(myVar7) {
  myVar7 = 2;
}

myFunc7(myVar7);
console.log(myVar); // 1

// Example 8 
let myVar8 = [1];

function myFunc8(myVar) {
  myVar8 = [2];
}

myFunc8(myVar8);
console.log(myVar8);  // [1]

// Example 9
let myVar9 = [1];

function myFunc9(myVar9) {
  myVar9[0] = 2;
}

myFunc9(myVar9);
console.log(myVar9);  // [2]

// the differences in outcome requires a clear understanding of a number of 
// different concepts and how they work in combination with each other
// these conceprts are:

// Varaible Scope
// Mutability
// Variable as Pointers
// Passing Function Arguments