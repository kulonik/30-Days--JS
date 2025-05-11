// console.log()
// Showing output
console.log("30 Days of JavaScript");

// Substitution
console.log("%d %s of JavaScript", 30, "Days");

// CSS
console.log("%c30 Days of JavaScript", "color:green");

// console.warn()
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DON will take care of handling the DOM!"
);

console.warn("Warning is different from error");

// console.error()
console.error("This is an error message");
console.error("We all make mistakes");

// console.table()
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.table(users);

// console.time()
console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

// console.info()
console.info("30 Days Of JavaScript challenge is trending on Github");

// console.assert()
console.assert(4 > 3, "4 is greater than 3");
console.assert(3 > 4, "3 is not greater than 4");

for (let i = 0; i <= 10; i++) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, `number: ${i}, errorMessage: ${errorMessage} `);
}

// console.group()
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
// console.groupEnd();

console.group("Users");
// console.log(user);
console.log(users);

// console.count()
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();

// console.clear()
console.clear();
