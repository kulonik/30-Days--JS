const wrapper = document.querySelector("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

wrapper.style.width = "600px";
wrapper.style.margin = "60px auto";
wrapper.style.fontFamily = "Courier";

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
