// Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];
console.log(evenNumbers);

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];
console.log(oddNumbers);
console.log(wholeNumbers);

// Spread operator to copy object
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);

// changing the object while copying
const anotherCopisedUser = { ...user, title: "instructor" };
console.log(anotherCopisedUser);

// Spread operator with arrow function
const sumAllNums = (...args) => {
  console.log(args);
};
sumAllNums(1, 2, 3, 4, 5);

const sumAllNumbers = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNumbers(1, 2, 3, 4, 5));
