//JS OPERATORS

//1. MATHEMATICAL/ARITHMETIC OPERATORS
// Addition
let a = 10;
let b = 5;
let c = a + b;
console.log(c);

//String Concatenation...joining different strings
let firstName = "Velma";
let lastName = "Obote";
let fullName = firstName + " " + lastName;
console.log(fullName.length); // Word count (10)
console.log("My" + " " + "name" + " " + "is" + " " + fullName);
console.log(firstName + lastName); //VelmaObote
console.log(firstName + lastName); //Word count (10)
console.log(firstName + " " + lastName); //To add space between them, introduce an empty string after + " " then add space inside it then + again

// Subtraction
const sellingPrice = 700;
const costPrice = 500;
const profitValue = sellingPrice - costPrice;
console.log(profitValue);

// Multiplication
// Calculating area of a circle Area = π × r² which is π * r * r
const PI = 3.14;
let radius = 100;
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

// Division and Modulus/Remainder
let x = 5;
let y = 3;
let z = 10;
console.log(z / x); //remainder 2
console.log(x % y);

//2. ASSIGNMENT OPERATORS
let d = 2 + 5 + 8 - 2; // = most common assignment operator. Here the + operator is executed before the assignment operator which is because of a couple of rules in operator precedence.
console.log("First: ", d); // d = 13

d += 10; // += is the addition assignment operator. It adds 10 to the current value of d and updates d with the new value.
console.log("Second: ", d); // [d = d+10] = 23 and seperate with a comma coz we are trying to print two things

d -= 5; // -= is the subtraction assignment operator. It subtracts 5 from the current value of d and updates d with the result.
console.log("Third: ", d); // d = 18

//3. COMPARISON OPERATORS-USED IN CONDITIONS – Used to compare values and return a boolean (true or false)
const ageAdult = 18;
let ageVolian = 19;
let ageVelma = 28;

// Checks if ageVolian is greater than ageVelma
let ageBoolean = ageVolian > ageVelma;
console.log(ageBoolean); //False

// Checks if ageVolian is at least 18 (greater than or equal to 18)
console.log(ageVolian >= ageAdult); //the number 18 is inclusive, atleast 18

let q = 3;
let p = "3";

console.log(q == p); // true – loose equality (compares value only, not type)
console.log(3 == 3); // true – loose equality: same value, same type
console.log(q === p); // false – strict equality (compares both value and type)
console.log(3 === 3); // true – strict equality: compares value and type

// Not equal to
console.log(3 != 3); // false – loose inequality: values are equal
console.log(3 != "3"); // false – loose inequality: values are equal
console.log(3 !== "3"); // true – strict inequality: value or type is different

//In JavaScript, falsy values are values that are treated as false when evaluated in a Boolean context, such as inside an if statement. There are exactly seven falsy values to memorize: false (the Boolean false itself), 0 (zero), -0 (negative zero), "" (an empty string), null (which represents no value), undefined (a variable declared but not assigned), and NaN (which stands for “Not a Number”). These values behave as false when JavaScript checks conditions, even though they’re not the Boolean false.
console.log(0 == false); // true – loose equality: 0 is falsy
console.log(0 === false); // false – strict equality: different types (number vs boolean)

//On the other hand, everything else is considered truthy. That means any value that is not one of the seven falsy values will be treated as true in conditionals. Some common truthy values include: "hello" (any non-empty string), (even a space " "), 42 (any non-zero number), {} (an object), [] (an array), and true (the Boolean true itself). Even a single space " " inside a string is truthy.

//Understanding the difference between falsy and truthy values is important because JavaScript automatically converts values (a process called type coercion) when evaluating expressions. Knowing how this works helps you write cleaner logic and avoid common bugs.

console.log(0 == ""); // true – loose equality: both are falsy
console.log(0 === ""); // false – strict equality: number vs string

// 4. LOGICAL OPERATORS - Used to combine or invert boolean values.

//AMPERSAND && (AND) - It checks if at least Both is true to returns falsy values — unless both values are truthy (As long as it's FALSE for atleast one, it's False for all).
// true && true   // true
// false && true  // false
// true && false  // falses
// false && false // false
let personAge_1 = 20;
let booleanValue = personAge_1 > 18 && personAge_1 < 30; //true plus true statements here gives TRUE. All cases must be true:

if (personAge_1 > 18 && personAge_1 < 30) {
  console.log("old");
}

//PIPE || (OR) - || It checks if at least one part is true to returns truthy values — unless both values are falsy (As long as it's TRUE for atleast one, it's true for all).
// true || true   = true
// false || true  = true
// true || false  = true
// false || false = false
let personAge_2 = 30;

if (4 > 3 || 10 > 5) {
  console.log("old"); //True
}
if (10 == 1 || 5 == 1) {
  console.log("YES"); //10 == 1 → ❌ false and 5 == 1 → ❌ false So the expression becomes: if (false || false)
}

// ! NOT Logical - Acts a s a a light switch that flips true → false and false → true. It's used to reverse the meaning of a boolean value.
// (De Morgan’s Law): !(A || B) is the same as !A && !B
// (true)   → !(true)  → false
// (false)   → !(false)  → true
if (5 > 2) {
  console.log("YES"); //5 > 2 → true → prints “YES”
}

if (!(5 > 2)) {
  console.log("YES"); //!(5 > 2) → !true → false → doesn't run
}

//5. UNARY OPERATORS - Works on only one operand

// INCREMENT OPERATOR (++)
// Example 1: Basic increment
let count = 1;
// This is the long version of incrementing: // count = count + 1;

count++; // Using the increment operator
console.log(count); // Output: 2 // It adds 1 to the current value (1 → 2)

// Example 2: POST-INCREMENT (value is used first, then increased)
let countInc = 1;
console.log(countInc++); // 1: The value of countInc (which is 1) is logged first, // THEN it is incremented to 2 behind the scenes.
console.log(countInc); // 2: Now you see the updated value after the increment took place.

// Example 3: PRE-INCREMENT (value is increased first, then used)
console.log(++countInc); // 3: The value of countInc is increased from 2 → 3 THEN it is logged. So you see 3 immediately. Final value of countInc is now 3.

// DECREMENT OPERATOR (--)
// Example 1: Basic decrement
let countDec = 2;
// countDec = countDec - 1; This is the long version of decrementing

countDec--; // Using the decrement operator
console.log(countDec); // 1:It subtracts 1 from the current value (2 → 1)

// Example 2: POST-DECREMENT (value is used first, then decreased)
let postDec = 3;
console.log(postDec--); // 3: The value (3) is logged first, THEN it is decremented to 2 behind the scenes.
console.log(postDec); // 2: Now you see the updated value after decrement happened.

// Example 3: PRE-DECREMENT (value is decreased first, then used)
let preDec = 5;
console.log(--preDec); // 4: The value is first decreased from 5 → 4, THEN it is logged. So 4 is shown immediately. Final value of preDec is now 4.

// 6. TERNARY OPERATOR - A shorthand for if...else.

// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 18;
age < 10 ? console.log("Adult") : console.log("Minor"); // Output: Minor, Reason: 18 is not less than 10, so it skips the first part and executes the second
// ? "Adult" will print if age is less than 10 (false here) : "Minor" will print if condition is false (this runs)

// STRINGS AND TEMPLATE LITERALS (${})

const fName = "Velma";
const lName = "Obote";
const country = "Kenya";
const city = "Nairobi";
const yearOfBirth = 1997;

const thisYear = 2025;
const isMarried = false;
const job = "prompt engineer";

//Initially with messy "" + signs
// const aboutVelma =  const aboutVelma = "I'm " + firstName + " " + lastName + ". My country is " + country + ", city is " + city + ", " + (year - yearOfBirth) + " years old, and I work as a " + job + ".";

// console.log(aboutVelma); // Output: I'm Velma Obote. My country is Kenya, city is Nairobi, 28 years old, and I work as a prompt engineer.

//  A cleaner version of your code using template literals with backticks (`), which makes string building more readable
const aboutVelma = `I'm ${fName} ${lName}. My country is ${country}, city is ${city}, ${
  thisYear - yearOfBirth
} years old, and I work as a ${job}.`;

console.log(aboutVelma); // Output: I'm Velma Obote. My country is Kenya, city is Nairobi, 28 years old, and I work as a prompt engineer.
// Using template literals (backticks) to embed variables with ${} directly into the string for better readability and cleaner syntax thus no messy + signs

//Practice
let m = 10;
m *= 2;
console.log(m); // 20

let r = "Hello";
let s = "World";
console.log(r + " " + s); // Hello World

console.log(5 > 3 && 2 < 1); // false since true && false → false

console.log(3 > 2); // true
console.log(3 >= 2); // true
console.log(3 < 2); // false
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 == 2); // false
console.log(3 == 3); // true
console.log(3 == "3"); // true (loose equality)
console.log(3 === "3"); // false (strict equality)
console.log(3 != 3); // false
console.log(3 !== 3); // false
console.log(0 == false); // true (coercion)
console.log(0 === false); // false
console.log(0 == ""); // true
console.log(0 === ""); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
