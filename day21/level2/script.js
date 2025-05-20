// task 1
const paras = document.querySelectorAll("p");

paras[0].style.color = "purple";
paras[1].style.background = "yellow";
paras[2].style.border = "2px solid blue";
paras[3].style.fontSize = "24px";
paras.forEach((para) => (para.style.fontFamily = "Courier"));
