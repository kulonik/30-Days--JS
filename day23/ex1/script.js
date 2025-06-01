const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const p = document.querySelector("p");
const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

header.style.cssText = "width: 70%; margin: 50px auto";

h1.style.cssText =
  "font-family: courier; color:#24a724; text-align: center; margin-top: 30px";

div.style.cssText = "width: 50%; margin: 0px auto";

p.style.cssText =
  "text-align: left; color: red; font-size: 14px; font-style: italic; font-family: Courier; height: 28px; margin-bottom: 5px";

wrapper.style.cssText =
  "width: 100%; display: flex; justify-content: space-between";
input.style.cssText = "border: 1px solid #24a724; height: 40px; width: 60%";

button.style.cssText =
  "border: solid 1px #24a724; background: #24a724; color: #fff; font-family: courier; font-size: 12px;height: 44px; width: 35%";

ul.style.cssText =
  "width: 100%; margin: 50px auto; display: flex; flex-wrap: wrap; gap: 2px; list-style-type: none; padding: 0px";

button.addEventListener("click", getNum);
function getNum() {
  let digitRegExp = /^\d+$/;
  if (digitRegExp.test(input.value)) {
    ul.textContent = "";
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
  let li;
  for (let i = 0; i < num; i++) {
    li = document.createElement("li");
    li.style.cssText =
      "width: 100px; height: 31px; color: white; text-align: center; padding-top: 1px; font-size: 28px; font-weight: bold; background: yellow";
    li.textContent = i;
    ul.appendChild(li);
    if (isPrime(i)) {
      li.style.background = "red";
    }
    if (i % 2 === 0 && i !== 2) {
      li.style.background = "#24a724";
    }
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(10));
