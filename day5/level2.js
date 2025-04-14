// 2. Remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let sentence = text.split(". ").join(" ");
console.log(sentence);
let phrase = sentence.split(", ").join(" ");
console.log(phrase);
let words = phrase.split(" ");
console.log(words);
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// 4. add 'Meat' in the beginning
shoppingCart.unshift("Meat");
console.log(shoppingCart);
// 5. add Sugar at the end
shoppingCart.push("Sugar");
console.log(shoppingCart);
// 6. remove 'Honey'
const changedCart1 = shoppingCart.slice(0, 4);
const changedCart2 = shoppingCart.splice(5);
console.log(changedCart1, changedCart2);
let changedCart = changedCart1.concat(changedCart2);
console.log(changedCart);

// 7. Modify Tea to 'Green Tea'
changedCart.splice(3, 1, "Green Tea");
console.log(changedCart);

// 10. Concatenate the following two variables
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
