const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentTxt = JSON.stringify(student, ["firstName", "lastName", "skills"]);
console.log(studentTxt);
