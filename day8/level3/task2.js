const users = require("./arrays");
const prompt = require("prompt-sync")({ sigint: true });

let yourName = prompt("Enter your name");
let yourChangedName =
  yourName.slice(0, 1).toUpperCase() + yourName.slice(1).toLowerCase();
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(array, name) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]["username"]);
  }

  if (newArr.includes(name)) {
    return "You have already an account";
  } else {
    array.push({ username: name });
  }
  return array;
}
console.log(signUp(users, yourChangedName));

// b. Create a function called signIn which allows user to sign in to the application.
let email = prompt("Enter your email");
let password = prompt("Enter your password");
function signIn(array, user) {
  array[array.length - 1].email = user;
  array[array.length - 1].password = password;
  return array;
}
signIn(users, email);
console.log(signIn(users, email));
