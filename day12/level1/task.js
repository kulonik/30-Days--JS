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
