// Creating an empty Map
const map = new Map();
console.log(map);

// Creating a Map from array
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const countriesMap = new Map(countries);
console.log(countriesMap);
console.log(countriesMap.size);

// Adding values to the Map
const otherCountriesMap = new Map();
console.log(otherCountriesMap.size);

otherCountriesMap.set("Russia", "Moscow");
otherCountriesMap.set("the USA", "Washington");
otherCountriesMap.set("China", "Benjin");
console.log(otherCountriesMap);
console.log(otherCountriesMap.size);

// Getting a value from Map
console.log(countriesMap.get("Finland"));

// Checking key in Map
console.log(countriesMap.has("Finland"));

// Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}

// ForEach for Map
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomato", 350],
  ["onion", 50],
]);

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Object.entries: map from object
let obj = {
  name: "John",
  age: 30,
};

let personMap = new Map(Object.entries(obj));
console.log(personMap);

// Object.fromEntries: Object from Map
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log(prices);
