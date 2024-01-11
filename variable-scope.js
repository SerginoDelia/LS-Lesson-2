/** Variable Scope
 * 
 * A variable's scope is the part of the program that can access that variable
 * by name
 * 
 * in JS, we have 2 types of scope: global and local
 * 
 * The Global Scope
 * 
 * very small JS programs with no functions or blocks exist entirely within a
 * single scope called the global scope
 */

let name = 'Julian';
console.log(name);

/** running this code writes Julian to the console log
 * 
 * in Node.js a global variable is only available in the file/module you
 * declared it in.
 * 
 * if you want varibales to be available in another module, you'll have to
 * explicitly impoert and export them in modules
 * 
 * Local Scope
 * 
 * Local scope comes in 2 forms: function scope and block scope
 * 
 * Function Scope
 * 
 * functions define a new scope for local variables, think of the scope defined
 * by a function as an innner scope
 * 
 * nested functions define nested scope.
 * 
 * A variables scope is determined by where it is declared
 */

// Rule 1: Outer scope variables can be accessed by the innner scope

let a = 1;  // outer scope variable

function logA() {
  console.log(a); // => 1
  a += 1; // a is reassigned to a new value
}

logA();
console.log(a); // => 2 "a" was reassigned in the inner scope

// This code demonstrate 2 things
// 1. inner scope can access out scope variables
// 2. you can change variables from inner scope and have that change effect the
// outer scope

// This means that when we assign variables in inner scope, we have to be 
// careful that we are not accidentally reassigning an existing variable

// Rule 2: Inner scope variables cannot be accessed in outer scope

function aFunc() {
  let a = 1;
}

aFunc();
console.log(a); //  ReferenceError: a is not defined

// variable a is declared in an inner scope and cannot be accessed from the
// outer scope

/** The mere fact of defining a function doesn't create any variable, the 
 * function declaration does define the scope of the variables.  
 * 
 * the function varibale doesn't get created and assigned a value unless we
 * invoke the function
 */

function aFunc2() {
  let foo = 1;
}

// we never invoke aFunc2 and never create the foo variable

// Rule 3: peer scopes do not conflict

function funcA() {
  let a = "hello";
  console.log(a);
}

function funcB() {
  console.log(a); // ReferenceError: a is not defined
}

funcA();
funcB();

// Executing console.log(a) on line 92 throws an error since a is not in scope
// with funcB.
// a scope is confined to funcA, we could declare a seperate a variable in funcB
// if we wanted

// Rule 4: nested functions have their own variable scope

// nested functions follow the same rules of inner and outer scoped variables
// when dealing with nested functions, our usage of what's "outer" or "inner" is
// going to be relative.  we'll switch vocab to "first leve", "second level", 
// and "third level"

let a2 = 1;  // first level variable

function foo() {
  // second level
  let b = 2;

  function bar() {
    // third level
    let c = 3;
    console.log(a2);  // => 1
    console.log(b);   // => 2
    console.log(c);   // => 3
  }
  bar();

  console.log(a2);  // => 1
  console.log(b);   // => 2
  console.log(c);   // => ReferenceError
}

foo();

// In JS we can define a function inside a function, not true of all languages
// ex: forEach

function logElements(array) {
  array.forEach(function (element) {
    console.log(element);
  });
}

logElements([1, 2, 3]);

// Rule 5: inner scope variables can shadow outer scope variables

[1, 2, 3].forEach((number) => {
  console.log(number);
});

// here number is a parameter that represents a value that the callback function
// expects when it is invoked.  It represents each element as the forEach method
// iterates through the array.  Parameters are also local variables and the same
// scoping rules apply to them 

/** Suppose we had a variable named number in the outer scope, we know inner
 * scope has access to outer scope so we'd have 2 variables in the inner scope
 * with the same name, when that happens it's calle variable shadowing and it
 * prevents access to the outer scope variable, see example:
 */

let number = 10;

[1, 2, 3].forEach((number) => {
  console.log(number);
});

// console.log(number) will use the paramether number and ignore the outer 
// scoped variable.  Shadowing also prevents us from making changes to the 
// outer scoped number 

// Variable shadowing isn't limited to callback functions, whenever you have one
// scope within the other, variables in the inner scope will shadow variables
// in the outer scope having the same name

let a3 = 1;

function doit(a) {
  console.log(a); // => 3
}

doit(3);
console.log(a); // => 1

/** parameter a is shadowing the global variable a.  Most names -- variables
 * parameters, function names, or class names -- van shadow names from the outer
 * scope.  The only names that don't gert involved in the shadowing are property
 * names for objects
 * 
 * Avoid shadowing, if you run into issues you will have a much better chance of
 * debugging it if you have clear variable names.
 */

/** Block Scope
 * 
 * in JS blocks are segments of one or more statements or expressions grouped by
 * opening and closing curly braces ( {} ).  each of the braces in the contructs
 * if/else and the for and while loops define new block scopes.
 * 
 * the rules of block scope are identical to those for function scopes
 */

// 1. Outer blocks cannot access variables from inner scopes
// 2. Inner blocks can access variable from outer scopes
// 3. Variables defined in an inner block can shadow variables from outer scopes

// not all code inside the curly braces are a block, for example, the code 
// inside a function definition is not technically a block.  it's called a 
// function body, but they are very similar

// Examples:

if (true) {
  let a = "foo";
}

console.log(a); // ReferenceError

let a4 = "foo";

if (true) {
  console.log(a); // => 'foo'
}

function aFunc3() {
  let a = "foo";

  if (true) {
    let b = "bar";
    console.log(a); // => 'foo'

    if (true) {
      let c = "baz";
    }

    console.log(a); //  => 'foo'
    console.log(b); //  => 'bar'
    console.log(c); //  => ReferenceError
  }

  console.log(a); // => 'foo'
  console.log(b); // => ReferenceError
  console.log(c); // => ReferenceError
}

aFunc3();