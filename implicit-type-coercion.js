/** Implicit Type Coercion
 * 
 * Implicit type coercion happens when you perform an operation involving
 * values of 2 different types and JS coerces the values to have the same types
 * the types varies based on the specific combination of types involved in the 
 * original expression
 * 
 * How different values get coerced depends on the operation, the most common
 * operations are == and +
 * 
 * Implicit Coercion with the == Operator
 * 
 * the non-strict equality operator ==, works similarly to the strict equality
 * operator ===, when operands have the same type.  Their behavior is very
 * different when the values have different types
 * 
 * the most common cases occurs when comparing a string with a number 
 */

'1' === 1   // false -> strict equality
'1' == 1    // true -> non-strict equality

// the strict equality operator compares the 2 values differently.  It returns 
// false since the values are different types, so they're not identical values.

// The non-strict equality operator coerces the string '1' into a number and
// then comparesit with the 1 on the right hand-side

1 == '1'  // true

// such behavior should be unexpected since string and number should never be
// equal to each other.  Use === exclusively

// string and numbers aren't the only types that the == operator coeces

1 == true   // true
3 == true   // false
0 == false  // true

// if we used === all 3 expressions would be false
// wehn comparing a boolean with any value == coerces true and false to their
// number equivalents which are 1 and 0

'1' == true;  // true

// the boolean true is coerced into 1 the comparison becomes '1' == 1
// the expression evaluates as true since the string '1' get coerced to 1

// another situation occurs when comaparing undefined and null
// the == considers them equal

undefined == null;  // true

// once can argue that this behavior is useful since we sometimes want to test a
// value is either null or undefined 

let val = getAValueFromSomewhere();

if (val === undefined || val === null) {
  // do one thing
} else {
  // do another thing
}

// can be shortened to the following, without any effects on its behavior

let val = getAValueFromSomewhere();

if (val == undefined) {
  // do one thing
} else {
  // do another thing
}

// however the first version is superior because it is more explicit and clear

// how the == behaves when the operands are objects (including arrays), when
// both operands are objects == behaves exactly like the === operator

let arr = [];
arr == [];      // false
arr == arr;     // true

// but when one of the operands is an object and the other is a primitive
// == coerces the object into a primitive before making the comparison

'' == {}                  // false
'[Object Object]' == {};  // true
[] == '';                 // true

// the plain object {} above is coerced into the string '[Object Object]' that's
// why the comparison with '[Object Object]' evaluates as true
// an empty array is coerced into an empty string

[] == 0;    // true

// the array is coerced into the string '', and then compared with 0 again
// '' == 0, then the empty string is coerced to the number 0 resulting in 0 == 0

/** Things to remember
 * 
 * 1. when a number is compared witha string using ==, the string is coerced 
 * into a number
 * 
 * 2. when a boolean is compared with any other value, it is coerced into a
 * number and compared again using the == operator
 * 
 * 3. When an object is compared with a primitive value, the object is coerced
 * into a primitive value and compared again using the == operator
 * 
 * 4. A == comparison of undefined with null evaluates as true
 */

/** Implicit Coercion with the Binary + Operator
 * 
 * + operator can coerce strings to numbers, some people regard it as explicit
 * type coercion
 */

'number ' + 1;    // 'number 1'

// the number 1 is coerced into the string '1' and then concatenated with the 
// string 'numbe '

'' + [1, 2, 3];   // '1,2,3'
'' + true;        // 'true
'' + undefined    // 'undefined'
'' + {};          // '[Object Object]'

// When both operands are a combination of numbers, booleans, null or undefined
// they are converted to numbers and added together

1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN

// When one of the operands is an object, both operands are converted to strings
// and concactenated together

[1] + 2;        // "12"
[1] + '2';      // "12"
[1, 2] + 3;     // "1,23"
[] + 5;         // "5"
[] + true;      // "true"
42 + {};        // "42[object Object]"

// Relational Operators
// < > <= >= are defined for numbers (numeric comparisons) and strings
// (lexicographic order)

1 < 2       // true
'b' > 'a'   // true

// There are no strict version on these operators, when both operands are 
// strings JS compares them lexicographically

// otherwise JS converts both operands to numbers before comparing them

11 > '9'                // true --> '9' is coerced to 9
'11' > 9                // true --> '11' is coerced to 11
123 > 'a'               // false --> 'a' is coerced to NaN; any comaprison with 
// NaN is false
123 <= 'a'              // also false
true > null             // true --> becomes 1 > 0
true > false            // true --> also becomes 1 > 0
null <= false           // true --> becomes 0 <= 0
undefined >= 1          // false --> becomes NaN >= 1

/** Best Practices
 * 
 * Always use explicit type coercions
 * 
 * Always use strict equality and inequality operators (=== and !==)
 * 
 * Don't use String() or toString inside ${...} expressins in template literals
 * Feel free to use the unary + to convert string to numbers
 */