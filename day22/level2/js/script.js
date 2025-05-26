import countries from "./countries.js";
console.log(countries);

const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

header.style.cssText = "width: 60%; margin: 30px auto";
h1.style.cssText = "text-align: center; font-family: Arial";
h2.textContent = `Total Number of Countries: ${countries.length}`;
h2.style.cssText = "text-align: center; font-family: Arial; font-size: 20px";
