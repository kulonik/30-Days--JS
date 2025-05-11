// task 1
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.table(countries);

const country = {
  name: "Russia",
  city: "Moscow",
  population: 14000000,
  language: ["Russian", "Tatar", "Bashkirian", "Mordovian"],
};
console.table(country);
console.group("country");
console.log(country);
