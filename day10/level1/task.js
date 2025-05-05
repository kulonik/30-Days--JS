const countries = require("../../arrays/countries");

// task 1
const set = new Set();

// task 2
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
  set.add(num);
}
console.log(set);

// task 3
console.log(set.delete(3));
console.log(set);

//  task 4
set.clear();
console.log(set);

// task 5
const array = ["JavaScript", "Java", "Python", "MongoDB", "React"];
const stringSet = new Set(array);
console.log(stringSet);

// task 6
const counts = [];
const countryLength = {};
const countriesSet = new Set(countries);
for (const country of countriesSet) {
  // console.log(country, country.length);
  counts.push({ country: country, countryLength: country.length });
}
console.log(counts);

const countriesMap = new Map();
for (const { country, countryLength } of counts) {
  countriesMap.set(country, countryLength);
}
console.log(countriesMap);

// task1
function unique(arr) {
  let set = new Set(arr);
  return set;
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-0",
];
console.log(unique(values));
