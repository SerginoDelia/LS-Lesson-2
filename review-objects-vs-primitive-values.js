/** Review: Objects vs Primitive Values
 * 
 * primitive types:
 * strings, numbers, booleans, null, undefined, bigints, and symbols
 * 
 * Objects include:
 * simple objects, Arrays, Dates, and Functions
 * 
 * Objects are usually (but not always) Mutable: you can add, remove and change
 * their varius component values
 * 
 * primitives arre always immutable
 * if a variable contains a primitive all you can do is use it in an expression
 * or reassign it
 * 
 * all operation on primitives evaluates to an entirely new value
 * ex. 0 + 0 evaluates to a new value of 0
 * 
 * Functions are objects.
 * 
 * this feature les us define methods as object methods
 * ex
 */

Array.prototype.push = function (newValue) {
  this[this.length] = newValue;
}

let array = [1, 2, 3];
array.push(4);

/** This feature let's us pass functions around as agruments and return values
 * ex.
 */

Array.prototype.forEach = function (callback) {
  for (let index = 0; index < this.length; index += 1) {
    callback(this[index]);
  }
}

let array2 = [1, 2, 3];
array2.forEach(function callback(value) {
  console.log(value);
});

/** What things are not Objects or Primitives
 * 
 * variables and other identifiers such as function names
 * statements such as if, return, try, while, and break
 * keywords such as new, function, let const, and class
 * comments
 * anything else that is neither data nor a function
 */

/** 1.  Every JS value is either a primitive or an object
 * 2. Primitives are atomic values
 * 3. Objects are "compound" values made up of primitives or other objects
 * 4. Primitive values are immutable, you can't change or remove value from
 * a primitive value
 * 5. Objects are mutatble, certain operations on object can change the object
 * in place, all variables that have a reference to that object will see that
 * change
 * 
 * Understanding the difference between objects and primitives is essential to
 * understanding JS
 * 
 * it is crucial for the understanding the concpets of variables as pointer
 * "pass-by-reference" vs "pass-by-value"
 */


/** Ever Value in JS is either a primitive or an object
 * 
 * when working with these concepts, the first question to as is always:
 * "is this a primitive or is it an object?"
 * 
 * Primitves are atomic values
 * 
 * primitives are not made up of other values and cannot be broken down in any
 * way
 */

// consider

let a = 1;
let b = 'Hello';
let c = null;
let d = undefined;

// We have 4 variables, each is assigned a value, those values are all 
// primitives. We know that number of variables is equal to the number of values


/** Objects are "compound" values 
 * Object are made up of other values 
 */

// consider:

let a2 = [1, 'Hello', null, undefined];

// Here we only have 1 variable, but it is assigned to an array of which is an
// object.  the array is made up of other values, in this case primitives
// even though we only have a single variable, wtithin the code as a whole we
// are dealing with multiple values 


// Primitives values are immutable

//  it may seem like we can break down or change certain primitive values, but
// this is not the case

let word = 'hello';
let newWord = word.replace('h', 'j');

console.log(newWord); //  'jello'

// it may look like we've changed the string 'hello' to 'jello', the key thing
// to understand is that replace returns a new String, it doesn't mutate the 
// existing string.  if we log word, we would still get the initial value

console.log(word);  // 'hello'

// this is true with any operation on a primitive value, if an operation used on
// a priomitive value seems to change instanceof, always remember that you are
// dealing with a new value

// Objects are mutable
// Objects, on the other hand are mutable, meaning we can change them in place

let a4 = [1, 'Hello', true];
a[0] = 2;
a[1] = 'Goodbye';
a[2] = false;

console.log(a); // [2, 'Goodbye', false]

// We changed all the elements of the array, but it is still the same array
// even though it is made of completely different values than when it was
// initialized

