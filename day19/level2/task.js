function outerFunction() {
  const array = [2, 8, 4, 6];
  let unsortedArray = new Array(array);
  console.log(unsortedArray);
  function innerFunction1() {
    unsortedArray.push(3);
    return unsortedArray;
  }

  function innerFunction2() {
    let sortedArr = array.sort((a, b) => a - b);
    return sortedArr;
  }

  function innerFunction3() {
    let string = array.join(" ");
    return string;
  }

  return {
    newArray: innerFunction1(),
    sortedArray: innerFunction2(),
    string: innerFunction3(),
  };
}

let outerFunc = outerFunction();
console.log(outerFunc);
