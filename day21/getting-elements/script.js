// Getting elements by tag name
// syntax: document.getElementByTagName('tagname');
const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

// Getting elements by class name
// syntax: document.getElementByClassName('classname');
const allClassTitles = document.getElementsByClassName("title");
console.log(allClassTitles);
console.log(allClassTitles.length);

for (let i = 0; i < allClassTitles.length; i++) {
  console.log(allClassTitles[i]);
}

// Getting an element by id
// syntax: document.getElementById('id')
let firstTitle = document.getElementById("first-title");
console.log(firstTitle);

// Getting elements by using querySelector methods:
// quesrySelector selects HTML elements by its tag name, is or class. If the tag name is used it selects only the first element
let secondTitle = document.querySelector("h1");
console.log(secondTitle);
let thirdTitle = document.querySelector("#first-title");
console.log(thirdTitle);
let fourthTitle = document.querySelector(".title");
console.log(fourthTitle);

// querySelectorAll select html elements by its tag name or class, returns a nodList which is an array like object which supports array methods.
const anotherAllTitles = document.querySelectorAll("h1");
console.log(anotherAllTitles.length);

for (let i = 0; i < anotherAllTitles.length; i++) {
  console.log(allClassTitles[i]);
}

anotherAllTitles.forEach((title) => console.log(title));
