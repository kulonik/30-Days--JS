// Task 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.sound = "";
  }
  get getSound() {
    return this.sound;
  }
  set setSound(sound) {
    this.sound += sound;
  }

  getAnimalInfo() {
    return `The ${this.color} ${this.name} with ${this.legs} legs is ${this.age} y.o. It says '${this.sound}'.`;
  }
}

const cow = new Animal("cow", 5, "black", 4);
const bird = new Animal("bird", 1, "blue", 2);
cow.setSound = "moo";
bird.setSound = "tweet";

console.log(cow.getAnimalInfo());
console.log(bird.getAnimalInfo());

// Task 2
class Dog extends Animal {
  constructor(name, age, color, legs, sound, breed) {
    super(name, age, color, legs, sound);
    this.breed = breed;
  }
  getInfo() {
    let info = `The ${this.color} ${this.breed}'s name is ${this.name}. It's ${this.age} y.o. and it has ${this.legs} legs. It says "${this.sound}"`;
    return info;
  }
}
const terrier = new Dog("Jack", 7, "brown", 4, "woof", "terrier");
terrier.setSound = "woof";
console.log(terrier);
console.log(terrier.getInfo());

class Cat extends Animal {
  constructor(name, age, color, legs, hobby) {
    super(name, age, color, legs);
    this.hobby = hobby;
  }
  getInfo() {
    let info = this.getAnimalInfo() + " " + `${this.name} likes ${this.hobby}.`;
    return info;
  }
}
const kitten = new Cat("Puffy", 0.5, "white", 4, "knitting");
kitten.setSound = "murr";
console.log(kitten);
console.log(kitten.getInfo());
