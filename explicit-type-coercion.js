/** Explicit Type Coercion
 * 
 * 2 Types of Coercion in JavaScript
 * 
 * 1. Explicit Type Coercion
 * 2. Implicit Type Coercion
 * 
 * Explicit Type Coercion
 * 
 * intentionally using one of JS built-in functions and operators to coerce one
 * type of value to another.  Ex. calculator program turning a string to a
 * number conversion.
 * 
 * user inputs typically come into our programs as strings
 * 
 * Coercing values to numbers
 */

let one = Number('1');
console.log(one); // 1

typeof one; // "number"

Number("cat");  // NaN

// NaN is of type "number" but isn't a meaningful number.  A number that
// cannot be represented

// What happens if we try to conver an empty string?

Number(''); // 0

// Number() converts empty string and strings with only whitespace to 0

Number({});             // NaN
Number([]);             // 0
Number([4]);            // 4
Number([undefined]);    // 0
Number([1, 2, 3]);      // NaN
Number(undefined)       // NaN
Number(null)            // 0

// Converting boolean into number

Number(true);   // 1
Number(false);  // 0

/** parseInt and parseFloat
 * 
 * both parseInt and parseFloat coerce strings to numbers: parseInt converts
 * strings to integers, while parseFloat coerces strings to floating point 
 * numbers, both expect a string argument.  if its a different type they will
 * attempt to coerce it to string first then coerce to number
 */

parseInt('12');     // 12
parseInt('12.52');  // 12
parseInt('12oz');   // 12
parseInt('+12oz');  // 12
Number('12oz');     // NaN

// parseInt differs from Number in that it accepts a second argument called the
// radix.  It specifies the base of the number contained in the string
// ex: 10101 in the binary number system (base-2) represents the number 21 in 
// decimal base 10

parseInt('10101', 2);   // 21

// parseInt supports radices from 2 to 36

// parseFloat function like parseInt coerces strings to numbers, but works with
// floating point numbers, like parseInt parseFloat parses the numberic part of
// the string and stops once it finds a character that can't be part of a number

parseFloat('12 grams');   // 12
parseFloat('12.2 grams'); // 12.2

// Unlike parseInt parseFloat doesn't accept a radix argument

/** Coercing to Numbers using the + operator
 * 
 * Most operators in JS work with 2 values called binary operators, JS also
 * supply a ternary operator that works with 3 values and also an operator that
 * works with a single value such as the ! logical operator, which is called the
 * unary operators, some operators such as + and - do double duty, they can
 * either apply to 2 values or one.
 * 
 * 5 - 3 is binary operator that subtraces 3 from 5, but the expression -4
 * uses a unary - operator to obtain the negative of the number 4
 * 
 * the unary + operator attempts to coerce value to number, like the Number fn
 */

+"";      // 0
+'1';     // 1
+'2.3';   // 2.3
+[];      // 0
+'abc'    // NaN

// the unary + operator is concise and easy to use, but first, it lack clarity
// Number makes the intent clear and leaves no room for ambiguity that can
// sometimes arise with unary operators

/** Coercing values to strings
 * 
 * there are several ways to perform this type of coercion
 * 
 * The toString method
 * 
 * you can use the toString method on all JS data types except null and 
 * undefined
 */

let number = 42;
number.toString();    // '42'

// Since JS doesn't let you call a method directy on a number literal, we assign
// 42 to a variable before we call toString().  The reason is that JS interprets
// the . as a floating point number

// 42.toString();    // SyntaxError: Invalid or unexpected token

(42).toString();    // '42'
42..toString();     // '42'

// When used on booleans, toString returns either the string 'true' or 'false'
// depending on the value

true.toString();    // 'true'
false.toString();   // 'false'

// Array.prototype.toString converts every element of an array to a string, then
// concatenates them all with a , between each string

[1, 2, 3].toString();   // '1,2,3'

// Note the Array.prototype.toString treats null and undefined elements as
// empty values

[1, null, 2, undefined, 3].toString();    //'1,,2,,3'

// the default implementation of toString on objects is much less useful than
// the one on arrays:

let obj = { a: 'foo', b: 'bar' };
obj.toString();     // '[Object Object]'

// by default Object.prototype.toString returns '[Object, Object]'

// One limitiation of toString is that you can't use it on undefined and null
// since it is illegal to call a method on either of these types

/** The String function
 * 
 * Another way to coerce values to string is by using the String function
 * it works the same way as to string
 */

String(42);                       // 42
String([1, 2, 3]);                // '1,2,3'
String({ a: 'foo', b: 'bar' });   // '[Object Object]'

// one advantage String has over toString is that it works on null and undefined

String(null);       // 'null'
String(undefined);  // 'undefined'

// This behavior is useful since toString can lead to a program halting if the 
// value turnes out to be undefined or null

/** Template Literals
 * 
 * inside template literals, JS coerces interpolation expressions like
 * ${something} to string values.  Don't write 
 * ${something.toString()} or ${String(something)}
 */