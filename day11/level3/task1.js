const countries = [
  {
    name: "England",
    capital: "London",
    population: "98,380,500",
    languages: ["English", "Scottish", "Irish", "Welsh"],
  },
  {
    name: "France",
    capital: "Paris",
    population: "66,634,079",
    languages: "French",
  },
  {
    name: "Ukraine",
    capital: "Kiev",
    population: "38,745,361",
    languages: ["Ukrainian", "Russian"],
  },
];

for (const { name, capital, population, languages } of countries) {
  console.log(
    `The capital of ${name} is ${capital}. It's population is ${population}, they speak ${languages}.`
  );
}
