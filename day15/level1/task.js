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
