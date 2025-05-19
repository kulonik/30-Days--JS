Airbnb JavaScript Style Guide
https://github.com/airbnb/javascript

Standard JavaScript Style Guide
https://standardjs.com/

Google JavaScript Style Guide
https://google.github.io/styleguide/jsguide.html

Some conventions in JavaScript:

- camelCase for variables and functions
- variable name start with a letter
- to use const for constants, arrays, objects and functions.

---

Variables:
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';

const PI = Math.PI;
const gravity = 9.18;

---

Arrays:
We choose to make array names plural.
const names = ['Asabeneh', 'Mathias', 'Elias'];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];

---

Functions:

1. function which returns full name of a person:
   const printFullName = (firstName, lastName) => firstName + ' ' + lastName;

const square = (n) => n \* n;

2. A function which generate random hexa colors:
   const hexaColor = () => {
   const str = '0123456789abcdef';
   let hexa = '#';
   let index;
   for (let i = 0; i < 6; i++) {
   index = Math.floor(Math.random() \* str.length);
   hexa += str[index];
   }
   return hexa;
   }

---

Classes:
We declare class with CamelCase which starts with capital letter
syntax:
class ClassName {
// code goes here
}
