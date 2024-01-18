// Question 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
// no, it will not raise an error, JS will treat index 3-5 as empty slots

// Bonus
let numbers2 = [1, 2, 3];
numbers2[6] = 5;
numbers2[4];   // what will this line return? undefined, but the slot is empty

// Question 2
// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "WHat's us Doc?";  // false

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));

function endsWithExclaimation(string) {
  return (string[str1.length - 1] === "!");
}

console.log(endsWithExclaimation(str1));
console.log(endsWithExclaimation(str2));

// Question 3
// Determine whether the following object of people and their age contains an entry for 'Spot':
console.log('Question 3:')
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.hasOwn(ages, 'Spot'));
console.log(ages.hasOwnProperty('Spot'));

// Question 4
// Using the following string, create a new string that contains all lowercase 
// letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky";

function capitalize(string) {
  string = string.toLowerCase();
  let firstLetter = string[0];
  return string.replace(firstLetter, firstLetter.toUpperCase());
}

console.log(capitalize(munstersDescription));

// Another Solution
munstersDescription = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
console.log(munstersDescription);

// Question 5
// What will the following code output?
console.log(false == '0');  // true
console.log(false === '0'); // false

let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages2, additionalAges);
console.log(ages2);

// Question 7
// Determine whether the name Dino appears in the strings below -- check each string separately:
console.log('Question 7:');

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes('Dino'));
console.log(str4.includes('Dino'));

// Another Solution
console.log(str3.match('Dino') !== null);
console.log(str4.match('Dino') !== null);

// Another Solution
console.log(str3.indexOf('Dino') > -1);
console.log(str4.indexOf('Dino') > -1);

// Question 8
// How can we add the family pet, "Dino", to the following array?

console.log('Question 8:');

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

// Another Solution 
flintstones[flintstones.length] = 'Dino'

// Another Solution
flintstones = flintstones.concat('Dino');

// Question 9
// In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones2 = flintstones2.concat(['Dino', 'Hoppy']);

// Another Solution
let flintstones3 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones3.push('Dino', 'Hoppy');

console.log(flintstones2);
console.log(flintstones3);

// Question 10
// Return a new version of this sentence that ends just before the word house.
// Don't worry about spaces or punctuation: remove everything starting from the 
// beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice = advice.slice(0, advice.indexOf('house'));
console.log(advice); // => 'Few things in life are as important as '






