// task 9. Write function factorial and return a factorial of a number
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
// console.log(factorial(5));

// 10. write function isEmpty
function isEmpty(item) {
  if (Boolean(item) == false) {
    return "It is empty";
  }
  return "It is not empty";
}
// console.log(isEmpty(0));

// 11. call your function sum, it takes any number or arguments and it returns the sum.

function sum(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
// console.log(sum(15, 25, 35, 50, 9, 4));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.

function sumOfArrayItems(array) {
  let sum = 0;
  for (const item of array) {
    if (typeof item == "string") {
      return "Invalid";
    }
    sum += item;
  }
  return sum;
}
const arr = [2, 8, 9, 65, "hello", 13];
// console.log(sumOfArrayItems(arr));

// 13. Write a function called average, it takes an array parameter and returns the average of the items.
function average(array) {
  let sum = 0;
  for (const item of array) {
    if (typeof item == "string") {
      return "Invalid";
    }
    sum += item;
  }
  return sum / array.length;
}
// console.log(average(arr));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.

function modifyArray(array) {
  if (array.length < 5) {
    return "item not found";
  } else {
    array[4] = array[4].toUpperCase();
    return array;
  }
}
let wordsArray = ["apple", "melon", "cabbage", "cucumber", "banana", "lemon"];
let shortArray = ["Apple", "Nokia", "LG", "Nvidia"];
console.log(modifyArray(wordsArray));
console.log(modifyArray(shortArray));

// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(isPrime(121));

// write a function which checks if all items are unique in the array.

function checkUniqueItems(array) {
  let dupli = [];
  for (let i in array) {
    for (let j in array) {
      if (i !== j && array[i] === array[j] && !dupli.includes(array[i])) {
        dupli.push(array[i]);
      }
    }
  }
  if (dupli.length === 0) {
    return "All items are unique";
  } else {
    return "There are dupli in the array";
  }
}

let dupliArray = [2, 4, 8, 11, 5, 6];
console.log(checkUniqueItems(dupliArray));

// 17. Write a function which checks if all the items of the array are the same date type

function checkDataType(array) {
  return array.every((elem) => typeof elem === typeof array[0]);
}
console.log(checkDataType(arr));
console.log(checkDataType(wordsArray));
