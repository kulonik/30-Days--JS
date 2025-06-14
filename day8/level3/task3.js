// the products array has three elements and each other them has six properties,
// a. Create a function called rateProduct which rates the product.
const products = require("./arrays");

function rateProduct(array) {
  let sum = 0;
  for (const item of array) {
    console.log(item.ratings);
    for (let i = 0; i < item.ratings.length; i++) {
      sum += item.ratings[i].rate;
    }
    return `${item.name} has rating ${sum}.`;
  }
}
rateProduct(products);
console.log(rateProduct(products));
