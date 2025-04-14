// 1.
const firstName = "Anna";
const lastName = "Khamieva";
const country = "Russia";
const city = "Atryomovsky";
const age = 47;
const isMarried = false;
let year = 2025;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2.
console.log(typeof "10" === typeof 10);

// 3.
console.log(parseInt("9.8") === 10);

// 5.
console.log(2 == "2");
console.log("Hello");
console.log(1 == true);

// 6.
let zero = "";
let falsyVal = 0;
let falsVal = undefined;

// 7.
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

// 19.
console.log("python".length !== "jargon".length);
console.log("Finished");
// 20.
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
// 33.
let today = new Date();
console.log(today.getFullYear());
// 34.
console.log(today.getMonth() + 1);
// 35.
console.log(today);
// 36.
console.log(today.getDay() + 1);
// 37.
console.log(today.getHours());
// 38.
console.log(today.getMinutes());
// 39.
console.log(today.getTime());
