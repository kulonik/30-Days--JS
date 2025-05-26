import countries from "./countries.js";

const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");

header.style.cssText = "width: 60%; margin: 30px auto";
h1.style.cssText = "text-align: center; font-family: Arial";

h2.textContent = `Total Number of Countries: ${countries.length}`;
h2.style.cssText = "text-align: center; font-family: Arial; font-size: 20px";

ul.style.cssText =
  "width: 60%; margin: 50px auto; display: flex; flex-wrap: wrap; gap: 3px; ";

for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${countries[i].toUpperCase()}`;
  ul.appendChild(li);
  li.style.cssText =
    "list-style-type: none; width: 130px; height: 70px; border: 1px solid grey;  display: flex; align-items: center; justify-content: center; text-align: center";
}
