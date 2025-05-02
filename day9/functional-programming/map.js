// map: iterate an array elements and modify the array elements. It takes a callback function with elements, index, array parameter and return a new array.
const arr = ["a", "b", "c"];
const modifiedArray = arr.map(function (element, index, arr) {
  return element;
});

// Arrow function and explicit return
// const modifiedArray = arr.map((element, index) => element);

const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbers); // array is the same
console.log(numbersSquare); // modified array

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);
console.log(countriesFirstThreeLetters);
