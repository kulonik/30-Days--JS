const users = require("./arrays");
const prompt = require("prompt-sync")({ sigint: true });

let yourName = prompt("Enter your name");

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
console.log(signUp(users, yourName));
