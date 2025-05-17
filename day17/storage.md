HTML5 Web Storage
There are two Web Storage objects:

- sessionStorage: data clears when the page is closed
- localStorage: has no expiration time

Five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key().

HTML5 Web Storage Objects
window.localStorage - stores date with no expiration date
window.sessionStorage - stores date for one session

Web Storage objects:
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters
localStorage.getItem() - to display data stored in the localStorage. it takes a key as a parameter
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter

---

    STORING STRING IN A localStorage

---

localStorage.setItem("firstName", "Asabeneh");
console.log(localStorage); // Storage {firstName: 'Asabeneh, length: 1}

    STORING NUMBER IN A localStorage

---

localStorage.setItem('age', 200);

    STORING AN ARRAY IN A localStorage (first stringify)

---

const skills = ['HTML', 'CSS', 'JS', 'React']; // Skills array has to be stringify first to keep the format.

const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);

    STORING AN OBJECT IN A localStorage:

---

const user = {
firstName: 'Asabeneh',
age: 250,
skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userText);

**************\*\***************\*\*\*************\*\*\*************GETTING ITEM FROM localStorage

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills = localStorage.getItem('skills');
console.log(firstName, age, skills); // skills will be a string, so to convert it to normail way we use JSON.parse():

let skillsObj = JSON.parse(skills, undefined, 4);

---

CLEARING THE localStorage:
localStorage.clear();
