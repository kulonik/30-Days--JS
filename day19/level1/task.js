function outerFunction() {
  let array = [];
  function innerFunction(a, b, c) {
    array.push(a, b, c);
    return array;
  }
  return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc(1, 2, 3));
