alert(
  "Dear Future Me,\n\nI'm proud of how far you've come. You kept going even when things felt messy, scary, or slow. Don't forget how brave you've always been. You’re still growing, and that’s beautiful.\n\nWith love,\nVelma@27 💛"
);
console.log(
  "Reminder: Keep going. You are not behind. You are on your own timeline."
);

//  I'm defining who I see myself as — this is my self-label:“I’m creating a variable called futureMe, and I’m giving it the value 'built different'.” You're storing your self-identity or vibe in a variable — kinda like giving yourself a title.

// let futureMe = "growing beautifully";

// If I feel built different, remind me of my power: If the value of futureMe is exactly 'built different', then show a popup message saying:‘Of course you are. Nobody does it like you.’”

// if (futureMe === "built different") {
// alert("Of course you are. Nobody does it like you. 🔥");

// If I feel like I'm in my main character era, hype me up.
// } else if (futureMe === "the main character") {
// alert("Lights. Camera. You. Own. The. Scene. 🎬");

// If I’m still figuring things out, remind me that growth is enough
// } else if (futureMe === "growing beautifully") {
// alert("You’re not behind. You’re blooming exactly on time. 🌱");

// If none of the above match, give gentle love anyway
// } else {
// alert("Wherever you are, you're still becoming. That’s enough. 💛");
// }

// ===== LET KEYWORD =====

// 'let' allows you to declare variables that can change later (mutable)
let firstName = "Velma"; // declaring a string variable
let lastName = "Obote"; // another string
let country = "Kenya"; // value can be updated later if needed
let city = "Nairobi"; // can be reassigned if I move

let age = 27; // numeric variable that I can update
let isMarried = true; // boolean value (true/false)

age = 28; // 'let' allows me to reassign a new value

let noOfChildren; // I can declare without assigning a value immediately
noOfChildren = 1; // then assign a value later when I know it

// This logs all my current info in one go — easy to track variables together
console.log(firstName, lastName, country, city, age, isMarried, noOfChildren);

// ===== CONST KEYWORD =====

// 'const' is used when I don’t want the value to ever change (immutable constants)
const gravity = 9.81; // gravitational constant — it stays the same
const boilingPoint = 100; // boiling point of water in °C — unchanging
const pi = 3.14159; // mathematical constant pi

// Logging unchangeable scientific values together
console.log(gravity, boilingPoint, pi);

// Once set, 'const' values can't be reassigned — this would cause an error:
// const yearOfBirth = 1997;
// yearOfBirth = 1998; ❌ Not allowed — constants are locked in

const birthYear = 1997; // like above — fixed once declared

//  ===== NON-PRIMITIVE  =====

// array...typed in array:object
const listOfFruits = ["mango", "apple", "grapes", "banana"];
console.log(listOfFruits);

// object...typed in key:value
const myObject = {
  firstName: "Velma", // string
  lastName: "Obote", // string
  age: 28, // number
  gender: "female", // string
  isMarried: false, // boolean
  hobbies: ["coding", "swimming", "cycling", "music"],
};
console.log(myObject);

//  ===== CHECKING DATA TYPES  =====
// To check the type of a value, we use the typeof operator.
console.log(typeof "Velma"); // string
console.log(typeof 28); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined
