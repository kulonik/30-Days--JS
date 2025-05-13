// Classes
class Person0 {
  // code goes here
}

// Class Instantiation
const person0 = new Person0();
console.log(person0);

// Class Constructor
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const person = new Person();
// console.log(person);

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle");
// const person3 = new Person("Abraham", "Yetayeh");
// console.log(person1, person2, person3);

// Default values with constructor
class Person {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}
const person1 = new Person();
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
console.log(person1);
console.log(person2);

// CLASS METHODS
class Person1 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person3 = new Person1("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person4 = new Person1("Lidiya", "Tekle", 28, "Finland", "Espoo");
console.log(person4.getFullName());

// Properties with initial value
class Person2 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

const person5 = new Person2("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
console.log(person5.getScore, person5.getSkills);

person5.setScore = 1;
person5.setSkill = "HTML";
person5.setSkill = "CSS";
person5.setSkill = "JavaScript";

console.log(person5.getScore, person5.getSkills);
console.log(person5.getPersonInfo());

// Regular method is getPersonInfo in Person class
// Static method (example - Date.now())
console.log(Person2.favoriteSkill());
console.log(Person2.showDateTime());

// INHERITANCE
// class ChildClassName extends {
//   // code goes here
// }

class Student extends Person2 {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  saySomething() {
    console.log("I am a child of the person class");
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;

    let formattedSkills = skills ? `He knows ${skills}` : "";
    let pronoun = this.gender == "Male" ? "He" : "She";

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}.`;
    return info;
  }
}
const s1 = new Student(
  "Asabeneh",
  "Yetayeh",
  "Finland",
  250,
  "Helsinki",
  "Male"
);
console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());
