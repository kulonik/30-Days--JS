// CALLBACKS
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

console.log(doSomething(callback)); // return ['HTML', 'CSS', 'JS']

// if 'err' has a value, the function will return a value of err, if 'err' is false, it will return skills

const doSomethingElse = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 1000);
};

const callback2 = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};
console.log(doSomethingElse(callback2));
