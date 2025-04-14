let length = prompt("Enter length of the rectangle");
let width = prompt("Enter width of the rectangle");
const area = length * width;
const perimeter = 2 * (Number(length) + Number(width));
console.log(
  " The area of the rectangle is",
  area,
  "\n",
  "The perimeter of the rectangle is",
  perimeter
);
