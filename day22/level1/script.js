const div = document.querySelector("div");
div.style.cssText =
  "margin: 50px auto; width: 600px; display: flex; flex-direction: row; flex-wrap: wrap; gap: 2px; align-content: center";

let blocks = document.getElementsByClassName("block");

function getBlock() {
  for (let i = 0; i <= 101; i++) {
    div.innerHTML += `<div class="block">${i}</div>`;
  }
}
getBlock();

const setOfNumbers = new Set(blocks);
for (const block of setOfNumbers) {
  block.style.cssText =
    "background: grey; width: 90px; height: 45px; color: white; text-align: center; font-size: 24px; line-height: 40px";
}
console.log(blocks[0]);

function setColor(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (i == 2 && i == 3) {
      array[i].style.background = "red";
    }
    if (i % 2 === 0) {
      array[i].style.background = "green";
    }
    if (i % 2 !== 0) {
      array[i].style.background = "#F6BE00";
    }
  }
}
setColor(blocks);
