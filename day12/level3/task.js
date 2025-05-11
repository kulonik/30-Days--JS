let sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";

function getCleanText(text) {
  const regExp = /[@#$%&;!?]/g;
  const cleanText = text.replace(regExp, "");
  return cleanText;
}
getCleanText(sentence);

const wordRegExp = /[a-zA-Z]+/g;
const matches = getCleanText(sentence).match(wordRegExp);
// console.log(matches);

const matchesSet = new Set(matches);
// console.log(matchesSet);

function getArrayOfObj(array) {
  const counts = [];
  for (const word of array) {
    const filteredWord = array.filter((item) => item === word);
    counts.push({ word: word, count: filteredWord.length });
  }
  return counts;
}
getArrayOfObj(matches);

let objects = getArrayOfObj(matches);

const uniqueItems = objects.filter(
  (item, index, self) => index === self.findIndex((p) => p.word === item.word)
);
console.log(uniqueItems);

function getThreeFrequentWords(array) {
  const top3 = array
    .slice()
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);
  return top3;
}

console.log(getThreeFrequentWords(uniqueItems));
