/** Variables Functions and Blocks: Revisited
 * 
 * Example 1
 */

let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar); // 2

/** Explanation
 * 
 * in this example, the variable myVar is declared and initialized to the number 
 * 2, this variable is accessible within the scope of the function body of the
 * myFunc function, we reassign the myVar variable to the number 2
 * 
 * this assignment occurs when we invoke the myFunc on line 12, so when myVar is
 * logged on line 13 the reassigned value is output
 */

// Example 2

let myVar2 = [1];

function myFunc2() {
  myVar2 = [2];
}

myFunc2();
console.log(myVar2);  // [2]

/** this example is similar to example 1 we initialized the variable myVar to
 * particular value, in this case an array
 * 
 * We reassign the variable when the myFUnc function is invoked
 * 
 * same concept: myVar2 is accessible within the scope of the function body.
 * 
 * The fact that myVar2 was initialized to a reference type value rather than a
 *  primitive value has no bearing on the outcome.
 * 
 * important to know we are not mutating the array in any way, we are logging
 * a different array to the one we initialized myVar2 with
 */

// Example 3

let myVar3 = [1];

function myFunc3() {
  myVar3[0] = 2;
}

myFunc3();
console.log(myVar); // [2]

/** The outcome may seem the same as example 2, but there's a key difference:
 * the array that is logged is the same array that myVar3 was initilized on line
 * 52.
 * 
 * variable scope is still playing its part that we can access the myVar3 
 * variable within the scope defined by the body of the myFunc3 function,
 * but the other concept at work: mutability on line 55 we are mutationg the
 * array itself by assigning a different element to index 0 of the array
 */

// Example 4

let myVar4 = 1;

function myFunc4(myVar4) {
  myVar4 = 2;
}

myFunc4();
console.log(myVar4);  // 1

/** this example may look identical to example 1, but there's a key difference
 * which is the function parameter myVar4. It's this small detail that leads to 
 * the difference in outcome when the code is run
 * 
 * the concept here is variable scope, when myFunc4 is invoked on line 79, JS
 * declares the variable with the name of the parameter myVar4 within the scope
 * of the function, this is a different variable to the one initialized on line 
 * 73, and initially has a value of undefined.  
 * 
 * The existence of this variable within the scope of the function 'shadows'
 * or blocks access to the myVar4 variable in the global scope on line 73
 * 
 * therefore line 76 is a reassignment of the function-scoped myVar4 rather than
 * a reassingment of the myVar4 declared and initialized on line 73
 * 
 * that variable is then logged on line 80, it still has its initial value of 1
 */

// Example 5

let myVar5 = [1];

function myFunc5(myVar5) {
  myVar5 = [2];
}

myFunc5();
console.log(myVar5);  // [1]

/** this is essentially the same as example 4, although it looks similar to 
 * example 2, a different myVar5 is being created within the scope of the 
 * myFunc5 function and "shadowing" blocking access to the one declare and 
 * initialized on line 102 (global scope) line 105 is reassigning the 
 * function-scoped myVar5 to a new array ( remember, myVar5 parameter would have
 * been initialized to undefined when myFunc5 is invoked, because it is given 
 * no arguments, line 105 is reassignment not an initialization)
 * 
 * the fact that we are dealing with reference rather than primitives plays 
 * not part here
 *  */

// Example 6

let myVar6 = [1];

function myFunc6(myVar6) {
  myVar[0] = 2; // TypeError: Cannot set properties of undefined (setting '0')
}

myFunc6();
console.log(myVar6);

/** Similar to examples (4 and 5), this is again a situation where the myVar6 
 * variable scoped to the function blocks access to the myVar6 declareed and
 * initialized on line 125.
 * 
 * The difference here is that we are attempting to mutate it as if it was
 * referencing an array,
 * 
 * at this point the function-scoped myVar has a value of undefined, which is 
 * a primitive value line 128 is essentially undefined[0] = 2;
 * 
 * which JS parses as an attempt to set a property 0 on undefined, which is 
 * impossible, hence the TypeError */

// Example 7

let myVar7 = 1;

function myFunc7(myVar7) {
  myVar = 2;
}

myFunc7(myVar7);
console.log(myVar7);  // 1

/** almost identical to example 4, but one small difference, we're passing the
 * myVar7 variable declared and initialized on line 149 as an argument to the 
 * myFunc7 function invocation on line 155, in this case it doesn't make any
 * difference to the outcome
 * 
 * because myVar on line 149 was initialized to a primitive value, passing it as
 * an argument to the function acts like a pass-by-value.  myVar7 on line 149
 * and the myVar7 scoped to the function both point to the value 1, but these 
 * are different value 1's that exist at different points in memory
 * 
 * as a result fo this, whatever we do to myvar within the scope of the function
 * won't affect the value assigned to the myVar7 on line 149
 * 
 * the fact that we are passing in a primitive value doesn't really come into
 * paly in this example.
 * 
 * The primiary concept at work is scope, and the same reasons outline on
 * example 4.  The function parameter myVar7 acts like a local variable within
 * the scope of the function, which blocks access to the myVar7 declare and
 * initialized on line 149.
 * 
 * line 152 is reassignment of this function scoped variable 
 */

// Example 8

let myVar8 = [1];

function myFunc8(myVar8) {
  myVar8 = [2];
}

myFunc8(myVar8);
console.log(myVar8);  // [1]

/** This is similar to example 7, except we're passing in a reference type as an
 * argument to the function rather than a priitive
 * 
 * when the function is initially excecuted, the myVar8 on line 184 and the 
 * function-scope myVar8 both reference the same array
 * 
 * the fact that we're dealing with a referene type, doesn't really come into
 * play here, because we are reassigning the function-scoped myVar8 to a 
 * different array.  in that sense the concept works the same as example 7
 */

// Example 9

let myVar9 = [1];

function myFunc9(myVar9) {
  myVar9[0] = 2;
}

myFunc9(myVar9);
console.log(myVar9);  // [2]

/** As with example 8, we're passing a reference type as an argument to a 
 * function invocation, So again when the myFunc9 function is executed, the 
 * myVar9 on line 206 and the function-scoped myVar9 are both referencing the 
 * same array.
 * 
 * unlike example 8, we are mutating that array (rather than reassigning the 
 * function-scoped variable) 
 * 
 * when we log myVar9 on line 213, we get the mutated array output.
 */