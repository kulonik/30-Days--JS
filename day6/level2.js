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
  "Iceland",
  "Japan",
  "Kenya",
];
module.exports = countries;
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
module.exports = webTechs;

// 1. Develop a small script which generate any number of characters random id
const symbols = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(symbols.length);
let idLength = Math.floor(Math.random() * 50);
let id = "";
for (let i = 0; i <= idLength; i++) {
  let symbol = Math.floor(Math.random() * symbols.length);
  id += symbols[symbol];
}
console.log(id);

// 2. Write a script which generates a random hexadecimal number.
const colorNumbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let color = "#";
for (let i = 0; i < 6; i++) {
  let n = colorNumbers[Math.floor(Math.random() * 16)];
  color += n;
}
console.log(color);

// 3. Write a script which generate a random rgb color number.
let rgbNumbers = [];
for (let i = 0; i < 3; i++) {
  let n = Math.floor(Math.random() * 255);
  rgbNumbers.push(n);
}
console.log(`rgb(${rgbNumbers.join(", ")})`);

// 4. Using the aabove countries array, create a new array with countries upperCase.
let countriesUpperCase = [];
for (const country of countries) {
  countriesUpperCase.push(country.toUpperCase());
}
console.log(countriesUpperCase);

// 5. Using the above countries array, create an array for countries length.
let countriesLength = [];
for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays
let arrayOfArrays = [];
for (const country of countries) {
  let subArray = [];
  subArray.push(country);
  let abbrev = country.slice(0, 3).toUpperCase();
  subArray.push(abbrev);
  let countryLength = country.length;
  subArray.push(countryLength);
  arrayOfArrays.push(subArray);
}
console.log(arrayOfArrays);

// 7. Check if there is a country containing the word 'land'.
let countriesLand = [];
for (const country of countries) {
  if (country.includes("land")) {
    countriesLand.push(country);
  }
}
if (countriesLand.length > 0) {
  console.log(countriesLand);
} else {
  console.log("All the countries are without land.");
}

// 8. Check if there is a country or countries end with a substring 'ia'
let countriesIa = [];
for (const country of countries) {
  if (country.endsWith("ia")) {
    countriesIa.push(country);
  }
}
if (countriesIa.length > 0) {
  console.log(countriesIa);
} else {
  console.log("These are countries ends without ia");
}

// 9. Using the above countries array, find the country containing the biggest number of characters
let longest = "";
for (const country of countries) {
  if (longest.length < country.length) {
    longest = country;
  }
}
console.log(longest);

// 10. Using the above countries array, find the country containing only 5 characters.
let countries5Chars = [];
for (const country of countries) {
  if (country.length == 5) {
    countries5Chars.push(country);
  }
}
console.log(countries5Chars);

// 11. Find the longest word in the webTechs array.
let longestWord = "";
for (const webTech of webTechs) {
  if (longestWord.length < webTech.length) {
    longestWord = webTech;
  }
}
console.log(longestWord);

// 12. Use the webTechs array to create an array of arrays.
let arrayOfWebTechs = [];
for (const webTech of webTechs) {
  let subArray = [];
  subArray.push(webTech);
  subArray.push(webTech.length);
  arrayOfWebTechs.push(subArray);
}
console.log(arrayOfWebTechs);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.
const mernStack = ["MongoDB", "Express", "React", "Node"];
module.exports = mernStack;
let acronym = "";
for (const item of mernStack) {
  acronym += item.slice(0, 1).toUpperCase();
}
console.log(acronym);

// 14. Iterate through the array, using a for loop or for of loop and print our the items
for (const item of webTechs) {
  console.log(item);
}

// 15. Reverse the order using loop without using a reverse method
const fruits = ["banana", "orange", "mango", "lemon"];
let reversedFruits = [];
for (const fruit of fruits) {
  reversedFruits.unshift(fruit);
}
console.log(reversedFruits);

// 16.
const fullStack = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"];
for (const item of fullStack) {
  console.log(item.toUpperCase());
}
