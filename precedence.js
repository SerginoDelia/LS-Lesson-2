/** Precedence
 * 
 * The meaning of an expression in JavaScript is determined by what is called
 * operator precedence
 * 
 * For most operators, there are 2 operands; but ther are also "unary" and
 * "ternary" operators that take one or three operands:
 */

2 + 5           // Two operands (2 and 5)
!true           // Unary: One operand (true)
value ? 1 : 2   // Ternary: There operands (value, 1, 2)

// Each operand can be the result of evaluating some other operator and its
// operands.  consideer:

3 + 5 * 7

/** We have 2 operators (+ and *), each take 2 numbers as operands, but there 
 * are 3 numbers.
 * 
 * The answer lies in how oprator precedence works
 * 
 * In an expression, operators with higher precedence are prioritzed over those
 * with lower precedence
 * 
 * Parenthesis overide the default evaluation order and have the highest possible
 * precedence
 * 
 * When 2 operations involve operators of the same precedence, the operation 
 * occur left to right
 * 
 * Don't rely too much on precedence, its easy to forget precedence or get
 * confused by an unexpected result.  If you're using 2 or more different
 * operators in an expression, use parenthesis to explicitly define the meaning
 * even relying on left-to-right evaluation is subject to problems
 * 
 * An operator that has a higher precedence than another is said to bind more
 * tightly to its operands.  In the expression 3 + 5 * 7, the * operator binds
 * more tightly to its operands 5 and 7 than does the + operator
 */


/** Evaluation Order
 * 
 * from time to time you may hear or read somebody saying that precedence 
 * determines the order in which expressions get evaluated.  The process is more
 * complecated than just determining what gets evaluated first, though.
 * precedence is JS is only part of the story: the other parts are either
 * left-to-right evaluation, right-to-left evaluation, short-circuiting, and
 * ternary expressions
 * 
 * Conside this code and the output it displays:
 */

function value(n) {
  console.log(n);
  return n;
}

console.log(value(3) + value(5) * value(7));
// 3
// 5
// 7
// 38

//  you can only get that result if value(5) * value(7) gets evaluated before
// value(3) + value(5) which is it?

/** Its a little bit of both, the issue here operators like + and * need values
 * they can work with.  Function invocations/calls like value(5) and value(7)
 * are not values.  We can't invoke the * operator until we know the values from
 * those functions
 * 
 * Right-to-left evaluation occurs when you do multiple assignments or multiple
 * ** operators:
 */

a = b = c = 3
5 ** 3 ** 2    // 1953125 (same as 5 ** (3 ** 2) = 5 ** 9 = 
// 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5)

// neither of these are good practice in JS

/** Ternary Operation ( ?: ) and the short-circuit operators && and || are a 
 * common source of unexpected behavior where precedence is concerned
 * consider the following expressions:
 */

3 ? 1 / 0 : 1 + 2  // Infinity
5 && 1 / 0         // Infinity
null || 1 / 0      // Infinity

// What happens if we modify this so that 1 / 0 isn't needed?

null ? 1 / 0 : 1 + 2  // 3
null && 1 / 0         // null
5 || 1 / 0            // 5

// in all 3 cases 1 / 0 never gets executed, even though operator precedence
// would suggest it should get evaluated first

// in the first expression 1 / 0 isn't evaluated since its the truthy operand
// for the ?: it only gets run when the value to the left of ? is truthy
// instead the code returns 3 (1 + 2).
// the other 2 expressions don't evaluate 1 / 0 due to short-circuiting
// In all 3 expressions JS treats ?: , && , || differently from other opeators
// and doesn't evaluate the subexpressions unless it needs them

/** Use Paraenthesis!
 * 
 * use parenthesis when mixing operators
 */