const div = document.querySelector("div");
div.style.background = "yellow";
div.style.width = "500px";
div.style.height = "800px";

function addCode() {
  div.innerHTML += `<div class="block">Hi</div>`;
}

function getBlock() {
  for (let i = 0; i <= 101; i++) {
    addCode();
  }
}

getBlock(addCode());

let blocks = document.getElementsByClassName("block");
const setOfNumbers = new Set(blocks);
for (block of setOfNumbers) {
  block.style.cssText = "background: grey; width: 50px; height: 30px";
}
console.log(setOfNumbers);
