// Adding Text content using textContent
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";

// Adding Text Content using innerHTML

const lists = `<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Ongoing</li>
<li>20DaysOfReact Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>
`;

const ul = document.querySelector("ul");
ul.innerHTML = lists;

// Removing all the children of a parent element:
ul.innerHTML = "";

// ADDING STYLE
// Adding Style Color
titles.forEach((title, i) => {
  title.style.fontSize = "24px";
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

// Adding Style Background Color
titles.forEach((title, i) => {
  if (i % 2 === 0) {
    title.style.background = "red";
  } else {
    title.style.background = "green";
  }
});

// Adding Style Font Size
titles.forEach((title, i) => {
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});
