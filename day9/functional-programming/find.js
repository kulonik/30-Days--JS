// find: return the first element which satissfies the condition
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 24); // 22
console.log(age);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const result = names.find((name) => name.length > 7);
console.log(result);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score);

// findIndex: return the position of the first element which satisfies the condition

const resultIndex = names.findIndex((name) => name.length > 7);
console.log(resultIndex);

const ageIndex = ages.findIndex((age) => age < 20);
console.log(ageIndex);
