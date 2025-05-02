// some: check if some of the elements are similar in one aspect, returns boolean

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools = [true, true, false, true];

const areSometrue = bools.some((b) => b === true);
console.log(areSometrue);

const areAllStr = names.some((name) => typeof name === "number");
console.log(areAllStr);
