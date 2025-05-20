// task 1
const para = document.querySelector("p");
console.log(para);

// task 2
const firstPara = document.getElementById("first-para");
console.log(firstPara);
const secondPara = document.getElementById("second-para");
console.log(secondPara);
const thirdPara = document.getElementById("third-para");
console.log(thirdPara);
const fourthPara = document.getElementById("fourth-para");
console.log(fourthPara);

// task 3
const paras = document.querySelectorAll("p");
console.log(paras);

// task 4
paras.forEach((para) => console.log(para));

// task 5
paras[3].textContent = "Fourth Paragraph";

// task 6
paras.forEach((para) => para.classList.add("para"));
