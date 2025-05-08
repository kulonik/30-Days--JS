const students = [
  ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const [firstStudent, secondStudent] = students;
// console.log(firstStudent);

function convertArrayToObject(array) {
  let newArr = [];
  for (const student of students) {
    let [name, skills, scores] = student;
    const obj = { name, skills, scores };
    newArr.push(obj);
  }
  return newArr;
}

console.log(convertArrayToObject(students));
