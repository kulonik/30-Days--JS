//  A callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(c, n) {
  return c * n;
}
console.log(cube(callback(3), 5));

// RETURNING FUNCTION
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

// forEach method uses call back:
// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

// forEach method as above but simplified:
const numbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));

// SETTING TIME
// Setting interval using a setInterval function
// syntax
// function callback() {
//  code goes here
// }
// setInterval(callback, duration);

// function sayHello() {
//   console.log("Hello");
// }
// setInterval(sayHello, 1000);

// Setting a time using a setTimeout
// syntax
// function callback() {
//  code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds
