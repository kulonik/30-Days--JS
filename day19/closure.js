// Closure
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}
const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

function anotherOuterFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }
  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const anotherInnerFunc = anotherOuterFunction();

console.log(anotherInnerFunc.plusOne);
console.log(anotherInnerFunc.minusOne);
console.log("This is another outer function:", anotherInnerFunc);

let a = "static";
function f1() {
  console.log(a);
}

function f2() {
  let a = "dynamic";
  f1();
}

f2();
