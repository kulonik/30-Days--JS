// task 9. Write function factorial and return a factorial of a number
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

// 10. write function isEmpty
function isEmpty(item) {
  if (Boolean(item) == false) {
    return "It is empty";
  }
  return "It is not empty";
}
console.log(isEmpty(0));

// 11. call your function sum, it takes any number or arguments and it returns the sum.

function sum(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(15, 25, 35, 50, 9, 4));

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
const arr = [2, 8, 9, 65, 13];
console.log(sumOfArrayItems(arr));

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
console.log(average(arr));
