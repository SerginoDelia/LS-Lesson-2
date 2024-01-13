// Exercises: Variables, Functions and Blocks

// Question 1
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);  // ['red', 'green', 'blue', 'yellow']

/** logs: ['red', 'green', 'blue', 'yellow'] because of mutation 
 * line 7 variable color is declared and initialized to the String yellow,
 * 
 * line 8 variable colors declared and intialized to Array 
 * ["red", "green", "blue"] 
 * 
 * When we invoke updateColors function on line 14 we are passing colors array 
 * for the argument.  colors parameter 'shadows' or blocks access to the colors
 * variable declared in the global scope on line 8
 * 
 * pass-by-reference
 * global variable colors and function-scoped variable colors reference/points
 * to the same array in memory.
 * 
 * on line 11 we are mutating the array with the push() method since both 
 * variables points to the same array*/

// Question 2
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let color2 = "yellow";
let colors2 = ["red", "green", "blue"];

function updateColors2(colors2, color2) {
  colors.push(color);
}

updateColors2(colors);
console.log(colors);  // ['red', 'green', 'blue', undefined]

/** logs Array ['red', 'green', 'blue', undefined]
 * 
 * line 38 variable color2 declared and initialized to the String 'yellow'
 * line 39 varibale colors2 declare and initialized to an Array
 * ['red', 'green', 'blue', undefined]
 * 
 * line 45 we invoke updateColors2 function passing variable colors2 as argument
 * for colors2.  colors2 function scope varibale 'shadows'/ block access to 
 * global scope variale colors2 both points to the same array
 * 
 * function scope color2 'shadow'/block access the global scope variable color2
 *  value is undefined because we did not pass a value
 * 
 * we are mutating the function on line 42 with the push() method and pushing 
 * in the array undefined
 * 
 * line 46 logs ['red', 'green', 'blue', undefined]
 */


// Question 3
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let color1 = "purple";
let color3 = "pink";
let colors3 = ["red", "green", "blue"];

function updateColors3(colors, color) {
  colors.push(color);
}

updateColors3(colors3, color1);
updateColors3(colors3, color3);
console.log(colors);  // ['red', 'green', 'blue', 'purple', 'pink']

/** logs: ['red', 'green', 'blue', 'purple', 'pink']
 * line 72 variable color1 declared and initialized to the String 'purple'
 * line 73 variable color3 declared and initialized to the String 'pink'
 * 
 * line 74 colors3 declard and initialized to an Array ["red", "green", "blue"]
 * 
 * line 80 we invoke updateColors3 functions passing colors3 global variable and
 * color1 global variable for the arguments
 * 
 * function scope colors3 'shadow'/block access to global variable colors3
 * function scope colors3 points/references the same Array as gobal variable
 * colors3 (object)
 * function scope color1 'shadow'/block aceess to global variable color1
 * function scope color1 is assigned the same value as global variable color1
 * but they are independent of each other varibales points to different location
 * in memory (primitive)
 * 
 * line 77 mutates the array by using the push() method and pushing in the value
 * of color1 function-scoped varibale
 * 
 * line 81 invoke updateColors3 function except we're passing color3 and the
 * second argument same process occurs
 * 
 * now we're pushing the value of function scope variable color3 'pink' using 
 * the push method
 * 
 * line 982 logs: ['red', 'green', 'blue', 'purple', 'pink']
 */

// Question 4
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let colorOne = "purple";
let colorTwo = "pink";
let colors4 = ["red", "green", "blue"];

function updateColors4(colors, color) {
  colors.push(color);
  return colors;
}
let newColors = updateColors4(colors4, colorOne);
updateColors(newColors, colorTwo);
console.log(colors4); // ['red', 'green', 'blue', 'purple', 'pink']

/** Logs: ['red', 'green', 'blue', 'purple', 'pink']
 *
 * similar to question 3.  The difference is that we return the value of colors
 * parameter when we invoke the function, also declare and assign another
 * global variable newColors to that return value.  Same principles as before
 *
 * we updateColors4 first invoked, we pass the global colors4 varibale, colors4
 * references an array, which at this point has a value of
 * ["red", "green", "blue"];
 *
 * we also pass in colorOne which has a value of 'purple', when we invoke the
 * function on line 125 the color parameter is initialized to 'purple' and
 * appended to the array referenced by both colors4 parameter and global colors4
 * variable has a value of ["red", "green", "blue", "purple"];
 *
 * we declare and initalized the variable newColors to the return value of the
 * function
 *
 * newColors point/refrence to the array to the array
 *
 * on line 126 updateColors4 function invoke again passing in newColors as the
 * first argument both references the same array and colorTwo for the second
 * the function appends 'pink' to the array
 */

// Question 5
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let color5 = "purple";
let colors5 = ["red", "green", "blue"];

function AddColor(colors5, color5) {
  colors5.push(color5);
  return colors5;
}

function removeColor(colors5) {
  color5 = colors5.pop();
  return colors5;
}

let newColors5 = removeColor(colors5);
AddColor(colors5, color5);
console.log(newColors); // ['red', 'green', 'blue']

/** Logs: ['red', 'green', 'blue']
 * 
 * line 158 variable color5 declared and initialized to String "purple"
 * line 159 variable colors5 declared and initialized to Array 
 * ["red", "green", "blue"]
 * 
 * line 171 variable newColors5 declared and initialized to the return value of
 * invoking removeColor function passing colors5 as the argument
 * 
 * colors5 argument initialized and reference the same array as colors5 global
 * variable
 * 
 * we mutate the array by removing the last element using the pop() which is
 * destructive and reassigning the value of color5 to 'blue' 
 * colors5 global and function scope point to the mutated array ['red', 'green']
 * 
 * line 172 we invoke addColor function passing color5 array and color5 as 
 * parameter
 * 
 * parameter colors5 points to/references the same array as global variable 
 * colors5
 * parameter color5 initilized to the updated value of color5 after invoking the
 * removeColor function on line 171
 * 
 * line 173 logs: ['red', 'green', 'blue']
 */

// Question 6
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);            // 'hello!!!'
console.log(capitalizedWord); // 'Hello'
console.log(exclaimedWord);   // 'hello!!!'
console.log(word);

/** logs: "hello!!!", "Hello", hello!!!
 * primitives --> pass-by-value
 * 
 * line 206 declared function capitalize 
 * 
 * line 207 returns the result of taking the 1st letter of a variable word 
 * string string value and calling the toUpperCase method it and concatenating
 * it with the string minus the first letter of the string
 * 
 * line 210 declared function exclaim returns variable word concatenated with
 * the string "!!!"
 * 
 * line 214 variable word declared and initialized to the String 'hello'
 * 
 * line 215 variable capitalizedWord declared and intialized the return value
 * of capitalize and passing word as argument we don't use the argument we are
 * using the global variable word.  -> 'Hello'
 * 
 * line 216 variable exclaimedWord declared and initialized to the return value
 * of the function exclaim passing capitalizedWord as an argument
 * but exclaim doesn't take an argument and uses the global variable word
 * and add (concat) "!!!" to variable word "hello" 
 * 
 * exclaim reassigns the value of word to hello!!!
 * 
 * logs: "hello", "Hello", hello!!!
 * 
 * 
 * Explaination
 * 
 * We have 2 functions capitalize and exclaim, neither functions define any
 * parameters, but both return a value
 * line 214 we declare and initialize the global variable word to the string
 * 'hello'
 * line 215 we declare and initialize the global variable capitalizedWord to the
 * return value of invoking capitalize.  within the function body this happens
 * 
 * we reference the first letter of word, which is 'h' using bracket notation
 * and call the String method toUpperCase on it, this retruns 'H'
 * We call the String method slice on word, passing the index of 1 as an 
 * argument this returns the new string 'ello'
 * We concatenate these two strings using the + operator to form the new string
 * 'Hello
 * We then return this string 'Hello' and so capitalizedWord is assigned to this 
 * value
 * 
 * We passed in word as an argument to the function invocation, we don't use 
 * that argument within the function.  the word referenced is the global 
 * variable word.  we do nothing to change word since it is a primitive
 * 
 * line 216 we invoke exclaim function passing capitalizedWord variable
 * we don't use the argument within the function.
 * within the function word reference the global variable word that was declared
 * on line 214
 * We reassign the word variable to a value of its initial value or word 'hello'
 * concatenated using the + operator with the string '!!!' to produce a new 
 * string 'hello!!!' as well as reassigning word to this new string we also
 * return it, assigning exclaim to its value
 * 
 * after function invocation word and exclaimedWord has a value of 'hello!!!'
 * and capitlizedWord has a value of 'Hello'
 */

// Question 7
// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

function capitalize2(word2) {
  return word2[0].toUpperCase() + word2.slice(1);
}

function exclaim2(word2) {
  return (word2 += "!!!");
}

let word2 = "hello";
let capitalizedWord2 = capitalize2(word2);
let exclaimedWord2 = exclaim2(capitalizeWord2);

console.log(word2);             // 'hello'
console.log(capitalizedWord2);  // 'Hello'
console.log(exclaimedWord2);    // 'Hello!!!'

/** Logs: 'hello' 'Hello', 'Hello'
 * primitive values -> pass-by-value
 * 
 * line 290 declare capitalized2 function with 1 parameter word2
 * line 294 we declare exclaim function with 1 parameter word2
 * 
 * the parameter word2 'shadows' and block access to the gloabl variable word2
 * 
 * line 298 we decleare and intialize global variable word2 to the sString 
 * 'hello'
 * 
 * line 299 we declare and initialized global variable capitalizedWord2 to the 
 * return value of the function capitalize2 passing word2 as the value for the
 * argument 'hello'.  global variable word2 and function scope vairable word2 
 * are 2 different and independent variables
 * 
 * capitalized2 body: takes the first letter of 'hello' -> 'h' and calls the 
 * toUpperCase() method on it turning it to 'H' then we concatenate with the 
 * word2 variable ('hello') and using the slice method and passing 1 as the
 * argument to remove index 0 to 1 -> 'ello' when 'H' concatenate using the + 
 * operator 'ello' returns 'Hello'
 * 
 * line 300 we declared and initialized exclaimedWord2 to the return value of
 * calling exclaim2 function and passing capitalizedWord2 as an argument
 * argument word2 get assigned the value of capitalizedWord2 --> 'Hello"
 * 
 * capitalizedWord2 global variable and word2 function scope variable are 
 * independent of each other
 * 
 * we concatenate the value of the argument word2 string 'Hello' using the + 
 * operator with the string '!!!' resulting in 'Hello!!!' and assigning 
 * 'Hello!!!' to exclaimedWord2
 * 
 * line 302 logs: 'hello'
 * line 303 logs: 'Hello'
 * line 304 logs: 'Hello!!!'
 */