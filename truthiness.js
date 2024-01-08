console.log(true);  // true
console.log(false); // false

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

makeLonger("abc", true);  // 'abcabc'
makeLonger("xyz", false); // 'xyz'

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false
  }
}

isDigit("5"); // true
isDigit("a"); // false

let value = true;

if (value === true) {
  console.log("It's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false");
}

// Expression and Conditionals
// We don't use the true or false values directly in conditional expressions like value === true,
// instead, you merely evaluate an expression that evaluates to true or false

let num = 5;

if (num < 10) {
  // same as `if ((num < 10) === true)`
  console.log("small number");
} else {
  console.log("large number");
}

// functions doesn't usually return true or false explicitly.  instead it returns the result of a conditonal expression

function isSmall(number) {
  return number < 10;
}

let num2 = 15

if (isSmall(num2)) {
  console.log("small number");
} else {
  console.log("large number");
}

// Logical Operators
// the && Operator

true && true    // true
true && false   // false
false && true   // false
false && false  // false

let num3 = 5;
num3 < 10 && num3 > 5     // true
num3 < 10 && num3 > 6     // false
num3 > 10 && num3 < 6     // false
num3 > 10 && num3 < 3     // false

// JS > has a higher precedence that &&

// chaining sub-expressions

num = 5;

(num < 10) && (num > 0) && ((num % 2) === 1);     //true

(num < 10) && (num > 0) && ((num % 2) === 1) && false;  // false

// The || Operator

true || true      // true
true || false     // true
false || true     // true
false || false    // false

num = 5;
num < 10 || num > 5   // true
num < 10 || num > 6   // true
num > 10 || num < 6   // true
num > 10 || num < 3   // false

// Short-Circuit Operators
// both && and || exhibit short-circuiting, with && JS realize the entire expression can't be true, when it encounters a false expression
// || when JS realize the expression can't be false

false && undefined.length   // false
// since the left side is false the right side never executes

true && undefined.length    // TypeError: Cannot read property 'length' of undefined

true || undefined.length    // true

// relying on shot-circuit can be dangerous, but sometimes it is useful. checking to make sure a string is not null

if (name && name.length > 0) {
  console.log(`Hi, ${name}`);
} else {
  console.log("Hello, whoever you are");
}

// JS evaluates almost all boolean values as true, except

false
undefined
null
0
"" // (an empty string)
NaN

// Memorize them all evaluates to false

// truthiness means that you can use any conditional or logical expression:

num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error");
}

console.log(num === true);   // false

// The use of truthy and falsy values sometimes lead to some surprising code:

// the style below is discouraged because it can lead to confusion
let name;
if ((name = getNameFromUser())) {
  console.log(`Hi, ${name}`);
} else {
  console.log("you must enter your name");
}

// Better to make it clear I'm testing for an empty name

let name2 = getNameFromUser();
if (name2 === "") {
  console.log("you must enter your name");
} else {
  console.log(`Hi, ${name2}`);
}


