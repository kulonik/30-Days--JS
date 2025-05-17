const countriesAPI = "https://restcountries.com/v2/all";
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const countryInfo = [];
    data.forEach((item) => {
      if (item.name === "Russian Federation") {
        countryInfo.push(item.capital);
        countryInfo.push(item.languages);
        countryInfo.push(item.population);
        countryInfo.push(item.area);
      }
    });
    console.log(countryInfo);
  })
  .catch((error) => console.log(error));
