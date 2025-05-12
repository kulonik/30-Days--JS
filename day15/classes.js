// Classes
class Person0 {
  // code goes here
}

// Class Instantiation
const person0 = new Person0();
console.log(person0);

// Class Constructor
class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person();
console.log(person);

const person1 = new Person("Asabeneh", "Yetayeh");
console.log(person1);
