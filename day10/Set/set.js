// Creating an empty set
const companies = new Set();
console.log(companies); // {}

// Creating set from array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); // {'English', 'Finnish', 'french', 'Spanish'}

for (const language of languages) {
  console.log(language); // English Finnish English French Spanish English French
}

// Adding an element to a set
console.log(companies.size); // 0
companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");
console.log(companies); // {'Google', 'Facebook', 'Amazon'}

setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies); // {'Google', 'Facebook', 'Amazon'}

// Deleting an element a set
console.log(companies.delete("Google")); // true
console.log(companies); // {'Facebook', 'Amazon'}

// Checking an element in the set
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

// clearing the set (remove all the elements from a set)
companies.clear();
console.log(companies); // {}
console.log(setOfCompanies); // {'Google', 'Facebook', 'Amazon'}

// Example
const langSet = new Set(languages);
console.log(langSet, langSet.size); // {'English', 'Finnish', 'French', 'Spanish'} 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang);
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

// Union of sets
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
// let c = [...a, ...b];
// console.log(c);

let A = new Set(a);
let B = new Set(b);
// let C = new Set(c);
// console.log(A, B, C);

// Intersection of sets
let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C);

// Difference of sets
let d = a.filter((num) => !B.has(num));
let D = new Set(d);
console.log(D);

// forEach for Set
let fruits = new Set(["orange", "apple", "banana"]);

fruits.forEach((fruit, fruitAgain, fruits) => {
  console.log(fruit);
});
