// 1.
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches up to help one another."
);
// 2.
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
// 3.
console.log(typeof parseInt("10") == typeof 10);
// 4.
console.log(Math.ceil(parseFloat("9.8")) === 10);
// 5.
console.log("python".includes("on"));
console.log("jargon".includes("on"));
// 6.
let sent = "I hope this course is not full of jargon";
console.log(sent.includes("jargon"));
// 7.
console.log(Math.floor(Math.random() * 101));
// 8.
console.log(Math.floor(Math.random() * 51 + 50));
// 9.
console.log(Math.floor(Math.random() * 256));
// 10.
let js = "JavaScript";
let randomNum = Math.floor(Math.random() * js.length);
console.log(js[randomNum]);
// 11.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// 12.
let string =
  "You cannot end a sentence with because because because is a conjunction";
let subString = string.substr(31, 23);
console.log(subString);
