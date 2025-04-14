// Primitive Data Types: immutable
let word = "Javascript";
word[0] = "Y";
console.log(word[0]); // 'J'

let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "Javascript";
let py = "Python";
console.log(js == py);

// Non-Primitive Data Types: mutable.

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);
