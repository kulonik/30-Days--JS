// if
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number.`);
}

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat.");
}

// If Else
num = -3;
if (num > 0) {
  console.log(`${num} is a positive number.`);
} else {
  console.log(`${num} is a negative number.`);
}

// If Else if Else
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number.`);
} else if (a < 0) {
  console.log(`${a} is a negative number.`);
} else if (a == 0) {
  console.log(`${a} is zero.`);
} else {
  console.log(`${a} is not a number.`);
}

let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a raincoat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for raincoat.");
}

// Switch
let day = "sunday";

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a day.");
}
