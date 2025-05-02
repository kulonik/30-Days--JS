// reduce: takes a callback function.
// arr.reduce((acc, cur) => {
// some operations go here before returning a value
// return
// }, initialValue);

const numbers = [1, 2, 3, 4, 5];
// 0 + 1 + 2 + 3 + 4 + 5
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

const getMax = (a, b) => Math.max(a, b);
// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50));
console.log([50].reduce(getMax, 10));

// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax));

const array = [15, 16, 17, 18, 19];

function reducer(acc, cur, index) {
  const returns = acc + cur;
  console.log(
    `accumulator: ${acc}, currentValue: ${cur}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

console.log(array.reduce(reducer));

// Sum of values in an object array
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum2 = objects.reduce((acc, cur) => acc + cur.x, 0);

console.log(sum2);
