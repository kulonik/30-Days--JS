// 1.
const dog = {};
// 2.
console.log(dog);
// 3.
dog.name = "Jack";
dog.legs = 4;
dog.color = "black";
dog.age = 8;
dog.bark = "woof woof";
console.log(dog);

// 4.
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

// 5.
dog.breed = "Beagle";
dog.getDogInfo = function () {
  let statement = `The ${this.breed}'s name is ${this.name} and he's ${this.age}. He has ${this.legs} legs and ${this.color} hair. He is ${this.age} years old.`;
  return statement;
};
console.log(dog.getDogInfo());
