// debug.js

// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter += 1;
// }

// to use node debugger:
// node inpect debug.js

/** You see a prompt like this
 * 
 * < Debugger listening on ws://127.0.0.1:9229/5c08d9ea-1d25-4fa8-8ddb-3ab96ea3ac5b
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in debug.js:3
  1 // debug.js
  2
> 3 let counter = 1;
  4
  5 while (counter <= 5) {
debug>

The debugger wili automatically pause program execution, usually at the first expression or
function call that is encounters

We can access values that are in scope by using exec command followed by the name of
the variable ex:

exec counter

if we try to access counter now it will be undefined because the variable has not been evaluated so,
the assignment did not take place yet

n or next - to cycle through expression or function call

c - unpause the programs execution and continue it to the end

run or restart - to start the execution again

CTRL + C 2 times or .exit to exit the debugger
 */

// Adding a debbger statement inside a while loop

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}

// Now if we use command c as before the debugger pause on execution at the debugger statement.
// now we can access variables using the exec command
// we can keep using c to pause through every loop of the while statement

// Advanced Debugging
// Node has a lot of ther helpful features

// Summary 
// Debugging is one of the most vital skill you must learn as a programmer
// Focus o=n developing patient, systematic temperament