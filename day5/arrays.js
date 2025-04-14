// Arrays
// How to create an empty array:
//  - Using Array constructor:
const arr = Array();
console.log(arr);
// - Using square brackets:
const array = [];
console.log(array);

// How to create an array with values:
const numbers = [0, 3.14, 9.81, 37, 98.6, 100, 10];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const animalProducts = ["milk", "meat", "butter", "yoghurt"];
const webTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// Print the array and its length
console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

// Array can have items of different data types:
const arr2 = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(arr2);

// Creating an array using split:
let js = "JavaScript";
console.log(js.split(""));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", "));

// Modifying array element
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);
countries[0] = "Afghanistan";
countries[countries.length - 1] = "Korea";
console.log(countries);

// METHODS TO MANIPULATE ARRAY: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array constructor.

// Array: to create an array
const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// fill: fill all the array elements with a static value
console.log(eightEmptyValues.fill("X"));

// concat: to concatenate two arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);
console.log(fruits.concat(vegetables));

// length: to know the size of the array
console.log(numbers.length);

// indexOf: to check if an item exist in an array. If it exists it returns the index, else it returns -1.
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(9.81));

// lastIndexOf: gives the position of the last item in the array.
console.log(numbers.lastIndexOf(10));

// includes: check if an item exist in an array.
console.log(numbers.includes(10));
console.log(numbers.includes(6));

// Array.isArray: check if the data type is an array
console.log(Array.isArray(numbers));

// toString: converts array to string
console.log(numbers.toString());

// join: used to join the elements of the array
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join(", "));
console.log(fruits.join(" * "));

// slice: cut out multiple items in range.
console.log(fruits.slice(1));

// splice: takes three parameters: starting position, number of times to be removed and number of items to be added
console.log(numbers);
numbers.splice(3, 3, 7, 8, 9);
console.log(numbers);

const num = [1, 2, 3, 4, 5];
num.splice(3, 3, 7, 8, 9);
console.log(num);

// push: adding item in the end.
fruits.push("apple");
console.log(fruits);

// pop: removing item in the end/
fruits.pop();
console.log(fruits);

// shift: removing one array element in the beginning of the array
fruits.shift();
console.log(fruits);

// unshift: adding array element in the beginning of the array
fruits.unshift("pear");
console.log(fruits);

// reverse: reverse the order of an array
fruits.reverse();
console.log(fruits);

// sort: arrange array elements in ascending order.
webTech.sort();
console.log(webTech);
console.log(fruits.sort());

// Array of arrays
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];
const arrayOfArrays = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArrays[0]);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0][1]);
