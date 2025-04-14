// 1. Declare an empty array
const array = [];
const arr = new Array();
console.log(array, arr);

// 2. declare an array with > than 5 number of elements
const numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers);

// 3. length of the array
console.log(numbers.length);

// 4. get the first item, the middle item, and the last item
console.log(numbers[0]);
console.log(numbers[numbers.length / 2]);
console.log(numbers[numbers.length - 1]);

// 5. put different data types in the array and find the length.
const mixedDataTypes = [
  2,
  "hello",
  false,
  null,
  { name: "Smith", age: 35 },
  [1, 2, 3],
];
console.log(mixedDataTypes.length);

// 6.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7.
console.log(itCompanies);
// 8.
console.log(itCompanies.length);
// 9.
console.log(
  itCompanies[0],
  itCompanies[(itCompanies.length - 1) / 2],
  itCompanies[itCompanies.length - 1]
);
// 10, 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 12.
console.log(itCompanies.join(", "));

// 14.
// 15. Sort the array
console.log(itCompanies.sort());
// 16. Reverse the array
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies
console.log(itCompanies.slice(0, 3));
console.log(itCompanies);
// 18. Slice out the last 3 companies
console.log(itCompanies.slice(itCompanies.length - 3));

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.splice((itCompanies.length - 1) / 2, 1));

// 20. Remove the first IT company
itCompanies.shift();
console.log(itCompanies);
// 21. Remove the middle company
let devidedString = itCompanies.length / 2;
console.log(devidedString);
let firstArray = itCompanies.slice(0, devidedString);
let secondArray = itCompanies.slice(devidedString);
secondArray.shift();
console.log(firstArray, secondArray);
console.log(firstArray.concat(secondArray));
// 22. remove the last company
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all companies.
console.log(itCompanies.slice(itCompanies.length));
