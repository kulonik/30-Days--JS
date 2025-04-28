// an empty object
const person1 = {};

// creating an object with values
const rectangle = {
  length: 20,
  width: 20,
};

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  isMarried: true,
  "phone number": "+3454564567",
};
console.log(person);

// Getting values from an object
console.log(person.firstName);
console.log(person["age"]);
console.log(person["phone number"]);

// Creating object methods
console.log(person.getFullName());

// Setting new key for an object
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");

// console.log(person);
person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person.getPersonInfo());

// Object Methods
// 1. Object.assign:
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// 2. Object.keys:
const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

// 3. Object.values:
const values = Object.values(copyPerson);
console.log(values);

// 4. Object.entries (arrays in an array):
const entries = Object.entries(copyPerson);
console.log(entries);

// 5. checking properties using hasOwnProperty():
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("skills"));
