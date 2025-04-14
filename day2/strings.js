const paragrapth =
  "My name is Anna Khamieva. I live in Russia, Artyomovsky.\
  I am a teacher and I love teaching.\
  I teach HTML, CSS, JavaScript, Reax, Redux,\
  Node.js for anyone who is interested to learn.";

console.log(paragrapth);

console.log(
  "i hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you?"
);
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");

console.log("This is a backslash symbol (\\)");

// \n: new line
// \t: Tab, means 8 spaces
// \\: Backslash
// \': Single quote (')
// \": Double quote (")

// String Methods
// 1. Length:
let js = "Javascript";
console.log(js.length);
let firstLetter = js[0];
console.log(firstLetter);
let lastIndex = js.length - 1;
console.log(js[lastIndex]);

// 2. toUpperCase():
console.log(js.toUpperCase());

// 3. toLowerCase():
console.log(js.toLocaleLowerCase());

// 4. substr(): takes two arguments, the starting index and number of characters to slice.
console.log(js.substr(4, 6));

// 5. substring(): takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(js.substring(0, 4));
console.log(js.substring(4, 10));
console.log(js.substring(4));

// 6. split(): splits a string at a specified place.
console.log(js.split()); // ['Javascript']
console.log(js.split(""));

// 7.trim(): removes trailling space in the beginning or the end of a string.
let string = "  30 Days Of JavaScript   ";
console.log(string);
console.log(string.trim());

// 8. includes(): takes a substring argument and checks if substring argument exists in the string. Return a boolean.
console.log(string.includes("Days"));

// 9. replace(): takes as a parameter the old substring and a new substring
console.log(string.replace("JavaScript", "Python"));

// 10. charAt(): takes index and returns the value of that index.
console.log(js.charAt(5));

// 11. charCodeAt(): takes index and returns char code (ASCII number) of the value at that index
console.log(js.charCodeAt(3));

// 12. indexOf(): takes a substring and if the substring exists in a string it returns the first position of the substring, if doesn't not exist it returns -1

console.log(js.indexOf("S"));
console.log(js.indexOf("s"));

// 13. lastIndexOf(): takes a substring and if the substring exists in a string it returns the last position of the substring if it doesn't exist it returns -1
console.log(js.lastIndexOf("t"));
console.log(js.lastIndexOf("o"));

// 14. concat(): takes many substrings and joins them
console.log(js.concat(" ", "is", " ", "wonderful"));

// 15. startsWith: takes a substring as an argument and checks if the string starts with that specified substring. It returns a boolean.

console.log(string.startsWith("30"));
console.log(string.startsWith(" "));

// 16. endsWith: takes a substring as an argument and checks if the string ends with that specified substring. It returns a boolean.
let str = "Love is the most powerful feeling in the world";
console.log(str.endsWith("world"));

// 17. search: takes a substring as an argument and returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(str.search("feeling"));
console.log(str.search(/love/gi));

// 18. match: takes a substring or regular expression pattern as an argument and returns an array if there is match if not it returns null.
let patternOne = /javascript/;
console.log(js.match(patternOne));
let patternTwo = /javascript/gi;
console.log(js.match(patternTwo));

let txt =
  "in 2019, I ran 30 Days of Python. Now, in 2025 I am super excited to start this challenge";
let regEx = /\d+/g;
console.log(txt.match(regEx));

// 19. repeat(): takes a number as argument and returns the repeated version of the string.
console.log(js.repeat(3));
