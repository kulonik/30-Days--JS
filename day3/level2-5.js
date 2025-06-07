// 3. Calculate the slope
let x1 = 0;
let y1 = 2 * x1 - 2;
let x2 = 1;
let y2 = 2 * x2 - 2;
console.log(y2, y1);
let m = (y2 - y1) / (x2 - x1);
console.log(m);

// 4. slope between point (2, 2) and poing (6, 10)
x1 = 2;
y1 = 2;
x2 = 6;
y2 = 8;
console.log(x1, x2, y1, y2);
let m2 = (y2 - y1) / (x2 - x1);
console.log(`(${y2} - ${y1}) / (${x2} - ${x1}) = ${m2}`);

// 8.
let name = "Anna";
let num = 7;
name.length > 7
  ? console.log("Your name is long")
  : console.log("Your name is short");

// 10.
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// 13. Create a human readable time format using Date time object:
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let mins = now.getMinutes();
console.log(
  `${year}-${month >= 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  } ${hours}:${mins}`
);
console.log(
  `${day > 9 ? day : "0" + day}-${
    month > 9 ? month : "0" + month
  }-${year} ${hours}:${mins}`
);
console.log(
  `${day > 9 ? day : "0" + day}/${
    month > 9 ? month : "0" + month
  }/${year} ${hours}:${mins}`
);
