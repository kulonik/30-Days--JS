// sort: this method arranges the array elements either ascending or descending order. It sorts values as strings. It modifies the original array.

// Sorting string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
const sortedProducts = products.map((element) => element);
sortedProducts.sort();
console.log(products);
console.log(sortedProducts);

// Sorting Numeric values
const numbers = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wwrong result:
console.log(numbers.sort());

numbers.sort((a, b) => a - b);
console.log(numbers);

// Sorting Object Arrays
// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1;
//   if (a.key > b.key) return 1;
//   return 0;
// });

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users);
