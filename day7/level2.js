const countries = require("../arrays/countries");
const characters = require("../arrays/characters");
// 1. Calculate value of a linear equation.
function solveLinEquation(a, b, c, y) {
  let x = -(b * y + c) / a;
  return x;
}
console.log(solveLinEquation(2, 1, 0, 3));

// 2. write a function which calculates value or values of a quadratic equation.
// function solveQuadEquation(a, b, c) {
// }
// console.log(solveQuadEquation(0, 3, 2));

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (const item of arr) {
    console.log(item);
  }
}
printArray(countries);

// 4. write a function which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let now = new Date();
  let date = now.getDate();
  let todayDate = "";
  if (todayDate.length < 2) {
    todayDate = `0${date}`;
  } else {
    todayDate = date;
  }
  let month = now.getMonth();
  let todayMonth = "";
  if ((todayMonth + 1).length < 2) {
    todayMonth = `0${month + 1}`;
  } else {
    todayMonth = month;
  }
  let year = now.getFullYear();
  let hour = now.getHours();
  let nowHour = "";
  if (hour.length < 2) {
    nowHour = `0${hour}`;
  } else {
    nowHour = hour;
  }
  let mins = now.getMinutes();
  let nowMins = "";
  if (mins.length < 2) {
    nowMins = `0${mins}`;
  } else {
    nowMins = mins;
  }
  return `${todayDate}/${todayMonth}/${year} ${nowHour}:${nowMins}`;
}
console.log(showDateTime());

// 5. Declare a function which swaps value of x to y.
function swapValues(x, y) {
  let tmp = x;
  x = y;
  y = tmp;
  console.log(`x = ${x}, y = ${y}`);
}
swapValues(2, 3);

// 6. Declare a function which takes array as a parameter and returns the reverse of the array (don't use method).
const reverseArray = (...args) => {
  let reversed = [];
  for (const item of args) {
    reversed.unshift(item);
  }
  return reversed;
};
console.log(reverseArray(1, 2, 3, 4, 5));
console.log(reverseArray("A", "B", "C", "D"));

// 7. Function takes array as a parameter and returns the capitalized array.
const capitalizeArray = (...args) => {
  let array = [];
  for (const item of args) {
    array.push(item.toUpperCase());
  }
  return array;
};
console.log(capitalizeArray("fruits", "vegetables", "food"));

// 8. Function takes an item parameter and returns an array after adding the item.
function addItem(item) {
  let arr = [];
  arr.push(item);
  return arr;
}
console.log(addItem("Hello"));

// 9. Function takes an index parameter and returns an array after removing an item
function removeItem(arr, index) {
  let array = [];
  for (const item of arr) {
    if (item == arr[index]) continue;
    array.push(item);
  }
  return array;
}
const fruits = ["apple", "banana", "mango", "orange"];
console.log(removeItem(fruits, 2));

// 10. Function takes a number parameter and add all the numbers in that range.
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));

// 11. Function takes a number parameter and adds all the odd numbers in that range.
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(7));

// 12. Function takes a number parameter and adds all the even numbers in that range.
function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(4));

// 13. Function takes a positive integer as parameter and counts number of evens and odds in the number.
function evensAndOdds(n) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      evenArray.push(i);
    } else {
      oddArray.push(i);
    }
  }
  console.log(
    `The number of odds is ${oddArray.length}.\nThe number of evens is ${evenArray.length}.`
  );
}
evensAndOdds(100);

// 14. write a function which takes any number of arguments and return the sum of the arguments.
const sum = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
};
console.log(sum(13, 20, 33));

// 15. write a function which generate a randomUserIp.
function randomUserIp() {
  let ipArray = [];
  for (let i = 0; i < 4; i++) {
    let n = Math.floor(Math.random() * 255);
    ipArray.push(n);
  }
  return ipArray.join(".");
}
console.log(randomUserIp());

// 16. write a function which generates a randomMacAddress
let hyphens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomMacAddress() {
  let macAddressArray = [];
  for (let i = 0; i < 6; i++) {
    let subArray = "";
    for (let j = 0; j < 2; j++) {
      subArray += hyphens[Math.floor(Math.random() * hyphens.length)];
    }
    macAddressArray.push(subArray);
  }
  return macAddressArray.join("-");
}
console.log(randomMacAddress());

// 17. write the function which generates a random hexadecimal number.
function randomHexaNumberGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hyphens[Math.floor(Math.random() * hyphens.length)];
  }
  return color;
}
console.log(randomHexaNumberGenerator());

// 18. write a function which generates seven character id.
function userIdGenerator(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += characters[Math.floor(Math.random() * characters.length)];
  }
  return string;
}
console.log(userIdGenerator(7));
