const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTML", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTML", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTML", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTML", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTML", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTML", "CSS", "JS"],
    age: 20,
  },
];

// task 1
for (const { name, scores, skills, age } of users) {
  console.log(
    `name: ${name},\nscores: ${scores}, skills: ${skills}; age: ${age}\n`
  );
}

// task 2
const getUserWithOneSkill = (obj) => {
  for (const { name, skills } of users) {
    if (skills.length < 2) return name;
  }
};
console.log(getUserWithOneSkill(users));
