const div = document.querySelector("div");
div.style.cssText =
  "margin: 50px auto; height: 800px; display: flex; flex-direction: column; flex-wrap: wrap; gap: 2px; align-content: center";

let blocks = document.getElementsByClassName("block");

function getBlock() {
  for (let i = 0; i <= 101; i++) {
    div.innerHTML += `<div class="block">${i}</div>`;
  }
}
getBlock();

const setOfNumbers = new Set(blocks);
for (block of setOfNumbers) {
  block.style.cssText =
    "background: grey; width: 90px; height: 45px; color: white; text-align: center; font-size: 24px; line-height: 40px";
}
console.log(setOfNumbers);
