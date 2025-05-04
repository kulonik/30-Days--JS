const countries = require("../../arrays/countries");

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const alphebet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// task 1
console.log(
  products
    .map((item) => item.price)
    .filter((num) => typeof num === "number")
    .reduce((acc, cur) => acc + cur)
);

// task 3
function categorizeCountries(array) {
  return array.filter((item) => item.includes("land"));
}
console.log(categorizeCountries(countries));

// task 4
function getNumOfLetters(array1, array2) {
  let arrayOfObjects = [];
  for (let i = 0; i < array2.length; i++) {
    let obj = {};
    obj.letter = array2[i];
    obj.number = array1.filter((item) => item.startsWith(array2[i])).length;
    arrayOfObjects.push(obj);
  }
  return arrayOfObjects;
}
console.log(getNumOfLetters(countries, alphebet));
