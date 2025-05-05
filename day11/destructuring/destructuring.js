// Destructuring Arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

// const names = ["Asabeneh", "Brook", "David", "John"];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
// console.log(firstPerson, fourthPerson);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

const otherNames = [undefined, "Brook", "David"];
let [
  firstPerson = "Azabeneh",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = otherNames;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

// Destructuring during iteration
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(city, country);
}

// Destructuring Object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

// Renaming during structuring
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// Object parameter without destructuring
// const calculatePerimeter = (rect) => {
//   return 2 * (rect.width + rect.height);
// };
// console.log(calculatePerimeter(rectangle));

const person = {
  firstName: "Asabeneh",
  lastName: "Yetaheh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo(person));

// Object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rectangle));

// Destructuring object during iteration
const todoList = [
  { task: "Prepare JS Test", time: "4/1/2020 8:30", completed: true },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
