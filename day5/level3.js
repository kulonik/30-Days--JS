const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
let medianAge = ages[ages.length / 2];
console.log(medianAge);

let averageAge =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  ages.length;
console.log(averageAge);

let ageRange = maxAge - minAge;
console.log(ageRange);

console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));
