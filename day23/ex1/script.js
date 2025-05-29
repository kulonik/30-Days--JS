const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const p = document.querySelector("p");
const number = document.querySelector("#number");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

header.style.cssText = "height: 100px; width: 70%; margin: 0px auto";

h1.style.cssText =
  "font-family: courier; color:#24a724; text-align: center; margin-top: 30px";

div.style.cssText =
  "width: 70%; display: flex; flex-wrap: nowrap; justify-content: center; margin: 0px auto; gap: 10px";

p.style.cssText = "text-align: left; color: red";

number.style.cssText = "border: 1px solid #24a724; width: 300px; height: 40px";

button.style.cssText =
  "border: solid 1px #24a724; background: #24a724; color: #fff; font-family: courier; font-size: 12px";

ul.style.cssText = "display: flex; flex-wrap: wrap; gap: 5px; ";

button.addEventListener("click", getNum);
function getNum() {
  let digitRegExp = /^\d+$/;
  if (digitRegExp.test(number.value)) {
    ul.innerHTML = `<li>${number.value}</li>`;
    p.remove();
  } else {
    if (number.value.length === 0) {
      document.createElement("p");
      p.textContent =
        "Enter number value on the input field to generate numbers";
      header.appendChild(p);
    } else {
      document.createElement("p");
      p.append.header;
      p.textContent = "Input valid must be a number";
      header.appendChild(p);
    }
  }
}
