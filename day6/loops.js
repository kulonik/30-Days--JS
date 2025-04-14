// for Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

// Adding all elements in the array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

// creating a new array based on the existing array
for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] ** 2);
}
console.log(newArr);

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while loop
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// for of loop for arrays
for (const num of numbers) {
  console.log(num);
}

for (const num of numbers) {
  console.log(num * num);
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

for (const tech of webTechs) {
  console.log(tech[0]);
}

// Break is used to interrupt a loop
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// Continue - to skip a certain iterations.
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
