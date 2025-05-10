// write a function called tenMost FrequentWords
const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give your all the capabilities to develop an application what else can you love.";

const pattern = /[a-zA-Z]+/gi;
const matches = paragraph.match(pattern);
console.log(matches);

const matchesSet = new Set(matches);
console.log(matchesSet);

const counts = [];
const count = {};

for (const w of matchesSet) {
  const filteredWord = matches.filter((word) => word === w);
  console.log(filteredWord);
  counts.push({ word: w, count: filteredWord.length });
}
console.log(counts);

function tenMostFrequentWords(sentence, number) {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(counts[i]);
  }
  return newArray;
}
console.log(tenMostFrequentWords(counts, 10));
