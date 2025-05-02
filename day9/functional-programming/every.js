// every: check if all the elements are similar in one aspect. returns boolean

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string");
console.log(areAllStr);

const bools = [true, true, true, true];
const areAllTrue = bools.every((b) => b === true);
console.log(areAllTrue);
