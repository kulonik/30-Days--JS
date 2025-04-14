// 1.
let string =
  "Love is the best thin in this world. Some found their love and some are still looking for their love.";
let pattern = /love/gi;
console.log(string.match(pattern).length);
// 2.
let string2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(string2.match(/because/gi).length);
// 3.
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let finalSentence = sentence.replace(/[^a-zA-Z0-9 ]/g, "");
console.log(finalSentence);
// 4.
let txt =
  "He earns 5000 euro from salary per month, 10000 euro annnual bonus, 15000 euro online courses per month.";
let array = txt.match(/\d+/g);
console.log(array);
let sum = Number(array[0]) * 12 + Number(array[1]) + Number(array[2] * 12);
console.log(sum);
