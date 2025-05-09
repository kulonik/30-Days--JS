// RegExp parameters: one required search pattern and an optional flag
// flags: g (a global flag which means looking for a pattern in whole text), i (case insensitive flag), m (multiline)

// Creating a pattern with RegExp Constructor
// without a global flag and case sensitive flag:
let pattern = "love";
let regEx = new RegExp(pattern);

// with global flag and case sensitive flag
let anotherPattern = "love";
let flag = "gi";
let regExWithFlags = new RegExp(pattern, flag);

// Creating a pattern without RegExp Constructor
let reg = /love/gi;

// RegExp Object Methods
// test(): tests for a match in a string, returns true or false
const str = "I love JavaScript";
const patt = /love/g;
const result = patt.test(str);
console.log(result);

// match(): returns an array containing all of the matches, including capturing groups, or null if no match is found. If we don't use a global flag, match() returns an array containing the pattern, index, input and group
const matchResult = str.match(patt);
console.log(matchResult);

// search(): tests for a match in a string, returns the index of the match, or -1 if the search fails.
const searchResult = str.search(patt);
console.log(searchResult);

// REPLACING A SUBSTRING
// replace(): executes a search for a match in a string, and replaces the matched substring with a replacement substring.
const txt =
  "Python is the most beautiful language that a human begin has ever created.I recommend python for a first programming language";

matchReplaced = txt.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

const strangeTxt =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = strangeTxt.replace(/%/g, "");
console.log(matches);

// A set of characters,
// [a-c] means c or b or c;
// [a-z] means any letter a to z;
// [A-Z] means any letter A to Z;
// [0-3] means 0 or 1 or 2 or 3;
// [0-9] means any number 0 to 9;
// [A-Za-z0-9] means any character with is a to z, A to Z, 0 to 9;
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9);
// \D mean: match where the string does not contain digits
// .: any character except new line character (\n);
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love;
// r'[^abc] mean not a, not b, not c;
// $: ends with;
// r'substring$' eg r'love$', sentence ends with a word love;
// *: zero or more times
// r'[a]*' means a optional or it can occur many times;
// +: one or more times;
// r'[a]+' means at least once or more times;
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending or a word
// {3}: exactly 3 characters
// {3,}: at least 3 characters
// {3, 8}: 3 to 8 characters
// |: eighter or
// r'apple|banana' mean eighter of an apple or a banana
// (): capture any group

// Square Bracket
const applePattern = /[Aa]pple|[Bb]anana/g;
const appleTxt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";

const match = appleTxt.match(applePattern);
console.log(match);

// Escape character(\) in RegExp and one or more times (+)
const digitPattern = /\d+/g;
const digitTxt =
  "This regular expression example was made in January 12, 2020.";
const digitMatches = digitTxt.match(digitPattern);
console.log(digitMatches);

// period (.)
const fruitsPattern = /[a]./gi; // this square bracket means a and . means any character except new line
const fruitsTxt =
  "Apple and banana are fruits. Potato and cabbage are vegetables. Meat and cheese is not for vegans.";
const fruitsMatches = fruitsTxt.match(fruitsPattern);
console.log(fruitsMatches);

// zero or many times
const anotherFruitsPattern = /[a].*/g;
const anotherFruitsMatch = fruitsTxt.match(anotherFruitsPattern);
console.log(anotherFruitsMatch);

// zero or one times (?)
const emailTxt =
  "I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.";
const emailPattern = /[Ee]-?mail/g; // ? means optional
matches = emailTxt.match(emailPattern);
console.log(matches);

// quantifier in RegExp
// We can specify the length of the substring we look for in a text, using a curly bracket.
const fourCharText =
  "This regular expression example was made in December 6, 2019.";
const anotherDigitPattern = /\d{1,4}/g; // exactly four character words
const anotherDigitMatches = fourCharText.match(anotherDigitPattern);
console.log(anotherDigitMatches);

// Cart ^
const cartPattern = /^This/g; // ^means starts with
const cartMatches = fourCharText.match(cartPattern);
console.log(cartMatches);

// Exact match
let namePattern = /^[A-Z][a-z]{3,12}$/;
let name = "Asabeneh";
let nameResult = namePattern.test(name);
console.log(nameResult);
