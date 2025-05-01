const users = require("./arrays");
const prompt = require("prompt-sync")({ sigint: true });

console.log(users);
let yourName = prompt("Enter your name");
console.log(yourName);

function signUp(array, name) {
  for (let i = 0; i < users.length; i++) {
    if (array[i]["username"] === name) {
      return "You already have an account";
    }
    return array.push({ username: `${name}` });
  }
}
console.log(signUp(users, yourName));
console.log(users);
