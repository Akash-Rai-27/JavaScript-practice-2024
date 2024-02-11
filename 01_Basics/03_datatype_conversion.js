let score = undefined;
// console.log(typeof score);

let valueInNumber = Number(score); // !---> NAN --> not a Number;
/*
* typeof is --> number, but the value inside it is NAN
*/
// console.log("data type of valueInNumber: ",typeof valueInNumber);
// console.log("what is store inside it: ",valueInNumber);


let isLoggedIn = "flase";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let str1 = "sky";
let str2 = " base";
let str3 = str1+str2;
console.log(str3);

console.log(typeof(1+"2"+2)); // type --> string

let x = 3n;
console.log(typeof x); /// type --> bigInt
const y = ++x;

console.log(typeof x);
console.table([x,y]);