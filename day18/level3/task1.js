const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    cats.forEach((cat) => {
      let catWeight = cat.weight.metric;
      let arr = catWeight.split(" - ");
      let average = (arr[0] + arr[1]) / 2;
      console.log(`${cat.name}: average weight ${average}`);
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();
