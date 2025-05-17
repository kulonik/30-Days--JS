// PROMISE CONSTRUCTOR

// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

// Promise with resolve
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// Promise with reject
const doAnotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 3000);
});

doAnotherPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
