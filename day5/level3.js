const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
let medianAge = ages[ages.length / 2];
console.log(medianAge);

let averageAge =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  ages.length;
console.log(averageAge);

let ageRange = maxAge - minAge;
console.log(ageRange);

console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));

// Task 2
// Slice the first ten countries from the countries array

const countries = require("../arrays/countries");

let firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

// find the middle country in the array
let middleCountry = countries.slice(
  countries.length / 2,
  countries.length / 2 + 1
);
console.log(middleCountry);

// divide the countries into two equal arrays
let firstArray = countries.slice(0, countries.length / 2 + 1);
let secondArray = countries.slice(countries.length / 2 + 1, countries.length);
console.log(firstArray, secondArray);

console.log(firstArray.length, secondArray.length);
