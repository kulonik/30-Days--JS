// Boolean Values:

// Truthy values: all numbers are truthy except zero, all strings are truthy except an empty string(''); the boolean true

// Falsy values: 0, 0n, null, undefined, NaN, the boolean false, '', "", ``, empty string.

// Undefined: we declare a variable and don't assign a value. Or if a function is not returning the value, it will be undefined.
let firstName;
console.log(firstName);

// Null
let empty = null;
console.log(empty); // -> null,  means no value

// Operators:
// Assignment operators: '='
let name = "Asabeneh";
let country = "Finland";

// Arithmetic Operators: addition (+), substraction (-), multiplication (*), division (/), modulus (%), exponential (**)
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, div, remainder, powerOf);

// Comparision Operators: ==, ===, !==, >, <, <=, >=
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); //false, not equal
console.log(NaN === NaN); // false

// Logical Operators: ampersand (&&), pipe (||) and negation (!)
const check = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

const check4 = 4 > 3 || 10 > 5; // true || true -> true
const check5 = 4 > 3 || 10 < 5; // true || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

let check7 = 4 > 3; //true
let check8 = !(4 > 3); // false
let isLightOn = true;
let isLightOff = !isLightOn; // false
console.log((isMarried = !false)); // true

// Increment Operator:

// 1. Pre-increment
let count = 0;
console.log(++count);
console.log(count);

// Post-increment
console.log(count++);
console.log(count);

// Decrement Operator
// 1. Pre-decrement
console.log(--count);
console.log(count);

// 2. Post-decrement
console.log(count--);
console.log(count);

//  Ternary Operators
let isRaining = true;
isRaining
  ? console.log("You need a raincoat")
  : console.log("No need for a raincoat");

isRaining = false;
isRaining
  ? console.log("You need a raincoat")
  : console.log("No need for a raincoat");

// Window Methods: alert(), prompt(), confirm()
// alert(message)
// do not use too much alert, use it just to test

// prompt('required text', 'optional text');
// let number = prompt("Enter number", "number goes here");

// confirm():
// const agree = confirm("Are you sure you like to delete?");

// Date Object:
// getFullYear() - get the year as a four digit number (yyyy)
// getMonth() - get the month as a number (0-11)
// getDate() - get the day as a number (1-31)
// getHours() - get the hour (0-23)
// getMinutes() - get the minute (0-59)
// getSeconds()- get the second (0-59)
// getTime() - get the time (milliseconds since January 1, 1970)
// getDay() - get the weekday as a number (0-6)

const now = new Date();
console.log(now);

// getting full year
console.log(now.getFullYear());

// getting month
console.log(now.getMonth() + 1);
console.log(now.getTime());
