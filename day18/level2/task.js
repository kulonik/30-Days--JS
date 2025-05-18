const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    cats.forEach((cat) => {
      let catsName = "";
      catsName += cat.name;
      console.log(catsName);
    });
  } catch (err) {
    console.log(err);
  }
};
fetchData();
