const webTechs = require("../day5/level2/web_tech");
const mernStack = require("./level2");
// 1. Copy countries array
const countries = require("../day5/level2/countries");
// 2. create a copy of array and sort it
const sortedCountries = countries.sort();
console.log(sortedCountries);

// 3. Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesLand.push(country);
  }
}
console.log(countriesLand);

// 5. Find the country containing the highest number of characters in the countries array
let longestWord = "";
for (const country of countries) {
  if (longestWord.length < country.length) {
    longestWord = country;
  }
}
console.log(longestWord);

// 7. Extract all the countries containing only four characters from the countries array and print it as array
let arrayOfFourChars = [];
for (const country of countries) {
  if (country.length == 4) {
    arrayOfFourChars.push(country);
  }
}
console.log(arrayOfFourChars);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
let arrayOfTwoWordsCountries = [];
for (const country of countries) {
  if (country.includes(" ")) {
    arrayOfTwoWordsCountries.push(country);
  }
}
console.log(arrayOfTwoWordsCountries);

// 9. Reverse the countries array and capitalize each country
let reversedCountries = [];
for (const country of countries) {
  reversedCountries.unshift(country.toUpperCase());
}
console.log(reversedCountries);
