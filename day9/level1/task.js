const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
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

function callback(item) {
  console.log(item);
}

// task3
countries.forEach(callback);

// task4
console.log(names.forEach(callback));

// task 5
console.log(numbers.forEach(callback));

// task 6
console.log(countries.map((country) => country.toUpperCase()));

// task 7
console.log(countries.map((country) => country.length));

// task 8
console.log(numbers.map((num) => num * num));

// task 9
console.log(names.map((name) => name.toUpperCase()));

// task 10
console.log(products.map(({ product, price }) => [product, price]));

// task 11
const countriesToLowCase = countries.map((country) => country.toLowerCase());
console.log(countriesToLowCase.filter((country) => country.includes("land")));

// task 12
console.log(countries.filter((country) => country.length === 6));

// task 13
console.log(countries.filter((country) => country.length >= 6));

// task 14
console.log(countries.filter((country) => country.startsWith("F")));

// task 15
console.log(products.filter((item) => item.price > 0));

// task 16
function getStringLists(array) {
  return array.filter(function (item) {
    if (typeof item === "string") return item;
  });
}

const myList = ["shopping", "knitting", 23, true, null, "cooking"];
console.log(getStringLists(myList));
