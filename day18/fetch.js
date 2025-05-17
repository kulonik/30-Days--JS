// Fetch API
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// Async and Await
// async creates a promise
const square = async function (n) {
  return n * n;
};
console.log(square(2)); // return a promise

// to access the value from the prommise we use the keyword await
// const value = await square(3);
// console.log(value);

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.log(err);
  }
};
console.log("===== async and await");
fetchData();
