const names = ["Asabeneh", "Brook", "David", "John"];

// while loop
console.time("While loop");
let i = 0;
while (i < names.length) {
  i++;
  console.log(names[i]);
}
console.timeEnd("While loop");

// for loop

console.time("For loop");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.timeEnd("For loop");

// for of loop
console.time("For of loop");
for (const name of names) {
  console.log(name);
}
console.timeEnd("For of loop");

// forEach
console.time("forEach loop");
names.forEach((name) => {
  console.log(name);
});
console.timeEnd("forEach loop");
