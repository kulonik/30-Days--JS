// the products array has three elements and each other them has six properties,
// a. Create a function called rateProduct which rates the product.
const products = require("./arrays");

let mobile = Object.assign({}, products[0]);
let laptop = Object.assign({}, products[1]);
let tv = Object.assign({}, products[2]);

function rateProduct(obj) {
  let rates = obj.ratings;
  let sum = 0;
  for (let i = 0; i < rates.length; i++) {
    sum += rates[i].rate;
  }
  return `${obj.name} has rating ${sum}.`;
}
rateProduct(mobile);
rateProduct(tv);
console.log(rateProduct(mobile));
console.log(rateProduct(laptop));
console.log(rateProduct(tv));
