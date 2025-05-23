const div = document.querySelector("div");
div.style.cssText =
  "margin: 50px auto; width: 1000px; height: 800px; display: flex; flex-direction: column; flex-wrap: wrap; gap: 1px; align-content: center";

function addCode() {
  div.innerHTML += `<div class="block"></div>`;
}

function getBlock() {
  for (let i = 0; i <= 102; i++) {
    addCode();
  }
}

getBlock(addCode());

let blocks = document.getElementsByClassName("block");
const setOfNumbers = new Set(blocks);
for (block of setOfNumbers) {
  block.style.cssText = "background: grey; width: 80px; height: 60px";
}
console.log(setOfNumbers);
