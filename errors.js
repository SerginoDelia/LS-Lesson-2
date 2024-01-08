// Errors

// Terminoly
// Exceptions and Errors in JavaScript are synonomous

// ReferenceError 
// occurs when you attempt to use a variable or function that doesn't exist

a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.

/** TypeError
 * 
 * Occurs a vriety of different ways, most common are
 * 
 * Accessing a property on a value that does not have any properties, such as
 * null or undefined
 * trying to call something that isn't a function can also raise a TypeError
 * trying to reassign a const variable:
 */

let a;        // a is declared but is empty, as it has not been set to a value.
typeof (a);   // => "undefined"

a.name;       // TypeError: Cannot read property 'name' of undefined
a = 1;
a();          // TypeError: Property 'a' is not a function
const b = 42;
b = 3.14      // TypeError: Assignment to constant variable.

// SyntaxError
// it always occur immediately after loading a JS program, but before it begins
// to run.  JS detects SyntaxError solely based from the text of the program

function ({ } // SyntaxError: Unexpected token (

// There are several cases where JS can throw a SyntaxError while a program is 
// running.

// The code below raises a SyntaxError at runtime
  
JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0

// There are a few that occur in a JS program including:

// RangeError
// URIError
// among others thend to be rarer.
