// Error Handling
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error or not
}

// TRY: wrap suspicious code that may throw an error in try block.
//  CATCH: write code to do something in catch block when an error occurs.
// FINALLY: will always be executed regardless of the occurence of an error

try {
  let lastName = "Yetayeh";
  let fullName = firstName + " " + lastName;
} catch (err) {
  console.log("Name of the error", err.name);
  console.log("Error message", err.message);
} finally {
  console.log("In any case I will be executed");
}

// THROW:
const throwErrorExampleFun = () => {
  let message;
  let x = 1;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

// ERROR TYPES:
// ReferenceError: is thrown if we use a variable that has not been declared

// SyntaxError: 
let square = 2 x 2; // correct is 2 * 2

// TypeError
let num = 10;
console.log(num.toLowerCase()); // num.toLowerCase is not a function