/*
* let const and var
var --> scope problem

! "use strict" -->treat all code as newer version
console.log(typeof ___) --> check type of data type

number --> 2^53;
bigit --> for large number
string -->sequence of character
boolean
null ---> standalone value ( type --> object)
undefined --> kinda place holder for value which is not defined yet(type--> undefined)
Symbol -->uniquenesss


*/
// let number=3;
// let str = "water";
// console.log(typeof str);

// let score = undefined;
// let value = Number(score);
// console.log(typeof value); // !---> NAN --> not a Number;
/*
* typeof is --> number, but the value inside it is NAN
*/
// let log = "false";
// let check = Boolean(log);
// console.log(check);

// console.log(typeof (1+"2"+2));

// console.log(typeof 3n);

// let c = 2n;
// let d = ++c;
// console.log(d);

// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log("2"===2);
// console.log(2===2);

// let userName = "Danny";


// console.log(userName.slice(-2,3));
// console.log(userName[0]);
// console.log(userName.__proto__);
/*
username.length;
username.toUppercase();
username.charAt(4);
username.indexOf('n');
username.substring(0,3);
username.slice()--> can have negative slicing
username.trim();

*/
// console.log(userName.indexOf('n'));

// console.log(userName.substring(0,3));

// const price = 400;
// console.log(price.toFixed(4)); // ? --> to fix upto given number decimals.

// const displayInIndian = 12345678;
// console.log(displayInIndian.toLocaleString('en-IN'));

// console.log(Math.min(1,2,3,4));
// console.log(Math.max(1,2,3,4));
// console.log(typeof Math);
// console.log(Math.abs(-39));
// console.log(Math.round(8.9));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(5.6));
// console.log(Math.sqrt(81));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

// in certain range
// const min = 25;
// const max = 35;
// const randomNumber = Math.floor(Math.random()*(max-min + 1) + min);
// console.log(randomNumber);

// let myDate = new Date();
// console.log(typeof myDate);
// // console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023,0,20.4,13);
// let myCreatedDate = new Date("02-14-2024");

// console.log(myCreatedDate);
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));
// let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getTime());
// console.log(newDate.getDate());
