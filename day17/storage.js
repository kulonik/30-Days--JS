// HTML5 Web Storage
// There are two Web Storage objects:
// - sessionStorage: data clears when the page is closed
// - localStorage: has no expiration time

// Five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key().

// HTML5 Web Storage Objects
// window.localStorage - stores date with no expiration date
// window.sessionStorage - stores date for one session

// Web Storage objects:
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters
// localStorage.getItem() - to display data stored in the localStorage. it takes a key as a parameter
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter
localStorage.setItem("firstName", "Asabeneh");
console.log(localStorage);
