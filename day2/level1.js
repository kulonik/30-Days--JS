// 1.
let challenge = "30 Days Of JavaScript";
// 2.
console.log(challenge);
// 3.
console.log(challenge.length);
// 4.
console.log(challenge.toUpperCase());
// 5.
console.log(challenge.toLowerCase());
// 6.
console.log(challenge.substr(0, 2));
// 7.
console.log(challenge.substring(3));
// 8.
console.log(challenge.includes("Script"));
// 9.
console.log(challenge.split(""));
// 10.
console.log(challenge.split(" "));
// 11.
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);
// 12.
console.log(challenge.replace("JavaScript", "Python"));
// 13.
console.log(challenge.charAt(15)); // S
// 14.
console.log(challenge.charCodeAt(11)); // 74
// 15.
console.log(challenge.indexOf("a")); // 4
// 16.
console.log(challenge.lastIndexOf("a")); //14
// 17.
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); //31
// 18.
console.log(sentence.lastIndexOf("because")); //47
// 19.
console.log(sentence.search("because")); //31
// 20.
let untrimmedSent = "   I love Javascript  ";
console.log(untrimmedSent.trim());
// 21.
console.log(challenge.startsWith("30"));
// 22.
console.log(challenge.endsWith("ript"));
// 23.
console.log(challenge.match(/a/gi));
// 24.
console.log("30 Days of".concat(" JavaScript"));
// 25.
console.log(challenge.repeat(2));
