const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// find a union b
const c = [...a, ...b];
console.log(c);
const A = new Set(a);
const B = new Set(b);

const C = new Set(c);
console.log(C);

// find a intersection b
let d = a.filter((item) => B.has(item));
let D = new Set(d);
console.log(D);

// find a with b
let e = a.filter((item) => !B.has(item));
let E = new Set(e);
console.log(E);
