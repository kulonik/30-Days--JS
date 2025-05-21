// task 1
const paras = document.querySelectorAll("p");

paras[0].style.color = "purple";
paras[1].style.background = "yellow";
paras[2].style.border = "2px solid blue";
paras[3].style.fontSize = "24px";
paras.forEach((para) => (para.style.fontFamily = "Courier"));

// task 2
for (let i = 0; i < paras.length; i++) {
  if (i % 2 === 0) {
    paras[i].style.color = "green";
  } else {
    paras[i].style.color = "red";
  }
}

// task 3
paras.forEach((para) => (para.className = "para"));
paras.forEach((para) => (para.textContent = "I love programming."));
paras[0].id = "first-para";
