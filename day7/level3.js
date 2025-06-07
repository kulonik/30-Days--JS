// task 9. Write function factorial and return a factorial of a number
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(15));
