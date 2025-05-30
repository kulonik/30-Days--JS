const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const p = document.querySelector("p");
const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

header.style.cssText = "height: 100px; width: 70%; margin: 0px auto";

h1.style.cssText =
  "font-family: courier; color:#24a724; text-align: center; margin-top: 30px";

div.style.cssText = "width: 50%; margin: 0px auto";

p.style.cssText = "text-align: left; color: red";

wrapper.style.cssText =
  "width: 100%; display: flex; justify-content: space-between";
input.style.cssText = "border: 1px solid #24a724; height: 40px; width: 60%";

button.style.cssText =
  "border: solid 1px #24a724; background: #24a724; color: #fff; font-family: courier; font-size: 12px;height: 44px; width: 35%";

ul.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 2px; list-style-type: none";

button.addEventListener("click", getNum);
function getNum() {
  let digitRegExp = /^\d+$/;
  if (digitRegExp.test(input.value)) {
    getNums(input.value);
    p.textContent = "";
  } else {
    if (input.value.length === 0) {
      p.textContent =
        "Enter number value on the input field to generate numbers";
      ul.textContent = "";
    } else {
      p.textContent = "Input valid must be a number";
      ul.textContent = "";
    }
  }
}

function getNums(num) {
  for (let i = 0; i <= num; i++) ul.innerHTML += `<li>${i}</li>`;
}
