const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(age) {
    this.age = age;
  }
  count() {
    return this.age.length;
  }
  sum() {
    let sum = 0;
    for (const num of this.age) {
      sum += num;
    }
    return sum;
  }
  minNum() {
    return Math.min(...this.age);
  }
  maxNum() {
    return Math.max(...this.age);
  }
  range() {
    return this.maxNum() - this.minNum();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    let sortedArray = this.age.sort((a, b) => a - b);
    if (sortedArray.length % 2 === 1) {
      return sortedArray[(sortedArray.length + 1) / 2 - 1];
    } else {
      let lowMedian = sortedArray[sortedArray.length / 2 - 1];
      let highMedian = sortedArray[sortedArray.length / 2];
      return (lowMedian + highMedian) / 2;
    }
  }
}

const numbers = new Statistics(ages);
console.log("Count:", numbers.count());
console.log("Sum:", numbers.sum());
console.log("Min:", numbers.minNum());
console.log("Max:", numbers.maxNum());
console.log("Range:", numbers.range());
console.log("Mean:", numbers.mean());
console.log("Median:", numbers.median());
