// Catching Errors

// Its not possible to prevent all errors, some JS built-in functions can throw exceptions
// but there is not way to predict and avoid those errors.

// ex: JSON.parse method takes a single string argument that contains some JSON format
// and converts it to an object.  If you pass a String to JSON.parse that isn't
// valid JSON value all JSON.parse can do is throw an exception

let dat = 'not valid JSON';
JSON.parse(data); // throws SyntaxError: Unexpected token i in JSON at position 0

// JSON strings loo a lot like JS object literals, the main difference are that
// we double quote the keys, and the literal value appears inside a string

let object = { "name": "Ferdinand", "age": 13 };
let json = '{ "name": "Ferdinand", "age": 13 } ';

/* The only way to prevent errors in JSON.parse is to parse the input string
That is we need to build a method that can parse JSON Strings

Instead of trying to avaoid errors, we can jst let JSON.parse throw a SyntaxError
and catch it with a: try/catch/finally block
that is syntactically similar to if /else blocks:
*/

try {
  // Do something that might fail her and throw an exception.
} catch (error) {
  // This code only runs if something in the try clause throws an exception.
  // "error" cantains the exception object
} finally {
  // This code always runs if the above code throws an exception.
}

// The finally clause is optional; you can omit it if you don't need it,
// Just as you can omit the else clause in an an if statement.

// let's use try/catch/finally to handle JSON.parse errors:

function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an exception if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an exception
    // "e" contains an Error object that we can inspect and use
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs wheter `JSON.parse` succeed or fails
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);  // Logs "There was a SyntaxError parsing JSON data:
// Unexpected token i in JSON at position 0"
// Logs "Finished parsing data."
// Returns null

/** When to Use Try/Catch
 * only use try/catch/finally when the conditions are both true:
 * 
 * 1. a built-in JS function or method can throw an exception and you need to
 * handle or prevent that exception.
 * 
 * 2. A simple guard clause is impossible or impractical to preven the exception
 */