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
