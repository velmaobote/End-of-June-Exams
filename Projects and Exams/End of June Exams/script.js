// Question 1: Age Comparison
//  prompt() returns a string — always convert it to Number.
const myAge = 25;
const userAge = Number(prompt("Enter your age:"));

if (userAge > myAge) {
  console.log(`You are ${userAge - myAge} years older than me.`);
} else if (userAge < myAge) {
  console.log(`I am ${myAge - userAge} years older than you.`);
} else {
  console.log("We are the same age!");
}

// Question 2: Comparing Two Numbers
// Part A – Using if...else
let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// Part B – Using Ternary Operator- Use nested ternary to handle equal too.
// Reusing variables 'a' and 'b' from Part A to avoid error:"Cannot redeclare block-scoped variable 'a'".
// This happened because 'let' doesn't allow redeclaring variables in the same scope.

console.log(
  a > b ? "a is greater than b" : a < b ? "a is less than b" : "a is equal to b"
);

// Question 3: Even or Odd Number
//  % checks remainder. Even numbers have zero remainder when divided by 2.
const number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

// Question 4: Determine the Season
// user input with .toLowerCase() for accurate comparison.
const month = prompt("Enter a month:").toLowerCase();

if (["september", "october", "november"].includes(month)) {
  console.log(`${month} is in Autumn.`);
} else if (["december", "january", "february"].includes(month)) {
  console.log(`${month} is in Winter.`);
} else if (["march", "april", "may"].includes(month)) {
  console.log(`${month} is in Spring.`);
} else if (["june", "july", "august"].includes(month)) {
  console.log(`${month} is in Summer.`);
} else {
  console.log("Invalid month entered.");
}

// Question 5: Check Weekend or Working Day
// using .toLowerCase() ensures case-insensitive matching
const day = prompt("Enter a day:").toLowerCase();

if (["saturday", "sunday"].includes(day)) {
  console.log(`${day} is a weekend.`);
} else if (
  ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)
) {
  console.log(`${day} is a working day.`);
} else {
  console.log("Invalid day entered.");
}
