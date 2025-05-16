// Task 1
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const skillsTxt = JSON.stringify(skills);
console.log(skillsTxt);

// task 2
let age = 250;
let ageTxt = JSON.stringify(age);
console.log(ageTxt);

// task 3
let isMarried = true;
let isMarriedTxt = JSON.stringify(isMarried);
console.log(isMarriedTxt);

// task 4
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentTxt = JSON.stringify(student);
console.log(studentTxt);
