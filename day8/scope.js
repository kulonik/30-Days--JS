// Window Global Object
// a = "JavaScript";
// b = 10;
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b);

// Global Scope
let a = "JavaScript";
let b = 10;
function letsLearnScope() {
  console.log(a, b);

  if (true) {
    let a = "Python";
    let b = 100;
    console.log(a, b);
  }
  console.log(a, b);
}
console.log(letsLearnScope());
console.log(a, b);
