// Question 1 
// For this practice problem, write a program that outputs The Flintstones Rock! 
// 10 times, with each line indented 1 space to the right of the line above it.

// create empty string and concat with String



function indentAndPrint10Timnes(string) {
  for (let i = 0; i < 10; i += 1) {
    let space = " ";
    console.log(space.repeat(i) + string);
  }
}

let flintstones = "The Flintstones Rock!";
indentAndPrint10Timnes(flintstones);

// Question 2
// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

function swapCase(string) {
  string = string.split("").map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("");
  return string;
}

console.log(swapCase(munstersDescription));

// Question 3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

// Bonus: What is the purpose of number % divisor === 0 in that code?
// if the number divided by divorsor and the remainder is 0 then the divisor is
// a factor because there is no remiander 

//  it determines whether the result of the division is an integer -- if the number has no remainder
// the result is an SVGAnimatedInteger, so the number divided by the divisor is a factor 

// Question 4
// Alyssa was asked to write an implementation of a rolling buffer. You can add and 
// remove elements from a rolling buffer.However, once the buffer becomes full, 
// any new elements will displace the oldest elements in the buffer.

// "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she 
// used to add an element to the buffer ? You may assume that newElement will always be a primitive value.

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// push method mutates the original array
// concat doesn't mutate the original array, so cacat is preferable

// Question 5
// What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.8999999999999999
console.log(0.3 + 0.9 === 0.9); //false

// Question 6
// What do you think the following code will output?

let nanArray = [NaN];
console.log(nanArray === NaN); // false

// How can you reliably test if a value is NaN? use Number.isNaN method

console.log(Number.isNaN(nanArray[0])); // true

// Question 7
// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return someNumber += 8;
}

let newAnswer = messWithIt(answer);
console.log(answer - 8); // 34

// Question 8
// One day, Spot was playing with the Munster family's home computer, and he
//  wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the
//  family's data get ransacked? Why or why not? 
// yes because both the munsters and demoObject references/poin to the same object
// mutatiuon

console.log(munsters);

// Question 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What does the following code output?

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // paper
// rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
// rps(rps(rps("rock", "paper"), "rock"), "rock")
// rps(rps("paper", "rock"), "rock")
// rps("paper", "rock")
// rps("paper", "rock") // paper
// returns paper

// Question 10
// Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
bar(foo()); // no

// invoking foo() returns "yes"
// invoking bar("foo") returns "no"
// because the logic in bar is if param === "no" return yes. otherwise return no
// param is not == to no