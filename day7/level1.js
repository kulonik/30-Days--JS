// 1 - 2. Declare a function fullName and it print out your full name.
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Anna", "Khamieva"));

// 3. Declare a function and return sum of two parameters
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 4));

// 4. Calculate area of rectangle
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(12, 6));

// 5. Calculate a perimeter of a rectangle
const perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log(perimeterOfRectangle(12, 15));

// 6. Calculate a volume of a rectangle
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(2, 4, 6));

// 7. Calculate an area of a circle
const areaOfCircle = (r) => Math.PI * r * r;
console.log(areaOfCircle(8));

// 8. Calculate circumference of a circle
const circumOfCircle = (r) => 2 * Math.PI * r;
console.log(circumOfCircle(5));

// 9. Calculate density.
const density = (mass, volume) => mass / volume;
console.log(density(1000, 900));

// 10. Calculate speed
const speed = (distance, time) => distance / time;
console.log(speed(27, 25 / 60));

// 11. Calculate weight
const weight = (mass, gravity = 9.8) => mass * gravity;
console.log(weight(72));

// 12. Convert oC to oF
const convertCelsiusToFarenheit = (oC) => (oC * 9) / 5 + 32;
console.log(convertCelsiusToFarenheit(-12));

// 13. Calculate BMI (body mass index) and check if a person is underweight, normal, overweight or obese.

function bmi(weight, height) {
  let index = weight / (height * height);
  if (index < 18.5) {
    console.log("You are underweight.");
  } else if (index >= 18.5 && index < 24.9) {
    console.log("You have normal weight.");
  } else if (index >= 25 && index < 29.9) {
    console.log("You are overweight.");
  } else {
    console.log("You are obese.");
  }
}
bmi(73, 1.7);

// 14. write a function called checkSeason
function checkSeason(month) {
  if (month == "September" || month == "October" || month == "November") {
    console.log("The season is Autumn.");
  } else if (month == "December" || month == "January" || month == "February") {
    console.log("The season is Winter.");
  } else if (month == "March" || month == "April" || month == "May") {
    console.log("The season is Spring.");
  } else if (month == "June" || month == "July" || month == "August") {
    console.log("The season is Summer.");
  } else {
    console.log("This is not a season.");
  }
}
checkSeason("Jacket");

// 15. write a function that takes three arguments and returns their maximum without using Math.max method.
function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
