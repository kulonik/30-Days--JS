const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    let array = [];
    for (const country of countries) {
      array.push([country.name, country.area]);
    }
    const largestCountries = array.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(largestCountries.slice(0, 10));
  } catch (err) {
    console.log(err);
  }
};

fetchData();
