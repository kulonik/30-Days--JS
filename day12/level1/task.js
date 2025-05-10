// task 1

const txt =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const regExp = /\d+/g;
const matches = txt.match(regExp);
console.log(matches);

function getWholeSum(array) {
  let sum = 0;
  for (const item of array) {
    sum += Number(item);
  }
  return sum;
}
console.log(getWholeSum(matches));

// task 2
const points = ["-1", "-2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = points.sort((a, b) => a - b).join(" ");
console.log(sortedPoints);

const firstPattern = /\d$/g;
const secondPattern = /^\-?\d/g;
const match1 = sortedPoints.match(firstPattern);
const match2 = sortedPoints.match(secondPattern);
console.log(match1);
console.log(match2);
function getSumOfArrays(a, b) {
  return Number(a) - Number(b);
}
console.log(getSumOfArrays(match1, match2));
