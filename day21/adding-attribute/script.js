const titles = document.querySelectorAll("h1");

// Adding attribute without setAttribute:
titles[3].className = "title";
titles[3].id = "fourth-title";

// Adding attribute using setAttribute:
// titles[3].setAttribute("class", "title");
// titles[3].setAttribute("id", "fourth-title");

// Adding class using classList:
titles[3].classList.add("title", "header-title");
console.log(titles);

// Removing class using remove
titles[3].classList.remove("title", "header-title");
console.log(titles);
