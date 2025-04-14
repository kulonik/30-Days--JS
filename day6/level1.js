// 1.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// 4.
let hash = [];
for (let i = 0; i <= 7; i++) {
  hash.push("#");
  console.log(hash.join(""));
}

// 5.
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6.
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i}  ${i * i * i}`);
}

// 7.
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}

// 8.
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// 9.
for (let i = 2; i <= 100; i++) {
  if (i === 2 || i == 3 || i === 5) {
    console.log(i);
  }
  if (100 % i === 0 || i % 2 === 0 || i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// print the sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of all numbers from 0 to 100 is ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum1 += i;
  }
  if (i % 2 !== 0) {
    sum2 += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sum1}. And the sum of all odds from 0 to 100 is ${sum2}`
);

// print sum of evens and sum of odds as array;
let array = new Array();
array.push(sum1);
array.push(sum2);
console.log(array);

// Develop a small script which generate array of 5 random numbers
let arr = [];
for (let i = 1; i <= 5; i++) {
  let num = Math.floor(Math.random() * 10);
  arr.push(num);
}
console.log(arr);

// 8. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let array2 = [];
for (let i = 1; i <= 5; i++) {
  let num = Math.floor(Math.random() * 100);
  array2.push(num);
}
console.log(array2);

// 9. Develop a small script which generate a six characters random id:
let symbols = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let id = "";
console.log(symbols.length);
for (let i = 0; i <= 5; i++) {
  let symbol = symbols[Math.floor(Math.random() * 36)];
  id += symbol;
}
console.log(id);
