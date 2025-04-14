const countries = require("../arrays/countries");
// FUNCTIONS:
// - Declaration function
// - Expression function
// - Anonymous function
// - Arrow function

// FUNCTION DECLARATION
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square();

// function without parameter
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}
addTwoNumbers();

// Function returning value
function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());

// Functions with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

// Functions with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  // console.log(sum);
  return sum;
}
console.log(sumTwoNumbers(10, 20));

// Functions with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

const areaCircle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(areaCircle(10));

// Functions with unlimited number of parameters
// Regular function:
function sumAllNums() {
  // console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// sumAllNums(1, 2, 3, 4);
console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(10, 20, 13, 40, 10));

// Arrow function:
const sumOfAllNums = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
};
console.log(sumOfAllNums(15, 20, 30, 25, 10, 33, 40));

// Anonymous Function:
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun."
  );
};
anonymousFun();

// EXPRESSION FUNCTION
const square2 = function (n) {
  return n * n;
};
console.log(square2(4));

// SELF INVOKING FUNCTIONS
(function (n) {
  console.log(n * n);
})(2);

let squaredNum = (function (n) {
  return n * n;
})(10);
console.log(squaredNum);

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};
console.log(changeToUpperCase(countries));

// FUNCTION WITH DEFAULT PARAMETERS
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}
console.log(greetings());
console.log(greetings("Anna"));

function generateFullName(firstName = "Asabeneh", lastName = "Yetayeh") {
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(generateFullName());
console.log(generateFullName("Mikhail", "Khamiev"));

let now = new Date();
const calculateAge = (birthYear, currentYear = now.getFullYear()) =>
  currentYear - birthYear;
console.log("Age: ", calculateAge(1977));
