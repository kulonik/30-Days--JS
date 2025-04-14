const countries = require("./countries");
const webTechs = require("./web_tech");
console.log(countries, webTechs);

// 8. In countries array check if 'Ethiopia' exists in the array
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// 9. Check if Sass exists in the webTechs array
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess.");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//  Slice the first ten countries from the array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the array
if (countries.length % 2 === 0) {
  console.log(
    countries[countries.length / 2 - 1],
    countries[countries.length / 2]
  );
} else {
  console.log(countries[countries.length / 2]);
}

// divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half.
countries.pop();
const firstCountries = countries.slice(0, countries.length / 2 + 1);
const secondCountries = countries.slice(countries.length / 2 + 1);
console.log(firstCountries, secondCountries);
