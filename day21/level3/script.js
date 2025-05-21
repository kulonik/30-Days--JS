const wrapper = document.querySelector("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

// Wrapper style
wrapper.style.width = "600px";
wrapper.style.margin = "60px auto";
wrapper.style.fontFamily = "Courier";

// h1 style
h1.innerHTML = "Asabeneh Yetayeh challenges in <span>2020</span>";

h1.style.fontSize = "24px";
h1.style.alignSelf = "center";
const span = document.querySelector("span");

span.style.fontSize = "40px";

function getColor() {
  let index = "#";
  let string = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    let num = string[Math.floor(Math.random() * string.length)];
    index += num;
  }
  return index;
}
function setColor() {
  span.style.color = getColor();
}
setInterval(setColor, 1000);

h2.style.fontSize = "18px";
h2.style.width = "350px";
h2.style.margin = "auto";
h2.style.color = "grey";
h2.style.textDecoration = "underline";

// Set Date
let currentDate = new Date();
console.log(currentDate);

let dateMonth = currentDate.getMonth();
function setMonth(month) {
  if (month === 0) return "January";
  if (month === 1) return "February";
  if (month === 2) return "March";
  if (month === 3) return "April";
  if (month === 4) return "May";
  if (month === 5) return "June";
  if (month === 6) return "July";
  if (month === 7) return "August";
  if (month === 8) return "September";
  if (month === 9) return "October";
  if (month === 10) return "November";
  if (month === 11) return "December";
}
console.log(setMonth(dateMonth));

let dateHours = currentDate.getHours();
let setHours = (hours) => (hours < 10 ? `0${hours}` : hours);
console.log(setHours(dateHours));

let dateMinutes = currentDate.getMinutes();
let setMinutes = (minutes) => (minutes < 10 ? `0${minutes}` : minutes);
console.log(setMinutes(dateMinutes));

let dateSeconds = currentDate.getSeconds();
let setSeconds = (seconds) => (seconds < 10 ? `0${seconds}` : seconds);
console.log(setSeconds(dateSeconds));

function getNowDate(currentDate) {
  return (
    setMonth(dateMonth) +
    " " +
    currentDate.getDate() +
    ", " +
    currentDate.getFullYear() +
    " " +
    setHours(dateHours) +
    ":" +
    setMinutes(dateMinutes) +
    ":" +
    setSeconds(dateSeconds)
  );
}

// setInterval(getNowDate(currentDate), 1000);
console.log(getNowDate(currentDate));

h3.textContent = getNowDate(currentDate);
