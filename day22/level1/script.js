const div = document.querySelector("div");
const h1 = document.querySelector("h1");

h1.style.cssText = "text-align: center; margin-top: 20px; font-family: Courier";
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

function setColor(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0 || i === 0) {
      array[i].style.background = "green";
    }
    if (i % 2 !== 0) {
      array[i].style.background = "#F6BE00";
    }
    if (
      (i > 1 && i < 4) ||
      i === 5 ||
      i === 7 ||
      i === 11 ||
      i === 13 ||
      i === 17 ||
      i === 19 ||
      i === 23 ||
      i === 29 ||
      i === 31 ||
      i === 37 ||
      i === 41 ||
      i === 43 ||
      i === 47 ||
      i === 53 ||
      i === 59 ||
      i === 61 ||
      i === 67 ||
      i === 71 ||
      i === 73 ||
      i === 79 ||
      i === 83 ||
      i === 89 ||
      i === 97 ||
      i === 101
    ) {
      array[i].style.background = "red";
    }
  }
}
setColor(blocks);
