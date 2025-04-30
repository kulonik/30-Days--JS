const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "Reac", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomal.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills
const copyUsers = Object.assign({}, users);
const entries = Object.entries(copyUsers);
function getUsersInfo(array) {
  let n = 0;
  let user;
  for (let i = 0; i < array.length; i++) {
    if (array[i][1]["skills"].length > n) {
      n = array[i][1]["skills"].length;
      user = `${array[i][0]} has ${n} skills.`;
    }
  }
  return user;
}
console.log(getUsersInfo(entries));

// 2a. Count logged in users.
function countLoggedInUsers(array) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][1]["isLoggedIn"]) {
      n++;
    }
  }
  return `There are ${n} logged in users.`;
}
console.log(countLoggedInUsers(entries));

// 2b. Count users having greater than equal to 50 points
function countUsersWith50Points(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][1]["points"] > 49) {
      num += 1;
      console.log(`${array[i][0]} has ${array[i][1]["points"]} points.`);
    }
    // return num;
  }
  return `There are ${num} users having greater than equal to 50 points.`;
}
console.log(countUsersWith50Points(entries));

// 1. Find people who are MERN stack developer
function findMERNdeveloper(array) {
  let user = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      (array[i][1]["skills"].includes("Node") ||
        array[i][1]["skills"].includes("Node.js")) &&
      array[i][1]["skills"].includes("MongoDB") &&
      array[i][1]["skills"].includes("Express") &&
      array[i][1]["skills"].includes("React")
    ) {
      user += 1;
      console.log(`${array[i][0]} is a MERN stack developer.`);
    }
  }
  return `There are ${user} MERN stack developers.`;
}
console.log(findMERNdeveloper(entries));

// Task 2. Set your name in the users object without modifying the original users object
console.log(copyUsers);
copyUsers.Anna = {};
console.log(copyUsers);

// Task 3. Get all keys of users object
const keys = Object.keys(copyUsers);
console.log(keys);

// Task 4. Get all the values of users object
const values = Object.values(copyUsers);
console.log(values);

// Task 5. Use the countries object to print a country name, capital, populations and languages.
const countries = {};
countries.name = "England";
countries.capital = "London";
countries.population = "57 mln";
countries.language = "English";
console.log(countries);
