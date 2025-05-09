const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3,js"],
  },
};

// task 1
const newStudent = Object.assign({}, student);

// task 2
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
console.log(newStudent.skills.frontEnd);

// task 3
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
console.log(newStudent.skills.backEnd);

// task 4
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
console.log(newStudent.skills.dataBase);
console.log(newStudent.skills.dataBase.length);

// task 5
newStudent.skills.dataScience.push("SQL");
console.log(newStudent);
