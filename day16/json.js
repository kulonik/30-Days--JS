// Converting JSON to JavaScript Object
//  JSON.parse()

const usersText = `{
"users":[
{
  "firstName":"Asabeneh",
  "lastName":"Yetayeh",
  "age":250
},
{
  "firstName":"Alex",
  "lastName":"James",
  "age":25
},
{
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28
}
]
}`;

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == "string" && key != "lastName" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj);

// Converting Object to JSON
// JSON.stringify()

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt);

// Usin a Filter Array with JSON.stringify
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const text = JSON.stringify(user, [
  "firstName",
  "lastName",
  "country",
  "city",
  "age",
]);
console.log(text);
